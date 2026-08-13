# Week 1

This folder contains some of the work I did during Week 1 while learning HTML and CSS.

There are two main things in here:

- A World Cup MVP webpage that I made myself using the things we had learned.
- A login form that was given to us as an assignment with some specific CSS requirements.

## World Cup MVP

For the World Cup MVP page, I wanted to use the HTML and CSS knowledge we had learned in class to make an actual webpage.

I used different HTML elements to put the page together, including headings, paragraphs, images, a table, a form, and links. I then used CSS to style everything and make the page look more interesting.

Some of the things I practiced while making it were:

- HTML page structure
- Tables
- Forms
- Images and links
- CSS Grid
- Flexbox
- Gradients
- Box shadows
- Border radius
- Hover effects
- Transitions
- Animations
- Media queries
- Responsive design
- Pseudo-elements

The main idea behind this project was to take what we had learned and see if I could put the different concepts together to create a complete webpage.

## Login Form Assignment

The login form was a separate assignment. We were given a number of things that the form had to do using CSS.

The requirements were:

- The form should be in the center of the page.
- It should stay centered on different screen sizes.
- The inputs should not have a visible border normally.
- When an input is clicked, its focus border should be blue.
- The inputs should have rounded corners.
- The form/wrapper should also have rounded corners.
- The form/wrapper should have a box shadow.
- The button should have an animation.

### Centering the form

I used Flexbox on the `body` to center the form both vertically and horizontally:

```css
body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
```

The `100vh` makes the body fill the screen, while `justify-content` and `align-items` handle the centering.

### Input focus

The inputs start without a border:

```css
input[type="text"],
input[type="password"] {
    border: none;
}
```

When the user clicks on an input, the `:focus` selector adds the blue border:

```css
input[type="text"]:focus,
input[type="password"]:focus {
    border: 2px dashed #3b82f6;
}
```

### Rounded corners and box shadow

The wrapper and inputs both use `border-radius`:

```css
#wrapper {
    border-radius: 5px;
}

input[type="text"],
input[type="password"] {
    border-radius: 5px;
}
```

The wrapper also has a box shadow:

```css
#wrapper {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

### Button animation

The button uses `transition` and `transform` to make it move when the user interacts with it.

For example, when the mouse is over the button:

```css
#btn:hover {
    transform: translateY(-3px) scale(1.02);
}
```

And when it is clicked:

```css
#btn:active {
    transform: translateY(1px) scale(0.98);
}
```

There is also a small sliding effect using the button's `::after` pseudo-element.

## Files

```text
week-1/
│
├── index.html
├── style.css
├── fifa.webp
├── README.md
│
└── semantic-tag/
    ├── login-form.html
    └── style.css
```

- `index.html` - World Cup MVP webpage
- `style.css` - Styles for the World Cup MVP webpage
- `fifa.webp` - Image used in the project
- `semantic-tag/login-form.html` - Login form assignment
- `semantic-tag/style.css` - Styles for the login form
- `README.md` - Information about the work in this folder

## How to Open the Projects

There is no setup or installation needed.

For the World Cup MVP page, open `index.html` in a browser.

For the login form, open `semantic-tag/login-form.html` in a browser.

## What I Learned

The World Cup MVP project gave me a chance to actually use the things we had learned instead of just practicing them separately. It helped me understand how different HTML elements and CSS properties can work together to make a full webpage.

The login form assignment helped me understand Flexbox better, especially how it can be used to center something on a page. I also got more practice with `:focus`, `:hover`, `:active`, `box-shadow`, `border-radius`, and CSS transitions.

These projects helped me get more comfortable with the basics of HTML and CSS and gave me a better idea of how to use them when building a webpage from scratch.
