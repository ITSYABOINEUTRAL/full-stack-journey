import { useState } from "react";
import { findUserByEmail, createUser } from "../api";
import { inputClass, labelClass, submitClass } from "./AuthCard";

// Step 1 of signup. The backend only emails an OTP here - no account yet.
// When that succeeds, onCodeSent({ email, devCode }) moves to the OTP screen.
export default function SignupForm({ onCodeSent }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const email = form.email.trim().toLowerCase();
    const password = form.password;

    if (!form.name.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setBusy(true);
    setError("");

    try {
      // Check whether the email is already registered.
      const existing = await findUserByEmail(email);

      if (existing) {
        setError("An account with this email already exists.");
        return;
      }

      // Start signup: the backend emails the OTP.
      const sent = await createUser({
        fullName: form.name.trim(),
        email,
        password,
      });

      onCodeSent({ email: sent.email ?? email, devCode: sent.devCode });
    } catch (error) {
      setError(error.message || "Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className={labelClass}>Full name</label>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        className={inputClass}
        placeholder="Enter your full name"
      />

      <label className={labelClass}>Email</label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        className={inputClass}
        placeholder="Enter your email"
      />

      <label className={labelClass}>Password</label>
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        className={inputClass}
        placeholder="Enter your password"
      />

      {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

      <button type="submit" disabled={busy} className={submitClass}>
        {busy ? "Please wait..." : "Create account"}
      </button>
    </form>
  );
}
