/*
 * server component for the TimeLimit App
 * Copyright (C) 2019 - 2020 Jonas Lochmann
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, version 3 of the License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import * as Sequelize from 'sequelize'
import { AddUsedTimeAction } from '../../../../action'
import { MinuteOfDay } from '../../../../util/minuteofday'
import { Cache } from '../cache'
import { MissingCategoryException } from '../exception/missing-item'

export const getRoundedTimestamp = () => {
  const now = Date.now()

  return now - (now % (1000 * 60 * 60 * 24 * 2 /* 2 days */))
}

const dayLengthInMinutes = MinuteOfDay.LENGTH
const dayLengthInMs = dayLengthInMinutes * 1000 * 60

export async function dispatchAddUsedTime ({ action, cache }: {
  deviceId: string
  action: AddUsedTimeAction
  cache: Cache
}) {
  const roundedTimestamp = getRoundedTimestamp().toString(10)

  const categoryEntryUnsafe = await cache.database.category.findOne({
    where: {
      familyId: cache.familyId,
      categoryId: action.categoryId
    },
    transaction: cache.transaction,
    attributes: [
      'childId',
      'parentCategoryId',
      'extraTimeInMillis'
    ]
  })
  // verify that the category exists
  if (!categoryEntryUnsafe) {
    throw new MissingCategoryException()
  }

  const categoryEntry = {
    childId: categoryEntryUnsafe.childId,
    parentCategoryId: categoryEntryUnsafe.parentCategoryId,
    extraTimeInMillis: categoryEntryUnsafe.extraTimeInMillis
  }

  const handleAddUsedTime = async ({ categoryId, currentExtraTime }: {
    categoryId: string,
    currentExtraTime: number
  }) => {
    if (action.timeToAdd !== 0) {
      const maxOperator = cache.database.dialect === 'sqlite' ? 'MAX' : 'GREATEST'
      const minOperator = cache.database.dialect === 'sqlite' ? 'MIN' : 'LEAST'

      // try to update first
      const [updatedRows] = await cache.database.usedTime.update({
        usedTime: Sequelize.literal(`${maxOperator}(0, ${minOperator}(usedTime + ${action.timeToAdd}, ${dayLengthInMs}))`) as any,
        lastUpdate: roundedTimestamp
      }, {
        where: {
          familyId: cache.familyId,
          categoryId: categoryId,
          dayOfEpoch: action.dayOfEpoch,
          startMinuteOfDay: MinuteOfDay.MIN,
          endMinuteOfDay: MinuteOfDay.MAX
        },
        transaction: cache.transaction
      })

      // otherwise create
      if (updatedRows === 0) {
        await cache.database.usedTime.create({
          familyId: cache.familyId,
          categoryId: categoryId,
          dayOfEpoch: action.dayOfEpoch,
          usedTime: Math.min(action.timeToAdd, dayLengthInMs),
          lastUpdate: roundedTimestamp,
          startMinuteOfDay: MinuteOfDay.MIN,
          endMinuteOfDay: MinuteOfDay.MAX
        }, {
          transaction: cache.transaction
        })
      }
    }

    if (action.extraTimeToSubtract !== 0) {
      await cache.database.category.update({
        extraTimeInMillis: Math.max(0, currentExtraTime - action.extraTimeToSubtract)
      }, {
        where: {
          familyId: cache.familyId,
          categoryId: categoryId
        },
        transaction: cache.transaction
      })

      cache.categoriesWithModifiedBaseData.add(categoryId)
    }

    cache.categoriesWithModifiedUsedTimes.add(categoryId)
  }

  await handleAddUsedTime({
    categoryId: action.categoryId,
    currentExtraTime: categoryEntry.extraTimeInMillis
  })

  if (categoryEntry.parentCategoryId !== '') {
    const parentCategoryEntry = await cache.database.category.findOne({
      where: {
        familyId: cache.familyId,
        categoryId: categoryEntry.parentCategoryId,
        childId: categoryEntry.childId
      },
      transaction: cache.transaction
    })

    if (parentCategoryEntry) {
      await handleAddUsedTime({
        categoryId: categoryEntry.parentCategoryId,
        currentExtraTime: parentCategoryEntry.extraTimeInMillis
      })
    }
  }
}
