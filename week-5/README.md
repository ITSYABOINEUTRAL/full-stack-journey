# Week 5

Week 5 focused on getting more comfortable with the **DOM** and working with web pages through JavaScript. We also started working with **events** and responsive design with CSS.

Alongside the lessons, we worked on practical files and were given a responsive navigation bar assignment to complete and submit on **31st August 2026**.

## What We Covered

### JavaScript
- Introduction to the DOM
- Selecting elements from the page
- Traversing the DOM
  - `children`
  - `firstElementChild`
  - `parentElement`
  - `previousElementSibling`
  - `childNodes`
- Reading and changing element content
  - `innerText`
  - `textContent`
- Working with element properties
  - `className`
  - `nodeName`
  - `outerHTML`
- Changing styles with JavaScript
- Introduction to JavaScript events

### CSS
The assignment also gave us practical experience with responsive CSS, including:
- Flexbox for navbar layout
- Media queries
- Responsive sizing with `clamp()`
- Hover effects
- Spacing and alignment
- Responsive layouts for desktop, tablet, and mobile screens

## Assignment 1 — Responsive Navigation Bar

The main assignment for the week was to build a **responsive navigation bar using only HTML5 and CSS3**.

The assignment was given on Friday and was to be submitted on **Monday, 31st August 2026**.

### Objective

Create a fully responsive navigation bar that looks good on both desktop and mobile devices and automatically adapts to different screen sizes.

### Technologies Allowed

Only:

- HTML5
- CSS3

The assignment specifically prohibited:
- Bootstrap
- Tailwind CSS
- JavaScript
- Any other CSS framework or library

### Requirements

The navigation bar needed to include:

- A logo or brand name
- At least four navigation links:
  - Home
  - About
  - Services
  - Contact
- A call-to-action button such as:
  - Get Started
  - Sign Up
  - Login
  - Join Us
- Responsive behavior
- Hover effects on navigation links
- Proper spacing and alignment
- A layout that does not overflow or break on mobile

### Required Screen Sizes

The design was expected to work properly at:

| Device | Width |
| --- | ---: |
| Desktop | 1200px |
| Tablet | 768px |
| Mobile | 375px |

### Design Challenge

We were allowed to create our own visual design rather than copying a tutorial.

This included deciding:
- Navbar colors
- Font
- Logo style
- Button design
- Hover effects
- Spacing
- Border radius
- Background
- Overall visual style

## My Assignment

For my implementation, I created an **Arcana-themed responsive navigation bar**.

The page uses:
- The **Poppins** font
- A black navigation bar
- An Arcana logo/brand
- Home, About, Services, and Contact links
- An **“Unlock Your Style”** call-to-action button
- Hover effects on the navigation links and button
- A responsive hero section

The navigation layout uses Flexbox on larger screens and changes at a responsive breakpoint for smaller screens.

### Assignment Files

```text
week-5/
├── assignment.html
└── assignment.css
```

### `assignment.html`

The HTML contains the structure of the page, including:
- The navigation bar
- Logo
- Navigation links
- Call-to-action button
- Hero section

### `assignment.css`

The CSS controls:
- Page reset
- Typography
- Navbar layout
- Spacing
- Logo styling
- Link hover effects
- Button styling
- Hero section
- Responsive behavior through a media query
- Responsive text sizing with `clamp()`

## DOM Practice

We also practiced moving around the DOM instead of only selecting one element and changing it.

For example, we worked with relationships between elements:

```javascript
const parent = document.querySelector('.parent');

console.log(parent.children);
console.log(parent.firstElementChild);
console.log(parent.parentElement);
```

We also looked at siblings:

```javascript
const child = document.querySelector('.child:nth-child(2)');

console.log(child.previousElementSibling);
```

Another part of the practice involved looking at the nodes inside an element:

```javascript
console.log(parent.childNodes);
console.log(parent.textContent);
console.log(parent.nodeName);
console.log(parent.outerHTML);
```

These exercises helped me understand that the DOM is structured like a tree, where elements have parents, children, and siblings.

## Changing Content and Styles

We practiced changing elements after selecting them.

For example:

```javascript
const child = document.querySelector('.child');

child.innerText = 'New Content';
child.style.color = 'red';
```

We also looked at properties such as:

```javascript
child.className;
child.nodeName;
```

This showed how JavaScript can interact with and modify HTML elements through the DOM.

## Week 5 Files

The week contains the following main learning/practice areas:

```text
week-5/
├── js/
│   ├── dom.html
│   ├── events.js
│   └── script.js
│
├── 05-event-keycode-project/
│   └── event-keycodes/
│
├── 08-shopping-list-project/
│   └── shopping-list-start/
│
├── assignment.html
├── assignment.css
└── index.html
```

The project folders contain practical work related to the JavaScript lessons, while `assignment.html` and `assignment.css` are the files for the responsive navigation bar assignment.

## What I Learned This Week

This week helped me understand how JavaScript can interact with an actual HTML page through the DOM.

I learned how to:
- Select elements
- Move between parents, children, and siblings
- Read element information
- Change text and styles
- Start working with events
- Build responsive layouts with CSS
- Use media queries to change a layout at different screen sizes
- Use Flexbox to arrange navbar elements
- Add hover effects
- Think about how a design behaves on desktop, tablet, and mobile

The responsive navbar assignment was also useful because it required me to make my own design decisions instead of simply following a tutorial.

> **Note:** These notes represent what was covered up to Week 5. Topics that have not been taught yet are intentionally not included here.
