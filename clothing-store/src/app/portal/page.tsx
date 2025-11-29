"use client";

import Link from "next/link";
import { useState } from "react";

export default function PortalPage() {
  const images = [
    "/portal/slide1.jpg",
    "/portal/slide2.jpg",
    "/portal/slide3.jpg",
  ];

  const [current, setCurrent] = useState(0);

  // Simple auto-carousel
  useState(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  });

  return (
    <div className="w-full h-screen flex bg-gray-100 overflow-hidden">

      {/* LEFT SIDE – CAROUSEL */}
      <div className="hidden md:block w-1/2 h-full relative">
        <img
          src={images[current]}
          className="w-full h-full object-cover transition-all duration-700"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/35"></div>
      </div>

      {/* RIGHT SIDE – FORM SECTION */}
      <div className="w-full md:w-1/2 bg-white h-full overflow-y-auto p-12 relative">

        {/* Top icons */}
        <div className="flex items-center justify-between mb-8">
          <button onClick={() => history.back()} className="text-2xl">
            ←
          </button>
          <button onClick={() => history.back()} className="text-2xl">
            ✕
          </button>
        </div>

        {/* Welcome text */}
        <h1 className="text-4xl font-semibold mb-8">Welcome back!</h1>

        {/* Login Form */}
        <form className="flex flex-col gap-5">

          <div>
            <label className="block text-gray-700 font-medium">Email Address:</label>
            <input
              type="email"
              className="w-full border rounded-md px-4 py-3 mt-1 outline-none"
              placeholder="Enter your email address"
            />
            <p className="text-red-600 text-sm">*</p>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Password:</label>
            <input
              type="password"
              className="w-full border rounded-md px-4 py-3 mt-1 outline-none"
              placeholder="Enter your password"
            />
            <p className="text-red-600 text-sm">*Password must be at least 8 characters</p>
          </div>

          {/* Forgot password */}
          <div className="text-right">
            <Link href="/forgot-password" className="text-sm text-gray-600">
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-semibold rounded-md"
          >
            Login →
          </button>
        </form>

        {/* Register Link */}
        <div className="mt-6 text-center">
          <Link href="/register" className="text-sm underline">
            Create New Account
          </Link>
        </div>
      </div>
    </div>
  );
}
