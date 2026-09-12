# Week 6

Week 6 focused on **asynchronous JavaScript** and how JavaScript can work with operations that do not finish immediately.

We started with timers and callbacks, then moved into making requests for data using `fetch()` and `XMLHttpRequest`. From there, we learned about Promises and Promise chaining.

There were also several practical projects where I used the things we learned during the week.

## What We Covered

### JavaScript

- `setTimeout()` and `clearTimeout()`
- `setInterval()` and `clearInterval()`
- Callbacks
- Asynchronous operations
- `fetch()`
- Working with JSON responses
- `XMLHttpRequest` / AJAX
- API requests
- Callback Hell
- Promises
- `resolve()` and `reject()`
- `.then()`
- `.catch()`
- `.finally()`
- Promise chaining

## Learning Files

The first part of the Week 6 folder contains the code we used while learning the concepts.

```text
week-6/
├── 01-settimeout-cleartimeout/
├── 01-fetch-basics/
├── 02-setinterval-clearinterval/
├── 03-callbacks/
├── 04-ajax-xhr/
├── 05-joke-generator-challenge/
├── 06-callback-hell/
├── 07-promises/
├── 08-callback-to-promise/
└── 09-promise-chaining/
```

Each folder represents a different part of the learning process.

## Practical Projects

The `projects-i-completed` folder contains projects I worked on using the concepts covered during the week.

```text
projects-i-completed/
├── chuck-joke-generator-start/
├── random-user-generator/
├── shopping-list-start/
└── typicode-todos/
```

### Chuck Joke Generator

This project uses `XMLHttpRequest` to communicate with the Chuck Norris Jokes API.

The project allows me to:

- Get a random joke
- Select a joke category
- Search for a word
- Filter search results by category
- Display the result on the page

This project gave me more practice with API requests, JSON data, DOM manipulation, and events.

### Random User Generator

This project uses `fetch()` to request a random user from the Random User API.

The returned data is then displayed on the page, including information such as:

- Title
- Name
- Email
- Phone
- Location
- Age
- Profile picture

The project also includes a loading spinner while the request is being processed and handles a failed request with an error message.

### Shopping List

The Shopping List project gave me more practice with the DOM and events.

The project allows me to:

- Add items
- Prevent empty items from being added
- Prevent duplicate items
- Remove individual items
- Filter items
- Clear all items

This project also builds on concepts from the previous weeks, especially DOM manipulation and event listeners.

### Typicode Todos

The Typicode Todos project uses the JSONPlaceholder API:

```text
https://jsonplaceholder.typicode.com/todos
```

The current version can:

- Fetch todos from the API
- Display the first five todos
- Add a new todo through a POST request
- Display the newly created todo

The project is **not finished yet**.

This is intentional. Our tutor asked us to complete the project only up to the POSTing a Todo and displaying that newly created Todo and 4 others. After the project has been reviewed, I will either research how to complete the remaining functionality myself or learn how to complete it when those methods are taught later.

So I am keeping the project at its current state rather than researching and adding functionality that we have not covered yet.

## `setTimeout()`

`setTimeout()` allows a function to run after a specified amount of time.

For example:

```javascript
function changeText() {
    document.querySelector('h1').textContent = 'Hello from Callback!';
}

const timerId = setTimeout(changeText, 5000);
```

The function above waits for 5 seconds before changing the heading.

### `clearTimeout()`

A timeout can be cancelled using `clearTimeout()`.

```javascript
clearTimeout(timerId);
```

In the practice code, a button was used to cancel the timer before it completed.

---

## `setInterval()`

`setInterval()` repeatedly runs a function after a specified amount of time.

For example:

```javascript
const intervalId = setInterval(changeRandomColor, 1000);
```

This runs `changeRandomColor()` every second.

### `clearInterval()`

We can stop an interval with:

```javascript
clearInterval(intervalId);
```

The Week 6 practice included starting and stopping an interval that changes the background color randomly.

---

## Callbacks

A callback is a function that is passed to another function so that it can be called later.

For example:

```javascript
function createPosts(post, cb) {
    setTimeout(() => {
        posts.push(post);
        cb();
    }, 2000);
}
```

Here, `cb` is a callback.

When the asynchronous operation finishes, the callback is executed.

The example used this idea to create a post first and then get the posts after the new post had been added.

---

## Asynchronous JavaScript

An asynchronous operation is an operation that can take some time to finish without stopping the rest of the JavaScript from continuing.

Examples we worked with include:

- Timers
- Fetching data
- API requests

This became important throughout Week 6 because requests to APIs do not return their data immediately.

---

## `fetch()`

`fetch()` provides a way to make HTTP requests.

A basic example from the practice files is:

```javascript
fetch('./movies.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => console.log(data));
```

The request gets the `movies.json` file.

The response is then converted from JSON into JavaScript data using:

```javascript
response.json()
```

The resulting data can then be used inside the next `.then()`.

We also used `fetch()` with an external API in the Random User Generator project.

---

## Working With JSON

When data is received from an API, it is often returned as JSON.

For example, with `XMLHttpRequest`, we worked with:

```javascript
const data = JSON.parse(this.responseText);
```

`JSON.parse()` converts a JSON string into a JavaScript value that we can work with.

With `fetch()`, we used:

```javascript
response.json()
```

to handle the JSON response.

---

## XMLHttpRequest / AJAX

Before working with `fetch()`, we practiced making requests using the `XMLHttpRequest` object.

For example:

```javascript
const xml = new XMLHttpRequest();

xml.open('GET', './movies.json');

xml.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.responseText);
    }
};

xml.send();
```

The request is created with:

```javascript
new XMLHttpRequest()
```

The request type and location are specified with:

```javascript
xml.open('GET', './movies.json');
```

The request is sent using:

```javascript
xml.send();
```

---

## `readyState`

While working with `XMLHttpRequest`, we looked at the different `readyState` values.

```text
0 → Request not initialized
1 → Server connection established
2 → Request received
3 → Processing request
4 → Request finished and response is ready
```

We mainly checked for:

```javascript
this.readyState === 4
```

because this means the request has finished and the response is ready.

We also checked the HTTP status:

```javascript
this.status === 200
```

to confirm a successful request.

---

## Making API Requests

We used `XMLHttpRequest` to request data from external APIs.

For example, the practice code requested GitHub repository data:

```javascript
xml.open('GET', 'https://api.github.com/users/itsyaboineutral/repos');
```

After receiving the response, the JSON was parsed and the repositories were displayed on the page.

This was one of the first times the code was working with data from an actual external API rather than a local JSON file.

---

# Joke Generator Challenge

The Week 6 materials included a challenge to build a Chuck Norris Joke Generator.

The challenge instructions required:

1. Add an event listener to the button.
2. Create a function that makes a request to the Chuck Norris API.
3. Use `XMLHttpRequest`.
4. Get the returned `responseText`.
5. Parse the JSON.
6. Get the joke from the response.
7. Display the joke on the page.

The project was then extended in my completed version to include categories and search functionality.

---

# Callback Hell

We also reached the idea of **Callback Hell**.

When several asynchronous operations depend on one another, using callbacks repeatedly can make code difficult to read and maintain.

The Week 6 folder contains a specific `callback-hell` section as part of this progression.

This helped explain one of the reasons other approaches, such as Promises, are useful for handling asynchronous code.

---

# Promises

A Promise represents the eventual result of an asynchronous operation.

A Promise can eventually be:

- Resolved
- Rejected

A simple example:

```javascript
const getUser = new Promise((resolve, reject) => {
    let error = false;

    if (!error) {
        resolve({
            name: 'Victor',
            occupation: 'Mechatronics Engineer'
        });
    } else {
        reject('Something went wrong');
    }
});
```

If everything works, `resolve()` is used.

If something goes wrong, `reject()` is used.

---

## Consuming a Promise

We can handle the result of a Promise with `.then()`.

```javascript
getUser
    .then((user) => console.log(user));
```

If the Promise is rejected, `.catch()` can handle the error:

```javascript
getUser
    .then((user) => console.log(user))
    .catch((error) => console.log('Something went wrong!'));
```

---

## `.finally()`

`.finally()` runs after the Promise has either been resolved or rejected.

For example:

```javascript
getUser
    .then((user) => console.log(user))
    .catch((error) => console.log(error))
    .finally(() => console.log('The promise has either been resolved or rejected'));
```

The important thing here is that `finally()` does not depend on whether the Promise succeeded or failed.

---

# Converting a Callback to a Promise

We also practiced changing a callback-based function into one that returns a Promise.

For example:

```javascript
function createPost(post) {
    return new Promise((resolve, reject) => {
        let error = false;

        if (!error) {
            setTimeout(() => {
                posts.push(post);
                resolve();
            }, 2000);
        } else {
            reject('Something went wrong!');
        }
    });
}
```

Instead of passing a callback into `createPost()`, the function returns a Promise.

We can then use:

```javascript
createPost(post)
    .then(getPosts)
    .catch(() => console.log('Something went wrong!'));
```

This makes the sequence of asynchronous operations easier to follow.

---

# Promise Chaining

Promises can be chained together using multiple `.then()` calls.

For example:

```javascript
promise
    .then((user) => {
        console.log(user);
        return user.name;
    })
    .then((name) => {
        console.log(name);
        return name.length;
    })
    .then((nameLength) => {
        console.log(nameLength);
    })
    .catch((error) => console.log(error));
```

Each `.then()` can receive the value returned by the previous `.then()`.

In this example:

```text
user object
     ↓
user.name
     ↓
name.length
```

This showed how data can be passed from one asynchronous step to another.

---

# Week 6 Progress

The main progression through the week was:

```text
Asynchronous JavaScript
        │
        ├── setTimeout
        │   └── clearTimeout
        │
        ├── setInterval
        │   └── clearInterval
        │
        ├── Callbacks
        │
        ├── Fetch
        │   └── JSON responses
        │
        ├── XMLHttpRequest / AJAX
        │   └── API requests
        │
        ├── Callback Hell
        │
        └── Promises
            ├── resolve
            ├── reject
            ├── then
            ├── catch
            ├── finally
            └── Promise chaining
```

# What I Learned This Week

Week 6 helped me understand how JavaScript handles things that do not happen immediately.

I learned how to:

- Delay code using `setTimeout()`
- Cancel a timeout using `clearTimeout()`
- Repeat code using `setInterval()`
- Stop an interval using `clearInterval()`
- Use callbacks with asynchronous operations
- Fetch data from local files
- Fetch data from external APIs
- Work with JSON responses
- Make requests with `XMLHttpRequest`
- Understand `readyState` and HTTP status codes
- Build projects that use API data
- Understand the problem of Callback Hell
- Create and consume Promises
- Handle successful and failed Promises
- Use `.then()`, `.catch()`, and `.finally()`
- Chain multiple `.then()` calls together
- Convert a callback-based function into a Promise-based function

The projects also gave me an opportunity to use these concepts rather than only writing small examples.

## Current State of the Typicode Todos Project

The **Typicode Todos** project is intentionally incomplete at this stage.

I am keeping it at the point reached during the course because the assignment is to complete it using the methods we have learned so far.

I will ask my tutor to review the current implementation first. After that, I will either research how to complete the remaining functionality or learn how to complete it when the relevant methods are taught later.

For that reason, I am **not adding solutions from outside research yet**. The incomplete state is part of the current learning process.

> **Note:** This README documents Week 6 based on the work and projects in this week's folder. Topics that have not been taught yet are intentionally not included.
