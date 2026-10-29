# Week 13 --- Express Routes, Controllers, and Postman

In Week 13, I continued learning backend development with Node.js and
Express. The project contains student endpoints for retrieving all
students, retrieving one student by ID, and creating a student.

We also learnt how to use **Postman** to test API endpoints and routes.
We practised creating collections, arranging requests inside
collections, and organizing requests in a Postman workspace.

## What I Worked On

-   Set up an Express application and HTTP server.
-   Used middleware such as `express.json()` and Morgan.
-   Connected the student routes to the application under
    `/api/students`.
-   Separated route definitions from controller functions.
-   Created endpoints to get all students, get a student by ID, and
    create a student.
-   Returned JSON responses with status codes.
-   Read a custom `x-api-key` request header in the GET controller
    functions.
-   Used Postman to test endpoints and routes, create collections, and
    organize requests in a workspace.

## Project Structure

``` text
week-13/
└── backend/
    ├── app/
    │   └── app.js
    ├── controllers/
    │   └── student.controllers.js
    ├── middlewares/
    ├── models/
    │   └── AdminModel.js
    ├── routes/
    │   └── student.routes.js
    ├── utils/
    ├── package.json
    └── server.js
```

## Student Routes

  Method   Route                 Purpose
  -------- --------------------- --------------------------
  GET      `/api/students`       Retrieve all students
  GET      `/api/students/:id`   Retrieve a student by ID
  POST     `/api/students`       Create a student

The student records in this week's controller are stored in an in-memory
array, so they are sample data and are reset when the server restarts.

## Postman Practice

In Postman, we learnt to test our endpoints and routes, create
collections to group related requests, and sort and arrange requests
within collections and a workspace. The Postman files were not included
in the shared folder, so this section reflects the lesson details
provided rather than a specific exported Postman collection.

## Progress Note

This week's code focuses on the basics of Express routing, controllers,
middleware, request headers, and JSON responses. The `AdminModel.js`
file is currently empty, and the student data is not connected to a
database yet. We installed PostgresSQL this week and are expected to start using it from week 14.
