"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function PortalPage() {
  const images = [
    "/portal/flowerdress.jpg",
    "/portal/slide2.jpg",
    "/portal/slide3.jpg",
  ];

  const [current, setCurrent] = useState(0);

  // Auto-carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen flex bg-gray-100 overflow-hidden">

      {/* LEFT – CAROUSEL */}
      <div className="hidden md:block w-1/2 h-full relative">
        <img
          src={images[current]}
          className="w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black/35"></div>
      </div>

      {/* RIGHT – FORM */}
      <div className="w-full md:w-1/2 bg-white h-full overflow-y-auto p-12 relative">

        {/* Top Icons */}
        <div className="flex items-center justify-between mb-10">
          <button onClick={() => history.back()} className="text-3xl font-light">
            ←
          </button>
          <button onClick={() => history.back()} className="text-3xl font-light">
            ✕
          </button>
        </div>

        {/* Welcome Text */}
        <h1 className="text-5xl font-bold mb-10 text-black tracking-tight">
          Welcome back!
        </h1>

        {/* Form */}
        <form className="flex flex-col gap-6">

          <div>
            <label className="block text-gray-700 font-semibold text-lg">
              Email Address:
            </label>
            <input
              type="email"
              className="w-full border border-gray-400 rounded-md px-4 py-3 mt-2 text-gray-900 placeholder-gray-500"
              placeholder="Enter your email address..."
            />
            <p className="text-red-600 text-sm">*</p>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold text-lg">
              Password:
            </label>
            <input
              type="password"
              className="w-full border border-gray-400 rounded-md px-4 py-3 mt-2 text-gray-900 placeholder-gray-500"
              placeholder="Enter your secure password..."
            />
            <p className="text-red-600 text-sm">
              *Password must be at least 8 characters
            </p>
          </div>

          {/* Forgot password */}
          <div className="text-right">
            <Link href="/forgot-password" className="text-sm text-gray-600 underline">
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-semibold rounded-md text-lg"
          >
            Login →
          </button>
        </form>

        {/* Register Link */}
        {/* <div className="mt-8 text-center">
          <span className="text-sm text-gray-700">Don’t have an account? </span>
          <Link href="/register" className="text-sm underline font-medium">
            Create Account
          </Link>
        </div> */}
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
