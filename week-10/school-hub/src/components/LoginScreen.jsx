import { useState } from "react";
import { users } from "../data";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

const emptyForm = { name: "", email: "", password: "", role: "student" };

const inputClass =
  "w-full border border-slate-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400";
const labelClass = "block text-sm font-medium text-slate-700 mb-1";

export default function LoginScreen({ onLogin }) {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
  }

  function switchMode(newMode) {
    setMode(newMode);
    setForm(emptyForm); // start each mode with empty boxes
    setError("");       // and no old error message
  }

  const [mode, setMode] = useState("signup"); // "login" or "signup"
  const isSignup = mode === "signup";

  function handleSubmit(e) {
    e.preventDefault();
    const email = form.email.trim().toLowerCase();
    const existing = users.find((u) => u.email === email);

    if (isSignup) {
        if (!form.name.trim() || !email || !form.password) {
            setError("Please fill in every field.");
            return;
        }
        if (existing) {
            setError("An account with this email already exists.");
            return;
        }
        if (form.password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }
        console.log("Sign-up is valid:", form); // we'll create the account in 5e
        return;
    }
    
    // Log in mode (same as before)
    if (!existing || existing.password !== form.password) {
        setError("Wrong email or password.");
        return;
    }
    onLogin(existing);
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-50 p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-2xl font-bold text-slate-800 flex items-center justify-center gap-2"><AcademicCapIcon className="h-7 w-7" /> School Hub</h1>
        <p className="text-slate-500 text-center mb-6">
            {isSignup ? "Create your account" : "Log in to continue"}
        </p>

        <div className="grid grid-cols-2 gap-1 bg-slate-100 rounded-lg p-1 mb-6">
            {["login", "signup"].map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => switchMode(m)}
                  className={`py-2 rounded-md text-sm font-semibold transition ${mode === m ? "bg-white text-indigo-700 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                >
                    {m === "login" ? "Log in" : "Sign up"}
                </button>
            ))}
        </div>


        {isSignup && (
            <>
            <label className={labelClass}>Full name</label>
            <input name="name" value={form.name} onChange={handleChange} className={inputClass} />
            </>
        )}

        <label className={labelClass}>Email</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} className={inputClass} />

        <label className={labelClass}>Password</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} className={inputClass} />

        {isSignup && (
            <>
            <label className={labelClass}>I am a...</label>
            <select name="role" value={form.role} onChange={handleChange} className={inputClass}>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
            </select>
            </>
        )}

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button type="submit" className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition">
          {isSignup ? "Create account" : "Log in"}
        </button>

        {!isSignup && (
            <div className="mt-6 rounded-lg bg-slate-50 p-3 text-xs text-slate-500">
                <p className="font-semibold text-slate-600 mb-1">Demo accounts</p>
                <p>admin@schoolhub.test · admin123</p>
                <p>teacher@schoolhub.test · teacher123</p>
                <p>amina@schoolhub.test · student123</p>
            </div>
        )}
      </form>
    </div>
  );
}