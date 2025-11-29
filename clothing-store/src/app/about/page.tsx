"use client";
import React from "react";

export default function About() {
  const images = ["/hermesp.jpg", "/shopout.jpg", "/hanger.jpg"];
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section Carousel */}
      <section className="relative w-full h-[450px] overflow-hidden rounded-b-3xl">
        <div className="absolute inset-0">
          <div
            className="w-full h-full transition-all duration-700 ease-in-out"
            style={{
              backgroundImage: `url(${images[currentImage]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Text */}
        <div className="absolute z-10 inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-xl">
            About Us
          </h1>
          <p className="text-white mt-4 max-w-xl text-lg">
            Discover style, comfort, and quality designed for everyone.
          </p>
        </div>
      </section>

      {/* About Sections */}
      <div className="max-w-6xl mx-auto py-20 px-6">

        {/* Who We Are */}
        <div className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 md:p-12 mb-10 bg-[url('/store.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-white/70 rounded-2xl" />
          <div className="relative z-10">
            <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
            <p className="text-lg leading-relaxed">
              We are a modern fashion brand dedicated to offering high-quality,
              stylish, and affordable clothing & footwear. Our mission is to make
              shopping easy, enjoyable, and reliable for everyone.
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <div className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 md:p-12 mb-10 bg-[url('/mancustomer.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-white/70 rounded-2xl" />
          <div className="relative z-10">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              We strive to empower individuals through modern fashion that blends
              comfort, durability, and trend-forward style.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 md:p-12 mb-10 bg-[url('/delivery.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-white/70 rounded-2xl" />
          <div className="relative z-10">
            <h2 className="text-3xl font-semibold mb-6 text-center">Our Core Values</h2>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-gray-50 p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p>Every product meets high-quality standards to ensure durability and style.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold mb-2">Affordability</h3>
                <p>We believe great fashion should be accessible to everyone.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold mb-2">Customer First</h3>
                <p>Your satisfaction guides every decision we make.</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
