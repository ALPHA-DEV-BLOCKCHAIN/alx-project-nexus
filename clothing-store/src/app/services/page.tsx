"use client";

import React from "react";

export default function ServicesPage() {
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

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute z-10 inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-xl">
            Our Services
          </h1>
          <p className="text-white mt-4 max-w-xl text-lg">
            Professional fashion services tailored for individuals & businesses.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto py-20 px-6">
        <div className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 md:p-12 bg-[url('/fashionbg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-white/70 rounded-2xl" />

          <div className="relative z-10">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              What We Offer
            </h2>

            <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-10">
              Explore our range of professional, stylish, and high-quality fashion services.
            </p>

            <div className="grid md:grid-cols-2 gap-8">

              <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">Custom Clothing Design</h3>
                <p>
                  Tailored outfits made to match your exact measurements, style,
                  and personality.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">Ready-to-Wear Collections</h3>
                <p>
                  Explore our trendy, comfortable, and durable pieces for men, women,
                  and children.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">
                  Bulk Order & Corporate Branding
                </h3>
                <p>
                  High-quality uniforms and branded apparel for events, companies,
                  and organizations.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">
                  Wardrobe Styling & Fashion Consultation
                </h3>
                <p>
                  Professional styling advice to refine your wardrobe and elevate
                  your personal brand.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
