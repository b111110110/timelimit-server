# CreateFamilyByMailTokenRequest Schema

```txt
https://timelimit.io/CreateFamilyByMailTokenRequest
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Unknown status | No           | Forbidden         | Forbidden             | none                | [CreateFamilyByMailTokenRequest.schema.json](CreateFamilyByMailTokenRequest.schema.json "open original schema") |

## CreateFamilyByMailTokenRequest Type

`object` ([CreateFamilyByMailTokenRequest](createfamilybymailtokenrequest.md))

# CreateFamilyByMailTokenRequest Properties

| Property                          | Type     | Required | Nullable       | Defined by                                                                                                                                                                      |
| :-------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [mailAuthToken](#mailauthtoken)   | `string` | Required | cannot be null | [CreateFamilyByMailTokenRequest](createfamilybymailtokenrequest-properties-mailauthtoken.md "https://timelimit.io/CreateFamilyByMailTokenRequest#/properties/mailAuthToken")    |
| [parentPassword](#parentpassword) | `object` | Required | cannot be null | [CreateFamilyByMailTokenRequest](createfamilybymailtokenrequest-definitions-parentpassword.md "https://timelimit.io/CreateFamilyByMailTokenRequest#/properties/parentPassword") |
| [parentDevice](#parentdevice)     | `object` | Required | cannot be null | [CreateFamilyByMailTokenRequest](createfamilybymailtokenrequest-definitions-newdeviceinfo.md "https://timelimit.io/CreateFamilyByMailTokenRequest#/properties/parentDevice")    |
| [deviceName](#devicename)         | `string` | Required | cannot be null | [CreateFamilyByMailTokenRequest](createfamilybymailtokenrequest-properties-devicename.md "https://timelimit.io/CreateFamilyByMailTokenRequest#/properties/deviceName")          |
| [timeZone](#timezone)             | `string` | Required | cannot be null | [CreateFamilyByMailTokenRequest](createfamilybymailtokenrequest-properties-timezone.md "https://timelimit.io/CreateFamilyByMailTokenRequest#/properties/timeZone")              |
| [parentName](#parentname)         | `string` | Required | cannot be null | [CreateFamilyByMailTokenRequest](createfamilybymailtokenrequest-properties-parentname.md "https://timelimit.io/CreateFamilyByMailTokenRequest#/properties/parentName")          |

## mailAuthToken



`mailAuthToken`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [CreateFamilyByMailTokenRequest](createfamilybymailtokenrequest-properties-mailauthtoken.md "https://timelimit.io/CreateFamilyByMailTokenRequest#/properties/mailAuthToken")

### mailAuthToken Type

`string`

## parentPassword



`parentPassword`

*   is required

*   Type: `object` ([ParentPassword](createfamilybymailtokenrequest-definitions-parentpassword.md))

*   cannot be null

*   defined in: [CreateFamilyByMailTokenRequest](createfamilybymailtokenrequest-definitions-parentpassword.md "https://timelimit.io/CreateFamilyByMailTokenRequest#/properties/parentPassword")

### parentPassword Type

`object` ([ParentPassword](createfamilybymailtokenrequest-definitions-parentpassword.md))

## parentDevice



`parentDevice`

*   is required

*   Type: `object` ([NewDeviceInfo](createfamilybymailtokenrequest-definitions-newdeviceinfo.md))

*   cannot be null

*   defined in: [CreateFamilyByMailTokenRequest](createfamilybymailtokenrequest-definitions-newdeviceinfo.md "https://timelimit.io/CreateFamilyByMailTokenRequest#/properties/parentDevice")

### parentDevice Type

`object` ([NewDeviceInfo](createfamilybymailtokenrequest-definitions-newdeviceinfo.md))

## deviceName



`deviceName`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [CreateFamilyByMailTokenRequest](createfamilybymailtokenrequest-properties-devicename.md "https://timelimit.io/CreateFamilyByMailTokenRequest#/properties/deviceName")

### deviceName Type

`string`

## timeZone



`timeZone`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [CreateFamilyByMailTokenRequest](createfamilybymailtokenrequest-properties-timezone.md "https://timelimit.io/CreateFamilyByMailTokenRequest#/properties/timeZone")

### timeZone Type

`string`

## parentName



`parentName`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [CreateFamilyByMailTokenRequest](createfamilybymailtokenrequest-properties-parentname.md "https://timelimit.io/CreateFamilyByMailTokenRequest#/properties/parentName")

### parentName Type

`string`

# CreateFamilyByMailTokenRequest Definitions

## Definitions group ParentPassword

Reference this group by using

```json
{"$ref":"https://timelimit.io/CreateFamilyByMailTokenRequest#/definitions/ParentPassword"}
```

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                   |
| :------------------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [hash](#hash)             | `string` | Required | cannot be null | [CreateFamilyByMailTokenRequest](createfamilybymailtokenrequest-definitions-parentpassword-properties-hash.md "https://timelimit.io/CreateFamilyByMailTokenRequest#/definitions/ParentPassword/properties/hash")             |
| [secondHash](#secondhash) | `string` | Required | cannot be null | [CreateFamilyByMailTokenRequest](createfamilybymailtokenrequest-definitions-parentpassword-properties-secondhash.md "https://timelimit.io/CreateFamilyByMailTokenRequest#/definitions/ParentPassword/properties/secondHash") |
| [secondSalt](#secondsalt) | `string` | Required | cannot be null | [CreateFamilyByMailTokenRequest](createfamilybymailtokenrequest-definitions-parentpassword-properties-secondsalt.md "https://timelimit.io/CreateFamilyByMailTokenRequest#/definitions/ParentPassword/properties/secondSalt") |

### hash



`hash`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [CreateFamilyByMailTokenRequest](createfamilybymailtokenrequest-definitions-parentpassword-properties-hash.md "https://timelimit.io/CreateFamilyByMailTokenRequest#/definitions/ParentPassword/properties/hash")

#### hash Type

`string`

### secondHash



`secondHash`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [CreateFamilyByMailTokenRequest](createfamilybymailtokenrequest-definitions-parentpassword-properties-secondhash.md "https://timelimit.io/CreateFamilyByMailTokenRequest#/definitions/ParentPassword/properties/secondHash")

#### secondHash Type

`string`

### secondSalt



`secondSalt`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [CreateFamilyByMailTokenRequest](createfamilybymailtokenrequest-definitions-parentpassword-properties-secondsalt.md "https://timelimit.io/CreateFamilyByMailTokenRequest#/definitions/ParentPassword/properties/secondSalt")

#### secondSalt Type

`string`

## Definitions group NewDeviceInfo

Reference this group by using

```json
{"$ref":"https://timelimit.io/CreateFamilyByMailTokenRequest#/definitions/NewDeviceInfo"}
```

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                       |
| :-------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [model](#model) | `string` | Required | cannot be null | [CreateFamilyByMailTokenRequest](createfamilybymailtokenrequest-definitions-newdeviceinfo-properties-model.md "https://timelimit.io/CreateFamilyByMailTokenRequest#/definitions/NewDeviceInfo/properties/model") |

### model



`model`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [CreateFamilyByMailTokenRequest](createfamilybymailtokenrequest-definitions-newdeviceinfo-properties-model.md "https://timelimit.io/CreateFamilyByMailTokenRequest#/definitions/NewDeviceInfo/properties/model")

#### model Type

`string`
