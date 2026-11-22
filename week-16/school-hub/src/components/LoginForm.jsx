import { useState } from "react";
import { loginUser } from "../api";
import { inputClass, labelClass, submitClass } from "./AuthCard";

export default function LoginForm({ onLogin }) {
  const [form, setForm] = useState({ email: "", password: "" });
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

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    setBusy(true);
    setError("");

    try {
      // Returns { token, user }, which App.jsx stores.
      const data = await loginUser({ email, password });
      onLogin(data);
    } catch (error) {
      setError(error.message || "Something went wrong. Please try again.");
      setBusy(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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
        {busy ? "Please wait..." : "Log in"}
      </button>
    </form>
  );
}
