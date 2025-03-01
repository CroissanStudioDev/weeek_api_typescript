---
title: Public API
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.28"

---

# Public API

Base URLs:

* <a href="https://api.weeek.net/public/v1">Production: https://api.weeek.net/public/v1</a>

# Authentication

- HTTP Authentication, scheme: bearer

# Workspace

<a id="opIdget-ws"></a>

## GET Get workspace info

GET /ws

Get workspace info for current token

> Response Examples

```json
{
  "success": true,
  "workspace": {
    "id": 1,
    "title": "info@weeek.net",
    "description": null,
    "isPersonal": true,
    "logo": "https://storage.weeek.net/img/no_image.png"
  }
}
```

```json
{
  "success": true,
  "workspace": {
    "id": 2,
    "title": "Dream team",
    "description": "Making the world a better place",
    "isPersonal": false,
    "logo": null
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|false|none||none|
|» workspace|[Workspace](#schemaworkspace)|false|none||none|
|»» id|number|false|none||none|
|»» title|string|false|none||none|
|»» description|string¦null|false|none||none|
|»» isPersonal|boolean|false|none||none|
|»» logo|string¦null|false|none||none|

<a id="opIdget-ws-members"></a>

## GET Get workspace members

GET /ws/members

Get workspace members for current workspace

> Response Examples

```json
{
  "success": true,
  "members": [
    {
      "id": "3e265f8a-5c6c-4169-a2b1-6182f10b712b",
      "email": "info@weeek.net",
      "logo": "https://storage.weeek.net/logos/MeUZRwz23XfyLAjG_resized_236.png",
      "lastName": "Hendricks",
      "firstName": "Richard",
      "middleName": "string",
      "position": "Developer",
      "timeZone": "Europe/Moscow"
    }
  ]
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|false|none||none|
|» members|[[User](#schemauser)]|false|none||none|
|»» id|string|false|none||none|
|»» email|string|false|none||none|
|»» logo|string¦null|false|none||none|
|»» lastName|string¦null|false|none||none|
|»» firstName|string¦null|false|none||none|
|»» middleName|string¦null|false|none||none|
|»» position|string¦null|false|none||none|
|»» timeZone|string|false|none||none|

# Workspace/Tag

## GET Tag list

GET /ws/tags

> Response Examples

> 200 Response

```json
{
  "success": true,
  "tags": [
    {
      "id": 1,
      "title": "string",
      "color": "string"
    }
  ]
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|false|none||none|
|» tags|[[Tag](#schematag)]|false|none||none|
|»» id|integer(int64)|true|none||none|
|»» title|string|true|none||none|
|»» color|string|true|none||none|

## POST Create tag

POST /ws/tags

> Body Parameters

```json
{
  "title": "Work"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» title|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "tag": {
    "id": 1,
    "title": "string",
    "color": "string"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|false|none||none|
|» tag|[Tag](#schematag)|false|none||none|
|»» id|integer(int64)|true|none||none|
|»» title|string|true|none||none|
|»» color|string|true|none||none|

## GET Tag

GET /ws/tags/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer| yes |none|
|Content-Type|header|string| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "tag": {
    "id": 1,
    "title": "string",
    "color": "string"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|
|» tag|[Tag](#schematag)|true|none||none|
|»» id|integer(int64)|true|none||none|
|»» title|string|true|none||none|
|»» color|string|true|none||none|

## PUT Update tag

PUT /ws/tags/{id}

> Body Parameters

```json
{
  "title": "Kek2",
  "color": "#aaaaaa"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|Content-Type|header|string| no |none|
|body|body|object| no |none|
|» title|body|string| yes |none|
|» color|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|

<a id="opIddelete-ws-tags-2"></a>

## DELETE Delete tag

DELETE /ws/tags/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|false|none||none|

# Task Manager/Project

## GET Get project list

GET /tm/projects

> Response Examples

> 200 Response

```json
{
  "success": true,
  "projects": [
    {
      "id": 0,
      "title": "string",
      "logoLink": "string",
      "description": "string",
      "color": "string",
      "isPrivate": true,
      "team": [
        "string"
      ],
      "customFields": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "string",
          "type": "text",
          "config": {
            "type": null
          },
          "options": [
            {}
          ]
        }
      ]
    }
  ]
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|false|none||none|
|» projects|[[Project](#schemaproject)]|false|none||none|
|»» id|integer|false|none||none|
|»» title|string|false|none||none|
|»» logoLink|string¦null|false|none||none|
|»» description|string¦null|false|none||none|
|»» color|string|false|none||none|
|»» isPrivate|boolean|false|none||none|
|»» team|[string]|false|none||none|
|»» customFields|[[CustomField](#schemacustomfield)]|false|none||none|
|»»» id|string(uuid)|false|read-only||none|
|»»» name|string¦null|false|none||none|
|»»» type|string|true|none||none|
|»»» config|object¦null|false|none||none|
|»»»» type|string|true|none||Only for boolean custom fields|
|»»» options|[[CustomFieldOption](#schemacustomfieldoption)]|true|none||Only for select and multiselect custom fields|
|»»»» id|string(uuid)|false|read-only||none|
|»»»» name|string|true|none||none|
|»»»» color|string|true|none||none|

#### Enum

|Name|Value|
|---|---|
|type|text|
|type|boolean|
|type|datetime|
|type|select|
|type|multiselect|
|type|member|
|type|contact|
|type|link|
|type|approval|
|type|switch|
|type|checkbox|
|color|blue|
|color|light_blue|
|color|dark_purple|
|color|purple|
|color|dark_pink|
|color|pink|
|color|light_pink|
|color|red|
|color|dark_green|
|color|green|
|color|light_green|
|color|dark_yellow|

## POST Create project

POST /tm/projects

> Body Parameters

```json
{
  "name": "Test project",
  "logo": "image/logo.jpg",
  "isPrivate": false,
  "description": null
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» name|body|string| yes |none|
|» logo|body|string¦null| yes |none|
|» isPrivate|body|boolean| yes |none|
|» description|body|string¦null| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "project": {
    "id": 0,
    "title": "string",
    "logoLink": "string",
    "description": "string",
    "color": "string",
    "isPrivate": true,
    "team": [
      "string"
    ],
    "customFields": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "type": "text",
        "config": {
          "type": "["
        },
        "options": [
          {
            "id": null,
            "name": null,
            "color": null
          }
        ]
      }
    ]
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|false|none||none|
|» project|[Project](#schemaproject)|false|none||none|
|»» id|integer|false|none||none|
|»» title|string|false|none||none|
|»» logoLink|string¦null|false|none||none|
|»» description|string¦null|false|none||none|
|»» color|string|false|none||none|
|»» isPrivate|boolean|false|none||none|
|»» team|[string]|false|none||none|
|»» customFields|[[CustomField](#schemacustomfield)]|false|none||none|
|»»» id|string(uuid)|false|read-only||none|
|»»» name|string¦null|false|none||none|
|»»» type|string|true|none||none|
|»»» config|object¦null|false|none||none|
|»»»» type|string|true|none||Only for boolean custom fields|
|»»» options|[[CustomFieldOption](#schemacustomfieldoption)]|true|none||Only for select and multiselect custom fields|
|»»»» id|string(uuid)|false|read-only||none|
|»»»» name|string|true|none||none|
|»»»» color|string|true|none||none|

#### Enum

|Name|Value|
|---|---|
|type|text|
|type|boolean|
|type|datetime|
|type|select|
|type|multiselect|
|type|member|
|type|contact|
|type|link|
|type|approval|
|type|switch|
|type|checkbox|
|color|blue|
|color|light_blue|
|color|dark_purple|
|color|purple|
|color|dark_pink|
|color|pink|
|color|light_pink|
|color|red|
|color|dark_green|
|color|green|
|color|light_green|
|color|dark_yellow|

## PUT Update project info

PUT /tm/projects/{id}

> Body Parameters

```json
{
  "name": "Test project",
  "logo": "image/test.jpg",
  "isPrivate": false,
  "description": "Test description",
  "color": "#003C93"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|body|body|object| no |none|
|» name|body|string| yes |none|
|» logo|body|string¦null| yes |none|
|» isPrivate|body|boolean| yes |none|
|» description|body|string¦null| yes |none|
|» color|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|false|none||none|

## DELETE Delete project

DELETE /tm/projects/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|false|none||none|

<a id="opIdget-tm-projects-id"></a>

## GET Get project

GET /tm/projects/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "project": {
    "id": 0,
    "title": "string",
    "logoLink": "string",
    "description": "string",
    "color": "string",
    "isPrivate": true,
    "team": [
      "string"
    ],
    "customFields": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "type": "text",
        "config": {
          "type": "["
        },
        "options": [
          {
            "id": null,
            "name": null,
            "color": null
          }
        ]
      }
    ]
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|false|none||none|
|» project|[Project](#schemaproject)|false|none||none|
|»» id|integer|false|none||none|
|»» title|string|false|none||none|
|»» logoLink|string¦null|false|none||none|
|»» description|string¦null|false|none||none|
|»» color|string|false|none||none|
|»» isPrivate|boolean|false|none||none|
|»» team|[string]|false|none||none|
|»» customFields|[[CustomField](#schemacustomfield)]|false|none||none|
|»»» id|string(uuid)|false|read-only||none|
|»»» name|string¦null|false|none||none|
|»»» type|string|true|none||none|
|»»» config|object¦null|false|none||none|
|»»»» type|string|true|none||Only for boolean custom fields|
|»»» options|[[CustomFieldOption](#schemacustomfieldoption)]|true|none||Only for select and multiselect custom fields|
|»»»» id|string(uuid)|false|read-only||none|
|»»»» name|string|true|none||none|
|»»»» color|string|true|none||none|

#### Enum

|Name|Value|
|---|---|
|type|text|
|type|boolean|
|type|datetime|
|type|select|
|type|multiselect|
|type|member|
|type|contact|
|type|link|
|type|approval|
|type|switch|
|type|checkbox|
|color|blue|
|color|light_blue|
|color|dark_purple|
|color|purple|
|color|dark_pink|
|color|pink|
|color|light_pink|
|color|red|
|color|dark_green|
|color|green|
|color|light_green|
|color|dark_yellow|

## POST Archive project

POST /tm/projects/{id}/archive

> Body Parameters

```
string

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|body|body|string| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|false|none||none|

## POST Un Archive project

POST /tm/projects/{id}/un-archive

> Body Parameters

```
string

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|body|body|string| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|false|none||none|

# Task Manager/Project/Custom Fields

## POST Create a custom field

POST /tm/projects/{project_id}/custom-fields

> Body Parameters

```json
{
  "name": "string",
  "type": "text",
  "config": {
    "type": "switch"
  }
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string| yes |none|
|body|body|[CustomFieldCreateBody](#schemacustomfieldcreatebody)| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "customField": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "type": "text",
    "config": {
      "type": "switch"
    },
    "options": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "color": "blue"
      }
    ]
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|
|» customField|[CustomField](#schemacustomfield)|true|none||none|
|»» id|string(uuid)|false|read-only||none|
|»» name|string¦null|false|none||none|
|»» type|string|true|none||none|
|»» config|object¦null|false|none||none|
|»»» type|string|true|none||Only for boolean custom fields|
|»» options|[[CustomFieldOption](#schemacustomfieldoption)]|true|none||Only for select and multiselect custom fields|
|»»» id|string(uuid)|false|read-only||none|
|»»» name|string|true|none||none|
|»»» color|string|true|none||none|

#### Enum

|Name|Value|
|---|---|
|type|text|
|type|boolean|
|type|datetime|
|type|select|
|type|multiselect|
|type|member|
|type|contact|
|type|link|
|type|approval|
|type|switch|
|type|checkbox|
|color|blue|
|color|light_blue|
|color|dark_purple|
|color|purple|
|color|dark_pink|
|color|pink|
|color|light_pink|
|color|red|
|color|dark_green|
|color|green|
|color|light_green|
|color|dark_yellow|

## PUT Update a custom field

PUT /tm/projects/{project_id}/custom-fields/{id}

> Body Parameters

```json
{
  "name": "string",
  "config": {
    "type": "switch"
  }
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string| yes |none|
|id|path|string| yes |none|
|body|body|[CustomFieldUpdateBody](#schemacustomfieldupdatebody)| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "customField": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "type": "text",
    "config": {
      "type": "switch"
    },
    "options": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "color": "blue"
      }
    ]
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|
|» customField|[CustomField](#schemacustomfield)|true|none||none|
|»» id|string(uuid)|false|read-only||none|
|»» name|string¦null|false|none||none|
|»» type|string|true|none||none|
|»» config|object¦null|false|none||none|
|»»» type|string|true|none||Only for boolean custom fields|
|»» options|[[CustomFieldOption](#schemacustomfieldoption)]|true|none||Only for select and multiselect custom fields|
|»»» id|string(uuid)|false|read-only||none|
|»»» name|string|true|none||none|
|»»» color|string|true|none||none|

#### Enum

|Name|Value|
|---|---|
|type|text|
|type|boolean|
|type|datetime|
|type|select|
|type|multiselect|
|type|member|
|type|contact|
|type|link|
|type|approval|
|type|switch|
|type|checkbox|
|color|blue|
|color|light_blue|
|color|dark_purple|
|color|purple|
|color|dark_pink|
|color|pink|
|color|light_pink|
|color|red|
|color|dark_green|
|color|green|
|color|light_green|
|color|dark_yellow|

## DELETE Delete a custom field

DELETE /tm/projects/{project_id}/custom-fields/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string| yes |none|
|id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|

# Task Manager/Project/Custom Fields/Options

## POST Create a custom field option

POST /tm/projects/{project_id}/custom-fields/{custom_field_id}/options

> Body Parameters

```json
{
  "name": "string",
  "color": "blue"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string| yes |none|
|custom_field_id|path|string| yes |none|
|body|body|[CustomFieldOption3](#schemacustomfieldoption3)| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "option": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "color": "blue"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|
|» option|[CustomFieldOption](#schemacustomfieldoption)|true|none||none|
|»» id|string(uuid)|false|read-only||none|
|»» name|string|true|none||none|
|»» color|string|true|none||none|

#### Enum

|Name|Value|
|---|---|
|color|blue|
|color|light_blue|
|color|dark_purple|
|color|purple|
|color|dark_pink|
|color|pink|
|color|light_pink|
|color|red|
|color|dark_green|
|color|green|
|color|light_green|
|color|dark_yellow|

## PUT Update a custom field option

PUT /tm/projects/{project_id}/custom-fields/{custom_field_id}/options/{id}

> Body Parameters

```json
{
  "name": "string",
  "color": "blue"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string| yes |none|
|custom_field_id|path|string| yes |none|
|id|path|string| yes |none|
|body|body|[CustomFieldOption3](#schemacustomfieldoption3)| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "option": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "color": "blue"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|
|» option|[CustomFieldOption](#schemacustomfieldoption)|true|none||none|
|»» id|string(uuid)|false|read-only||none|
|»» name|string|true|none||none|
|»» color|string|true|none||none|

#### Enum

|Name|Value|
|---|---|
|color|blue|
|color|light_blue|
|color|dark_purple|
|color|purple|
|color|dark_pink|
|color|pink|
|color|light_pink|
|color|red|
|color|dark_green|
|color|green|
|color|light_green|
|color|dark_yellow|

## POST Move a custom field option

POST /tm/projects/{project_id}/custom-fields/{custom_field_id}/options/{id}/move

> Body Parameters

```json
{
  "after": "3f00dd4a-56f2-49c5-940c-69eed8a9fb5b",
  "before": "8e6267db-32ed-454a-a2cc-6beef2f6f00e"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string| yes |none|
|custom_field_id|path|string| yes |none|
|id|path|string| yes |none|
|body|body|object| no |none|
|» after|body|string(uuid)| yes |An custom field option id after which should be moved. Cannot be provided together with before.|
|» before|body|string(uuid)| yes |An custom field option id before which should be moved. Cannot be provided together with after.|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|

# Task Manager/Board

## GET Get board list

GET /tm/boards

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|projectId|query|integer| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "boards": [
    {
      "id": 0,
      "name": "string",
      "projectId": 0,
      "isPrivate": true
    }
  ]
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|false|none||none|
|» boards|[[Board](#schemaboard)]|false|none||none|
|»» id|integer|true|none||none|
|»» name|string|true|none||none|
|»» projectId|integer|true|none||none|
|»» isPrivate|boolean|true|none||none|

## POST Create board

POST /tm/boards

> Body Parameters

```json
{
  "name": "Test board",
  "projectId": 4
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## PUT Update board

PUT /tm/boards/{id}

> Body Parameters

```json
{
  "name": "Test"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|body|body|object| no |none|
|» name|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|false|none||none|

<a id="opIddelete-tm-boards-id"></a>

## DELETE Delete board

DELETE /tm/boards/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|false|none||none|

## POST Move board

POST /tm/boards/{id}/move

> Body Parameters

```json
{
  "upperBoardId": 0
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|body|body|object| no |none|
|» upperBoardId|body|integer¦null| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

# Task Manager/Board/Custom Fields

## POST Create a custom field

POST /tm/boards/{board_id}/custom-fields

> Body Parameters

```json
{
  "name": "string",
  "type": "text",
  "config": {
    "type": "switch"
  }
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|board_id|path|string| yes |none|
|body|body|[CustomFieldCreateBody](#schemacustomfieldcreatebody)| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "customField": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "type": "text",
    "config": {
      "type": "switch"
    },
    "options": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "color": "blue"
      }
    ]
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|
|» customField|[CustomField](#schemacustomfield)|true|none||none|
|»» id|string(uuid)|false|read-only||none|
|»» name|string¦null|false|none||none|
|»» type|string|true|none||none|
|»» config|object¦null|false|none||none|
|»»» type|string|true|none||Only for boolean custom fields|
|»» options|[[CustomFieldOption](#schemacustomfieldoption)]|true|none||Only for select and multiselect custom fields|
|»»» id|string(uuid)|false|read-only||none|
|»»» name|string|true|none||none|
|»»» color|string|true|none||none|

#### Enum

|Name|Value|
|---|---|
|type|text|
|type|boolean|
|type|datetime|
|type|select|
|type|multiselect|
|type|member|
|type|contact|
|type|link|
|type|approval|
|type|switch|
|type|checkbox|
|color|blue|
|color|light_blue|
|color|dark_purple|
|color|purple|
|color|dark_pink|
|color|pink|
|color|light_pink|
|color|red|
|color|dark_green|
|color|green|
|color|light_green|
|color|dark_yellow|

## PUT Update a custom field

PUT /tm/boards/{board_id}/custom-fields/{id}

> Body Parameters

```json
{
  "name": "string",
  "config": {
    "type": "switch"
  }
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|board_id|path|string| yes |none|
|id|path|string| yes |none|
|body|body|[CustomFieldUpdateBody](#schemacustomfieldupdatebody)| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "customField": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "type": "text",
    "config": {
      "type": "switch"
    },
    "options": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "color": "blue"
      }
    ]
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|
|» customField|[CustomField](#schemacustomfield)|true|none||none|
|»» id|string(uuid)|false|read-only||none|
|»» name|string¦null|false|none||none|
|»» type|string|true|none||none|
|»» config|object¦null|false|none||none|
|»»» type|string|true|none||Only for boolean custom fields|
|»» options|[[CustomFieldOption](#schemacustomfieldoption)]|true|none||Only for select and multiselect custom fields|
|»»» id|string(uuid)|false|read-only||none|
|»»» name|string|true|none||none|
|»»» color|string|true|none||none|

#### Enum

|Name|Value|
|---|---|
|type|text|
|type|boolean|
|type|datetime|
|type|select|
|type|multiselect|
|type|member|
|type|contact|
|type|link|
|type|approval|
|type|switch|
|type|checkbox|
|color|blue|
|color|light_blue|
|color|dark_purple|
|color|purple|
|color|dark_pink|
|color|pink|
|color|light_pink|
|color|red|
|color|dark_green|
|color|green|
|color|light_green|
|color|dark_yellow|

## DELETE Delete a custom field

DELETE /tm/boards/{board_id}/custom-fields/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|board_id|path|string| yes |none|
|id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|

# Task Manager/Board/Custom Fields/Options

## DELETE Delete a custom field option

DELETE /tm/projects/{project_id}/custom-fields/{custom_field_id}/options/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|project_id|path|string| yes |none|
|custom_field_id|path|string| yes |none|
|id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|

## POST Create a custom field option

POST /tm/boards/{board_id}/custom-fields/{custom_field_id}/options

> Body Parameters

```json
{
  "name": "string",
  "color": "blue"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|board_id|path|string| yes |none|
|custom_field_id|path|string| yes |none|
|body|body|[CustomFieldOption3](#schemacustomfieldoption3)| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "option": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "color": "blue"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|
|» option|[CustomFieldOption](#schemacustomfieldoption)|true|none||none|
|»» id|string(uuid)|false|read-only||none|
|»» name|string|true|none||none|
|»» color|string|true|none||none|

#### Enum

|Name|Value|
|---|---|
|color|blue|
|color|light_blue|
|color|dark_purple|
|color|purple|
|color|dark_pink|
|color|pink|
|color|light_pink|
|color|red|
|color|dark_green|
|color|green|
|color|light_green|
|color|dark_yellow|

## PUT Update a custom field option

PUT /tm/boards/{board_id}/custom-fields/{custom_field_id}/options/{id}

> Body Parameters

```json
{
  "name": "string",
  "color": "blue"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|board_id|path|string| yes |none|
|custom_field_id|path|string| yes |none|
|id|path|string| yes |none|
|body|body|[CustomFieldOption3](#schemacustomfieldoption3)| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "option": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "color": "blue"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|
|» option|[CustomFieldOption](#schemacustomfieldoption)|true|none||none|
|»» id|string(uuid)|false|read-only||none|
|»» name|string|true|none||none|
|»» color|string|true|none||none|

#### Enum

|Name|Value|
|---|---|
|color|blue|
|color|light_blue|
|color|dark_purple|
|color|purple|
|color|dark_pink|
|color|pink|
|color|light_pink|
|color|red|
|color|dark_green|
|color|green|
|color|light_green|
|color|dark_yellow|

## POST Move a custom field option

POST /tm/boards/{board_id}/custom-fields/{custom_field_id}/options/{id}/move

> Body Parameters

```json
{
  "after": "3f00dd4a-56f2-49c5-940c-69eed8a9fb5b",
  "before": "8e6267db-32ed-454a-a2cc-6beef2f6f00e"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|board_id|path|string| yes |none|
|custom_field_id|path|string| yes |none|
|id|path|string| yes |none|
|body|body|object| no |none|
|» after|body|string(uuid)| yes |An custom field option id after which should be moved. Cannot be provided together with before.|
|» before|body|string(uuid)| yes |An custom field option id before which should be moved. Cannot be provided together with after.|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|

# Task Manager/BoardColumn

## GET Get board column list

GET /tm/board-columns

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|boardId|query|integer| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "boardColumns": [
    {
      "id": 0,
      "name": "string",
      "boardId": 0
    }
  ]
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|false|none||none|
|» boardColumns|[[BoardColumn](#schemaboardcolumn)]|false|none||none|
|»» id|integer|true|none||none|
|»» name|string|true|none||none|
|»» boardId|integer|true|none||none|

## POST Create board column

POST /tm/board-columns

> Body Parameters

```json
{
  "name": "string",
  "boardId": 0
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» name|body|string| yes |none|
|» boardId|body|integer| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "boardColumn": {
    "id": 0,
    "name": "string",
    "boardId": 0
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|false|none||none|
|» boardColumn|[BoardColumn](#schemaboardcolumn)|false|none||none|
|»» id|integer|true|none||none|
|»» name|string|true|none||none|
|»» boardId|integer|true|none||none|

## PUT Update board column

PUT /tm/board-columns/{id}

> Body Parameters

```json
{
  "name": "string"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|body|body|object| no |none|
|» name|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|false|none||none|

<a id="opIddelete-tm-board-columns-id"></a>

## DELETE Delete board column

DELETE /tm/board-columns/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|false|none||none|

## POST Move board column

POST /tm/board-columns/{id}/move

> Body Parameters

```json
{
  "upperBoardColumnId": 0
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|body|body|object| no |none|
|» upperBoardColumnId|body|integer¦null| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|false|none||none|

# Task Manager/Task

## POST Create task

POST /tm/tasks

> Body Parameters

```json
{
  "title": "string",
  "description": "string",
  "day": "string",
  "projectId": 0,
  "parentId": 0,
  "userId": "string",
  "type": "action",
  "priority": 0,
  "boardId": 0,
  "boardColumnId": 0,
  "customFields": {}
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» title|body|string| no |none|
|» description|body|string¦null| no |none|
|» day|body|string¦null| no |none|
|» projectId|body|integer¦null| no |none|
|» parentId|body|integer¦null| no |none|
|» userId|body|string¦null| no |none|
|» type|body|string| no |none|
|» priority|body|integer¦null| no |none|
|» boardId|body|integer¦null| no |none|
|» boardColumnId|body|integer¦null| no |none|
|» customFields|body|object| no |Key-value object with custom field id and custom field value for the task|

#### Description

**» customFields**: Key-value object with custom field id and custom field value for the task

For example

```
"customFields" : {
    "<text_custom_field_id>": "Text value",
    "<boolean_custom_field_id>": true,
    "<datetime_custom_field_id>": "<ISO 8601 datetime string>",
    "<select_custom_field_id>": "<custom_field_option_id>"
    "<multiselect_custom_field_id>": ["<custom_field_option_id>"],
    "<member_custom_field_id>": ["<user_id>"],
    "<contact_custom_field_id>": "<contact_id>",
    "<link_custom_field_id>": "Link value",
    "<approval_custom_field_id>": ["<user_id>"]
}
```

#### Enum

|Name|Value|
|---|---|
|» type|action|
|» type|meet|
|» type|call|
|» priority|0|
|» priority|1|
|» priority|2|
|» priority|3|

> Response Examples

```json
{
  "success": true,
  "task": {
    "id": 19,
    "parentId": null,
    "title": "4",
    "description": "",
    "date": "19.03.2022",
    "time": "23:00",
    "duration": 60,
    "type": "action",
    "priority": null,
    "isCompleted": false,
    "authorId": "3e265f8a-5c6c-4169-a2b1-6182f10b712b",
    "userId": null,
    "boardId": null,
    "boardColumnId": null,
    "projectId": null,
    "image": null,
    "isPrivate": false,
    "dateStart": null,
    "dateEnd": null,
    "timeStart": null,
    "timeEnd": null,
    "tags": [],
    "subscribers": [
      "3e265f8a-5c6c-4169-a2b1-6182f10b712b"
    ],
    "workloads": [
      {
        "id": "bc92d5f2-3aaf-49cc-8010-5007ced66ea6",
        "userId": "24d20bfa-bc7e-471e-8c17-a199734532dc",
        "type": 2,
        "date": "05.10.2022",
        "duration": 60,
        "workStartAt": null,
        "workEndAt": null
      }
    ]
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|false|none||none|
|» task|[Task](#schematask)|false|none||none|
|»» id|integer|false|none||none|
|»» parentId|integer¦null|false|none||none|
|»» title|string|false|none||none|
|»» description|string¦null|false|none||none|
|»» duration|integer¦null|false|none||In minutes|
|»» overdue|integer|true|none||none|
|»» type|string|false|none||none|
|»» priority|integer¦null|false|none||0 - Low<br />1 - Medium<br />2 - High<br />3 - Hold|
|»» isCompleted|boolean|false|none||none|
|»» authorId|string|false|none||ID of the user who created the task|
|»» userId|string¦null|false|none||ID of the user who is executing the task|
|»» boardId|integer¦null|false|none||none|
|»» boardColumnId|integer¦null|false|none||none|
|»» projectId|integer¦null|false|none||none|
|»» image|string¦null|false|none||none|
|»» isPrivate|boolean|false|none||none|
|»» startDate|string(date)¦null|false|none||Start date of the task in `Y-m-d` format|
|»» startDateTime|string(date-time)¦null|false|none||Start date of the task in ISO 8601 format|
|»» dueDate|string(date)¦null|false|none||Due date of the task in `Y-m-d` format|
|»» dueDateTime|string(date-time)¦null|false|none||Due date of the task in ISO 8601 format|
|»» createdAt|string(date-time)|true|none||Date the task was created in ISO 8601 format|
|»» updatedAt|string(date-time)|true|none||Date the task was last updated in ISO 8601 format|
|»» tags|[integer]|false|none||none|
|»» subscribers|[string]|false|none||none|
|»» subTasks|[integer]|false|none||none|
|»» workloads|[object]|false|none||none|
|»»» id|string|false|none||none|
|»»» userId|string|false|none||none|
|»»» type|integer|false|none||1 - auto calculated from timer<br />2 - manual added|
|»»» date|string|false|none||none|
|»»» duration|integer|false|none||none|
|»»» workStartAt|string¦null|false|none||none|
|»»» workEndAt|string¦null|false|none||none|
|»» timeEntries|[[Time entry](#schematime entry)]|true|none||none|
|»»» id|string(uuid)|true|none||none|
|»»» userId|string(uuid)|true|none||none|
|»»» type|[Time entry type](#schematime entry type)|true|none||none|
|»»» isOvertime|boolean|true|none||A flag indicating that the entry was overtime|
|»»» date|string(date)|true|none||The day of entry. In `Y-m-d` format|
|»»» duration|integer|true|none||Time in minutes, cannot exceed 1440|
|»» customFields|[[CustomFieldValue](#schemacustomfieldvalue)]|false|none||none|
|»»» id|string(uuid)|false|read-only||none|
|»»» name|string¦null|false|none||none|
|»»» type|string|true|none||none|
|»»» config|object¦null|false|none||none|
|»»»» type|string|true|none||Only for boolean custom fields|
|»»» options|[[CustomFieldOption](#schemacustomfieldoption)]|true|none||Only for select and multiselect custom fields|
|»»»» id|string(uuid)|false|read-only||none|
|»»»» name|string|true|none||none|
|»»»» color|string|true|none||none|
|»»» value|string|true|none||none|
|»» attachments|[[Attachment](#schemaattachment)]|false|none||none|
|»»» id|string(uuid)|true|none||none|
|»»» creatorId|string(uuid)|true|none||none|
|»»» service|[AttachmentServiceEnum](#schemaattachmentserviceenum)|true|none||none|
|»»» name|string|true|none||none|
|»»» url|string(uri)|true|none||Attachment URL. If `service` is `weeek`, this URL will be available for an hour.|
|»»» size|integer|false|none||The size of the attachment in bytes. Only present when `service` is `weeek`|
|»»» createdAt|string(date-time)|true|none||none|

#### Enum

|Name|Value|
|---|---|
|type|action|
|type|meet|
|type|call|
|type|1|
|type|2|
|type|1|
|type|2|
|type|text|
|type|boolean|
|type|datetime|
|type|select|
|type|multiselect|
|type|member|
|type|contact|
|type|link|
|type|approval|
|type|switch|
|type|checkbox|
|color|blue|
|color|light_blue|
|color|dark_purple|
|color|purple|
|color|dark_pink|
|color|pink|
|color|light_pink|
|color|red|
|color|dark_green|
|color|green|
|color|light_green|
|color|dark_yellow|
|service|weeek|
|service|google_drive|
|service|dropbox|
|service|one_drive|
|service|box|

<a id="opIdget-tm-tasks"></a>

## GET Get tasks

GET /tm/tasks

Get tasks

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|day|query|string| no |none|
|userId|query|string| no |none|
|projectId|query|integer| no |none|
|completed|query|boolean| no |Show only completed|
|boardId|query|integer| no |none|
|boardColumnId|query|integer| no |none|
|type|query|string| no |none|
|priority|query|integer| no |0 - Low 1 - Medium 2 - High 3 - Hold|
|search|query|string| no |Search text in title and description|
|perPage|query|integer| no |none|
|offset|query|integer| no |none|
|sortBy|query|string| no |Sorts in ascending order of the specified parameter. To sort in descending order, prepend a minus sign to the parameter, for example `-name`|
|startDate|query|string| no |dd.mm.yyyy Required with endDate|
|endDate|query|string| no |dd.mm.yyyy Required with startDate|
|all|query|boolean| no |Shows all tasks, including deleted and completed. If present, the `completed` parameter is ignored|

#### Enum

|Name|Value|
|---|---|
|sortBy|name|
|sortBy|type|
|sortBy|priority|
|sortBy|duration|
|sortBy|overdue|
|sortBy|created|
|sortBy|date|
|sortBy|start|

> Response Examples

```json
{
  "success": true,
  "tasks": [
    {
      "id": 0,
      "parentId": 0,
      "title": "string",
      "description": "string",
      "date": "string",
      "time": "string",
      "duration": 60,
      "type": "action",
      "priority": 0,
      "isCompleted": true,
      "authorId": "string",
      "userId": "string",
      "boardId": 0,
      "boardColumnId": 0,
      "projectId": 0,
      "image": "string",
      "isPrivate": true,
      "dateStart": "2019-08-24",
      "dateEnd": "2019-08-24",
      "timeStart": "14:15:22Z",
      "timeEnd": "14:15:22Z",
      "tags": [
        0
      ],
      "subscribers": [
        "string"
      ],
      "workloads": [
        {
          "id": "bc92d5f2-3aaf-49cc-8010-5007ced66ea6",
          "userId": "24d20bfa-bc7e-471e-8c17-a199734532dc",
          "type": 2,
          "date": "05.10.2022",
          "duration": 60,
          "workStartAt": null,
          "workEndAt": null
        }
      ]
    }
  ],
  "hasMore": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|false|none||none|
|» tasks|[[Task](#schematask)]|false|none||none|
|»» id|integer|false|none||none|
|»» parentId|integer¦null|false|none||none|
|»» title|string|false|none||none|
|»» description|string¦null|false|none||none|
|»» duration|integer¦null|false|none||In minutes|
|»» overdue|integer|true|none||none|
|»» type|string|false|none||none|
|»» priority|integer¦null|false|none||0 - Low<br />1 - Medium<br />2 - High<br />3 - Hold|
|»» isCompleted|boolean|false|none||none|
|»» authorId|string|false|none||ID of the user who created the task|
|»» userId|string¦null|false|none||ID of the user who is executing the task|
|»» boardId|integer¦null|false|none||none|
|»» boardColumnId|integer¦null|false|none||none|
|»» projectId|integer¦null|false|none||none|
|»» image|string¦null|false|none||none|
|»» isPrivate|boolean|false|none||none|
|»» startDate|string(date)¦null|false|none||Start date of the task in `Y-m-d` format|
|»» startDateTime|string(date-time)¦null|false|none||Start date of the task in ISO 8601 format|
|»» dueDate|string(date)¦null|false|none||Due date of the task in `Y-m-d` format|
|»» dueDateTime|string(date-time)¦null|false|none||Due date of the task in ISO 8601 format|
|»» createdAt|string(date-time)|true|none||Date the task was created in ISO 8601 format|
|»» updatedAt|string(date-time)|true|none||Date the task was last updated in ISO 8601 format|
|»» tags|[integer]|false|none||none|
|»» subscribers|[string]|false|none||none|
|»» subTasks|[integer]|false|none||none|
|»» workloads|[object]|false|none||none|
|»»» id|string|false|none||none|
|»»» userId|string|false|none||none|
|»»» type|integer|false|none||1 - auto calculated from timer<br />2 - manual added|
|»»» date|string|false|none||none|
|»»» duration|integer|false|none||none|
|»»» workStartAt|string¦null|false|none||none|
|»»» workEndAt|string¦null|false|none||none|
|»» timeEntries|[[Time entry](#schematime entry)]|true|none||none|
|»»» id|string(uuid)|true|none||none|
|»»» userId|string(uuid)|true|none||none|
|»»» type|[Time entry type](#schematime entry type)|true|none||none|
|»»» isOvertime|boolean|true|none||A flag indicating that the entry was overtime|
|»»» date|string(date)|true|none||The day of entry. In `Y-m-d` format|
|»»» duration|integer|true|none||Time in minutes, cannot exceed 1440|
|»» customFields|[[CustomFieldValue](#schemacustomfieldvalue)]|false|none||none|
|»»» id|string(uuid)|false|read-only||none|
|»»» name|string¦null|false|none||none|
|»»» type|string|true|none||none|
|»»» config|object¦null|false|none||none|
|»»»» type|string|true|none||Only for boolean custom fields|
|»»» options|[[CustomFieldOption](#schemacustomfieldoption)]|true|none||Only for select and multiselect custom fields|
|»»»» id|string(uuid)|false|read-only||none|
|»»»» name|string|true|none||none|
|»»»» color|string|true|none||none|
|»»» value|string|true|none||none|
|»» attachments|[[Attachment](#schemaattachment)]|false|none||none|
|»»» id|string(uuid)|true|none||none|
|»»» creatorId|string(uuid)|true|none||none|
|»»» service|[AttachmentServiceEnum](#schemaattachmentserviceenum)|true|none||none|
|»»» name|string|true|none||none|
|»»» url|string(uri)|true|none||Attachment URL. If `service` is `weeek`, this URL will be available for an hour.|
|»»» size|integer|false|none||The size of the attachment in bytes. Only present when `service` is `weeek`|
|»»» createdAt|string(date-time)|true|none||none|
|» hasMore|boolean|false|none||none|

#### Enum

|Name|Value|
|---|---|
|type|action|
|type|meet|
|type|call|
|type|1|
|type|2|
|type|1|
|type|2|
|type|text|
|type|boolean|
|type|datetime|
|type|select|
|type|multiselect|
|type|member|
|type|contact|
|type|link|
|type|approval|
|type|switch|
|type|checkbox|
|color|blue|
|color|light_blue|
|color|dark_purple|
|color|purple|
|color|dark_pink|
|color|pink|
|color|light_pink|
|color|red|
|color|dark_green|
|color|green|
|color|light_green|
|color|dark_yellow|
|service|weeek|
|service|google_drive|
|service|dropbox|
|service|one_drive|
|service|box|

## GET Get one task info

GET /tm/tasks/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|

> Response Examples

```json
{
  "success": true,
  "task": {
    "id": 4,
    "parentId": null,
    "title": "To deal with the font on the One Ring",
    "description": "The ring interface needs to be redesigned. UX tests show that the font is small and generally illegible, moreover, not everyone gets to heat it up (the test report attached to the task). It's not urgent, but you should try not to forget about the task, it'll remind you about itself.",
    "date": "01.01.1970",
    "time": "23:00",
    "duration": 60,
    "type": "action",
    "priority": 2,
    "isCompleted": false,
    "authorId": "3e265f8a-5c6c-4169-a2b1-6182f10b712b",
    "userId": null,
    "boardId": null,
    "boardColumnId": null,
    "projectId": 4,
    "image": null,
    "isPrivate": false,
    "dateStart": null,
    "dateEnd": null,
    "timeStart": null,
    "timeEnd": null,
    "tags": [
      1,
      2
    ],
    "subscribers": [
      "3e265f8a-5c6c-4169-a2b1-6182f10b712b"
    ],
    "workloads": [
      {
        "id": "bc92d5f2-3aaf-49cc-8010-5007ced66ea6",
        "userId": "24d20bfa-bc7e-471e-8c17-a199734532dc",
        "type": 2,
        "date": "05.10.2022",
        "duration": 60,
        "workStartAt": null,
        "workEndAt": null
      }
    ]
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|false|none||none|
|» task|[Task](#schematask)|false|none||none|
|»» id|integer|false|none||none|
|»» parentId|integer¦null|false|none||none|
|»» title|string|false|none||none|
|»» description|string¦null|false|none||none|
|»» duration|integer¦null|false|none||In minutes|
|»» overdue|integer|true|none||none|
|»» type|string|false|none||none|
|»» priority|integer¦null|false|none||0 - Low<br />1 - Medium<br />2 - High<br />3 - Hold|
|»» isCompleted|boolean|false|none||none|
|»» authorId|string|false|none||ID of the user who created the task|
|»» userId|string¦null|false|none||ID of the user who is executing the task|
|»» boardId|integer¦null|false|none||none|
|»» boardColumnId|integer¦null|false|none||none|
|»» projectId|integer¦null|false|none||none|
|»» image|string¦null|false|none||none|
|»» isPrivate|boolean|false|none||none|
|»» startDate|string(date)¦null|false|none||Start date of the task in `Y-m-d` format|
|»» startDateTime|string(date-time)¦null|false|none||Start date of the task in ISO 8601 format|
|»» dueDate|string(date)¦null|false|none||Due date of the task in `Y-m-d` format|
|»» dueDateTime|string(date-time)¦null|false|none||Due date of the task in ISO 8601 format|
|»» createdAt|string(date-time)|true|none||Date the task was created in ISO 8601 format|
|»» updatedAt|string(date-time)|true|none||Date the task was last updated in ISO 8601 format|
|»» tags|[integer]|false|none||none|
|»» subscribers|[string]|false|none||none|
|»» subTasks|[integer]|false|none||none|
|»» workloads|[object]|false|none||none|
|»»» id|string|false|none||none|
|»»» userId|string|false|none||none|
|»»» type|integer|false|none||1 - auto calculated from timer<br />2 - manual added|
|»»» date|string|false|none||none|
|»»» duration|integer|false|none||none|
|»»» workStartAt|string¦null|false|none||none|
|»»» workEndAt|string¦null|false|none||none|
|»» timeEntries|[[Time entry](#schematime entry)]|true|none||none|
|»»» id|string(uuid)|true|none||none|
|»»» userId|string(uuid)|true|none||none|
|»»» type|[Time entry type](#schematime entry type)|true|none||none|
|»»» isOvertime|boolean|true|none||A flag indicating that the entry was overtime|
|»»» date|string(date)|true|none||The day of entry. In `Y-m-d` format|
|»»» duration|integer|true|none||Time in minutes, cannot exceed 1440|
|»» customFields|[[CustomFieldValue](#schemacustomfieldvalue)]|false|none||none|
|»»» id|string(uuid)|false|read-only||none|
|»»» name|string¦null|false|none||none|
|»»» type|string|true|none||none|
|»»» config|object¦null|false|none||none|
|»»»» type|string|true|none||Only for boolean custom fields|
|»»» options|[[CustomFieldOption](#schemacustomfieldoption)]|true|none||Only for select and multiselect custom fields|
|»»»» id|string(uuid)|false|read-only||none|
|»»»» name|string|true|none||none|
|»»»» color|string|true|none||none|
|»»» value|string|true|none||none|
|»» attachments|[[Attachment](#schemaattachment)]|false|none||none|
|»»» id|string(uuid)|true|none||none|
|»»» creatorId|string(uuid)|true|none||none|
|»»» service|[AttachmentServiceEnum](#schemaattachmentserviceenum)|true|none||none|
|»»» name|string|true|none||none|
|»»» url|string(uri)|true|none||Attachment URL. If `service` is `weeek`, this URL will be available for an hour.|
|»»» size|integer|false|none||The size of the attachment in bytes. Only present when `service` is `weeek`|
|»»» createdAt|string(date-time)|true|none||none|

#### Enum

|Name|Value|
|---|---|
|type|action|
|type|meet|
|type|call|
|type|1|
|type|2|
|type|1|
|type|2|
|type|text|
|type|boolean|
|type|datetime|
|type|select|
|type|multiselect|
|type|member|
|type|contact|
|type|link|
|type|approval|
|type|switch|
|type|checkbox|
|color|blue|
|color|light_blue|
|color|dark_purple|
|color|purple|
|color|dark_pink|
|color|pink|
|color|light_pink|
|color|red|
|color|dark_green|
|color|green|
|color|light_green|
|color|dark_yellow|
|service|weeek|
|service|google_drive|
|service|dropbox|
|service|one_drive|
|service|box|

## DELETE Delete task

DELETE /tm/tasks/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|false|none||none|

## PUT Update a task

PUT /tm/tasks/{id}

> Body Parameters

```json
{
  "title": "string",
  "projectId": 0,
  "boardId": 0,
  "boardColumnId": 0,
  "priority": 0,
  "type": "action",
  "startDate": "2019-08-24",
  "dueDate": "2019-08-24",
  "startDateTime": "2019-08-24T14:15:22Z",
  "dueDateTime": "2019-08-24T14:15:22Z",
  "tags": [
    0
  ],
  "customFields": {}
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|body|body|[TaskUpdateRequest](#schemataskupdaterequest)| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "task": {
    "id": 0,
    "parentId": 0,
    "title": "string",
    "description": "string",
    "duration": 0,
    "overdue": 0,
    "type": "action",
    "priority": 3,
    "isCompleted": true,
    "authorId": "string",
    "userId": "string",
    "boardId": 0,
    "boardColumnId": 0,
    "projectId": 0,
    "image": "string",
    "isPrivate": true,
    "startDate": "2019-08-24",
    "startDateTime": "2019-08-24T14:15:22Z",
    "dueDate": "2019-08-24",
    "dueDateTime": "2019-08-24T14:15:22Z",
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z",
    "tags": [
      0
    ],
    "subscribers": [
      "string"
    ],
    "subTasks": [
      0
    ],
    "workloads": [
      {
        "id": "string",
        "userId": "string",
        "type": 1,
        "date": "string",
        "duration": 0,
        "workStartAt": "string",
        "workEndAt": "string"
      }
    ],
    "timeEntries": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
        "type": 1,
        "isOvertime": true,
        "date": "2019-08-24",
        "duration": 2
      }
    ],
    "customFields": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "type": "text",
        "config": {
          "type": "["
        },
        "options": [
          {
            "id": null,
            "name": null,
            "color": null
          }
        ],
        "value": "string"
      }
    ],
    "attachments": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
        "service": "weeek",
        "name": "string",
        "url": "http://example.com",
        "size": 0,
        "createdAt": "2019-08-24T14:15:22Z"
      }
    ]
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|false|none||none|
|» task|[Task](#schematask)|true|none||none|
|»» id|integer|false|none||none|
|»» parentId|integer¦null|false|none||none|
|»» title|string|false|none||none|
|»» description|string¦null|false|none||none|
|»» duration|integer¦null|false|none||In minutes|
|»» overdue|integer|true|none||none|
|»» type|string|false|none||none|
|»» priority|integer¦null|false|none||0 - Low<br />1 - Medium<br />2 - High<br />3 - Hold|
|»» isCompleted|boolean|false|none||none|
|»» authorId|string|false|none||ID of the user who created the task|
|»» userId|string¦null|false|none||ID of the user who is executing the task|
|»» boardId|integer¦null|false|none||none|
|»» boardColumnId|integer¦null|false|none||none|
|»» projectId|integer¦null|false|none||none|
|»» image|string¦null|false|none||none|
|»» isPrivate|boolean|false|none||none|
|»» startDate|string(date)¦null|false|none||Start date of the task in `Y-m-d` format|
|»» startDateTime|string(date-time)¦null|false|none||Start date of the task in ISO 8601 format|
|»» dueDate|string(date)¦null|false|none||Due date of the task in `Y-m-d` format|
|»» dueDateTime|string(date-time)¦null|false|none||Due date of the task in ISO 8601 format|
|»» createdAt|string(date-time)|true|none||Date the task was created in ISO 8601 format|
|»» updatedAt|string(date-time)|true|none||Date the task was last updated in ISO 8601 format|
|»» tags|[integer]|false|none||none|
|»» subscribers|[string]|false|none||none|
|»» subTasks|[integer]|false|none||none|
|»» workloads|[object]|false|none||none|
|»»» id|string|false|none||none|
|»»» userId|string|false|none||none|
|»»» type|integer|false|none||1 - auto calculated from timer<br />2 - manual added|
|»»» date|string|false|none||none|
|»»» duration|integer|false|none||none|
|»»» workStartAt|string¦null|false|none||none|
|»»» workEndAt|string¦null|false|none||none|
|»» timeEntries|[[Time entry](#schematime entry)]|true|none||none|
|»»» id|string(uuid)|true|none||none|
|»»» userId|string(uuid)|true|none||none|
|»»» type|[Time entry type](#schematime entry type)|true|none||none|
|»»» isOvertime|boolean|true|none||A flag indicating that the entry was overtime|
|»»» date|string(date)|true|none||The day of entry. In `Y-m-d` format|
|»»» duration|integer|true|none||Time in minutes, cannot exceed 1440|
|»» customFields|[[CustomFieldValue](#schemacustomfieldvalue)]|false|none||none|
|»»» id|string(uuid)|false|read-only||none|
|»»» name|string¦null|false|none||none|
|»»» type|string|true|none||none|
|»»» config|object¦null|false|none||none|
|»»»» type|string|true|none||Only for boolean custom fields|
|»»» options|[[CustomFieldOption](#schemacustomfieldoption)]|true|none||Only for select and multiselect custom fields|
|»»»» id|string(uuid)|false|read-only||none|
|»»»» name|string|true|none||none|
|»»»» color|string|true|none||none|
|»»» value|string|true|none||none|
|»» attachments|[[Attachment](#schemaattachment)]|false|none||none|
|»»» id|string(uuid)|true|none||none|
|»»» creatorId|string(uuid)|true|none||none|
|»»» service|[AttachmentServiceEnum](#schemaattachmentserviceenum)|true|none||none|
|»»» name|string|true|none||none|
|»»» url|string(uri)|true|none||Attachment URL. If `service` is `weeek`, this URL will be available for an hour.|
|»»» size|integer|false|none||The size of the attachment in bytes. Only present when `service` is `weeek`|
|»»» createdAt|string(date-time)|true|none||none|

#### Enum

|Name|Value|
|---|---|
|type|action|
|type|meet|
|type|call|
|type|1|
|type|2|
|type|1|
|type|2|
|type|text|
|type|boolean|
|type|datetime|
|type|select|
|type|multiselect|
|type|member|
|type|contact|
|type|link|
|type|approval|
|type|switch|
|type|checkbox|
|color|blue|
|color|light_blue|
|color|dark_purple|
|color|purple|
|color|dark_pink|
|color|pink|
|color|light_pink|
|color|red|
|color|dark_green|
|color|green|
|color|light_green|
|color|dark_yellow|
|service|weeek|
|service|google_drive|
|service|dropbox|
|service|one_drive|
|service|box|

## POST Complete task

POST /tm/tasks/{id}/complete

> Body Parameters

```
string

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|body|body|string| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|false|none||none|

## POST Un complete task

POST /tm/tasks/{id}/un-complete

> Body Parameters

```
string

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|body|body|string| no |none|

> Response Examples

> 200 Response

```json
{
  "sucess": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» sucess|boolean|false|none||none|

## POST Change board

POST /tm/tasks/{id}/board

> Body Parameters

```json
{
  "boardId": 1
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|body|body|object| no |none|
|» boardId|body|integer| yes |none|

> Response Examples

> 200 Response

```json
{
  "sucess": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» sucess|boolean|false|none||none|

## POST Change board column

POST /tm/tasks/{id}/board-column

> Body Parameters

```json
{
  "boardColumnId": 1
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|body|body|object| no |none|
|» boardColumnId|body|integer| yes |none|

> Response Examples

> 200 Response

```json
{
  "sucess": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» sucess|boolean|false|none||none|

# Task Manager/Task/Attachments

## POST Upload attachments

POST /tm/tasks/{task_id}/attachments

> Body Parameters

```yaml
"files[]": ""

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|task_id|path|string| yes |none|
|body|body|object| no |none|
|» files[]|body|string(binary)| yes |Max file size is 100MB|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
    "service": "weeek",
    "name": "string",
    "url": "http://example.com",
    "size": 0,
    "createdAt": "2019-08-24T14:15:22Z"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|
|» data|[Attachment](#schemaattachment)|true|none||none|
|»» id|string(uuid)|true|none||none|
|»» creatorId|string(uuid)|true|none||none|
|»» service|[AttachmentServiceEnum](#schemaattachmentserviceenum)|true|none||none|
|»» name|string|true|none||none|
|»» url|string(uri)|true|none||Attachment URL. If `service` is `weeek`, this URL will be available for an hour.|
|»» size|integer|false|none||The size of the attachment in bytes. Only present when `service` is `weeek`|
|»» createdAt|string(date-time)|true|none||none|

#### Enum

|Name|Value|
|---|---|
|service|weeek|
|service|google_drive|
|service|dropbox|
|service|one_drive|
|service|box|

# Task Manager/Task/Time Entries

## POST Create a time entry

POST /tm/tasks/{task_id}/time-entries

> Body Parameters

```json
{
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "isOvertime": true,
  "date": "2019-08-24",
  "duration": 2
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|task_id|path|string| yes |none|
|body|body|[Time entry request](#schematime entry request)| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
    "type": 1,
    "isOvertime": true,
    "date": "2019-08-24",
    "duration": 2
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|
|» data|[Time entry](#schematime entry)|true|none||none|
|»» id|string(uuid)|true|none||none|
|»» userId|string(uuid)|true|none||none|
|»» type|[Time entry type](#schematime entry type)|true|none||none|
|»» isOvertime|boolean|true|none||A flag indicating that the entry was overtime|
|»» date|string(date)|true|none||The day of entry. In `Y-m-d` format|
|»» duration|integer|true|none||Time in minutes, cannot exceed 1440|

#### Enum

|Name|Value|
|---|---|
|type|1|
|type|2|

## PUT Update a time entry

PUT /tm/tasks/{task_id}/time-entries/{time_entry_id}

> Body Parameters

```json
{
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "isOvertime": true,
  "date": "2019-08-24",
  "duration": 2
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|task_id|path|string| yes |none|
|time_entry_id|path|string| yes |none|
|body|body|[Time entry request](#schematime entry request)| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
    "type": 1,
    "isOvertime": true,
    "date": "2019-08-24",
    "duration": 2
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|
|» data|[Time entry](#schematime entry)|true|none||none|
|»» id|string(uuid)|true|none||none|
|»» userId|string(uuid)|true|none||none|
|»» type|[Time entry type](#schematime entry type)|true|none||none|
|»» isOvertime|boolean|true|none||A flag indicating that the entry was overtime|
|»» date|string(date)|true|none||The day of entry. In `Y-m-d` format|
|»» duration|integer|true|none||Time in minutes, cannot exceed 1440|

#### Enum

|Name|Value|
|---|---|
|type|1|
|type|2|

## DELETE Delete a time entry

DELETE /tm/tasks/{task_id}/time-entries/{time_entry_id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|task_id|path|string| yes |none|
|time_entry_id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|

# Task Manager/Task/Watchers

## POST Add watchers to a task

POST /tm/tasks/{task_id}/watchers

> Body Parameters

```json
{
  "watchers": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|task_id|path|string| yes |none|
|body|body|[Watchers](#schemawatchers)| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|

## DELETE Remove watchers from a task

DELETE /tm/tasks/{task_id}/watchers

> Body Parameters

```json
{
  "watchers": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|task_id|path|string| yes |none|
|body|body|[Watchers](#schemawatchers)| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|

# Task Manager/Custom Fields

## POST Create global custom field

POST /tm/custom-fields

> Body Parameters

```json
{
  "name": "string",
  "type": "text",
  "config": {
    "type": "switch"
  }
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CustomFieldCreateBody](#schemacustomfieldcreatebody)| no |none|

> Response Examples

```json
{
  "success": true,
  "customField": {
    "id": "9df95ae9-43b3-485a-8789-9f2d04c0e725",
    "name": "string",
    "type": "text"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|
|» customField|[CustomField](#schemacustomfield)|true|none||none|
|»» id|string(uuid)|false|read-only||none|
|»» name|string¦null|false|none||none|
|»» type|string|true|none||none|
|»» config|object¦null|false|none||none|
|»»» type|string|true|none||Only for boolean custom fields|
|»» options|[[CustomFieldOption](#schemacustomfieldoption)]|true|none||Only for select and multiselect custom fields|
|»»» id|string(uuid)|false|read-only||none|
|»»» name|string|true|none||none|
|»»» color|string|true|none||none|

#### Enum

|Name|Value|
|---|---|
|type|text|
|type|boolean|
|type|datetime|
|type|select|
|type|multiselect|
|type|member|
|type|contact|
|type|link|
|type|approval|
|type|switch|
|type|checkbox|
|color|blue|
|color|light_blue|
|color|dark_purple|
|color|purple|
|color|dark_pink|
|color|pink|
|color|light_pink|
|color|red|
|color|dark_green|
|color|green|
|color|light_green|
|color|dark_yellow|

## GET Get global custom fields

GET /tm/custom-fields

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## PUT Update global custom field

PUT /tm/custom-fields/{id}

> Body Parameters

```json
{
  "name": "string",
  "config": {
    "type": "switch"
  }
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|body|body|[CustomFieldUpdateBody](#schemacustomfieldupdatebody)| no |none|

> Response Examples

```json
{
  "success": true,
  "customField": {
    "id": "9df95a6c-3cfe-4017-b91f-f9b2de21bf93",
    "name": "test",
    "type": "text"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|
|» customField|[CustomField](#schemacustomfield)|true|none||none|
|»» id|string(uuid)|false|read-only||none|
|»» name|string¦null|false|none||none|
|»» type|string|true|none||none|
|»» config|object¦null|false|none||none|
|»»» type|string|true|none||Only for boolean custom fields|
|»» options|[[CustomFieldOption](#schemacustomfieldoption)]|true|none||Only for select and multiselect custom fields|
|»»» id|string(uuid)|false|read-only||none|
|»»» name|string|true|none||none|
|»»» color|string|true|none||none|

#### Enum

|Name|Value|
|---|---|
|type|text|
|type|boolean|
|type|datetime|
|type|select|
|type|multiselect|
|type|member|
|type|contact|
|type|link|
|type|approval|
|type|switch|
|type|checkbox|
|color|blue|
|color|light_blue|
|color|dark_purple|
|color|purple|
|color|dark_pink|
|color|pink|
|color|light_pink|
|color|red|
|color|dark_green|
|color|green|
|color|light_green|
|color|dark_yellow|

## DELETE Delete global custom field

DELETE /tm/custom-fields/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|

> Response Examples

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|

# Task Manager/Custom Fields/Options

## POST Create global custom field option

POST /tm/custom-fields/{custom_field_id}/options

> Body Parameters

```json
{
  "name": "string",
  "color": "blue"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|custom_field_id|path|string| yes |none|
|body|body|[CustomFieldOption3](#schemacustomfieldoption3)| no |none|

> Response Examples

```json
{
  "success": true,
  "option": {
    "id": "9df95e4a-5578-45f2-a387-06b6eaf256b0",
    "name": "testOption",
    "color": "#6C78F4"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|
|» option|[CustomFieldOption](#schemacustomfieldoption)|true|none||none|
|»» id|string(uuid)|false|read-only||none|
|»» name|string|true|none||none|
|»» color|string|true|none||none|
|» *anonymous*|object|false|none||none|
|»» id|string|true|none||none|
|»» name|string|true|none||none|
|»» color|string|true|none||none|

#### Enum

|Name|Value|
|---|---|
|color|blue|
|color|light_blue|
|color|dark_purple|
|color|purple|
|color|dark_pink|
|color|pink|
|color|light_pink|
|color|red|
|color|dark_green|
|color|green|
|color|light_green|
|color|dark_yellow|

## PUT Update global custom field option

PUT /tm/custom-fields/{custom_field_id}/options/{id}

> Body Parameters

```json
{
  "name": "string",
  "color": "blue"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|custom_field_id|path|string| yes |none|
|id|path|string| yes |none|
|body|body|[CustomFieldOption3](#schemacustomfieldoption3)| no |none|

> Response Examples

```json
{
  "success": true,
  "option": {
    "id": "9df9630d-d164-421a-b3b5-416561c39808",
    "name": "pink",
    "color": "#FF6AA9"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|
|» option|[CustomFieldOption](#schemacustomfieldoption)|true|none||none|
|»» id|string(uuid)|false|read-only||none|
|»» name|string|true|none||none|
|»» color|string|true|none||none|

#### Enum

|Name|Value|
|---|---|
|color|blue|
|color|light_blue|
|color|dark_purple|
|color|purple|
|color|dark_pink|
|color|pink|
|color|light_pink|
|color|red|
|color|dark_green|
|color|green|
|color|light_green|
|color|dark_yellow|

## DELETE Delete global custom field option

DELETE /tm/custom-fields/{custom_field_id}/options/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|custom_field_id|path|string| yes |none|
|id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|

## POST Move global custom field option

POST /tm/custom-fields/{custom_field_id}/options/{id}/move

> Body Parameters

```json
{
  "after": "3f00dd4a-56f2-49c5-940c-69eed8a9fb5b",
  "before": "8e6267db-32ed-454a-a2cc-6beef2f6f00e"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|custom_field_id|path|string| yes |none|
|id|path|string| yes |none|
|body|body|object| no |none|
|» after|body|string(uuid)| yes |An custom field option id after which should be moved. Cannot be provided together with before.|
|» before|body|string(uuid)| yes |An custom field option id before which should be moved. Cannot be provided together with after.|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|

# CRM/Funnels

<a id="opIdcrm-get-funnels"></a>

## GET Get all funnels

GET /crm/funnels

> Response Examples

> 200 Response

```json
{
  "success": true,
  "funnels": [
    {
      "id": "string",
      "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
      "currencyId": 1,
      "name": "string",
      "logo": "http://example.com",
      "dealsCount": 0,
      "dealsAmount": 0.1,
      "isPrivate": false,
      "isBookmarked": false,
      "createdAt": "2019-08-24T14:15:22Z",
      "updatedAt": "2019-08-24T14:15:22Z",
      "team": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      "customFields": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "string",
          "type": "text",
          "config": {
            "type": null
          },
          "options": [
            {}
          ]
        }
      ]
    }
  ]
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[crm-funnels](#schemacrm-funnels)|

<a id="opIdcrm-create-funnel"></a>

## POST Create a funnel

POST /crm/funnels

> Body Parameters

```json
{
  "name": "string",
  "currencyId": 1,
  "isPrivate": true
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|[FunnelManageRequest](#schemafunnelmanagerequest)| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "funnel": {
    "id": "string",
    "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
    "currencyId": 1,
    "name": "string",
    "logo": "http://example.com",
    "dealsCount": 0,
    "dealsAmount": 0.1,
    "isPrivate": false,
    "isBookmarked": false,
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z",
    "team": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "customFields": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "type": "text",
        "config": {
          "type": "["
        },
        "options": [
          {
            "id": null,
            "name": null,
            "color": null
          }
        ]
      }
    ]
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[crm-funnel](#schemacrm-funnel)|

<a id="opIdcrm-get-funnel"></a>

## GET Get a funnel

GET /crm/funnels/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "funnel": {
    "id": "string",
    "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
    "currencyId": 1,
    "name": "string",
    "logo": "http://example.com",
    "dealsCount": 0,
    "dealsAmount": 0.1,
    "isPrivate": false,
    "isBookmarked": false,
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z",
    "team": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "customFields": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "type": "text",
        "config": {
          "type": "["
        },
        "options": [
          {
            "id": null,
            "name": null,
            "color": null
          }
        ]
      }
    ]
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[crm-funnel](#schemacrm-funnel)|

<a id="opIdcrm-update-funnel"></a>

## PUT Update a funnel

PUT /crm/funnels/{id}

> Body Parameters

```json
{
  "name": "string",
  "currencyId": 1,
  "isPrivate": true
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|body|body|[FunnelManageRequest](#schemafunnelmanagerequest)| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "funnel": {
    "id": "string",
    "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
    "currencyId": 1,
    "name": "string",
    "logo": "http://example.com",
    "dealsCount": 0,
    "dealsAmount": 0.1,
    "isPrivate": false,
    "isBookmarked": false,
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z",
    "team": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "customFields": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "type": "text",
        "config": {
          "type": "["
        },
        "options": [
          {
            "id": null,
            "name": null,
            "color": null
          }
        ]
      }
    ]
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[crm-funnel](#schemacrm-funnel)|

<a id="opIdcrm-delete-funnel"></a>

## DELETE Delete a funnel

DELETE /crm/funnels/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[successful-response](#schemasuccessful-response)|

# CRM/Funnels/Custom Fields

## POST Create a custom field

POST /crm/funnels/{funnel_id}/custom-fields

> Body Parameters

```json
{
  "name": "string",
  "type": "text",
  "config": {
    "type": "switch"
  }
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|funnel_id|path|string| yes |none|
|body|body|[CustomFieldCreateBody](#schemacustomfieldcreatebody)| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "customField": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "type": "text",
    "config": {
      "type": "switch"
    },
    "options": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "color": "blue"
      }
    ]
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|
|» customField|[CustomField](#schemacustomfield)|true|none||none|
|»» id|string(uuid)|false|read-only||none|
|»» name|string¦null|false|none||none|
|»» type|string|true|none||none|
|»» config|object¦null|false|none||none|
|»»» type|string|true|none||Only for boolean custom fields|
|»» options|[[CustomFieldOption](#schemacustomfieldoption)]|true|none||Only for select and multiselect custom fields|
|»»» id|string(uuid)|false|read-only||none|
|»»» name|string|true|none||none|
|»»» color|string|true|none||none|

#### Enum

|Name|Value|
|---|---|
|type|text|
|type|boolean|
|type|datetime|
|type|select|
|type|multiselect|
|type|member|
|type|contact|
|type|link|
|type|approval|
|type|switch|
|type|checkbox|
|color|blue|
|color|light_blue|
|color|dark_purple|
|color|purple|
|color|dark_pink|
|color|pink|
|color|light_pink|
|color|red|
|color|dark_green|
|color|green|
|color|light_green|
|color|dark_yellow|

## PUT Update a custom field

PUT /crm/funnels/{funnel_id}/custom-fields/{id}

> Body Parameters

```json
{
  "name": "string",
  "config": {
    "type": "switch"
  }
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|funnel_id|path|string| yes |none|
|id|path|string| yes |none|
|body|body|[CustomFieldUpdateBody](#schemacustomfieldupdatebody)| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "customField": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "type": "text",
    "config": {
      "type": "switch"
    },
    "options": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "color": "blue"
      }
    ]
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|
|» customField|[CustomField](#schemacustomfield)|true|none||none|
|»» id|string(uuid)|false|read-only||none|
|»» name|string¦null|false|none||none|
|»» type|string|true|none||none|
|»» config|object¦null|false|none||none|
|»»» type|string|true|none||Only for boolean custom fields|
|»» options|[[CustomFieldOption](#schemacustomfieldoption)]|true|none||Only for select and multiselect custom fields|
|»»» id|string(uuid)|false|read-only||none|
|»»» name|string|true|none||none|
|»»» color|string|true|none||none|

#### Enum

|Name|Value|
|---|---|
|type|text|
|type|boolean|
|type|datetime|
|type|select|
|type|multiselect|
|type|member|
|type|contact|
|type|link|
|type|approval|
|type|switch|
|type|checkbox|
|color|blue|
|color|light_blue|
|color|dark_purple|
|color|purple|
|color|dark_pink|
|color|pink|
|color|light_pink|
|color|red|
|color|dark_green|
|color|green|
|color|light_green|
|color|dark_yellow|

## DELETE Delete a custom field

DELETE /crm/funnels/{funnel_id}/custom-fields/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|funnel_id|path|string| yes |none|
|id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|

## POST Move a custom field

POST /crm/funnels/{funnel_id}/custom-fields/{id}/move

> Body Parameters

```json
{
  "after": "3f00dd4a-56f2-49c5-940c-69eed8a9fb5b",
  "before": "8e6267db-32ed-454a-a2cc-6beef2f6f00e"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|funnel_id|path|string| yes |none|
|id|path|string| yes |none|
|body|body|object| no |none|
|» after|body|string(uuid)| yes |An custom field id after which should be moved. Cannot be provided together with before.|
|» before|body|string(uuid)| yes |An custom field id before which should be moved. Cannot be provided together with after.|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|

# CRM/Funnels/Custom Fields/Options

## POST Create a custom field option

POST /crm/funnels/{funnel_id}/custom-fields/{custom_field_id}/options

> Body Parameters

```json
{
  "name": "string",
  "color": "blue"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|funnel_id|path|string| yes |none|
|custom_field_id|path|string| yes |none|
|body|body|[CustomFieldOption3](#schemacustomfieldoption3)| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "option": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "color": "blue"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|
|» option|[CustomFieldOption](#schemacustomfieldoption)|true|none||none|
|»» id|string(uuid)|false|read-only||none|
|»» name|string|true|none||none|
|»» color|string|true|none||none|

#### Enum

|Name|Value|
|---|---|
|color|blue|
|color|light_blue|
|color|dark_purple|
|color|purple|
|color|dark_pink|
|color|pink|
|color|light_pink|
|color|red|
|color|dark_green|
|color|green|
|color|light_green|
|color|dark_yellow|

## PUT Update a custom field option

PUT /crm/funnels/{funnel_id}/custom-fields/{custom_field_id}/options/{id}

> Body Parameters

```json
{
  "name": "string",
  "color": "blue"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|funnel_id|path|string| yes |none|
|custom_field_id|path|string| yes |none|
|id|path|string| yes |none|
|body|body|[CustomFieldOption3](#schemacustomfieldoption3)| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "option": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "color": "blue"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|
|» option|[CustomFieldOption](#schemacustomfieldoption)|true|none||none|
|»» id|string(uuid)|false|read-only||none|
|»» name|string|true|none||none|
|»» color|string|true|none||none|

#### Enum

|Name|Value|
|---|---|
|color|blue|
|color|light_blue|
|color|dark_purple|
|color|purple|
|color|dark_pink|
|color|pink|
|color|light_pink|
|color|red|
|color|dark_green|
|color|green|
|color|light_green|
|color|dark_yellow|

## DELETE Delete a custom field option

DELETE /crm/funnels/{funnel_id}/custom-fields/{custom_field_id}/options/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|funnel_id|path|string| yes |none|
|custom_field_id|path|string| yes |none|
|id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|

## POST Move a custom field option

POST /crm/funnels/{funnel_id}/custom-fields/{custom_field_id}/options/{id}/move

> Body Parameters

```json
{
  "after": "3f00dd4a-56f2-49c5-940c-69eed8a9fb5b",
  "before": "8e6267db-32ed-454a-a2cc-6beef2f6f00e"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|funnel_id|path|string| yes |none|
|custom_field_id|path|string| yes |none|
|id|path|string| yes |none|
|body|body|object| no |none|
|» after|body|string(uuid)| yes |An custom field option id after which should be moved. Cannot be provided together with before.|
|» before|body|string(uuid)| yes |An custom field option id before which should be moved. Cannot be provided together with after.|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|

# CRM/Funnel Statuses

<a id="opIdcrm-get-funnel-statuses"></a>

## GET Get all funnel statuses

GET /crm/funnels/{funnelId}/statuses

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|funnelId|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "statuses": [
    {
      "id": "string",
      "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
      "name": "string",
      "dealsCount": 0,
      "dealsAmount": 0.1,
      "createdAt": "2019-08-24T14:15:22Z",
      "updatedAt": "2019-08-24T14:15:22Z"
    }
  ]
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[crm-funnel-statuses](#schemacrm-funnel-statuses)|

<a id="opIdcrm-create-funnel-status"></a>

## POST Create a funnel status

POST /crm/funnels/{funnelId}/statuses

> Body Parameters

```json
{
  "name": "string"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|funnelId|path|string| yes |none|
|body|body|[FunnelStatusManageRequest](#schemafunnelstatusmanagerequest)| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "status": {
    "id": "string",
    "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
    "name": "string",
    "dealsCount": 0,
    "dealsAmount": 0.1,
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[crm-funnel-status](#schemacrm-funnel-status)|

<a id="opIdcrm-get-funnel-status"></a>

## GET Get a funnel status

GET /crm/statuses{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "status": {
    "id": "string",
    "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
    "name": "string",
    "dealsCount": 0,
    "dealsAmount": 0.1,
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[crm-funnel-status](#schemacrm-funnel-status)|

<a id="opIdcrm-update-funnel-status"></a>

## PUT Update a funnel status

PUT /crm/statuses{id}

> Body Parameters

```json
{
  "name": "string"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|body|body|[FunnelStatusManageRequest](#schemafunnelstatusmanagerequest)| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "status": {
    "id": "string",
    "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
    "name": "string",
    "dealsCount": 0,
    "dealsAmount": 0.1,
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[crm-funnel-status](#schemacrm-funnel-status)|

<a id="opIdcrm-delete-funnel-status"></a>

## DELETE Delete a funnel status

DELETE /crm/statuses{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[successful-response](#schemasuccessful-response)|

# CRM/Deals

<a id="opIdcrm-get-funnel-status-deals"></a>

## GET Get all deals

GET /crm/statuses/{statusId}/deals

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|statusId|path|string| yes |none|
|search|query|string| no |none|
|executorIds|query|array[string]| no |none|
|winStatuses|query|array[string]| no |Any value from enum: won, lost, archived|
|lastUpdated|query|array[string]| no |Any value from enum: today, yesterday, lastWeek|
|tags|query|array[string]| no |none|
|limit|query|integer| no |The number of objects to return|
|offset|query|integer| no |The number of objects to skip|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "deals": [
    {
      "id": "string",
      "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
      "funnelId": "string",
      "statusId": "string",
      "assignees": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      "organizations": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      "contacts": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      "title": "string",
      "description": "string",
      "amount": 0.1,
      "winStatus": "won",
      "createdAt": "2019-08-24T14:15:22Z",
      "updatedAt": "2019-08-24T14:15:22Z",
      "tags": [
        0
      ],
      "tasks": [
        {
          "id": 0,
          "parentId": 0,
          "title": "string",
          "description": "string",
          "duration": 0,
          "overdue": 0,
          "type": "action",
          "priority": 3,
          "isCompleted": true,
          "authorId": "string",
          "userId": "string",
          "boardId": 0,
          "boardColumnId": 0,
          "projectId": 0,
          "image": "string",
          "isPrivate": true,
          "startDate": "2019-08-24",
          "startDateTime": "2019-08-24T14:15:22Z",
          "dueDate": "2019-08-24",
          "dueDateTime": "2019-08-24T14:15:22Z",
          "createdAt": "2019-08-24T14:15:22Z",
          "updatedAt": "2019-08-24T14:15:22Z",
          "tags": [
            0
          ],
          "subscribers": [
            "string"
          ],
          "subTasks": [
            0
          ],
          "workloads": [
            {}
          ],
          "timeEntries": [
            {}
          ],
          "customFields": [
            {}
          ],
          "attachments": [
            {}
          ]
        }
      ],
      "customFields": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "string",
          "type": "text",
          "config": {
            "type": null
          },
          "options": [
            {}
          ],
          "value": "string"
        }
      ],
      "attachments": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
          "service": "weeek",
          "name": "string",
          "url": "http://example.com",
          "size": 0,
          "createdAt": "2019-08-24T14:15:22Z"
        }
      ]
    }
  ],
  "hasMoreDeals": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[crm-deals](#schemacrm-deals)|

<a id="opIdcrm-create-funnel-status-deal"></a>

## POST Create a deal

POST /crm/statuses/{statusId}/deals

> Body Parameters

```json
{
  "title": "string",
  "amount": 0.1,
  "winStatus": "won",
  "description": "string",
  "assignees": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "organizations": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "contacts": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "tags": [
    0
  ],
  "customFields": {}
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|statusId|path|string| yes |none|
|body|body|[DealCreateRequest](#schemadealcreaterequest)| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "deal": {
    "id": "string",
    "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
    "funnelId": "string",
    "statusId": "string",
    "assignees": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "organizations": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "contacts": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "title": "string",
    "description": "string",
    "amount": 0.1,
    "winStatus": "won",
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z",
    "tags": [
      0
    ],
    "tasks": [
      {
        "id": 0,
        "parentId": 0,
        "title": "string",
        "description": "string",
        "duration": 0,
        "overdue": 0,
        "type": "action",
        "priority": 3,
        "isCompleted": true,
        "authorId": "string",
        "userId": "string",
        "boardId": 0,
        "boardColumnId": 0,
        "projectId": 0,
        "image": "string",
        "isPrivate": true,
        "startDate": "2019-08-24",
        "startDateTime": "2019-08-24T14:15:22Z",
        "dueDate": "2019-08-24",
        "dueDateTime": "2019-08-24T14:15:22Z",
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z",
        "tags": [
          0
        ],
        "subscribers": [
          "string"
        ],
        "subTasks": [
          0
        ],
        "workloads": [
          {
            "id": null,
            "userId": null,
            "type": null,
            "date": null,
            "duration": null,
            "workStartAt": null,
            "workEndAt": null
          }
        ],
        "timeEntries": [
          {
            "id": null,
            "userId": null,
            "type": null,
            "isOvertime": null,
            "date": null,
            "duration": null
          }
        ],
        "customFields": [
          {
            "id": null,
            "name": null,
            "type": null,
            "config": null,
            "options": null,
            "value": null
          }
        ],
        "attachments": [
          {
            "id": null,
            "creatorId": null,
            "service": null,
            "name": null,
            "url": null,
            "size": null,
            "createdAt": null
          }
        ]
      }
    ],
    "customFields": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "type": "text",
        "config": {
          "type": "["
        },
        "options": [
          {
            "id": null,
            "name": null,
            "color": null
          }
        ],
        "value": "string"
      }
    ],
    "attachments": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
        "service": "weeek",
        "name": "string",
        "url": "http://example.com",
        "size": 0,
        "createdAt": "2019-08-24T14:15:22Z"
      }
    ]
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[crm-deal](#schemacrm-deal)|

<a id="opIdcrm-get-deal"></a>

## GET Get a deal

GET /crm/deals/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "deal": {
    "id": "string",
    "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
    "funnelId": "string",
    "statusId": "string",
    "assignees": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "organizations": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "contacts": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "title": "string",
    "description": "string",
    "amount": 0.1,
    "winStatus": "won",
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z",
    "tags": [
      0
    ],
    "tasks": [
      {
        "id": 0,
        "parentId": 0,
        "title": "string",
        "description": "string",
        "duration": 0,
        "overdue": 0,
        "type": "action",
        "priority": 3,
        "isCompleted": true,
        "authorId": "string",
        "userId": "string",
        "boardId": 0,
        "boardColumnId": 0,
        "projectId": 0,
        "image": "string",
        "isPrivate": true,
        "startDate": "2019-08-24",
        "startDateTime": "2019-08-24T14:15:22Z",
        "dueDate": "2019-08-24",
        "dueDateTime": "2019-08-24T14:15:22Z",
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z",
        "tags": [
          0
        ],
        "subscribers": [
          "string"
        ],
        "subTasks": [
          0
        ],
        "workloads": [
          {
            "id": null,
            "userId": null,
            "type": null,
            "date": null,
            "duration": null,
            "workStartAt": null,
            "workEndAt": null
          }
        ],
        "timeEntries": [
          {
            "id": null,
            "userId": null,
            "type": null,
            "isOvertime": null,
            "date": null,
            "duration": null
          }
        ],
        "customFields": [
          {
            "id": null,
            "name": null,
            "type": null,
            "config": null,
            "options": null,
            "value": null
          }
        ],
        "attachments": [
          {
            "id": null,
            "creatorId": null,
            "service": null,
            "name": null,
            "url": null,
            "size": null,
            "createdAt": null
          }
        ]
      }
    ],
    "customFields": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "type": "text",
        "config": {
          "type": "["
        },
        "options": [
          {
            "id": null,
            "name": null,
            "color": null
          }
        ],
        "value": "string"
      }
    ],
    "attachments": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
        "service": "weeek",
        "name": "string",
        "url": "http://example.com",
        "size": 0,
        "createdAt": "2019-08-24T14:15:22Z"
      }
    ]
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[crm-deal](#schemacrm-deal)|

<a id="opIdcrm-update-deal"></a>

## PUT Update a deal

PUT /crm/deals/{id}

> Body Parameters

```json
{
  "title": "string",
  "amount": 0.1,
  "winStatus": "won",
  "customFields": {}
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|body|body|[DealUpdateRequest](#schemadealupdaterequest)| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "deal": {
    "id": "string",
    "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
    "funnelId": "string",
    "statusId": "string",
    "assignees": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "organizations": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "contacts": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "title": "string",
    "description": "string",
    "amount": 0.1,
    "winStatus": "won",
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z",
    "tags": [
      0
    ],
    "tasks": [
      {
        "id": 0,
        "parentId": 0,
        "title": "string",
        "description": "string",
        "duration": 0,
        "overdue": 0,
        "type": "action",
        "priority": 3,
        "isCompleted": true,
        "authorId": "string",
        "userId": "string",
        "boardId": 0,
        "boardColumnId": 0,
        "projectId": 0,
        "image": "string",
        "isPrivate": true,
        "startDate": "2019-08-24",
        "startDateTime": "2019-08-24T14:15:22Z",
        "dueDate": "2019-08-24",
        "dueDateTime": "2019-08-24T14:15:22Z",
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z",
        "tags": [
          0
        ],
        "subscribers": [
          "string"
        ],
        "subTasks": [
          0
        ],
        "workloads": [
          {
            "id": null,
            "userId": null,
            "type": null,
            "date": null,
            "duration": null,
            "workStartAt": null,
            "workEndAt": null
          }
        ],
        "timeEntries": [
          {
            "id": null,
            "userId": null,
            "type": null,
            "isOvertime": null,
            "date": null,
            "duration": null
          }
        ],
        "customFields": [
          {
            "id": null,
            "name": null,
            "type": null,
            "config": null,
            "options": null,
            "value": null
          }
        ],
        "attachments": [
          {
            "id": null,
            "creatorId": null,
            "service": null,
            "name": null,
            "url": null,
            "size": null,
            "createdAt": null
          }
        ]
      }
    ],
    "customFields": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "type": "text",
        "config": {
          "type": "["
        },
        "options": [
          {
            "id": null,
            "name": null,
            "color": null
          }
        ],
        "value": "string"
      }
    ],
    "attachments": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
        "service": "weeek",
        "name": "string",
        "url": "http://example.com",
        "size": 0,
        "createdAt": "2019-08-24T14:15:22Z"
      }
    ]
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[crm-deal](#schemacrm-deal)|

<a id="opIdcrm-delete-deal"></a>

## DELETE Delete a deal

DELETE /crm/deals/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[successful-response](#schemasuccessful-response)|

<a id="opIdcrm-patch-deal"></a>

## PATCH Update a deal fields

PATCH /crm/deals/{id}

> Body Parameters

```json
{
  "title": "string",
  "amount": 0.1,
  "winStatus": "won",
  "description": "string",
  "assignees": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "organizations": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "contacts": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "tags": [
    0
  ],
  "customFields": {}
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|body|body|[DealCreateRequest](#schemadealcreaterequest)| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[successful-response](#schemasuccessful-response)|

<a id="opIdcrm-move-deal"></a>

## POST Move a deal

POST /crm/deals/{id}/move

Move a deal within the funnel

> Body Parameters

```json
{
  "statusId": "string",
  "previousDealId": "string"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|body|body|object| no |none|
|» statusId|body|string¦null| no |none|
|» previousDealId|body|string¦null| no |If null, the deal will be placed at the top|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[successful-response](#schemasuccessful-response)|

<a id="opIdcrm-update-deal-funnel"></a>

## PUT Update the deal funnel

PUT /crm/deals/{id}/funnel

> Body Parameters

```json
{
  "funnelId": "string"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|body|body|object| no |none|
|» funnelId|body|string| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[successful-response](#schemasuccessful-response)|

<a id="opIdcrm-update-deal-status"></a>

## PUT Update the deal funnel status

PUT /crm/deals/{id}/status

> Body Parameters

```json
{
  "statusId": "string"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|body|body|object| no |none|
|» statusId|body|string| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[successful-response](#schemasuccessful-response)|

# CRM/Deals/Assignees

## POST Attach an assignee

POST /crm/deals/{dealId}/assignees

> Body Parameters

```json
{
  "assigneeId": "665a9750-71bd-4b96-bacd-9efa4ae022dd"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|dealId|path|string| yes |none|
|body|body|object| no |none|
|» assigneeId|body|string(uuid)| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[successful-response](#schemasuccessful-response)|

## DELETE Detach an assignee

DELETE /crm/deals/{dealId}/assignees

> Body Parameters

```json
{
  "assigneeId": "665a9750-71bd-4b96-bacd-9efa4ae022dd"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|dealId|path|string| yes |none|
|body|body|object| no |none|
|» assigneeId|body|string(uuid)| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[successful-response](#schemasuccessful-response)|

# CRM/Deals/Contacts

## POST Attach a contact

POST /crm/deals/{dealId}/contacts

> Body Parameters

```json
{
  "contactId": "b5ec5d98-4bee-4da1-ad24-dde86346cb1d"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|dealId|path|string| yes |none|
|body|body|object| no |none|
|» contactId|body|string(uuid)| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[successful-response](#schemasuccessful-response)|

## DELETE Detach a contact

DELETE /crm/deals/{dealId}/contacts

> Body Parameters

```json
{
  "contactId": "b5ec5d98-4bee-4da1-ad24-dde86346cb1d"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|dealId|path|string| yes |none|
|body|body|object| no |none|
|» contactId|body|string(uuid)| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[successful-response](#schemasuccessful-response)|

# CRM/Deals/Organizations

## POST Attach an organization

POST /crm/deals/{dealId}/organizations

> Body Parameters

```json
{
  "organizationId": "7bc05553-4b68-44e8-b7bc-37be63c6d9e9"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|dealId|path|string| yes |none|
|body|body|object| no |none|
|» organizationId|body|string(uuid)| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[successful-response](#schemasuccessful-response)|

## DELETE Detach an organization

DELETE /crm/deals/{dealId}/organizations

> Body Parameters

```json
{
  "organizationId": "7bc05553-4b68-44e8-b7bc-37be63c6d9e9"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|dealId|path|string| yes |none|
|body|body|object| no |none|
|» organizationId|body|string(uuid)| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[successful-response](#schemasuccessful-response)|

# CRM/Deals/Tags

## POST Attach a tag

POST /crm/deals/{dealId}/tags

> Body Parameters

```json
{
  "tag": 0
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|dealId|path|string| yes |none|
|body|body|object| no |none|
|» tag|body|integer| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[successful-response](#schemasuccessful-response)|

## DELETE Detach a tag

DELETE /crm/deals/{dealId}/tags

> Body Parameters

```json
{
  "tag": 0
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|dealId|path|string| yes |none|
|body|body|object| no |none|
|» tag|body|integer| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[successful-response](#schemasuccessful-response)|

# CRM/Deals/Tasks

<a id="opIdcrm-deal-attach-task"></a>

## POST Attach a new task

POST /crm/deals/{id}/tasks

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "task": {
    "id": 0,
    "parentId": 0,
    "title": "string",
    "description": "string",
    "duration": 0,
    "overdue": 0,
    "type": "action",
    "priority": 3,
    "isCompleted": true,
    "authorId": "string",
    "userId": "string",
    "boardId": 0,
    "boardColumnId": 0,
    "projectId": 0,
    "image": "string",
    "isPrivate": true,
    "startDate": "2019-08-24",
    "startDateTime": "2019-08-24T14:15:22Z",
    "dueDate": "2019-08-24",
    "dueDateTime": "2019-08-24T14:15:22Z",
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z",
    "tags": [
      0
    ],
    "subscribers": [
      "string"
    ],
    "subTasks": [
      0
    ],
    "workloads": [
      {
        "id": "string",
        "userId": "string",
        "type": 1,
        "date": "string",
        "duration": 0,
        "workStartAt": "string",
        "workEndAt": "string"
      }
    ],
    "timeEntries": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
        "type": 1,
        "isOvertime": true,
        "date": "2019-08-24",
        "duration": 2
      }
    ],
    "customFields": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "type": "text",
        "config": {
          "type": "["
        },
        "options": [
          {
            "id": null,
            "name": null,
            "color": null
          }
        ],
        "value": "string"
      }
    ],
    "attachments": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
        "service": "weeek",
        "name": "string",
        "url": "http://example.com",
        "size": 0,
        "createdAt": "2019-08-24T14:15:22Z"
      }
    ]
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|false|none||none|
|» task|[Task](#schematask)|false|none||none|
|»» id|integer|false|none||none|
|»» parentId|integer¦null|false|none||none|
|»» title|string|false|none||none|
|»» description|string¦null|false|none||none|
|»» duration|integer¦null|false|none||In minutes|
|»» overdue|integer|true|none||none|
|»» type|string|false|none||none|
|»» priority|integer¦null|false|none||0 - Low<br />1 - Medium<br />2 - High<br />3 - Hold|
|»» isCompleted|boolean|false|none||none|
|»» authorId|string|false|none||ID of the user who created the task|
|»» userId|string¦null|false|none||ID of the user who is executing the task|
|»» boardId|integer¦null|false|none||none|
|»» boardColumnId|integer¦null|false|none||none|
|»» projectId|integer¦null|false|none||none|
|»» image|string¦null|false|none||none|
|»» isPrivate|boolean|false|none||none|
|»» startDate|string(date)¦null|false|none||Start date of the task in `Y-m-d` format|
|»» startDateTime|string(date-time)¦null|false|none||Start date of the task in ISO 8601 format|
|»» dueDate|string(date)¦null|false|none||Due date of the task in `Y-m-d` format|
|»» dueDateTime|string(date-time)¦null|false|none||Due date of the task in ISO 8601 format|
|»» createdAt|string(date-time)|true|none||Date the task was created in ISO 8601 format|
|»» updatedAt|string(date-time)|true|none||Date the task was last updated in ISO 8601 format|
|»» tags|[integer]|false|none||none|
|»» subscribers|[string]|false|none||none|
|»» subTasks|[integer]|false|none||none|
|»» workloads|[object]|false|none||none|
|»»» id|string|false|none||none|
|»»» userId|string|false|none||none|
|»»» type|integer|false|none||1 - auto calculated from timer<br />2 - manual added|
|»»» date|string|false|none||none|
|»»» duration|integer|false|none||none|
|»»» workStartAt|string¦null|false|none||none|
|»»» workEndAt|string¦null|false|none||none|
|»» timeEntries|[[Time entry](#schematime entry)]|true|none||none|
|»»» id|string(uuid)|true|none||none|
|»»» userId|string(uuid)|true|none||none|
|»»» type|[Time entry type](#schematime entry type)|true|none||none|
|»»» isOvertime|boolean|true|none||A flag indicating that the entry was overtime|
|»»» date|string(date)|true|none||The day of entry. In `Y-m-d` format|
|»»» duration|integer|true|none||Time in minutes, cannot exceed 1440|
|»» customFields|[[CustomFieldValue](#schemacustomfieldvalue)]|false|none||none|
|»»» id|string(uuid)|false|read-only||none|
|»»» name|string¦null|false|none||none|
|»»» type|string|true|none||none|
|»»» config|object¦null|false|none||none|
|»»»» type|string|true|none||Only for boolean custom fields|
|»»» options|[[CustomFieldOption](#schemacustomfieldoption)]|true|none||Only for select and multiselect custom fields|
|»»»» id|string(uuid)|false|read-only||none|
|»»»» name|string|true|none||none|
|»»»» color|string|true|none||none|
|»»» value|string|true|none||none|
|»» attachments|[[Attachment](#schemaattachment)]|false|none||none|
|»»» id|string(uuid)|true|none||none|
|»»» creatorId|string(uuid)|true|none||none|
|»»» service|[AttachmentServiceEnum](#schemaattachmentserviceenum)|true|none||none|
|»»» name|string|true|none||none|
|»»» url|string(uri)|true|none||Attachment URL. If `service` is `weeek`, this URL will be available for an hour.|
|»»» size|integer|false|none||The size of the attachment in bytes. Only present when `service` is `weeek`|
|»»» createdAt|string(date-time)|true|none||none|

#### Enum

|Name|Value|
|---|---|
|type|action|
|type|meet|
|type|call|
|type|1|
|type|2|
|type|1|
|type|2|
|type|text|
|type|boolean|
|type|datetime|
|type|select|
|type|multiselect|
|type|member|
|type|contact|
|type|link|
|type|approval|
|type|switch|
|type|checkbox|
|color|blue|
|color|light_blue|
|color|dark_purple|
|color|purple|
|color|dark_pink|
|color|pink|
|color|light_pink|
|color|red|
|color|dark_green|
|color|green|
|color|light_green|
|color|dark_yellow|
|service|weeek|
|service|google_drive|
|service|dropbox|
|service|one_drive|
|service|box|

<a id="opIdcrm-move-attached-deal-task"></a>

## POST Move a attached to the deal task

POST /crm/deals/{id}/tasks/{taskId}/move

> Body Parameters

```json
{
  "previousTaskId": 0
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|taskId|path|string| yes |none|
|body|body|object| no |none|
|» previousTaskId|body|integer¦null| no |If null, task will be placed at the top|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[successful-response](#schemasuccessful-response)|

<a id="opIdcrm-delete-detach-deal-task"></a>

## DELETE Detach a task

DELETE /crm/deals/{id}/tasks/{taskId}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|taskId|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[successful-response](#schemasuccessful-response)|

# CRM/Deals/Attachments

## POST Upload attachments

POST /crm/deals/{deal_id}/attachments

> Body Parameters

```yaml
"files[]": ""

```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|deal_id|path|string| yes |none|
|body|body|object| no |none|
|» files[]|body|string(binary)| yes |Max file size is 100MB|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
    "service": "weeek",
    "name": "string",
    "url": "http://example.com",
    "size": 0,
    "createdAt": "2019-08-24T14:15:22Z"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|
|» data|[Attachment](#schemaattachment)|true|none||none|
|»» id|string(uuid)|true|none||none|
|»» creatorId|string(uuid)|true|none||none|
|»» service|[AttachmentServiceEnum](#schemaattachmentserviceenum)|true|none||none|
|»» name|string|true|none||none|
|»» url|string(uri)|true|none||Attachment URL. If `service` is `weeek`, this URL will be available for an hour.|
|»» size|integer|false|none||The size of the attachment in bytes. Only present when `service` is `weeek`|
|»» createdAt|string(date-time)|true|none||none|

#### Enum

|Name|Value|
|---|---|
|service|weeek|
|service|google_drive|
|service|dropbox|
|service|one_drive|
|service|box|

# CRM/Organizations

<a id="opIdcrm-get-organizations"></a>

## GET Get all organizations

GET /crm/organizations

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer| no |The number of objects to return|
|offset|query|integer| no |The number of objects to skip|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "organizations": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
      "name": "string",
      "responsibleId": "9ceebaf9-cb5e-4478-900a-86f844238bb2",
      "addresses": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "address": "string"
        }
      ],
      "emails": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "email": "user@example.com"
        }
      ],
      "phones": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "phone": "string"
        }
      ],
      "contacts": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      "tags": [
        0
      ],
      "createdAt": "2019-08-24T14:15:22Z",
      "updatedAt": "2019-08-24T14:15:22Z"
    }
  ]
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[crm-organizations](#schemacrm-organizations)|

<a id="opIdcrm-create-organization"></a>

## POST Create an organization

POST /crm/organizations

> Body Parameters

```json
{
  "name": "string",
  "addresses": [
    "string"
  ],
  "emails": [
    "user@example.com"
  ],
  "phones": [
    "string"
  ],
  "responsibles": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|[crm-organization4](#schemacrm-organization4)| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "organization": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
    "name": "string",
    "responsibleId": "9ceebaf9-cb5e-4478-900a-86f844238bb2",
    "addresses": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "address": "string"
      }
    ],
    "emails": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "email": "user@example.com"
      }
    ],
    "phones": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "phone": "string"
      }
    ],
    "contacts": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "tags": [
      0
    ],
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[crm-organization](#schemacrm-organization)|

<a id="opIdcrm-get-organization"></a>

## GET Get an organization

GET /crm/organizations/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "organization": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
    "name": "string",
    "responsibleId": "9ceebaf9-cb5e-4478-900a-86f844238bb2",
    "addresses": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "address": "string"
      }
    ],
    "emails": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "email": "user@example.com"
      }
    ],
    "phones": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "phone": "string"
      }
    ],
    "contacts": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "tags": [
      0
    ],
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[crm-organization](#schemacrm-organization)|

<a id="opIdcrm-update-organization"></a>

## PUT Update an organization

PUT /crm/organizations/{id}

> Body Parameters

```json
{
  "name": "string",
  "addresses": [
    "string"
  ],
  "emails": [
    "user@example.com"
  ],
  "phones": [
    "string"
  ],
  "responsibles": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|body|body|[crm-organization4](#schemacrm-organization4)| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "organization": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
    "name": "string",
    "responsibleId": "9ceebaf9-cb5e-4478-900a-86f844238bb2",
    "addresses": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "address": "string"
      }
    ],
    "emails": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "email": "user@example.com"
      }
    ],
    "phones": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "phone": "string"
      }
    ],
    "contacts": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "tags": [
      0
    ],
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[crm-organization](#schemacrm-organization)|

<a id="opIdcrm-delete-organization"></a>

## DELETE Delete an organization

DELETE /crm/organizations/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[successful-response](#schemasuccessful-response)|

# CRM/Organizations/Addresses

## POST Create an address

POST /crm/organizations/{organizationId}/addresses

> Body Parameters

```json
{
  "address": "string"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string| yes |none|
|body|body|object| no |none|
|» address|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": "true",
  "address": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "address": "string"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Address response](#schemaaddress response)|

## PUT Update the address

PUT /crm/organizations/{organizationId}/addresses/{addressId}

> Body Parameters

```json
{
  "address": "string"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string| yes |none|
|addressId|path|string| yes |none|
|body|body|object| no |none|
|» address|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": "true",
  "address": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "address": "string"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Address response](#schemaaddress response)|

## DELETE Delete the address

DELETE /crm/organizations/{organizationId}/addresses/{addressId}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string| yes |none|
|addressId|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[successful-response](#schemasuccessful-response)|

# CRM/Organizations/Emails

## POST Create an email

POST /crm/organizations/{organizationId}/emails

> Body Parameters

```json
{
  "email": "user@example.com"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string| yes |none|
|body|body|object| no |none|
|» email|body|string(email)| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": "true",
  "email": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": "user@example.com"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Email response](#schemaemail response)|

## PUT Update the email

PUT /crm/organizations/{organizationId}/emails/{emailId}

> Body Parameters

```json
{
  "email": "user@example.com"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string| yes |none|
|emailId|path|string| yes |none|
|body|body|object| no |none|
|» email|body|string(email)| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": "true",
  "email": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": "user@example.com"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Email response](#schemaemail response)|

## DELETE Delete the email

DELETE /crm/organizations/{organizationId}/emails/{emailId}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string| yes |none|
|emailId|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[successful-response](#schemasuccessful-response)|

# CRM/Organizations/Phones

## POST Create a phone

POST /crm/organizations/{organizationId}/phones

> Body Parameters

```json
{
  "phone": "string"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string| yes |none|
|body|body|object| no |none|
|» phone|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": "true",
  "phone": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "phone": "string"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Phone response](#schemaphone response)|

## PUT Update the phone

PUT /crm/organizations/{organizationId}/phones/{phoneId}

> Body Parameters

```json
{
  "phone": "string"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string| yes |none|
|phoneId|path|string| yes |none|
|body|body|object| no |none|
|» phone|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": "true",
  "phone": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "phone": "string"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Phone response](#schemaphone response)|

## DELETE Delete the phone

DELETE /crm/organizations/{organizationId}/phones/{phoneId}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string| yes |none|
|phoneId|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[successful-response](#schemasuccessful-response)|

# CRM/Organizations/Contacts

## POST Attach a contact

POST /crm/organizations/{organizationId}/contacts

> Body Parameters

```json
{
  "contactId": "b5ec5d98-4bee-4da1-ad24-dde86346cb1d"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string| yes |none|
|body|body|object| no |none|
|» contactId|body|string(uuid)| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[successful-response](#schemasuccessful-response)|

## DELETE Detach the contact

DELETE /crm/organizations/{organizationId}/contacts

> Body Parameters

```json
{
  "contactId": "b5ec5d98-4bee-4da1-ad24-dde86346cb1d"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string| yes |none|
|body|body|object| no |none|
|» contactId|body|string(uuid)| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[successful-response](#schemasuccessful-response)|

# CRM/Organizations/Tags

## POST Attach a tag

POST /crm/organizations/{organizationId}/tags

> Body Parameters

```json
{
  "tagId": 0
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string| yes |none|
|body|body|object| no |none|
|» tagId|body|integer| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[successful-response](#schemasuccessful-response)|

## DELETE Detach the tag

DELETE /crm/organizations/{organizationId}/tags

> Body Parameters

```json
{
  "tagId": 0
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|organizationId|path|string| yes |none|
|body|body|object| no |none|
|» tagId|body|integer| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[successful-response](#schemasuccessful-response)|

# CRM/Contacts

<a id="opIdcrm-get-contacts"></a>

## GET Get all contacts

GET /crm/contacts

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer| no |The number of objects to return|
|offset|query|integer| no |The number of objects to skip|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "contacts": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
      "lastName": "string",
      "firstName": "string",
      "middleName": "string",
      "organizations": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      "emails": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "email": "user@example.com"
        }
      ],
      "phones": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "phone": "string"
        }
      ],
      "tags": [
        0
      ],
      "createdAt": "2019-08-24T14:15:22Z",
      "updatedAt": "2019-08-24T14:15:22Z"
    }
  ]
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[crm-contacts](#schemacrm-contacts)|

<a id="opIdcrm-create-contact"></a>

## POST Create a contact

POST /crm/contacts

> Body Parameters

```json
{
  "lastName": "string",
  "firstName": "string",
  "middleName": "string",
  "organizations": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "emails": [
    "user@example.com"
  ],
  "phones": [
    "string"
  ],
  "tags": [
    0
  ]
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|[crm-contact5](#schemacrm-contact5)| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "contact": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
    "lastName": "string",
    "firstName": "string",
    "middleName": "string",
    "organizations": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "emails": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "email": "user@example.com"
      }
    ],
    "phones": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "phone": "string"
      }
    ],
    "tags": [
      0
    ],
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[crm-contact](#schemacrm-contact)|

<a id="opIdcrm-get-contact"></a>

## GET Get a contact

GET /crm/contacts/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "contact": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
    "lastName": "string",
    "firstName": "string",
    "middleName": "string",
    "organizations": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "emails": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "email": "user@example.com"
      }
    ],
    "phones": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "phone": "string"
      }
    ],
    "tags": [
      0
    ],
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[crm-contact](#schemacrm-contact)|

<a id="opIdcrm-update-contact"></a>

## PUT Update a contact

PUT /crm/contacts/{id}

> Body Parameters

```json
{
  "lastName": "string",
  "firstName": "string",
  "middleName": "string",
  "organizations": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "emails": [
    "user@example.com"
  ],
  "phones": [
    "string"
  ],
  "tags": [
    0
  ]
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|body|body|[crm-contact5](#schemacrm-contact5)| no |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "contact": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
    "lastName": "string",
    "firstName": "string",
    "middleName": "string",
    "organizations": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "emails": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "email": "user@example.com"
      }
    ],
    "phones": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "phone": "string"
      }
    ],
    "tags": [
      0
    ],
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[crm-contact](#schemacrm-contact)|

<a id="opIdcrm-delete-contact"></a>

## DELETE Delete a contact

DELETE /crm/contacts/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[successful-response](#schemasuccessful-response)|

# CRM/Contacts/Emails

## POST Create an email

POST /crm/contacts/{contactId}/emails

> Body Parameters

```json
{
  "email": "user@example.com"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|contactId|path|string| yes |none|
|body|body|object| no |none|
|» email|body|string(email)| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": "true",
  "email": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": "user@example.com"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Email response1](#schemaemail response1)|

## PUT Update the email

PUT /crm/contacts/{contactId}/emails/{emailId}

> Body Parameters

```json
{
  "email": "user@example.com"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|contactId|path|string| yes |none|
|emailId|path|string| yes |none|
|body|body|object| no |none|
|» email|body|string(email)| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": "true",
  "email": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": "user@example.com"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Email response1](#schemaemail response1)|

## DELETE Delete the email

DELETE /crm/contacts/{contactId}/emails/{emailId}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|contactId|path|string| yes |none|
|emailId|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[successful-response](#schemasuccessful-response)|

# CRM/Contacts/Phones

## POST Create a phone

POST /crm/contacts/{contactsId}/phones

> Body Parameters

```json
{
  "phone": "string"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|contactsId|path|string| yes |none|
|body|body|object| no |none|
|» phone|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": "true",
  "phone": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "phone": "string"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Phone response2](#schemaphone response2)|

## PUT Update the phone

PUT /crm/contacts/{contactsId}/phones/{phoneId}

> Body Parameters

```json
{
  "phone": "string"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|contactsId|path|string| yes |none|
|phoneId|path|string| yes |none|
|body|body|object| no |none|
|» phone|body|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": "true",
  "phone": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "phone": "string"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[Phone response2](#schemaphone response2)|

## DELETE Delete the phone

DELETE /crm/contacts/{contactsId}/phones/{phoneId}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|contactsId|path|string| yes |none|
|phoneId|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[successful-response](#schemasuccessful-response)|

# CRM/Contacts/Tags

## POST Attach a tag

POST /crm/contacts/{contactId}/tags

> Body Parameters

```json
{
  "tagId": 0
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|contactId|path|string| yes |none|
|body|body|object| no |none|
|» tagId|body|integer| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[successful-response](#schemasuccessful-response)|

## DELETE Detach the tag

DELETE /crm/contacts/{contactId}/tags

> Body Parameters

```json
{
  "tagId": 0
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|contactId|path|string| yes |none|
|body|body|object| no |none|
|» tagId|body|integer| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[successful-response](#schemasuccessful-response)|

# CRM/Currencies

<a id="opIdcrm-get-currencies"></a>

## GET Get all currencies

GET /crm/currencies

> Response Examples

> 200 Response

```json
{
  "success": true,
  "currencies": [
    {
      "id": 0,
      "name": "string",
      "code": "string",
      "symbol": "string"
    }
  ]
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|[crm-currencies](#schemacrm-currencies)|

# User

## GET Get profile

GET /user/me

> Response Examples

> 200 Response

```json
{
  "success": true,
  "user": {
    "id": "string",
    "email": "string",
    "logoLink": "string",
    "lastName": "string",
    "firstName": "string",
    "middleName": "string",
    "about": "string",
    "position": "string",
    "language": "string",
    "birthDate": "string",
    "country": "string",
    "timeZone": "string",
    "phoneNumber": "string"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|false|none||none|
|» user|[CurrentUser](#schemacurrentuser)|false|none||none|
|»» id|string|false|none||none|
|»» email|string|false|none||none|
|»» logoLink|string|false|none||none|
|»» lastName|string|false|none||none|
|»» firstName|string|false|none||none|
|»» middleName|string|false|none||none|
|»» about|string|false|none||none|
|»» position|string|false|none||none|
|»» language|string|false|none||none|
|»» birthDate|string|false|none||none|
|»» country|string|false|none||none|
|»» timeZone|string|false|none||none|
|»» phoneNumber|string|false|none||none|

# Attachments

## GET Get an attachment

GET /attachments/{attachment_id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|attachment_id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "success": true,
  "data": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
    "service": "weeek",
    "name": "string",
    "url": "http://example.com",
    "size": 0,
    "createdAt": "2019-08-24T14:15:22Z"
  }
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» success|boolean|false|none||none|
|» data|[Attachment](#schemaattachment)|true|none||none|
|»» id|string(uuid)|true|none||none|
|»» creatorId|string(uuid)|true|none||none|
|»» service|[AttachmentServiceEnum](#schemaattachmentserviceenum)|true|none||none|
|»» name|string|true|none||none|
|»» url|string(uri)|true|none||Attachment URL. If `service` is `weeek`, this URL will be available for an hour.|
|»» size|integer|false|none||The size of the attachment in bytes. Only present when `service` is `weeek`|
|»» createdAt|string(date-time)|true|none||none|

#### Enum

|Name|Value|
|---|---|
|service|weeek|
|service|google_drive|
|service|dropbox|
|service|one_drive|
|service|box|

# Data Schema

<h2 id="tocS_Attachment">Attachment</h2>

<a id="schemaattachment"></a>
<a id="schema_Attachment"></a>
<a id="tocSattachment"></a>
<a id="tocsattachment"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
  "service": "weeek",
  "name": "string",
  "url": "http://example.com",
  "size": 0,
  "createdAt": "2019-08-24T14:15:22Z"
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|id|string(uuid)|true|none||none|
|creatorId|string(uuid)|true|none||none|
|service|[AttachmentServiceEnum](#schemaattachmentserviceenum)|true|none||none|
|name|string|true|none||none|
|url|string(uri)|true|none||Attachment URL. If `service` is `weeek`, this URL will be available for an hour.|
|size|integer|false|none||The size of the attachment in bytes. Only present when `service` is `weeek`|
|createdAt|string(date-time)|true|none||none|

<h2 id="tocS_AttachmentServiceEnum">AttachmentServiceEnum</h2>

<a id="schemaattachmentserviceenum"></a>
<a id="schema_AttachmentServiceEnum"></a>
<a id="tocSattachmentserviceenum"></a>
<a id="tocsattachmentserviceenum"></a>

```json
"weeek"

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|*anonymous*|string|false|none||none|

#### Enum

|Name|Value|
|---|---|
|*anonymous*|weeek|
|*anonymous*|google_drive|
|*anonymous*|dropbox|
|*anonymous*|one_drive|
|*anonymous*|box|

<h2 id="tocS_User">User</h2>

<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "id": "3e265f8a-5c6c-4169-a2b1-6182f10b712b",
  "email": "info@weeek.net",
  "logo": "https://storage.weeek.net/logos/MeUZRwz23XfyLAjG_resized_236.png",
  "lastName": "Hendricks",
  "firstName": "Richard",
  "middleName": "string",
  "position": "Developer",
  "timeZone": "Europe/Moscow"
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|id|string|false|none||none|
|email|string|false|none||none|
|logo|string¦null|false|none||none|
|lastName|string¦null|false|none||none|
|firstName|string¦null|false|none||none|
|middleName|string¦null|false|none||none|
|position|string¦null|false|none||none|
|timeZone|string|false|none||none|

<h2 id="tocS_CurrentUser">CurrentUser</h2>

<a id="schemacurrentuser"></a>
<a id="schema_CurrentUser"></a>
<a id="tocScurrentuser"></a>
<a id="tocscurrentuser"></a>

```json
{
  "id": "string",
  "email": "string",
  "logoLink": "string",
  "lastName": "string",
  "firstName": "string",
  "middleName": "string",
  "about": "string",
  "position": "string",
  "language": "string",
  "birthDate": "string",
  "country": "string",
  "timeZone": "string",
  "phoneNumber": "string"
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|id|string|false|none||none|
|email|string|false|none||none|
|logoLink|string|false|none||none|
|lastName|string|false|none||none|
|firstName|string|false|none||none|
|middleName|string|false|none||none|
|about|string|false|none||none|
|position|string|false|none||none|
|language|string|false|none||none|
|birthDate|string|false|none||none|
|country|string|false|none||none|
|timeZone|string|false|none||none|
|phoneNumber|string|false|none||none|

<h2 id="tocS_Workspace">Workspace</h2>

<a id="schemaworkspace"></a>
<a id="schema_Workspace"></a>
<a id="tocSworkspace"></a>
<a id="tocsworkspace"></a>

```json
{
  "id": 0,
  "title": "string",
  "description": "string",
  "isPersonal": true,
  "logo": "string"
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|id|number|false|none||none|
|title|string|false|none||none|
|description|string¦null|false|none||none|
|isPersonal|boolean|false|none||none|
|logo|string¦null|false|none||none|

<h2 id="tocS_Tag">Tag</h2>

<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "id": 1,
  "title": "string",
  "color": "string"
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|id|integer(int64)|true|none||none|
|title|string|true|none||none|
|color|string|true|none||none|

<h2 id="tocS_Project">Project</h2>

<a id="schemaproject"></a>
<a id="schema_Project"></a>
<a id="tocSproject"></a>
<a id="tocsproject"></a>

```json
{
  "id": 0,
  "title": "string",
  "logoLink": "string",
  "description": "string",
  "color": "string",
  "isPrivate": true,
  "team": [
    "string"
  ],
  "customFields": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "type": "text",
      "config": {
        "type": "switch"
      },
      "options": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "string",
          "color": "blue"
        }
      ]
    }
  ]
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|id|integer|false|none||none|
|title|string|false|none||none|
|logoLink|string¦null|false|none||none|
|description|string¦null|false|none||none|
|color|string|false|none||none|
|isPrivate|boolean|false|none||none|
|team|[string]|false|none||none|
|customFields|[[CustomField](#schemacustomfield)]|false|none||none|

<h2 id="tocS_Board">Board</h2>

<a id="schemaboard"></a>
<a id="schema_Board"></a>
<a id="tocSboard"></a>
<a id="tocsboard"></a>

```json
{
  "id": 0,
  "name": "string",
  "projectId": 0,
  "isPrivate": true
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|id|integer|true|none||none|
|name|string|true|none||none|
|projectId|integer|true|none||none|
|isPrivate|boolean|true|none||none|

<h2 id="tocS_BoardColumn">BoardColumn</h2>

<a id="schemaboardcolumn"></a>
<a id="schema_BoardColumn"></a>
<a id="tocSboardcolumn"></a>
<a id="tocsboardcolumn"></a>

```json
{
  "id": 0,
  "name": "string",
  "boardId": 0
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|id|integer|true|none||none|
|name|string|true|none||none|
|boardId|integer|true|none||none|

<h2 id="tocS_Task">Task</h2>

<a id="schematask"></a>
<a id="schema_Task"></a>
<a id="tocStask"></a>
<a id="tocstask"></a>

```json
{
  "id": 0,
  "parentId": 0,
  "title": "string",
  "description": "string",
  "duration": 0,
  "overdue": 0,
  "type": "action",
  "priority": 3,
  "isCompleted": true,
  "authorId": "string",
  "userId": "string",
  "boardId": 0,
  "boardColumnId": 0,
  "projectId": 0,
  "image": "string",
  "isPrivate": true,
  "startDate": "2019-08-24",
  "startDateTime": "2019-08-24T14:15:22Z",
  "dueDate": "2019-08-24",
  "dueDateTime": "2019-08-24T14:15:22Z",
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "tags": [
    0
  ],
  "subscribers": [
    "string"
  ],
  "subTasks": [
    0
  ],
  "workloads": [
    {
      "id": "string",
      "userId": "string",
      "type": 1,
      "date": "string",
      "duration": 0,
      "workStartAt": "string",
      "workEndAt": "string"
    }
  ],
  "timeEntries": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
      "type": 1,
      "isOvertime": true,
      "date": "2019-08-24",
      "duration": 2
    }
  ],
  "customFields": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "type": "text",
      "config": {
        "type": "switch"
      },
      "options": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "string",
          "color": "blue"
        }
      ],
      "value": "string"
    }
  ],
  "attachments": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
      "service": "weeek",
      "name": "string",
      "url": "http://example.com",
      "size": 0,
      "createdAt": "2019-08-24T14:15:22Z"
    }
  ]
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|id|integer|false|none||none|
|parentId|integer¦null|false|none||none|
|title|string|false|none||none|
|description|string¦null|false|none||none|
|duration|integer¦null|false|none||In minutes|
|overdue|integer|true|none||none|
|type|string|false|none||none|
|priority|integer¦null|false|none||0 - Low<br />1 - Medium<br />2 - High<br />3 - Hold|
|isCompleted|boolean|false|none||none|
|authorId|string|false|none||ID of the user who created the task|
|userId|string¦null|false|none||ID of the user who is executing the task|
|boardId|integer¦null|false|none||none|
|boardColumnId|integer¦null|false|none||none|
|projectId|integer¦null|false|none||none|
|image|string¦null|false|none||none|
|isPrivate|boolean|false|none||none|
|startDate|string(date)¦null|false|none||Start date of the task in `Y-m-d` format|
|startDateTime|string(date-time)¦null|false|none||Start date of the task in ISO 8601 format|
|dueDate|string(date)¦null|false|none||Due date of the task in `Y-m-d` format|
|dueDateTime|string(date-time)¦null|false|none||Due date of the task in ISO 8601 format|
|createdAt|string(date-time)|true|none||Date the task was created in ISO 8601 format|
|updatedAt|string(date-time)|true|none||Date the task was last updated in ISO 8601 format|
|tags|[integer]|false|none||none|
|subscribers|[string]|false|none||none|
|subTasks|[integer]|false|none||none|
|workloads|[object]|false|none||none|
|» id|string|false|none||none|
|» userId|string|false|none||none|
|» type|integer|false|none||1 - auto calculated from timer<br />2 - manual added|
|» date|string|false|none||none|
|» duration|integer|false|none||none|
|» workStartAt|string¦null|false|none||none|
|» workEndAt|string¦null|false|none||none|
|timeEntries|[[Time entry](#schematime entry)]|true|none||none|
|customFields|[[CustomFieldValue](#schemacustomfieldvalue)]|false|none||none|
|attachments|[[Attachment](#schemaattachment)]|false|none||none|

#### Enum

|Name|Value|
|---|---|
|type|action|
|type|meet|
|type|call|
|type|1|
|type|2|

<h2 id="tocS_Currency">Currency</h2>

<a id="schemacurrency"></a>
<a id="schema_Currency"></a>
<a id="tocScurrency"></a>
<a id="tocscurrency"></a>

```json
{
  "id": 0,
  "name": "string",
  "code": "string",
  "symbol": "string"
}

```

Currency

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|id|integer|false|read-only||none|
|name|string|false|read-only||none|
|code|string|false|read-only||none|
|symbol|string|false|read-only||none|

<h2 id="tocS_Funnel">Funnel</h2>

<a id="schemafunnel"></a>
<a id="schema_Funnel"></a>
<a id="tocSfunnel"></a>
<a id="tocsfunnel"></a>

```json
{
  "id": "string",
  "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
  "currencyId": 1,
  "name": "string",
  "logo": "http://example.com",
  "dealsCount": 0,
  "dealsAmount": 0.1,
  "isPrivate": false,
  "isBookmarked": false,
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "team": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "customFields": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "type": "text",
      "config": {
        "type": "switch"
      },
      "options": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "string",
          "color": "blue"
        }
      ]
    }
  ]
}

```

Funnel

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|id|string|false|read-only||none|
|creatorId|string(uuid)|false|read-only||none|
|currencyId|integer|false|none||none|
|name|string|false|none||none|
|logo|string(uri)¦null|false|read-only||none|
|dealsCount|integer|false|read-only||none|
|dealsAmount|number(double)|false|read-only||none|
|isPrivate|boolean|false|none||none|
|isBookmarked|boolean|false|read-only||none|
|createdAt|string(date-time)|false|read-only||none|
|updatedAt|string(date-time)|false|read-only||none|
|team|[string]|false|none||none|
|customFields|[[CustomField](#schemacustomfield)]|false|none||none|

<h2 id="tocS_FunnelStatus">FunnelStatus</h2>

<a id="schemafunnelstatus"></a>
<a id="schema_FunnelStatus"></a>
<a id="tocSfunnelstatus"></a>
<a id="tocsfunnelstatus"></a>

```json
{
  "id": "string",
  "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
  "name": "string",
  "dealsCount": 0,
  "dealsAmount": 0.1,
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z"
}

```

Funnel Status

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|id|string|false|read-only||none|
|creatorId|string(uuid)|false|read-only||none|
|name|string|false|none||none|
|dealsCount|integer|false|read-only||none|
|dealsAmount|number(double)|false|read-only||none|
|createdAt|string(date-time)|false|read-only||none|
|updatedAt|string(date-time)|false|read-only||none|

<h2 id="tocS_Deal">Deal</h2>

<a id="schemadeal"></a>
<a id="schema_Deal"></a>
<a id="tocSdeal"></a>
<a id="tocsdeal"></a>

```json
{
  "id": "string",
  "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
  "funnelId": "string",
  "statusId": "string",
  "assignees": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "organizations": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "contacts": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "title": "string",
  "description": "string",
  "amount": 0.1,
  "winStatus": "won",
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z",
  "tags": [
    0
  ],
  "tasks": [
    {
      "id": 0,
      "parentId": 0,
      "title": "string",
      "description": "string",
      "duration": 0,
      "overdue": 0,
      "type": "action",
      "priority": 3,
      "isCompleted": true,
      "authorId": "string",
      "userId": "string",
      "boardId": 0,
      "boardColumnId": 0,
      "projectId": 0,
      "image": "string",
      "isPrivate": true,
      "startDate": "2019-08-24",
      "startDateTime": "2019-08-24T14:15:22Z",
      "dueDate": "2019-08-24",
      "dueDateTime": "2019-08-24T14:15:22Z",
      "createdAt": "2019-08-24T14:15:22Z",
      "updatedAt": "2019-08-24T14:15:22Z",
      "tags": [
        0
      ],
      "subscribers": [
        "string"
      ],
      "subTasks": [
        0
      ],
      "workloads": [
        {
          "id": "string",
          "userId": "string",
          "type": 1,
          "date": "string",
          "duration": 0,
          "workStartAt": "string",
          "workEndAt": "string"
        }
      ],
      "timeEntries": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
          "type": 1,
          "isOvertime": true,
          "date": "2019-08-24",
          "duration": 2
        }
      ],
      "customFields": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "string",
          "type": "text",
          "config": {
            "type": null
          },
          "options": [
            {}
          ],
          "value": "string"
        }
      ],
      "attachments": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
          "service": "weeek",
          "name": "string",
          "url": "http://example.com",
          "size": 0,
          "createdAt": "2019-08-24T14:15:22Z"
        }
      ]
    }
  ],
  "customFields": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "type": "text",
      "config": {
        "type": "switch"
      },
      "options": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "string",
          "color": "blue"
        }
      ],
      "value": "string"
    }
  ],
  "attachments": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
      "service": "weeek",
      "name": "string",
      "url": "http://example.com",
      "size": 0,
      "createdAt": "2019-08-24T14:15:22Z"
    }
  ]
}

```

Deal

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|id|[Slug ID](#schemaslug id)|false|none||String identifier unique only within this resource in the workspace.|
|creatorId|string(uuid)|false|read-only||none|
|funnelId|string|false|read-only||none|
|statusId|string|false|read-only||none|
|assignees|[string]|false|none||none|
|organizations|[string]|false|none||none|
|contacts|[string]|false|none||none|
|title|string¦null|false|none||none|
|description|string¦null|false|none||none|
|amount|number(double)¦null|false|none||none|
|winStatus|string¦null|false|none||none|
|createdAt|string(date-time)|false|none||none|
|updatedAt|string(date-time)|false|none||none|
|tags|[integer]|false|none||none|
|tasks|[[Task](#schematask)]|false|none||none|
|customFields|[[CustomFieldValue](#schemacustomfieldvalue)]|false|none||none|
|attachments|[[Attachment](#schemaattachment)]|false|none||none|

#### Enum

|Name|Value|
|---|---|
|winStatus|won|
|winStatus|lost|
|winStatus|archived|

<h2 id="tocS_Organization">Organization</h2>

<a id="schemaorganization"></a>
<a id="schema_Organization"></a>
<a id="tocSorganization"></a>
<a id="tocsorganization"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
  "name": "string",
  "responsibleId": "9ceebaf9-cb5e-4478-900a-86f844238bb2",
  "addresses": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "address": "string"
    }
  ],
  "emails": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "email": "user@example.com"
    }
  ],
  "phones": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "phone": "string"
    }
  ],
  "contacts": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "tags": [
    0
  ],
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z"
}

```

Organization

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|id|string(uuid)|false|read-only||none|
|creatorId|string(uuid)|false|read-only||none|
|name|string|false|none||none|
|responsibleId|string(uuid)¦null|false|none||none|
|addresses|[[OrganizationAddress](#schemaorganizationaddress)]|false|none||none|
|emails|[[OrganizationEmail](#schemaorganizationemail)]|false|none||none|
|phones|[[OrganizationPhone](#schemaorganizationphone)]|false|none||none|
|contacts|[string]|false|none||none|
|tags|[integer]|false|none||none|
|createdAt|string(date-time)|false|read-only||none|
|updatedAt|string(date-time)|false|read-only||none|

<h2 id="tocS_OrganizationAddress">OrganizationAddress</h2>

<a id="schemaorganizationaddress"></a>
<a id="schema_OrganizationAddress"></a>
<a id="tocSorganizationaddress"></a>
<a id="tocsorganizationaddress"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "address": "string"
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|id|string(uuid)|false|none||none|
|address|string|false|none||none|

<h2 id="tocS_OrganizationEmail">OrganizationEmail</h2>

<a id="schemaorganizationemail"></a>
<a id="schema_OrganizationEmail"></a>
<a id="tocSorganizationemail"></a>
<a id="tocsorganizationemail"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "email": "user@example.com"
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|id|string(uuid)|false|none||none|
|email|string(email)|false|none||none|

<h2 id="tocS_OrganizationPhone">OrganizationPhone</h2>

<a id="schemaorganizationphone"></a>
<a id="schema_OrganizationPhone"></a>
<a id="tocSorganizationphone"></a>
<a id="tocsorganizationphone"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "phone": "string"
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|id|string(uuid)|false|none||none|
|phone|string|false|none||none|

<h2 id="tocS_Contact">Contact</h2>

<a id="schemacontact"></a>
<a id="schema_Contact"></a>
<a id="tocScontact"></a>
<a id="tocscontact"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
  "lastName": "string",
  "firstName": "string",
  "middleName": "string",
  "organizations": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "emails": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "email": "user@example.com"
    }
  ],
  "phones": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "phone": "string"
    }
  ],
  "tags": [
    0
  ],
  "createdAt": "2019-08-24T14:15:22Z",
  "updatedAt": "2019-08-24T14:15:22Z"
}

```

Contact

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|id|string(uuid)|false|read-only||none|
|creatorId|string(uuid)|false|read-only||none|
|lastName|string¦null|false|none||none|
|firstName|string|false|none||none|
|middleName|string¦null|false|none||none|
|organizations|[string]|false|none||none|
|emails|[[ContactEmail](#schemacontactemail)]|false|none||none|
|phones|[[ContactPhone](#schemacontactphone)]|false|none||none|
|tags|[integer]|false|none||none|
|createdAt|string(date-time)|false|none||none|
|updatedAt|string(date-time)|false|read-only||none|

<h2 id="tocS_ContactEmail">ContactEmail</h2>

<a id="schemacontactemail"></a>
<a id="schema_ContactEmail"></a>
<a id="tocScontactemail"></a>
<a id="tocscontactemail"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "email": "user@example.com"
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|id|string(uuid)|false|none||none|
|email|string(email)|false|none||none|

<h2 id="tocS_ContactPhone">ContactPhone</h2>

<a id="schemacontactphone"></a>
<a id="schema_ContactPhone"></a>
<a id="tocScontactphone"></a>
<a id="tocscontactphone"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "phone": "string"
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|id|string(uuid)|false|none||none|
|phone|string|false|none||none|

<h2 id="tocS_CustomField">CustomField</h2>

<a id="schemacustomfield"></a>
<a id="schema_CustomField"></a>
<a id="tocScustomfield"></a>
<a id="tocscustomfield"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "type": "text",
  "config": {
    "type": "switch"
  },
  "options": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "color": "blue"
    }
  ]
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|id|string(uuid)|false|read-only||none|
|name|string¦null|false|none||none|
|type|string|true|none||none|
|config|object¦null|false|none||none|
|» type|string|true|none||Only for boolean custom fields|
|options|[[CustomFieldOption](#schemacustomfieldoption)]|true|none||Only for select and multiselect custom fields|

#### Enum

|Name|Value|
|---|---|
|type|text|
|type|boolean|
|type|datetime|
|type|select|
|type|multiselect|
|type|member|
|type|contact|
|type|link|
|type|approval|
|type|switch|
|type|checkbox|

<h2 id="tocS_CustomFieldOption">CustomFieldOption</h2>

<a id="schemacustomfieldoption"></a>
<a id="schema_CustomFieldOption"></a>
<a id="tocScustomfieldoption"></a>
<a id="tocscustomfieldoption"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "color": "blue"
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|id|string(uuid)|false|read-only||none|
|name|string|true|none||none|
|color|string|true|none||none|

#### Enum

|Name|Value|
|---|---|
|color|blue|
|color|light_blue|
|color|dark_purple|
|color|purple|
|color|dark_pink|
|color|pink|
|color|light_pink|
|color|red|
|color|dark_green|
|color|green|
|color|light_green|
|color|dark_yellow|

<h2 id="tocS_CustomFieldValue">CustomFieldValue</h2>

<a id="schemacustomfieldvalue"></a>
<a id="schema_CustomFieldValue"></a>
<a id="tocScustomfieldvalue"></a>
<a id="tocscustomfieldvalue"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "type": "text",
  "config": {
    "type": "switch"
  },
  "options": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "color": "blue"
    }
  ],
  "value": "string"
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|id|string(uuid)|false|read-only||none|
|name|string¦null|false|none||none|
|type|string|true|none||none|
|config|object¦null|false|none||none|
|» type|string|true|none||Only for boolean custom fields|
|options|[[CustomFieldOption](#schemacustomfieldoption)]|true|none||Only for select and multiselect custom fields|
|value|string|true|none||none|

#### Enum

|Name|Value|
|---|---|
|type|text|
|type|boolean|
|type|datetime|
|type|select|
|type|multiselect|
|type|member|
|type|contact|
|type|link|
|type|approval|
|type|switch|
|type|checkbox|

<h2 id="tocS_ApiResponse">ApiResponse</h2>

<a id="schemaapiresponse"></a>
<a id="schema_ApiResponse"></a>
<a id="tocSapiresponse"></a>
<a id="tocsapiresponse"></a>

```json
{
  "code": 0,
  "type": "string",
  "message": "string"
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||none|
|type|string|false|none||none|
|message|string|false|none||none|

<h2 id="tocS_crm-organizations">crm-organizations</h2>

<a id="schemacrm-organizations"></a>
<a id="schema_crm-organizations"></a>
<a id="tocScrm-organizations"></a>
<a id="tocscrm-organizations"></a>

```json
{
  "success": true,
  "organizations": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
      "name": "string",
      "responsibleId": "9ceebaf9-cb5e-4478-900a-86f844238bb2",
      "addresses": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "address": "string"
        }
      ],
      "emails": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "email": "user@example.com"
        }
      ],
      "phones": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "phone": "string"
        }
      ],
      "contacts": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      "tags": [
        0
      ],
      "createdAt": "2019-08-24T14:15:22Z",
      "updatedAt": "2019-08-24T14:15:22Z"
    }
  ]
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|success|boolean|false|none||none|
|organizations|[[Organization](#schemaorganization)]|false|none||none|

<h2 id="tocS_crm-organization">crm-organization</h2>

<a id="schemacrm-organization"></a>
<a id="schema_crm-organization"></a>
<a id="tocScrm-organization"></a>
<a id="tocscrm-organization"></a>

```json
{
  "success": true,
  "organization": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
    "name": "string",
    "responsibleId": "9ceebaf9-cb5e-4478-900a-86f844238bb2",
    "addresses": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "address": "string"
      }
    ],
    "emails": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "email": "user@example.com"
      }
    ],
    "phones": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "phone": "string"
      }
    ],
    "contacts": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "tags": [
      0
    ],
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z"
  }
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|success|boolean|false|none||none|
|organization|[Organization](#schemaorganization)|false|none||none|

<h2 id="tocS_Address response">Address response</h2>

<a id="schemaaddress response"></a>
<a id="schema_Address response"></a>
<a id="tocSaddress response"></a>
<a id="tocsaddress response"></a>

```json
{
  "success": "true",
  "address": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "address": "string"
  }
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|success|boolean|false|none||none|
|address|[OrganizationAddress](#schemaorganizationaddress)|true|none||none|

<h2 id="tocS_Email response">Email response</h2>

<a id="schemaemail response"></a>
<a id="schema_Email response"></a>
<a id="tocSemail response"></a>
<a id="tocsemail response"></a>

```json
{
  "success": "true",
  "email": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": "user@example.com"
  }
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|success|boolean|false|none||none|
|email|[OrganizationEmail](#schemaorganizationemail)|true|none||none|

<h2 id="tocS_Phone response">Phone response</h2>

<a id="schemaphone response"></a>
<a id="schema_Phone response"></a>
<a id="tocSphone response"></a>
<a id="tocsphone response"></a>

```json
{
  "success": "true",
  "phone": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "phone": "string"
  }
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|success|boolean|false|none||none|
|phone|[OrganizationPhone](#schemaorganizationphone)|true|none||none|

<h2 id="tocS_crm-contacts">crm-contacts</h2>

<a id="schemacrm-contacts"></a>
<a id="schema_crm-contacts"></a>
<a id="tocScrm-contacts"></a>
<a id="tocscrm-contacts"></a>

```json
{
  "success": true,
  "contacts": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
      "lastName": "string",
      "firstName": "string",
      "middleName": "string",
      "organizations": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      "emails": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "email": "user@example.com"
        }
      ],
      "phones": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "phone": "string"
        }
      ],
      "tags": [
        0
      ],
      "createdAt": "2019-08-24T14:15:22Z",
      "updatedAt": "2019-08-24T14:15:22Z"
    }
  ]
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|success|boolean|false|none||none|
|contacts|[[Contact](#schemacontact)]|false|none||none|

<h2 id="tocS_crm-contact">crm-contact</h2>

<a id="schemacrm-contact"></a>
<a id="schema_crm-contact"></a>
<a id="tocScrm-contact"></a>
<a id="tocscrm-contact"></a>

```json
{
  "success": true,
  "contact": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
    "lastName": "string",
    "firstName": "string",
    "middleName": "string",
    "organizations": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "emails": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "email": "user@example.com"
      }
    ],
    "phones": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "phone": "string"
      }
    ],
    "tags": [
      0
    ],
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z"
  }
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|success|boolean|false|none||none|
|contact|[Contact](#schemacontact)|false|none||none|

<h2 id="tocS_Email response1">Email response1</h2>

<a id="schemaemail response1"></a>
<a id="schema_Email response1"></a>
<a id="tocSemail response1"></a>
<a id="tocsemail response1"></a>

```json
{
  "success": "true",
  "email": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "email": "user@example.com"
  }
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|success|boolean|false|none||none|
|email|[ContactEmail](#schemacontactemail)|true|none||none|

<h2 id="tocS_Phone response2">Phone response2</h2>

<a id="schemaphone response2"></a>
<a id="schema_Phone response2"></a>
<a id="tocSphone response2"></a>
<a id="tocsphone response2"></a>

```json
{
  "success": "true",
  "phone": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "phone": "string"
  }
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|success|boolean|false|none||none|
|phone|[ContactPhone](#schemacontactphone)|true|none||none|

<h2 id="tocS_crm-currencies">crm-currencies</h2>

<a id="schemacrm-currencies"></a>
<a id="schema_crm-currencies"></a>
<a id="tocScrm-currencies"></a>
<a id="tocscrm-currencies"></a>

```json
{
  "success": true,
  "currencies": [
    {
      "id": 0,
      "name": "string",
      "code": "string",
      "symbol": "string"
    }
  ]
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|success|boolean|false|none||none|
|currencies|[[Currency](#schemacurrency)]|false|none||none|

<h2 id="tocS_crm-funnel">crm-funnel</h2>

<a id="schemacrm-funnel"></a>
<a id="schema_crm-funnel"></a>
<a id="tocScrm-funnel"></a>
<a id="tocscrm-funnel"></a>

```json
{
  "success": true,
  "funnel": {
    "id": "string",
    "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
    "currencyId": 1,
    "name": "string",
    "logo": "http://example.com",
    "dealsCount": 0,
    "dealsAmount": 0.1,
    "isPrivate": false,
    "isBookmarked": false,
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z",
    "team": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "customFields": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "type": "text",
        "config": {
          "type": "["
        },
        "options": [
          {
            "id": null,
            "name": null,
            "color": null
          }
        ]
      }
    ]
  }
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|success|boolean|false|none||none|
|funnel|[Funnel](#schemafunnel)|false|none||none|

<h2 id="tocS_crm-funnels">crm-funnels</h2>

<a id="schemacrm-funnels"></a>
<a id="schema_crm-funnels"></a>
<a id="tocScrm-funnels"></a>
<a id="tocscrm-funnels"></a>

```json
{
  "success": true,
  "funnels": [
    {
      "id": "string",
      "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
      "currencyId": 1,
      "name": "string",
      "logo": "http://example.com",
      "dealsCount": 0,
      "dealsAmount": 0.1,
      "isPrivate": false,
      "isBookmarked": false,
      "createdAt": "2019-08-24T14:15:22Z",
      "updatedAt": "2019-08-24T14:15:22Z",
      "team": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      "customFields": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "string",
          "type": "text",
          "config": {
            "type": null
          },
          "options": [
            {}
          ]
        }
      ]
    }
  ]
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|success|boolean|false|none||none|
|funnels|[[Funnel](#schemafunnel)]|false|none||none|

<h2 id="tocS_crm-funnel-status">crm-funnel-status</h2>

<a id="schemacrm-funnel-status"></a>
<a id="schema_crm-funnel-status"></a>
<a id="tocScrm-funnel-status"></a>
<a id="tocscrm-funnel-status"></a>

```json
{
  "success": true,
  "status": {
    "id": "string",
    "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
    "name": "string",
    "dealsCount": 0,
    "dealsAmount": 0.1,
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z"
  }
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|success|boolean|false|none||none|
|status|[FunnelStatus](#schemafunnelstatus)|false|none||none|

<h2 id="tocS_crm-funnel-statuses">crm-funnel-statuses</h2>

<a id="schemacrm-funnel-statuses"></a>
<a id="schema_crm-funnel-statuses"></a>
<a id="tocScrm-funnel-statuses"></a>
<a id="tocscrm-funnel-statuses"></a>

```json
{
  "success": true,
  "statuses": [
    {
      "id": "string",
      "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
      "name": "string",
      "dealsCount": 0,
      "dealsAmount": 0.1,
      "createdAt": "2019-08-24T14:15:22Z",
      "updatedAt": "2019-08-24T14:15:22Z"
    }
  ]
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|success|boolean|false|none||none|
|statuses|[[FunnelStatus](#schemafunnelstatus)]|false|none||none|

<h2 id="tocS_crm-deals">crm-deals</h2>

<a id="schemacrm-deals"></a>
<a id="schema_crm-deals"></a>
<a id="tocScrm-deals"></a>
<a id="tocscrm-deals"></a>

```json
{
  "success": true,
  "deals": [
    {
      "id": "string",
      "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
      "funnelId": "string",
      "statusId": "string",
      "assignees": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      "organizations": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      "contacts": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      "title": "string",
      "description": "string",
      "amount": 0.1,
      "winStatus": "won",
      "createdAt": "2019-08-24T14:15:22Z",
      "updatedAt": "2019-08-24T14:15:22Z",
      "tags": [
        0
      ],
      "tasks": [
        {
          "id": 0,
          "parentId": 0,
          "title": "string",
          "description": "string",
          "duration": 0,
          "overdue": 0,
          "type": "action",
          "priority": 3,
          "isCompleted": true,
          "authorId": "string",
          "userId": "string",
          "boardId": 0,
          "boardColumnId": 0,
          "projectId": 0,
          "image": "string",
          "isPrivate": true,
          "startDate": "2019-08-24",
          "startDateTime": "2019-08-24T14:15:22Z",
          "dueDate": "2019-08-24",
          "dueDateTime": "2019-08-24T14:15:22Z",
          "createdAt": "2019-08-24T14:15:22Z",
          "updatedAt": "2019-08-24T14:15:22Z",
          "tags": [
            0
          ],
          "subscribers": [
            "string"
          ],
          "subTasks": [
            0
          ],
          "workloads": [
            {}
          ],
          "timeEntries": [
            {}
          ],
          "customFields": [
            {}
          ],
          "attachments": [
            {}
          ]
        }
      ],
      "customFields": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "string",
          "type": "text",
          "config": {
            "type": null
          },
          "options": [
            {}
          ],
          "value": "string"
        }
      ],
      "attachments": [
        {
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
          "service": "weeek",
          "name": "string",
          "url": "http://example.com",
          "size": 0,
          "createdAt": "2019-08-24T14:15:22Z"
        }
      ]
    }
  ],
  "hasMoreDeals": true
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|success|boolean|false|none||none|
|deals|[[Deal](#schemadeal)]|false|none||none|
|hasMoreDeals|boolean|false|none||none|

<h2 id="tocS_crm-deal">crm-deal</h2>

<a id="schemacrm-deal"></a>
<a id="schema_crm-deal"></a>
<a id="tocScrm-deal"></a>
<a id="tocscrm-deal"></a>

```json
{
  "success": true,
  "deal": {
    "id": "string",
    "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
    "funnelId": "string",
    "statusId": "string",
    "assignees": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "organizations": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "contacts": [
      "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    ],
    "title": "string",
    "description": "string",
    "amount": 0.1,
    "winStatus": "won",
    "createdAt": "2019-08-24T14:15:22Z",
    "updatedAt": "2019-08-24T14:15:22Z",
    "tags": [
      0
    ],
    "tasks": [
      {
        "id": 0,
        "parentId": 0,
        "title": "string",
        "description": "string",
        "duration": 0,
        "overdue": 0,
        "type": "action",
        "priority": 3,
        "isCompleted": true,
        "authorId": "string",
        "userId": "string",
        "boardId": 0,
        "boardColumnId": 0,
        "projectId": 0,
        "image": "string",
        "isPrivate": true,
        "startDate": "2019-08-24",
        "startDateTime": "2019-08-24T14:15:22Z",
        "dueDate": "2019-08-24",
        "dueDateTime": "2019-08-24T14:15:22Z",
        "createdAt": "2019-08-24T14:15:22Z",
        "updatedAt": "2019-08-24T14:15:22Z",
        "tags": [
          0
        ],
        "subscribers": [
          "string"
        ],
        "subTasks": [
          0
        ],
        "workloads": [
          {
            "id": null,
            "userId": null,
            "type": null,
            "date": null,
            "duration": null,
            "workStartAt": null,
            "workEndAt": null
          }
        ],
        "timeEntries": [
          {
            "id": null,
            "userId": null,
            "type": null,
            "isOvertime": null,
            "date": null,
            "duration": null
          }
        ],
        "customFields": [
          {
            "id": null,
            "name": null,
            "type": null,
            "config": null,
            "options": null,
            "value": null
          }
        ],
        "attachments": [
          {
            "id": null,
            "creatorId": null,
            "service": null,
            "name": null,
            "url": null,
            "size": null,
            "createdAt": null
          }
        ]
      }
    ],
    "customFields": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "type": "text",
        "config": {
          "type": "["
        },
        "options": [
          {
            "id": null,
            "name": null,
            "color": null
          }
        ],
        "value": "string"
      }
    ],
    "attachments": [
      {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "creatorId": "688ebf54-d343-4104-8711-82c2feac534a",
        "service": "weeek",
        "name": "string",
        "url": "http://example.com",
        "size": 0,
        "createdAt": "2019-08-24T14:15:22Z"
      }
    ]
  }
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|success|boolean|false|none||none|
|deal|[Deal](#schemadeal)|false|none||none|

<h2 id="tocS_successful-response">successful-response</h2>

<a id="schemasuccessful-response"></a>
<a id="schema_successful-response"></a>
<a id="tocSsuccessful-response"></a>
<a id="tocssuccessful-response"></a>

```json
{
  "success": true
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|success|boolean|false|none||none|

<h2 id="tocS_CustomFieldCreateBody">CustomFieldCreateBody</h2>

<a id="schemacustomfieldcreatebody"></a>
<a id="schema_CustomFieldCreateBody"></a>
<a id="tocScustomfieldcreatebody"></a>
<a id="tocscustomfieldcreatebody"></a>

```json
{
  "name": "string",
  "type": "text",
  "config": {
    "type": "switch"
  }
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|name|string¦null|false|none||none|
|type|string|true|none||none|
|config|object¦null|false|none||none|
|» type|string|true|none||Only for boolean custom fields|

#### Enum

|Name|Value|
|---|---|
|type|text|
|type|boolean|
|type|datetime|
|type|select|
|type|multiselect|
|type|member|
|type|contact|
|type|link|
|type|approval|
|type|switch|
|type|checkbox|

<h2 id="tocS_CustomFieldOption3">CustomFieldOption3</h2>

<a id="schemacustomfieldoption3"></a>
<a id="schema_CustomFieldOption3"></a>
<a id="tocScustomfieldoption3"></a>
<a id="tocscustomfieldoption3"></a>

```json
{
  "name": "string",
  "color": "blue"
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|name|string|true|none||none|
|color|string|true|none||none|

#### Enum

|Name|Value|
|---|---|
|color|blue|
|color|light_blue|
|color|dark_purple|
|color|purple|
|color|dark_pink|
|color|pink|
|color|light_pink|
|color|red|
|color|turquoise|
|color|green|
|color|light_green|
|color|dark_yellow|
|color|yellow|

<h2 id="tocS_CustomFieldUpdateBody">CustomFieldUpdateBody</h2>

<a id="schemacustomfieldupdatebody"></a>
<a id="schema_CustomFieldUpdateBody"></a>
<a id="tocScustomfieldupdatebody"></a>
<a id="tocscustomfieldupdatebody"></a>

```json
{
  "name": "string",
  "config": {
    "type": "switch"
  }
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|name|string¦null|false|none||none|
|config|object¦null|false|none||none|
|» type|string|true|none||Only for boolean custom fields|

#### Enum

|Name|Value|
|---|---|
|type|switch|
|type|checkbox|

<h2 id="tocS_TaskUpdateRequest">TaskUpdateRequest</h2>

<a id="schemataskupdaterequest"></a>
<a id="schema_TaskUpdateRequest"></a>
<a id="tocStaskupdaterequest"></a>
<a id="tocstaskupdaterequest"></a>

```json
{
  "title": "string",
  "projectId": 0,
  "boardId": 0,
  "boardColumnId": 0,
  "priority": 0,
  "type": "action",
  "startDate": "2019-08-24",
  "dueDate": "2019-08-24",
  "startDateTime": "2019-08-24T14:15:22Z",
  "dueDateTime": "2019-08-24T14:15:22Z",
  "tags": [
    0
  ],
  "customFields": {}
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|title|string¦null|false|none||none|
|projectId|integer¦null|false|none||none|
|boardId|integer¦null|false|none||none|
|boardColumnId|integer¦null|false|none||none|
|priority|integer¦null|false|none||none|
|type|string¦null|false|none||none|
|startDate|string(date)¦null|false|none||The start date of the task in Y-m-d format. <br />Cannot be provided with startDateTime or dueDateTime|
|dueDate|string(date)¦null|false|none||The due date of the task in Y-m-d format. Cannot be provided with startDateTime or dueDateTime|
|startDateTime|string(date-time)¦null|false|none||The start datetime of the task in ISO 8601 format. Cannot be provided with startDate or dueDate|
|dueDateTime|string(date-time)¦null|false|none||The due datetime of the task in ISO 8601 format. Cannot be provided with startDate or dueDate|
|tags|[integer]|false|none||Array of tag ids|
|customFields|object|false|none||Key-value object with custom field id and custom field value for the task<br /><br />For example<br /><br />```<br />"customFields" : {<br />    "<text_custom_field_id>": "Text value",<br />    "<boolean_custom_field_id>": true,<br />    "<datetime_custom_field_id>": "<ISO 8601 datetime string>",<br />    "<select_custom_field_id>": "<custom_field_option_id>"<br />    "<multiselect_custom_field_id>": ["<custom_field_option_id>"],<br />    "<member_custom_field_id>": ["<user_id>"],<br />    "<contact_custom_field_id>": "<contact_id>",<br />    "<link_custom_field_id>": "Link value",<br />    "<approval_custom_field_id>": ["<user_id>"]<br />}<br />```|

#### Enum

|Name|Value|
|---|---|
|priority|0|
|priority|1|
|priority|2|
|priority|3|
|type|action|
|type|meet|
|type|call|

<h2 id="tocS_FunnelManageRequest">FunnelManageRequest</h2>

<a id="schemafunnelmanagerequest"></a>
<a id="schema_FunnelManageRequest"></a>
<a id="tocSfunnelmanagerequest"></a>
<a id="tocsfunnelmanagerequest"></a>

```json
{
  "name": "string",
  "currencyId": 1,
  "isPrivate": true
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|name|string|false|none||none|
|currencyId|integer|false|none||none|
|isPrivate|boolean|false|none||none|

<h2 id="tocS_FunnelStatusManageRequest">FunnelStatusManageRequest</h2>

<a id="schemafunnelstatusmanagerequest"></a>
<a id="schema_FunnelStatusManageRequest"></a>
<a id="tocSfunnelstatusmanagerequest"></a>
<a id="tocsfunnelstatusmanagerequest"></a>

```json
{
  "name": "string"
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|name|string|false|none||none|

<h2 id="tocS_DealCreateRequest">DealCreateRequest</h2>

<a id="schemadealcreaterequest"></a>
<a id="schema_DealCreateRequest"></a>
<a id="tocSdealcreaterequest"></a>
<a id="tocsdealcreaterequest"></a>

```json
{
  "title": "string",
  "amount": 0.1,
  "winStatus": "won",
  "description": "string",
  "assignees": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "organizations": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "contacts": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "tags": [
    0
  ],
  "customFields": {}
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|title|string¦null|false|none||none|
|amount|number(double)¦null|false|none||none|
|winStatus|string¦null|false|none||none|
|description|string¦null|false|none||none|
|assignees|[string]|false|none||none|
|organizations|[string]|false|none||none|
|contacts|[string]|false|none||none|
|tags|[integer]|false|none||none|
|customFields|[Custom field values](#schemacustom field values)|false|none||A key-value object with custom field id as key and custom field value<br /><br />For example<br /><br />```<br />"customFields" : {<br />    "<text_custom_field_id>": "Text value",<br />    "<boolean_custom_field_id>": true,<br />    "<datetime_custom_field_id>": "<ISO 8601 datetime string>",<br />    "<select_custom_field_id>": "<custom_field_option_id>"<br />    "<multiselect_custom_field_id>": ["<custom_field_option_id>"],<br />    "<member_custom_field_id>": ["<user_id>"],<br />    "<contact_custom_field_id>": "<contact_id>",<br />    "<link_custom_field_id>": "https://example.com",<br />    "<approval_custom_field_id>": ["<user_id>"]<br />}<br />```|

#### Enum

|Name|Value|
|---|---|
|winStatus|won|
|winStatus|lost|
|winStatus|archived|

<h2 id="tocS_DealUpdateRequest">DealUpdateRequest</h2>

<a id="schemadealupdaterequest"></a>
<a id="schema_DealUpdateRequest"></a>
<a id="tocSdealupdaterequest"></a>
<a id="tocsdealupdaterequest"></a>

```json
{
  "title": "string",
  "amount": 0.1,
  "winStatus": "won",
  "customFields": {}
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|title|string¦null|false|none||none|
|amount|number(double)¦null|false|none||none|
|winStatus|string¦null|false|none||none|
|customFields|[Custom field values](#schemacustom field values)|false|none||A key-value object with custom field id as key and custom field value<br /><br />For example<br /><br />```<br />"customFields" : {<br />    "<text_custom_field_id>": "Text value",<br />    "<boolean_custom_field_id>": true,<br />    "<datetime_custom_field_id>": "<ISO 8601 datetime string>",<br />    "<select_custom_field_id>": "<custom_field_option_id>"<br />    "<multiselect_custom_field_id>": ["<custom_field_option_id>"],<br />    "<member_custom_field_id>": ["<user_id>"],<br />    "<contact_custom_field_id>": "<contact_id>",<br />    "<link_custom_field_id>": "https://example.com",<br />    "<approval_custom_field_id>": ["<user_id>"]<br />}<br />```|

#### Enum

|Name|Value|
|---|---|
|winStatus|won|
|winStatus|lost|
|winStatus|archived|

<h2 id="tocS_crm-organization4">crm-organization4</h2>

<a id="schemacrm-organization4"></a>
<a id="schema_crm-organization4"></a>
<a id="tocScrm-organization4"></a>
<a id="tocscrm-organization4"></a>

```json
{
  "name": "string",
  "addresses": [
    "string"
  ],
  "emails": [
    "user@example.com"
  ],
  "phones": [
    "string"
  ],
  "responsibles": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|name|string|false|none||none|
|addresses|[string]|false|none||none|
|emails|[string]|false|none||none|
|phones|[string]|false|none||none|
|responsibles|[string]|false|none||none|

<h2 id="tocS_crm-contact5">crm-contact5</h2>

<a id="schemacrm-contact5"></a>
<a id="schema_crm-contact5"></a>
<a id="tocScrm-contact5"></a>
<a id="tocscrm-contact5"></a>

```json
{
  "lastName": "string",
  "firstName": "string",
  "middleName": "string",
  "organizations": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "emails": [
    "user@example.com"
  ],
  "phones": [
    "string"
  ],
  "tags": [
    0
  ]
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|lastName|string¦null|false|none||none|
|firstName|string|true|none||none|
|middleName|string¦null|false|none||none|
|organizations|[string]¦null|false|none||none|
|emails|[string]¦null|false|none||none|
|phones|[string]¦null|false|none||none|
|tags|[integer]¦null|false|none||none|

<h2 id="tocS_Custom field values">Custom field values</h2>

<a id="schemacustom field values"></a>
<a id="schema_Custom field values"></a>
<a id="tocScustom field values"></a>
<a id="tocscustom field values"></a>

```json
{}

```

A key-value object with custom field id as key and custom field value

For example

```
"customFields" : {
    "<text_custom_field_id>": "Text value",
    "<boolean_custom_field_id>": true,
    "<datetime_custom_field_id>": "<ISO 8601 datetime string>",
    "<select_custom_field_id>": "<custom_field_option_id>"
    "<multiselect_custom_field_id>": ["<custom_field_option_id>"],
    "<member_custom_field_id>": ["<user_id>"],
    "<contact_custom_field_id>": "<contact_id>",
    "<link_custom_field_id>": "https://example.com",
    "<approval_custom_field_id>": ["<user_id>"]
}
```

### Attribute

*None*

<h2 id="tocS_Watchers">Watchers</h2>

<a id="schemawatchers"></a>
<a id="schema_Watchers"></a>
<a id="tocSwatchers"></a>
<a id="tocswatchers"></a>

```json
{
  "watchers": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ]
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|watchers|[string]|true|none||none|

<h2 id="tocS_UUID ID">UUID ID</h2>

<a id="schemauuid id"></a>
<a id="schema_UUID ID"></a>
<a id="tocSuuid id"></a>
<a id="tocsuuid id"></a>

```json
"497f6eca-6276-4993-bfeb-53cbbbba6f08"

```

Globally unique identifier.

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|*anonymous*|string(uuid)|false|read-only||Globally unique identifier.|

<h2 id="tocS_Workspace ID">Workspace ID</h2>

<a id="schemaworkspace id"></a>
<a id="schema_Workspace ID"></a>
<a id="tocSworkspace id"></a>
<a id="tocsworkspace id"></a>

```json
0

```

Numerical identifier unique only within this resource in the workspace.

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|*anonymous*|integer(uint64)|false|read-only||Numerical identifier unique only within this resource in the workspace.|

<h2 id="tocS_Slug ID">Slug ID</h2>

<a id="schemaslug id"></a>
<a id="schema_Slug ID"></a>
<a id="tocSslug id"></a>
<a id="tocsslug id"></a>

```json
"string"

```

String identifier unique only within this resource in the workspace.

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|*anonymous*|string|false|read-only||String identifier unique only within this resource in the workspace.|

<h2 id="tocS_Time entry">Time entry</h2>

<a id="schematime entry"></a>
<a id="schema_Time entry"></a>
<a id="tocStime entry"></a>
<a id="tocstime entry"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "type": 1,
  "isOvertime": true,
  "date": "2019-08-24",
  "duration": 2
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|id|string(uuid)|true|none||none|
|userId|string(uuid)|true|none||none|
|type|[Time entry type](#schematime entry type)|true|none||none|
|isOvertime|boolean|true|none||A flag indicating that the entry was overtime|
|date|string(date)|true|none||The day of entry. In `Y-m-d` format|
|duration|integer|true|none||Time in minutes, cannot exceed 1440|

<h2 id="tocS_Time entry type">Time entry type</h2>

<a id="schematime entry type"></a>
<a id="schema_Time entry type"></a>
<a id="tocStime entry type"></a>
<a id="tocstime entry type"></a>

```json
1

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|*anonymous*|integer|false|none||none|

#### Enum

|Name|Value|
|---|---|
|*anonymous*|1|
|*anonymous*|2|

<h2 id="tocS_Time entry request">Time entry request</h2>

<a id="schematime entry request"></a>
<a id="schema_Time entry request"></a>
<a id="tocStime entry request"></a>
<a id="tocstime entry request"></a>

```json
{
  "userId": "2c4a230c-5085-4924-a3e1-25fb4fc5965b",
  "isOvertime": true,
  "date": "2019-08-24",
  "duration": 2
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|userId|string(uuid)|true|none||none|
|isOvertime|boolean|true|none||A flag indicating that the entry was overtime|
|date|string(date)|true|none||The day of entry. In `Y-m-d` format|
|duration|integer|true|none||Time in minutes|

