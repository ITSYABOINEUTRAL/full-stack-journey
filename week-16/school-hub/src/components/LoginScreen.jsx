import { useState, useEffect } from "react";
import AuthCard from "./AuthCard";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import OtpForm from "./OtpForm";

// Decides which auth screen to show: login, signup, or the OTP step.
// The forms themselves live in LoginForm, SignupForm and OtpForm.
export default function LoginScreen({ onLogin }) {
  const [mode, setMode] = useState("signup");
  // Set after signup succeeds: { email, devCode } while we wait for the OTP.
  const [pending, setPending] = useState(null);

  const isSignup = mode === "signup";

  useEffect(() => {
    document.title = pending
      ? "Verify email · School Hub"
      : isSignup
        ? "Sign up · School Hub"
        : "Log in · School Hub";
  }, [isSignup, pending]);

  // Step 2 of signup: a correct code returns { token, user } -> onLogin.
  if (pending) {
    return (
      <OtpForm
        email={pending.email}
        devCode={pending.devCode}
        onVerified={onLogin}
        onBack={() => setPending(null)}
      />
    );
  }

  return (
    <AuthCard subtitle={isSignup ? "Create your account" : "Log in to continue"}>
      {/* Login and Signup tabs */}
      <div className="grid grid-cols-2 gap-1 bg-slate-100 rounded-lg p-1 mb-6">
        {["login", "signup"].map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={`py-2 rounded-md text-sm font-semibold transition ${
              mode === m
                ? "bg-white text-indigo-700 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            {m === "login" ? "Log in" : "Sign up"}
          </button>
        ))}
      </div>

      {isSignup ? (
        <SignupForm onCodeSent={setPending} />
      ) : (
        <LoginForm onLogin={onLogin} />
      )}
    </AuthCard>
  );
}
