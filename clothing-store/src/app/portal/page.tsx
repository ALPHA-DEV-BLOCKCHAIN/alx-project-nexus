"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";

export default function PortalPage() {
  const router = useRouter();
  const { login } = useUser();

  const images = [
    "/portal/flowerdress.jpg",
    "/portal/slide2.jpg",
    "/portal/slide3.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % images.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  // LOGIN HANDLER
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const user = users.find(
      (u: any) => u.email === email && u.password === password
    );

    if (!user) {
      setError("Invalid email or password.");
      return;
    }

    // Store login in context
    login({ name: user.name, email: user.email });

    // Store login flag (IMPORTANT for Checkout)
    localStorage.setItem("userLoggedIn", "true");

    // Store current user
    localStorage.setItem("currentUser", JSON.stringify(user));

    // Destination based on role
    const destination =
      user.role?.toLowerCase() === "admin"
        ? "/dashboard/admin"
        : "/dashboard";

    setTimeout(() => {
      router.push(destination);
    }, 150);
  };

  return (
    <div className="w-full h-screen flex bg-gray-100 overflow-hidden">

      {/* LEFT SLIDESHOW */}
      <div className="hidden md:block w-1/2 h-full relative">
        <img
          src={images[current]}
          className="w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black/35"></div>
      </div>

      {/* RIGHT LOGIN SIDE */}
      <div className="w-full md:w-1/2 bg-white h-full overflow-y-auto p-12 relative">

        <div className="flex items-center justify-between mb-10">
          <button onClick={() => history.back()} className="text-3xl font-light">
            ←
          </button>
          <button onClick={() => history.back()} className="text-3xl font-light">
            ✕
          </button>
        </div>

        <h1 className="text-5xl font-bold mb-10 text-black tracking-tight">
          Welcome back!
        </h1>

        {/* INLINE ERROR */}
        {error && (
          <div className="mb-4 text-red-600 font-semibold">{error}</div>
        )}

        <form className="flex flex-col gap-6" onSubmit={handleLogin}>

          <div>
            <label className="block text-gray-700 font-semibold text-lg">
              Email Address:
            </label>
            <input
              type="email"
              className="w-full border border-gray-400 rounded-md px-4 py-3 mt-2 text-gray-900"
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold text-lg">
              Password:
            </label>
            <input
              type="password"
              className="w-full border border-gray-400 rounded-md px-4 py-3 mt-2 text-gray-900"
              placeholder="Enter your secure password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="text-right">
            <Link href="/forgot-password" className="text-sm text-gray-600 underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-semibold rounded-md text-lg"
          >
            Login →
          </button>
        </form>

        {/* REGISTER LINK */}
        <div className="mt-8 text-center">
          <span className="text-sm text-gray-800">Don’t have an account?</span>{" "}
          <Link
            href="/register"
            className="text-sm font-semibold text-black underline hover:text-[#e86f53] transition"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}
