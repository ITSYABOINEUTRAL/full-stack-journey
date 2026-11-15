
# Week 15 — Connecting the Frontend and Backend

## Overview

This week, we focused on connecting the School Hub frontend to its backend. The goal was to make the frontend communicate with the Express API and use real data from the PostgreSQL database, instead of relying entirely on frontend sample data.

We connected the sign-up and login forms to the backend, handled the responses from the API, and displayed the authenticated user's information on the dashboard. We also hosted the frontend on Cloudflare.

## What We Worked On

### Frontend

- Created `src/api.js` to organize API requests in one place.
- Connected the sign-up form to the backend registration endpoint.
- Connected the login form to the backend login endpoint.
- Added an email-check request to prevent registration with an existing email.
- Added loading and error handling while requests are being processed.
- Saved the authentication token and user information in `localStorage`.
- Updated the application to restore the saved login state after refreshing the page.
- Updated the user profile menu to display the authenticated user's name, role, and avatar.

### Backend

- Installed and configured CORS to allow requests from the hosted frontend.
- Added an endpoint for checking whether an email is already registered.
- Organized the authentication routes into separate sign-up, login, and email-check endpoints.
- Updated the registration process to assign a default avatar to new student accounts.
- Added an `avatar` column to the User entity.
- Continued using TypeORM and PostgreSQL to create and retrieve user records.
- Returned a JWT and public user information after successful registration or login.

### Hosting

The School Hub frontend was hosted on Cloudflare.

The frontend and backend are separate applications, so the backend must allow requests from the frontend's hosted origin. CORS was configured for the Cloudflare frontend address.

## Authentication API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/v1/auth/check-email` | Checks whether an email is already registered. |
| POST | `/api/v1/auth/signup` | Creates a new user account. |
| POST | `/api/v1/auth/login` | Authenticates an existing user. |
| GET | `/api/v1/auth/me` | Returns the authenticated user from `req.user`. |

## Project Structure

```text
week-15/
├── school-hub/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   ├── Cards.jsx
│   │   │   ├── Charts.jsx
│   │   │   ├── LoginScreen.jsx
│   │   │   ├── MainContent.jsx
│   │   │   ├── StudentTable.jsx
│   │   │   └── UserMenu.jsx
│   │   ├── api.js
│   │   ├── App.jsx
│   │   ├── data.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── school-hub-backend/
    ├── app/
    │   └── app.js
    ├── config/
    │   └── data-source.js
    ├── controllers/
    │   ├── auth.controllers.js
    │   └── student.controllers.js
    ├── entities/
    │   ├── User.js
    │   └── admin.entity.js
    ├── middlewares/
    ├── routes/
    │   ├── auth.routes.js
    │   └── student.routes.js
    ├── utils/
    │   └── jwt.js
    ├── server.js
    └── test-db.js
```

## Running the Project Locally

### Backend

1. Open a terminal inside `school-hub-backend`.
2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file with the required PostgreSQL connection details and JWT secret.
4. Start the backend:

   ```bash
   npm run dev
   ```

### Frontend

1. Open another terminal inside `school-hub`.
2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

## Current Project Status

- User registration and login now communicate with the backend.
- New user records are saved in PostgreSQL through TypeORM.
- Passwords are hashed with bcrypt before being stored.
- The frontend receives a JWT and public user information from the backend.
- Authentication data is saved in `localStorage`, allowing the login state to survive a page refresh.
- The user profile displays information returned by the backend.

**Note:** In Week 15 the student table, summary cards, and charts still use frontend sample data. The student controller also still uses an in-memory array. These sections have not yet been connected to PostgreSQL in this version.

The frontend API helper in the archive still uses `http://localhost:3000/api/v1`. A deployed frontend needs the publicly accessible backend URL instead of `localhost` to communicate with a remotely hosted backend.
