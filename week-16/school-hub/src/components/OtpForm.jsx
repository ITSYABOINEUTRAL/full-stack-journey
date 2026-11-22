import { useState, useEffect } from "react";
import { verifyOtp, resendOtp } from "../api";
import AuthCard, { inputClass, labelClass, submitClass } from "./AuthCard";

const OTP_LENGTH = 6;
const RESEND_COOLDOWN = 30; // seconds

// Reusable OTP screen.
//   email       - where the code was sent
//   devCode     - optional, shown when the backend has no email credentials
//   onVerified  - called with the backend's response ({ token, user })
//   onBack      - "Use a different email"
export default function OtpForm({ email, devCode: initialDevCode, onVerified, onBack }) {
  const [code, setCode] = useState("");
  const [devCode, setDevCode] = useState(initialDevCode);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [busy, setBusy] = useState(false);
  const [resending, setResending] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  // Tick the resend cooldown down once a second.
  useEffect(() => {
    if (cooldown <= 0) return;
    const id = setTimeout(() => setCooldown((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [cooldown]);

  function handleChange(e) {
    // digits only, max 6
    setCode(e.target.value.replace(/\D/g, "").slice(0, OTP_LENGTH));
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (code.length !== OTP_LENGTH) {
      setError(`Enter the ${OTP_LENGTH}-digit code.`);
      return;
    }

    setBusy(true);
    setError("");
    setInfo("");

    try {
      const data = await verifyOtp({ email, code });
      onVerified(data);
    } catch (error) {
      setError(error.message || "Something went wrong. Please try again.");
      setBusy(false);
    }
  }

  async function handleResend() {
    setResending(true);
    setError("");
    setInfo("");

    try {
      const data = await resendOtp(email);
      setDevCode(data.devCode);
      setCode("");
      setInfo("A new code has been sent.");
      setCooldown(RESEND_COOLDOWN);
    } catch (error) {
      setError(error.message || "Could not resend the code.");
    } finally {
      setResending(false);
    }
  }

  return (
    <AuthCard subtitle="Verify your email">
      <form onSubmit={handleSubmit}>
        <p className="text-sm text-slate-600 text-center mb-5">
          We sent a {OTP_LENGTH}-digit code to{" "}
          <span className="font-semibold text-slate-800 break-all">{email}</span>.
        </p>

        {devCode && (
          <p className="mb-4 rounded-lg bg-amber-50 border border-amber-200 px-3 py-2 text-sm text-amber-800">
            Dev mode (email not configured): your code is{" "}
            <span className="font-bold tracking-widest">{devCode}</span>
          </p>
        )}

        <label className={labelClass}>Verification code</label>
        <input
          type="text"
          name="code"
          inputMode="numeric"
          autoComplete="one-time-code"
          autoFocus
          value={code}
          onChange={handleChange}
          placeholder="123456"
          className={`${inputClass} text-center text-xl tracking-[0.5em]`}
        />

        {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
        {info && <p className="text-emerald-600 text-sm mb-3">{info}</p>}

        <button type="submit" disabled={busy} className={submitClass}>
          {busy ? "Please wait..." : "Verify and create account"}
        </button>

        <div className="mt-5 flex items-center justify-between text-sm">
          <button
            type="button"
            onClick={handleResend}
            disabled={cooldown > 0 || resending}
            className="font-medium text-indigo-600 hover:text-indigo-700 disabled:text-slate-400 disabled:cursor-not-allowed"
          >
            {resending
              ? "Sending..."
              : cooldown > 0
                ? `Resend code in ${cooldown}s`
                : "Resend code"}
          </button>

          <button
            type="button"
            onClick={onBack}
            className="text-slate-500 hover:text-slate-700"
          >
            Use a different email
          </button>
        </div>
      </form>
    </AuthCard>
  );
}
