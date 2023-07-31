# User CRUD APP

A user RESTful CRUD application built with Node.js, TypeScript, and PostgreSQL.


## Description

This project is a user RESTful CRUD application implemented with Node.js, TypeScript, and PostgreSQL. It allows users to perform CRUD operations on user data, including creating, reading, updating, and deleting user information.

## Installation

To run the application locally, follow these steps:

1. Clone the repository:
   
   ```sh
   git clone https://github.com/kycetin/nodejs-typescript-postgres.git
   cd nodejs-typescript-postgres
   ```
   

2. Install dependencies:

   ```sh
   npm install
   ```
   

## Configuration

1. Set up environment variables:
   - Create a `.env` file in the project root directory.
   - Use the `.env.example` file as a reference to set the required configuration values (e.g., database connection settings).

## Usage

To start the application, run the following command:

```sh
npm run dev
```


The server will start, and you can access the application at `http://localhost:your-port`.

## API Endpoints

The API provides the following endpoints for user management:

- *POST /api/login*
  - Login User

- *POST /api/users*
  - Create User

- *GET /api/users*
  - List Users

- *GET /api/user/:id*
  - Get User Detail

- *PATCH /api/user/:id*
  - Update User

- *DELETE /api/user/:id*
  - Delete User

## Swagger Documentation

The API documentation is available via Swagger. After running the project, access the documentation at the following URL:

```
http://localhost:your-port/docs
```


## Postman Collection

For API testing, a Postman collection file named `Nodejs_App.postman_collection.json` is provided. Import this file into Postman to interact with the API.
