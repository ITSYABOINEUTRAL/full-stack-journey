# Week 14 --- Authentication, Authorization, TypeORM, and PostgreSQL

## Overview

Week 14 focused on connecting the School Hub backend to a real
PostgreSQL database and introducing authentication and authorization.

We worked with **Express**, **TypeORM**, and **PostgreSQL**. We learned
how entities describe the structure of database records, how TypeORM
communicates with the database, and how to implement user registration
and login. We were also introduced to **JSON Web Tokens (JWT)** as an
authentication strategy.

Another important part of the week was learning how to protect
passwords. Instead of storing a user's plain-text password, the backend
hashes it with `bcryptjs` before saving it.

## What we covered

-   Authentication and authorization concepts.
-   Creating a TypeORM entity to define the `users` table.
-   Connecting an Express backend to PostgreSQL (`school_hub_db`) with
    TypeORM.
-   Testing the database connection with `test-db.js`.
-   Configuring the application's TypeORM connection in
    `config/data-source.js`.
-   Registering users and checking login credentials.
-   Hashing passwords with `bcryptjs` and comparing submitted passwords
    with stored hashes.
-   Generating and verifying JWTs.
-   Returning public user information without exposing the password.
-   Using a JWT secret stored in environment variables.

## Backend structure

``` text
backend/
├── app/
│   └── app.js
├── config/
│   └── data-source.js
├── controllers/
│   ├── auth.controllers.js
│   └── student.controllers.js
├── entities/
│   ├── User.js
│   └── admin.entity.js
├── routes/
│   ├── auth.routes.js
│   └── student.routes.js
├── utils/
│   └── jwt.js
├── .env
├── .gitignore
├── package.json
├── server.js
└── test-db.js
```

## Important files

  -----------------------------------------------------------------------
  File                                Purpose
  ----------------------------------- -----------------------------------
  `test-db.js`                        Makes a separate connection to
                                      PostgreSQL and runs a simple query
                                      to check database communication.

  `config/data-source.js`             Defines the TypeORM `DataSource`
                                      used by the application.

  `entities/User.js`                  Defines the `User` entity and the
                                      columns of the `users` table.

  `utils/jwt.js`                      Contains functions to sign JWTs,
                                      verify JWTs, and remove the
                                      password from public user data.

  `controllers/auth.controllers.js`   Handles user registration, login,
                                      and the current-user response.

  `routes/auth.routes.js`             Connects the authentication
                                      endpoints to their controller
                                      functions.

  `server.js`                         Initializes the database connection
                                      before starting the Express server.

  `app/app.js`                        Configures Express and mounts the
                                      API routes.
  -----------------------------------------------------------------------

## Authentication endpoints in the project

The authentication router is mounted at `/api/v1/auth`.

  Method   Full path           Purpose in the controller
  -------- ------------------- ---------------------------
  `POST`   `/api/v1/auth/`     Register a user.
  `GET`    `/api/v1/auth/`     Log in a user.
  `GET`    `/api/v1/auth/me`   Return `req.user`.

The route methods above reflect the supplied code exactly. In
particular, login is currently registered as a `GET` route in this
project.

## Notes about the current project state

-   The `User` entity includes `fullName`, `email`, `password`, `role`,
    `isActive`, `createdAt`, and `updatedAt`.
-   Passwords are hashed with `bcryptjs` before being saved. The entity
    also marks the password column with `select: false`, so normal
    TypeORM queries do not select it by default.
-   Registration assigns the `student` role on the server rather than
    accepting a role from the public registration request.
-   JWT signing and verification helpers are present in `utils/jwt.js`.
-   The `/me` controller returns `req.user`, but the supplied routes do
    not include middleware that verifies a bearer token and sets
    `req.user`. The verification helper is not wired into the route in
    the supplied files.
-   The student records are still stored in an in-memory array in
    `student.controllers.js`; the archive does not show student records
    being persisted through a TypeORM entity.
-   `editStudentById` and `deleteStudentById` are declared but empty.
-   `admin.entity.js` is empty.
-   `synchronize: true` and SQL logging are enabled in the TypeORM
    configuration. The code itself comments that synchronization is for
    development only.

## Running the backend

From the `backend` directory, install the dependencies and run the
development script:

``` bash
npm install
npm run dev
```

The development script uses Node's `--watch` and `--env-file=.env`
options. The `.env` file must contain the database connection settings
and JWT configuration expected by the code. Do not commit real
credentials or secrets to GitHub.

To test database connectivity separately, the comment at the top of
`test-db.js` gives this command:

``` bash
node --env-file=.env test-db.js
```
