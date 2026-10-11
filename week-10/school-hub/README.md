# Week 10 --- School Hub

In Week 10, I continued building **School Hub**, the React dashboard I
started in Week 9. This update added a login and sign-up screen, a user
menu, dashboard charts, and the first helper functions for working with
a JSON Server API.

## What I Worked On

-   Created a login/sign-up screen with controlled form inputs.
-   Used React `useState` to manage the form, current mode, error
    messages, and logged-in user.
-   Added basic form validation for required fields, duplicate emails,
    and password length.
-   Added a profile-avatar button with a dropdown showing the user's
    name, role, and logout option.
-   Added a line chart for student numbers and a pie chart for student
    distribution using Recharts.
-   Created `server/db.json` with demo user records.
-   Added API helper functions to fetch users, find a user by email, and
    create a user using `fetch()`.
-   Continued using Tailwind CSS for the layout and styling.

## Main Files

``` text
week-10/school-hub/
├── server/
│   └── db.json
└── src/
    ├── API.js
    ├── App.jsx
    ├── data.jsx
    ├── components/
    │   ├── Cards.jsx
    │   ├── Charts.jsx
    │   ├── LoginScreen.jsx
    │   ├── MainContent.jsx
    │   ├── UserMenu.jsx
    │   └── layout/
    │       ├── SideBar.jsx
    │       └── TopBar.jsx
    └── index.css
```

## Progress Note

The login screen currently checks the demo users from `data.jsx`. The
API functions and JSON Server data file have been added, but
`LoginScreen.jsx` does not yet use those API functions to create or look
up accounts. The sign-up form validates the input and logs a message
instead of saving a new account.

The charts also use sample data written directly in `Charts.jsx`. This
week's files do not yet show React Router or separate navigable pages.
