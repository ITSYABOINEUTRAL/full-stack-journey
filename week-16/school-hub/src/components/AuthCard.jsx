import { AcademicCapIcon } from "@heroicons/react/24/outline";

// Shared classes for the auth forms
export const inputClass =
  "w-full border border-slate-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400";

export const labelClass = "block text-sm font-medium text-slate-700 mb-1";

export const submitClass =
  "mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition disabled:opacity-60 disabled:cursor-wait";

// The full-screen page + white card + "School Hub" heading.
// Login, signup and the OTP screen all render inside this.
export default function AuthCard({ subtitle, children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-50 p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-2xl font-bold text-slate-800 flex items-center justify-center gap-2">
          <AcademicCapIcon className="h-7 w-7" />
          School Hub
        </h1>

        <p className="text-slate-500 text-center mb-6">{subtitle}</p>

        {children}
      </div>
    </div>
  );
}
