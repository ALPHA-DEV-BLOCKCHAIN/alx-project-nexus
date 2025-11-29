"use client";

import React, { useState, useEffect } from "react";

export default function BlogPage() {
  const posts = [
    {
      title: "The Rise of Minimalist Luxury in 2025",
      image: "/images/blog1.jpg",
      excerpt:
        "Neutral tones, clean lines, and bold silhouettes are reshaping modern fashion. Explore how designers are redefining luxury with less.",
      date: "Jan 22, 2025",
    },
    {
      title: "Inside Our Atelier: Crafting Timeless Pieces",
      image: "/images/blog2.jpg",
      excerpt:
        "A rare look into the craftsmanship and hand-finished detailing behind our signature collections.",
      date: "Feb 5, 2025",
    },
    {
      title: "Streetwear x Elegance: The New Hybrid Trend",
      image: "/images/blog3.jpg",
      excerpt:
        "Where comfort meets couture — discover the fashion shift that’s taking over global runways.",
      date: "Feb 14, 2025",
    },
    {
      title: "Building Your Signature Look",
      image: "/images/blog4.jpg",
      excerpt:
        "A guide to developing a personal style that communicates confidence and sophistication.",
      date: "Feb 22, 2025",
    },
    {
      title: "Seasonal Palette: Colors Dominating 2025",
      image: "/images/blog5.jpg",
      excerpt:
        "From warm earth tones to digital neons, see the shades influencing this year's collections.",
      date: "Mar 3, 2025",
    },
    {
      title: "From Sketch to Runway: Our Design Journey",
      image: "/images/blog6.jpg",
      excerpt:
        "Every collection begins with an idea — follow the artistic process from concept to couture.",
      date: "Mar 18, 2025",
    },
  ];

  // HERO CAROUSEL IMAGES
  const heroSlides = [
    "/portal/flowerdress.jpg",
    "/portal/slide2.jpg",
    "/portal/slide3.jpg",
  ];

  const [current, setCurrent] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* ================= HERO CAROUSEL ================ */}
      <section className="relative w-full h-[60vh] overflow-hidden">

        {heroSlides.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-7xl font-light tracking-wide text-white drop-shadow-lg">
            The Journal
          </h1>
          <p className="text-white/90 max-w-2xl mt-5 text-lg">
            Stories, inspiration, and ideas shaping the world of modern fashion.
          </p>
        </div>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center tracking-wide">
          Latest Stories
        </h2>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="break-inside-avoid bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div
                className="h-56 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${post.image})` }}
              ></div>

              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>

                <h3 className="text-xl font-semibold mb-3 leading-tight">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm">{post.excerpt}</p>

                <button className="mt-4 text-black underline underline-offset-4 text-sm font-medium hover:text-gray-700 transition">
                  Read more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
