# Week 7

This week continued from asynchronous JavaScript and focused on working
with asynchronous code using `async` / `await` and handling errors.

The main things covered were Fetch API error handling, `async` /
`await`, `try...catch`, handling errors in asynchronous functions, and
working with multiple Promises.

## What I Learned

-   Handling errors with the Fetch API
-   Checking `response.ok`
-   Throwing an error with `throw new Error()`
-   Using `async` functions
-   Using `await` with Promises and `fetch()`
-   Using `try...catch` to handle errors
-   Throwing custom errors from functions
-   Handling errors in `async` / `await` code
-   Working with multiple asynchronous requests

## Week 7 Folders

``` text
week-7/
├── 05-fetch-error-handling/
├── 06-async-await/
├── 07-try-catch/
├── 08-async-await-error-handling/
└── 09-multiple-promises-async-await/
```

## Projects / Practice

### Fetch Error Handling

Practiced how Fetch handles network errors and how to check whether a
response was successful using `response.ok`.

There is also a Random User Generator that uses `fetch()` to get a
random user and displays the user's information. It also shows a loading
spinner while the request is running.

### Async & Await

Practiced using `async` functions and `await` instead of handling a
Promise with `.then()`.

The example also uses `fetch()` and `response.json()` to get users from
JSONPlaceholder.

### Try...Catch

Practiced catching JavaScript errors with `try...catch` and creating
custom errors with `throw new Error()`.

### Async/Await Error Handling

Combined `async` / `await` with `try...catch` to handle errors from an
asynchronous `fetch()` request.

### Multiple Promises

Worked with multiple JSON files (`movies.json`, `actors.json`, and
`directors.json`) and looked at how multiple asynchronous operations can
be handled with Promises and `async` / `await`.

The current code in this folder is kept as it was during the lesson,
including the incomplete/broken `getData()` implementation.

## Progress

Week 7 builds directly on the asynchronous JavaScript concepts from Week
6. The focus this week was making asynchronous code easier to read with
`async` / `await` and learning how to deal with errors when something
goes wrong.
