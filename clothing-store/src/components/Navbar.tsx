"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#e86f53]">
          Fashly
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/categories">Categories</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/cart">Cart</Link></li>

          {/* ⭐ Added PORTAL */}
          <li>
            <Link
              href="/portal"
              className="text-[#e86f53] font-semibold hover:underline"
            >
              Portal
            </Link>
          </li>
        </ul>

        <Link
          href="/contact"
          className="hidden md:block bg-[#e86f53] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#cf6046] transition"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow">
          <ul className="flex flex-col gap-4 px-6 py-4 text-gray-700 font-medium">
            <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link href="/categories" onClick={() => setOpen(false)}>Categories</Link></li>
            <li><Link href="/about" onClick={() => setOpen(false)}>About Us</Link></li>
            <li><Link href="/services" onClick={() => setOpen(false)}>Services</Link></li>
            <li><Link href="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
            <li><Link href="/blog" onClick={() => setOpen(false)}>Blog</Link></li>
            <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
            <li><Link href="/cart" onClick={() => setOpen(false)}>Cart</Link></li>

            {/* ⭐ Added PORTAL in mobile */}
            <li>
              <Link
                href="/portal"
                onClick={() => setOpen(false)}
                className="text-[#e86f53] font-semibold"
              >
                Portal
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
