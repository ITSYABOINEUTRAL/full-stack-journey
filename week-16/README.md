# Week 16 — Email Verification and OTP Registration

## Overview

This week, we continued working on the School Hub project, focusing on restructuring the backend registration process and integrating email verification using OTP (One-Time Password).

We learned about SMTP and how it can be used to send emails from our applications. We implemented OTP generation, persistence, email delivery, verification, and the ability to resend verification codes.

The frontend was also updated to accommodate the new registration process, including the creation of an OTP verification form.

## What We Worked On

### Backend

- Restructured the authentication and registration logic.
- Created a separate `Registration` entity for pending registrations.
- Implemented OTP generation using Node.js `crypto`.
- Persisted OTP information in PostgreSQL using TypeORM and JSONB.
- Integrated Nodemailer for email delivery through Gmail SMTP.
- Implemented OTP verification and expiration.
- Added a resend OTP endpoint.
- Updated the registration process to create a user only after successful OTP verification.
- Continued using bcrypt for password hashing and JWT for authentication.

### Frontend

- Updated the signup process to work with the new backend registration flow.
- Created an OTP verification form.
- Added OTP input validation for six-digit codes.
- Implemented resend-code functionality with a countdown.
- Added loading states, error messages, and verification feedback.
- Updated the authentication flow so successful verification logs the user into the application.

## Registration Flow

1. The user enters their full name, email, and password.
2. The frontend sends the information to the backend.
3. The backend checks whether the email already belongs to an existing user.
4. A password hash and OTP are generated.
5. The pending registration and OTP metadata are saved to the database.
6. The OTP is sent to the user's email.
7. The user enters the OTP on the frontend.
8. The backend verifies the OTP and checks its expiration.
9. If verification succeeds, the user is created.
10. A JWT and public user information are returned, and the user enters the dashboard.

## Technologies and Concepts

- Node.js
- Express.js
- React
- PostgreSQL
- TypeORM
- Nodemailer
- SMTP
- `crypto`
- OTP verification
- JSONB
- bcrypt
- JWT
- React state and effects
- API integration

## Important Files

### Frontend

- `src/api.js` — API requests, including signup, OTP verification, and resend OTP.
- `src/components/SignupForm.jsx` — Signup form and initial registration request.
- `src/components/OtpForm.jsx` — OTP entry, verification, and resend logic.
- `src/components/LoginScreen.jsx` — Controls the login, signup, and OTP screens.
- `src/App.jsx` — Handles authentication state and stores the returned session.

### Backend

- `controllers/auth.controllers.js` — Registration, OTP verification, resend OTP, and login logic.
- `entities/Registration.js` — Stores pending registrations.
- `entities/User.js` — Stores completed user accounts.
- `utils/otp.js` — OTP generation, metadata creation, refreshing, expiration, and verification.
- `mail-service/index.js` — Email configuration and OTP email delivery.
- `routes/auth.routes.js` — Authentication endpoints.
- `config/data-source.js` — PostgreSQL and TypeORM configuration.

## Registration Status

The registration process now requires email verification before an account is created. The OTP is generated, stored, sent to the user, and verified by the backend.

The School Hub project is still under development, and some student management functionality remains unfinished.