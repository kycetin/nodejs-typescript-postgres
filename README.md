### Steps to run the project:

1. Run `npm i` command
2. Setup `.env` settings like `.env.example` file
3. Run `docker compose up` for run the postgres database
3. Run `npm run dev` command for start the app

### API

**Admin user:**

>     - email: superuser@test.io
>     - password: superpassword

```
POST /api/login
  - Login User
POST /api/users
  - Create User
GET /api/users
  - List Users
GET /api/user/:id
  - Get User Detail
PATCH /api/user/:id
  - Update User
DELETE /api/user/:id
  - Delete User
``` 

### Swagger

Swagger documentation is available after run the project.

```
localhost:${port}/docs
```


### Postman Collection

`Nodejs App.postman_collection.json` file can be use for the API testing.
