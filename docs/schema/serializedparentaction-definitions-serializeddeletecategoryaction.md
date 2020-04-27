# SerializedDeleteCategoryAction Schema

```txt
https://timelimit.io/SerializedParentAction#/definitions/SerializedDeleteCategoryAction
```




| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [SerializedParentAction.schema.json\*](SerializedParentAction.schema.json "open original schema") |

## SerializedDeleteCategoryAction Type

`object` ([SerializedDeleteCategoryAction](serializedparentaction-definitions-serializeddeletecategoryaction.md))

# SerializedDeleteCategoryAction Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                |
| :------------------------ | -------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)             | `string` | Required | cannot be null | [SerializedParentAction](serializedparentaction-definitions-serializeddeletecategoryaction-properties-type.md "https&#x3A;//timelimit.io/SerializedParentAction#/definitions/SerializedDeleteCategoryAction/properties/type")             |
| [categoryId](#categoryId) | `string` | Required | cannot be null | [SerializedParentAction](serializedparentaction-definitions-serializeddeletecategoryaction-properties-categoryid.md "https&#x3A;//timelimit.io/SerializedParentAction#/definitions/SerializedDeleteCategoryAction/properties/categoryId") |

## type




`type`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [SerializedParentAction](serializedparentaction-definitions-serializeddeletecategoryaction-properties-type.md "https&#x3A;//timelimit.io/SerializedParentAction#/definitions/SerializedDeleteCategoryAction/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value               | Explanation |
| :------------------ | ----------- |
| `"DELETE_CATEGORY"` |             |

## categoryId




`categoryId`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [SerializedParentAction](serializedparentaction-definitions-serializeddeletecategoryaction-properties-categoryid.md "https&#x3A;//timelimit.io/SerializedParentAction#/definitions/SerializedDeleteCategoryAction/properties/categoryId")

### categoryId Type

`string`