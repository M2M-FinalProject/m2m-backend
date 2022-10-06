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
- `GET /events` (Need Authorization : user)
- `GET /events/:eventId` (Need Authorization : user)
- `PATCH /events/:eventId` (Need Authorization : user)
- `POST /events`  (Need Authorization : user)

- Auth Controller (Refaldy)
- Category Controller (Inez)
- Admin Controller (Refaldy)
- Schedule Controller (Khansa)
- Event Controller (Mirza)

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
        "id": 1,
        "name": "Football",
        "createdAt": "2022-10-06T15:46:31.041Z",
        "updatedAt": "2022-10-06T15:46:31.041Z"
    },
    {
        "id": 2,
        "name": "Basketball",
        "createdAt": "2022-10-06T15:46:31.041Z",
        "updatedAt": "2022-10-06T15:46:31.041Z"
    },
    ...
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
    "id": 8,
    "name": "Run",
    "updatedAt": "2022-10-06T16:16:07.515Z",
    "createdAt": "2022-10-06T16:16:07.515Z"
}
```

401 - Unauthorized

```json

{
  "message": "string"
}
```


### PUT /categories/:categoryId

#### Description

- Update specified category

#### Request :

- Method : PUT
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
    "message": "success updating category"
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
  "message": "Not Found"
}
```

### DELETE /categories/:categoryId

#### Description

- Delete specified category

#### Request :

- Method : PUT
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
    "message": "success deleting category"
}
```

401 - Unauthorized

```json

{
  "message": "string"
}
```

400 - Bad Request

```json

{
  "message": "This Category is used in registered Schedule or Match"
}
```

404 - Not Found

```json

{
  "message": "Not Found"
}
```