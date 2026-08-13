# Week 2 - JavaScript Basics

This folder contains some of the JavaScript files I used during Week 2 while learning the basics of JavaScript.

These files are mainly practice files from class. They are not really separate projects. They were used to go through different JavaScript concepts and see how they work by writing small examples and checking the results in the console.

## What is in this folder?

There are three JavaScript files:

- `data-type.js`
- `type-conversion.js`
- `operators.js`

There is also an `index.html` file that is used to load the JavaScript files.

## Data Types

The `data-type.js` file contains examples of some of the different data types in JavaScript.

Some of the examples include:

- Strings
- Numbers
- Booleans
- Null
- Undefined
- Symbols
- BigInt
- Arrays
- Objects
- Functions

For example:

```javascript
const firstName = "John";
const age = 30;
const isStudent = true;
```

There is also an example of a function and using `typeof` to check the type of the value returned by the function.

The purpose of this file was mainly to get familiar with the different types of values that can be stored and used in JavaScript.

## Type Conversion

The `type-conversion.js` file was used to learn about converting values from one type to another.

Some of the examples covered include:

- Converting a string to a number
- Converting a number to a string
- Converting a string to a decimal number
- Converting a number to a boolean
- Converting a string to a boolean
- Understanding `NaN`

For example, a string containing a number can be converted using `parseInt()`:

```javascript
let amount = "100";
amount = parseInt(amount);
```

The file also shows what happens when JavaScript tries to convert something that isn't a valid number:

```javascript
let amount = "hello";

amount = parseInt(amount);

console.log(amount, typeof amount);
```

This produces `NaN`, which means "Not a Number".

## Operators

The `operators.js` file contains some basic examples of JavaScript operators.

The examples include:

### String Concatenation

Three strings are joined together using the `+` operator:

```javascript
let str1 = "Hello";
let str2 = "World";
let str3 = "!";

let result = str1 + " " + str2 + str3;
console.log(result);
```

It also shows that a string and a number can be joined together:

```javascript
let str = "The answer is: ";
let num = 42;

let result2 = str + num;
console.log(result2);
```

### Exponentiation

The exponentiation operator (`**`) is also demonstrated:

```javascript
let base = 2;
let exponent = 3;

let result3 = base ** exponent;
console.log(result3);
```

This calculates 2 raised to the power of 3.

## HTML File

The `index.html` file is a simple HTML page used to connect the JavaScript files.

Only one JavaScript file is being loaded at a time. The other script tags are commented out so that we can switch between the different lessons when needed.

For example:

```html
<script src="./js/operators.js"></script>
```

If I want to test another file, I can comment out `operators.js` and uncomment the JavaScript file I want to work with.

## Folder Structure

```text
week-2/
│
├── index.html
│
└── js/
    ├── data-type.js
    ├── type-conversion.js
    └── operators.js
```

## How to Run

There isn't anything that needs to be installed for these files.

Open `index.html` in a browser and then open the browser's developer tools to view the output in the console.

The JavaScript files use `console.log()` to display the results.

To test a different lesson, change the `<script>` tag in `index.html` so that it points to the JavaScript file you want to run.

## What I Learned

These files helped me get started with the basic ideas behind JavaScript.

I practiced working with different data types, converting values between types, using operators, and checking results with `console.log()`.

They were mostly small examples, but they helped me understand how JavaScript handles different kinds of values and how the code produces different results.
