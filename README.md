## API Documentation

List of Available Endpoints:

- `POST /admin/login`
- `GET /categories`
- `POST /categories` (Need Authorization : superadmin)
- `PUT /categories/:categoryId` (Need Authorization : superadmin)
- `DELETE /categories/:categoryId` (Need Authorization : superadmin)
- `GET /admins` (Need Authorization : superadmin)
- `POST /admins` (Need Authorization : superadmin)
- `DELETE /admins/:adminId` (Need Authorization : superadmin)
- `GET /schedules`
- `POST /schedules` (Need Authorization : admin)
- `PUT /schedules/:scheduleId` (Need Authorization : admin)
- `DELETE /schedules/:scheduleId` (Need Authorization : admin)
- `POST /login`
- `POST /register`
- `PATCH /verifyUser`
- `GET /matches` (Need Authorization : user)
- `GET /matches/:matchId` (Need Authorization : user)
- `PATCH /matches/:matchId` (Need Authorization : user)
- `POST /matches`  (Need Authorization : user)

- Auth Controller (Refaldy)
- Category Controller (Inez)
- Admin Controller (Refaldy)
- Schedule Controller (Khansa)
- Match Controller (Mirza)

### POST /admin/login

#### Description

- Login superadmin & admin

#### Request :

- Method : POST
- Body :

```json

{
  "username": "string",
  "password": "string"
}

```

#### Response :

200 - OK

```json

{
  "access_token": "string"
}
```

401 - Unauthorized

```json

{
  "message": "string"
}

```

### GET /categories

#### Description

- Fetch all categories

#### Request :

- Method : GET

#### Response :

200 - OK

```json
[
  {
    "id" : "integer",
    "name": "string"
  }
]
```

### POST /categories

#### Description

- Create new category

#### Request :

- Method : POST
- Header :
    - access_token : string
- Body :

```json

{
  "name": "string"
}

```

#### Response :

200 - OK

```json

{
  "access_token": "string"
}
```

401 - Unauthorized

```json

{
  "message": "string"
}
```

### GET /matches

#### Description

- Create new category

#### Request :

- Method : GET
- Header :
    - access_token : string
- Query :
    - location : string
    - categoryId : integer
    - date : string

#### Response :

200 - OK

```json

[
  {
    "id": 1,
    "name": "Main basket hari minggu jam 7 malam",
    "location": "Jakarta Selatan",
    "date": "2004-10-19T10:23:54.000Z",
    "CategoryId": 2,
    "capacity": 10,
    "currentCapacity": 3,
    "status": 1,
    "createdAt": "2022-10-06T15:52:27.422Z",
    "updatedAt": "2022-10-06T16:47:07.676Z"
  },
  {
    "id": 3,
    "name": "sepakbola hore",
    "location": "manaaja",
    "date": "2022-10-06T06:00:00.000Z",
    "CategoryId": 1,
    "capacity": 20,
    "currentCapacity": 1,
    "status": 1,
    "createdAt": "2022-10-06T16:54:03.356Z",
    "updatedAt": "2022-10-06T16:54:03.356Z"
  }, ...
]
```

401 - Unauthorized

```json
{
  "message": "string"
}
```

### GET /matches/:matchId

#### Description

- Create new category

#### Request :

- Method : GET
- Header :
    - access_token : string
- Params :
    - matchId : integer

#### Response :

200 - OK

```json
{
  "id": 1,
  "name": "Main basket hari minggu jam 7 malam",
  "location": "Jakarta Selatan",
  "date": "2004-10-19T10:23:54.000Z",
  "CategoryId": 2,
  "capacity": 10,
  "currentCapacity": 3,
  "status": 1,
  "createdAt": "2022-10-06T15:52:27.422Z",
  "updatedAt": "2022-10-06T16:47:07.676Z",
  "MatchDetails": [
    {
      "id": 1,
      "MatchId": 1,
      "UserId": 1,
      "role": "author",
      "createdAt": "2022-10-06T15:52:27.434Z",
      "updatedAt": "2022-10-06T15:52:27.434Z"
    }, ....
  ]
}
```

401 - Unauthorized

```json
{
  "message": "string"
}
```

404 - Not Found

```json
{
  "message": "Match not found"
}
```

### PATCH /matches/:matchId

#### Description

- Create new category

#### Request :

- Method : GET
- Header :
    - access_token : string
- Params :
    - matchId : integer
- Body :
    - status : integer

#### Response :

204 - No Content

401 - Unauthorized

```json
{
  "message": "string"
}
```

404 - Not Found

```json

{
  "message": "Match not found"
}
```

### POST /matches

#### Description

- Create new match

#### Request :

- Method : GET
- Header :
    - access_token : string
- Body :

```json
{
  "name": "String",
  "location": "String",
  "date": "String",
  "CategoryId": "Integer",
  "capacity": "Integer",
  "currentCapacity": "Integer",
  "status": "Integer",
  "createdAt": "String",
  "updatedAt": "String"
}
```

#### Response :

204 - No Content

401 - Unauthorized

```json
{
  "message": "string"
}
```

404 - Not Found
```json
{
  "message": "Match not found"
}
```