export const API_URL = "http://localhost:3000/api/v1";

// Check whether an email already exists
export async function findUserByEmail(email) {
  const res = await fetch(`${API_URL}/auth/check-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    throw new Error("Could not check email");
  }

  return res.json();
}

// Step 1 of signup: sends an OTP to the email.
// No account exists yet. Returns { message, email, devCode? }.
export async function createUser(newUser) {
  const res = await fetch(`${API_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Could not create account");
  }

  return data;
}

// Log in an existing user
export async function loginUser(credentials) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Could not log in");
  }

  return data;
}

// Step 2 of signup: send the OTP the user received by email.
// On success the backend creates the account and returns { token, user }.
export async function verifyOtp({ email, code }) {
  const res = await fetch(`${API_URL}/auth/verify-otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, code }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Could not verify the code");
  }

  return data;
}

// Ask the backend to send a fresh OTP for a pending signup.
export async function resendOtp(email) {
  const res = await fetch(`${API_URL}/auth/resend-otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Could not resend the code");
  }

  return data;
}
