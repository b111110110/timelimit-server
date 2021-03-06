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

import { AddUserAction } from '../../../../action'
import { Cache } from '../cache'

export async function dispatchAddUser ({ action, cache }: {
  action: AddUserAction
  cache: Cache
}) {
  await cache.database.user.create({
    familyId: cache.familyId,
    userId: action.userId,
    type: action.userType,
    name: action.name,
    timeZone: action.timeZone,
    passwordHash: action.password ? action.password.hash : '',
    secondPasswordHash: action.password ? action.password.secondHash : '',
    secondPasswordSalt: action.password ? action.password.secondSalt : '',
    mail: '',
    disableTimelimitsUntil: '0',
    currentDevice: '',
    categoryForNotAssignedApps: '',
    relaxPrimaryDeviceRule: false,
    mailNotificationFlags: 0,
    blockedTimes: '',
    flags: '0'
  }, { transaction: cache.transaction })

  cache.invalidiateUserList = true
  cache.areChangesImportant = true

  cache.doesUserExist.cache.set(action.userId, true)
}
