# Week 11 & 12 - School Hub (React + API work)

These two weeks were about making School Hub actually talk to a server.
Up to Week 10 the login screen only checked hard-coded demo users from
`data.jsx`. Now the sign-up and login forms send real requests to a
JSON Server, and I also built a small Express backend from scratch to
learn how those routes work on the other side.

There are two projects in this folder:

1. **school-hub** - the React dashboard (continued from Week 9/10)
2. **school-hub-backend** - a small Express API I wrote to practice CRUD

---

## Project 1: School Hub (React + JSON Server)

Same Vite + React + Tailwind project as before. The big change this
week is that the login/sign-up screen now uses the API functions in
`src/api.js` instead of the local demo list.

### What changed since Week 10

- **Login and sign-up now hit the JSON Server.** `LoginScreen.jsx`
  uses `findUserByEmail()` to check if an account exists and
  `createUser()` to save new sign-ups to `server/db.json`.
- **Added `useEffect` for data fetching.** When the login screen loads,
  it fetches the user list once to show a "server online / offline"
  status and lists the demo accounts on the login tab.
- **Loading and error states.** The submit button shows "Please wait..."
  while a request is in flight (`busy` state), and the form shows
  "Can't reach the server. Is it running?" if the server is down.
- **`document.title` updates** depending on whether you're on the
  login or sign-up tab (second `useEffect`).
- **Charts got a big upgrade.** The line chart is now an `AreaChart`
  with an SVG gradient fill, custom tooltip, and a growth percentage
  badge calculated from the data. The pie chart is a donut with
  rounded corners, percentage labels, a custom tooltip and a custom
  legend.
- **Added a students table** (`StudentTable.jsx`) that lists the demo
  students with their class level and score, with colored role/score
  badges.
- Demo accounts live in both `src/data.jsx` (used as fallback/sample
  data) and `server/db.json` (what the API actually reads/writes).

### API helper functions (src/api.js)

Three small functions built around `fetch()`:

- `getUsers()` - GET all accounts
- `findUserByEmail(email)` - GET `/users?email=...`, returns the first
  match or `null`
- `createUser(newUser)` - POST a new account, returns the saved record
  with its generated id

### How to run it

You need two terminals:

```bash
cd school-hub
npm install
npm run server     # starts json-server on http://localhost:3000
npm run dev        # starts vite (usually http://localhost:5173)
```

The login tab shows the demo accounts and passwords when the server is
reachable (admin123 / teacher123 / student123).

### One thing to watch

The Express backend project below *also* uses port 3000, so don't run
both servers at the same time - whichever starts second will fail.

---

## Project 2: school-hub-backend (Express CRUD practice)

A standalone Express app to learn how REST routes work. It keeps the
students in a plain in-memory array (no database) and supports the
full CRUD set:

| Method | Route            | What it does                          |
| ------ | ---------------- | ------------------------------------- |
| GET    | `/students`      | return the whole list                 |
| GET    | `/students/:id`  | return one student (404 if missing)   |
| POST   | `/students`      | add a student (201 + the new record)  |
| PUT    | `/students/:id`  | update a student (404 if missing)     |
| DELETE | `/students/:id`  | remove a student (204, no body)       |

Things this file taught me / practices:

- `app.use(express.json())` so Express can read JSON request bodies
- Route parameters with `req.params` (converted with `Number()`)
- Proper status codes: `201` for created, `404` for not found,
  `204` for a successful delete with no content
- `Object.assign()` for merging updates into an existing record
- `node --watch` for auto-restart during development

### How to run it

```bash
cd school-hub-backend
npm install
npm run dev        # node --watch index.js, listens on port 3000
```

Test it with any API client (or the browser for the GETs):

```
GET    http://localhost:3000/students
POST   http://localhost:3000/students     {"name": "...", "className": "..."}
PUT    http://localhost:3000/students/1   {"className": "JSS3"}
DELETE http://localhost:3000/students/2
```

## Folder structure

```
week-11&12/
|
├── school-hub/                  # React dashboard
│   ├── server/
│   │   └── db.json              # JSON Server data (users)
│   ├── src/
│   │   ├── api.js               # fetch helpers (get/find/create user)
│   │   ├── App.jsx              # shows LoginScreen or the dashboard
│   │   ├── data.jsx             # demo users, students, role badge styles
│   │   └── components/
│   │       ├── LoginScreen.jsx  # login/sign-up, now talks to the API
│   │       ├── Cards.jsx        # stat cards
│   │       ├── Charts.jsx       # AreaChart + donut PieChart (recharts)
│   │       ├── StudentTable.jsx # students table
│   │       ├── UserMenu.jsx     # avatar dropdown + logout
│   │       ├── MainContent.jsx
│   │       └── layout/
│   │           ├── SideBar.jsx
│   │           └── TopBar.jsx
│   └── index.html, vite.config.js, package.json ...
|
└── school-hub-backend/          # Express CRUD practice
    ├── index.js
    └── package.json
```

## What I learned in Weeks 11 & 12

- `useEffect` for fetching data when a component mounts
- async/await with `fetch()`, and handling errors with try/catch/finally
- JSON Server as a quick fake REST API for development
- Wiring a React form up to real GET/POST requests
- Thinking about UI states: loading, online/offline, busy
- Recharts customization (gradients, custom tooltips and legends)
- Express basics: routes, `req.params`, `req.body`, status codes
- Writing a full CRUD API by hand

## Known issues / next steps

- `Cards.jsx` has a duplicated "Assignments" card (the 4th one should
  probably be something else - forgot to change it)
- Nothing persists user sessions - refreshing the page logs you out
- The Express backend and json-server both want port 3000
- The sidebar links don't navigate anywhere yet (no router)
- Passwords are stored and compared in plain text - fine for class,
  obviously not for real apps
