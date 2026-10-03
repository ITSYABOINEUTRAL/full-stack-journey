# Week 9

Week 9 was split between finishing the **GitHub Finder** app that we
started in Week 8 and beginning a new React project called **School
Hub**.

In GitHub Finder, we added the search feature, separated the API
requests into utility functions, and added a way to clear the search and
return to the initial users. In School Hub, we started building a school
dashboard and set up Tailwind CSS for styling.

## What I Worked On

### 1. Finished GitHub Finder

-   Loaded the initial list of GitHub users with Axios.
-   Added a search form for searching GitHub users.
-   Used the GitHub Search API and encoded the search text in the
    request URL.
-   Added loading-state handling and a spinner.
-   Added error handling around API requests.
-   Passed functions and state values between components using props.
-   Added a Clear button to return to the original list of users.
-   Kept the API request functions in `src/components/Utils.jsx`.

### 2. Started School Hub

School Hub is a React dashboard layout for a school. The first version
includes:

-   A sidebar with Dashboard, Students, and Assignments links.
-   A header showing the Dashboard title and an Admin label.
-   Three summary cards for Students, Teachers, and Assignments.
-   Heroicons for the sidebar icons.
-   Tailwind CSS utility classes for layout, spacing, colours,
    typography, and responsive behaviour.

## Folder Structure

``` text
week-9/
├── find/
│   └── src/
│       ├── App.jsx
│       ├── App.css
│       ├── components/
│       │   ├── Utils.jsx
│       │   ├── layout/
│       │   └── Users/
│       │       ├── SearchBar.jsx
│       │       ├── UserItem.jsx
│       │       └── Users.jsx
│       └── main.jsx
└── school-hub/
    └── src/
        ├── App.jsx
        ├── index.css
        ├── MainContent.jsx
        └── components/
            ├── Cards.jsx
            └── layout/
                ├── Header.jsx
                └── SideBar.jsx
```

## Main Takeaway

This week gave me more practice with React components, props, class
component state, lifecycle methods, asynchronous API requests, and error
handling. Starting School Hub also introduced the Tailwind CSS workflow,
where styling is applied through utility classes directly in JSX.

**Progress note:** School Hub is at the initial dashboard-layout stage
in the files for this week. App routing and any other React concepts
planned for later lessons are not implemented in the current project
files, so I have not documented them as completed topics.
