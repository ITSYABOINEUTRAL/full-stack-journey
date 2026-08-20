# Week 3 - JavaScript

This folder contains the JavaScript work I did during Week 3.

Most of the files here are examples and practice from the lessons. The idea was to build on the JavaScript basics from the previous week and start working with things like arrays, objects, functions, the Math object, and JSON.

## What I Covered

During this week, I worked with:

- Arrays
- Array methods
- Nested arrays
- Concatenating arrays
- The spread operator
- Flattening arrays
- Objects
- Object properties
- Object destructuring
- Array destructuring
- Functions
- Function parameters and return values
- The Math object
- Generating random numbers
- JSON
- Converting objects to JSON
- Converting JSON back to objects

## Arrays

The `arrays.js` file contains examples of creating and working with arrays.

I practiced things such as adding and removing items from an array using methods like:

```javascript
array.push(6);
array.pop();
array.unshift(245);
array.shift();
```

I also worked with methods such as `includes()`, `indexOf()`, `slice()`, and `splice()`.

There are also some earlier examples in the file showing array literals, array constructors, changing values using indexes, and checking the length of an array.

## More Array Practice

The `further-array.js` file goes a little further with arrays.

Some of the things practiced here include nested arrays, concatenating arrays, the spread operator, and flattening arrays.

For example, arrays can be combined using `concat()`:

```javascript
let x = fruits.concat(berries);
```

They can also be combined using the spread operator:

```javascript
let y = [...fruits, ...berries];
```

I also practiced `Array.isArray()` and `Array.from()`.

```javascript
x = Array.isArray("Hello");
x = Array.from("1234566, Hello");
```

## Objects

The `objects.js` file introduces objects and how related information can be grouped together.

For example:

```javascript
const davidTrait = {
    name: "Nwagu David-Isaac Okenwa",
    age: 18,
    favFood: "Rice",
    likesFootball: true,
    height: "6'4ft",
    isUnitedFan: true
};
```

An object can contain different types of values as properties.

I also created another object to practice storing information about another person.

## Object and Array Destructuring

The `further-objects.js` file introduced destructuring.

Object destructuring allows values to be taken directly from an object:

```javascript
const {id, user:{name}} = toDo;
```

I also practiced destructuring arrays:

```javascript
const [david, sharon] = fruits;
```

This makes it possible to assign values from an object or array to variables in a shorter way.

## Functions

The `function.js` file contains examples of functions, parameters, return values, and scope/execution context.

For example:

```javascript
function greet() {
    return "Hello World!";
}
```

I also practiced passing values into a function through parameters:

```javascript
function add(num1, num2) {
    num1 = 5;
    num2 = 6;
    x = num1 + num2;
    return x;
}
```

The function can then be called and its returned value displayed using `console.log()`.

## The Math Object

The `math-object.js` file was used to practice some of the methods available through JavaScript's `Math` object.

Some of the methods I worked with were:

- `Math.sqrt()`
- `Math.abs()`
- `Math.round()`
- `Math.ceil()`
- `Math.floor()`
- `Math.pow()`
- `Math.min()`
- `Math.max()`
- `Math.random()`

For example:

```javascript
let x = Math.sqrt(9);
```

I also practiced generating a random number and using `Math.floor()` with it:

```javascript
let y = Math.floor(Math.random() * 1000000);
```

## JSON

The `json.js` file introduces JSON and how it can be used with JavaScript objects.

I practiced converting a JavaScript object into a JSON string using `JSON.stringify()`:

```javascript
const str = JSON.stringify(post);
```

I then converted the JSON string back into a JavaScript object using `JSON.parse()`:

```javascript
const y = JSON.parse(str);
```

This helped me see the difference between a JavaScript object and a JSON string and how they can be converted between the two formats.

There is also a `jayson.json` file in the folder, which was used while learning about JSON.

## Using `index.html`

The `index.html` file is mainly being used to load the JavaScript files in the browser.

The different lesson files are commented out, and the file I want to test can be uncommented.

For example:

```html
<script src="./js/function.js"></script>
```

This means I can switch between the different JavaScript examples without having to create a separate HTML page for every lesson.

## Files in This Week

```text
week-3/
│
├── index.html
├── README.md
│
└── js/
    ├── arrays.js
    ├── further-array.js
    ├── objects.js
    ├── further-objects.js
    ├── function.js
    ├── math-object.js
    ├── json.js
    └── jayson.json
```

## How to Run the Examples

There is nothing that needs to be installed.

Open `index.html` in a browser and open the browser's developer tools to view the output in the console.

To test a different JavaScript lesson, change the `<script>` tag in `index.html` so that it points to the file I want to run.

## What I Learned

Week 3 built on the JavaScript basics from Week 2. I started working with data in a more useful way by using arrays and objects, and I practiced functions for organising code.

I also got introduced to destructuring, the Math object, and JSON. These topics are important because they are things that will come up a lot more as I continue learning JavaScript and eventually start working with APIs and backend development.

There is still a lot more JavaScript to learn, so this folder only represents what I have covered up to this point in the journey.
