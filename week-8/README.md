# Week 8 – GitHub Finder (React + Vite)

This week focused on building a **GitHub Finder** application using React and Vite. The app fetches a list of GitHub users from the public GitHub API and displays them in a responsive grid.

---

## What Was Covered

### 1. Project Setup with Vite
- Created a new React project using Vite.
- Project structure:
  - `src/main.jsx` – entry point
  - `src/App.jsx` – root component
  - `src/components/` – reusable components
  - `public/` – static assets
- Installed and configured:
  - React 19
  - Axios (for HTTP requests)
  - Font Awesome (icons)
  - ESLint

### 2. Class Components & State
- Built the main `App` component as a **class component**.
- Used `state` to store:
  - `users` – array of GitHub users
  - `loading` – boolean to show/hide the spinner
- Learned how to update state with `this.setState()`.

### 3. Lifecycle Methods
- Used `componentDidMount()` to fetch data when the component first loads.
- Made the method `async` so we can use `await` with Axios.

### 4. Fetching Data with Axios
- Imported Axios and called the GitHub Users API:
  ```js
  const response = await axios.get('https://api.github.com/users')
  ```
- Stored the returned data in state and turned off the loading indicator.

### 5. Functional Components & Props
- Created smaller functional components:
  - `Navbar` – displays the app title and GitHub icon
  - `Users` – receives `users` and `loading` as props
  - `UserItem` – displays a single user card
  - `Spinner` – shows a loading image while data is being fetched
- Practised passing props from parent to child components.

### 6. Conditional Rendering
- In the `Users` component:
  - If `loading` is `true` → show the Spinner
  - Otherwise → map over the users and render `UserItem` components

### 7. Mapping Over Lists
- Used `.map()` to turn the array of users into a list of `UserItem` components.
- Added a unique `key` prop (`user.id`) for each item.

### 8. Styling
- Wrote global CSS in `App.css` with:
  - CSS variables for colours
  - Utility classes (margin, padding, text alignment, etc.)
  - Card, button, and navbar styles
  - CSS Grid layout (`grid-3` / custom grid for user cards)
  - Responsive design with a media query for mobile screens
- Applied classes such as `card`, `text-center`, `round-img`, `btn`, `btn-dark`, `btn-sm`.

### 9. Font Awesome Icons
- Installed the Font Awesome packages.
- Used the GitHub brand icon in the Navbar.

### 10. Component Structure
```
src/
├── App.jsx
├── App.css
├── main.jsx
└── components/
    ├── layout/
    │   ├── Navbar.jsx
    │   └── Spinner.jsx
    └── Users/
        ├── Users.jsx
        └── UserItem.jsx
```

---

## How to Run the Project

```bash
cd find
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

---

## Key Takeaways

| Topic                    | What We Learned                                      |
|--------------------------|------------------------------------------------------|
| Vite + React             | Fast modern setup for React apps                     |
| Class Components         | State + lifecycle methods (`componentDidMount`)      |
| Axios                    | Fetching data from an external API                   |
| Props                    | Passing data from parent to child components         |
| Conditional Rendering    | Showing a spinner while data loads                   |
| Lists & Keys             | Rendering dynamic lists with `.map()`                |
| CSS Grid & Utilities     | Clean, responsive layout                             |
| Font Awesome             | Adding icons to React components                     |

This week’s project is the foundation for building more interactive React applications that talk to real APIs.
