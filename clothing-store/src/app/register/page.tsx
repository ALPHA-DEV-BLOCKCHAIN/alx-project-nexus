"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // simple validation
    if (!name.trim() || !email.trim() || password.length < 8) {
      setError("Please complete all fields. Password must be at least 8 characters.");
      return;
    }

    setSubmitting(true);

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Check if email already exists
    if (users.some((u: any) => u.email === email)) {
      setError("Email already registered!");
      setSubmitting(false);
      return;
    }

    // Save user
    users.push({ name: name.trim(), email: email.trim(), password });
    localStorage.setItem("users", JSON.stringify(users));

    // Show non-blocking success message then redirect to portal
    setSuccess("Registration successful — redirecting to Portal...");
    setTimeout(() => {
      router.push("/portal");
    }, 900);

    setSubmitting(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Create Account</h1>
        <p className="text-sm text-gray-600 mb-6">
          Join Fashly — create an account to track orders and access your dashboard.
        </p>

        {/* Success / Error */}
        {error && (
          <div className="mb-4 text-sm text-red-700 bg-red-50 border border-red-100 p-3 rounded">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 text-sm text-green-800 bg-green-50 border border-green-100 p-3 rounded">
            {success}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-gray-700 font-medium">Full Name</label>
              <span className="text-red-600 font-semibold">*</span>
            </div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#e86f53] outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-gray-700 font-medium">Email</label>
              <span className="text-red-600 font-semibold">*</span>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#e86f53] outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-gray-700 font-medium">Password</label>
              <span className="text-red-600 font-semibold">*</span>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a secure password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#e86f53] outline-none"
              required
            />
            <p className="mt-2 text-sm text-red-600">* Password must be at least 8 characters</p>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full mt-2 bg-[#e86f53] hover:bg-[#cf6046] text-white py-3 rounded-lg font-semibold transition disabled:opacity-60"
          >
            {submitting ? "Creating..." : "Register"}
          </button>
        </form>

        {/* Bottom links */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-700">
            Already have an account?{" "}
            <Link href="/portal" className="font-semibold text-[#e86f53] underline">
              Sign in
            </Link>
          </p>

          {/* You asked to keep the "Don't have an account? Create Account" statement.
              On register page it doesn't make sense, but to preserve the text as requested,
              show it below but inactive */}
          <div className="mt-3">
            {/* <span className="text-sm text-gray-600">Don't have an account? </span>
            <Link href="/register" className="text-sm underline font-medium text-gray-800">
              Create Account
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
