"use client";

import React from "react";

export default function ProjectsPage() {
  const images = ["/store.jpg", "/delivery.jpg", "/hermesp.jpg"];
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const projects = [
    {
      title: "Corporate Uniform Design",
      category: "Bulk Orders & Branding",
      description:
        "Designed and manufactured branded uniforms for a leading corporate team with high-quality fabric and durable finishing.",
      image: "/images/contact1.jpg",
    },
    {
      title: "Custom Bridal Collection",
      category: "Custom Clothing Design",
      description:
        "A luxury bridal collection designed with elegance, premium materials, and personalized fittings.",
      image: "/images/contact2.jpg",
    },
    {
      title: "Seasonal Lookbook Campaign",
      category: "Fashion Campaign",
      description:
        "A full styling and photoshoot project showcasing our latest ready-to-wear collection for the season.",
      image: "/images/contact4.jpg",
    },
    {
      title: "Event Styling & Wardrobe",
      category: "Fashion Styling",
      description:
        "Complete wardrobe styling for influencers and public figures attending major social and corporate events.",
      image: "/images/contact3.jpg",
    },
  ];

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
            Our Projects
          </h1>
          <p className="text-white mt-4 max-w-xl text-lg">
            A showcase of our finest work, crafted with passion and creativity.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <div className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Featured Projects
        </h2>

        <p className="text-center max-w-3xl mx-auto text-lg mb-12">
          We bring fashion to life through unique designs, professional branding,
          and exceptional craftsmanship. Explore some of the projects we’ve proudly delivered for clients.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg bg-white border hover:shadow-2xl transition duration-300"
            >
              <div
                className="h-56 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                <span className="inline-block bg-black text-white text-sm px-3 py-1 rounded-full mb-3">
                  {project.category}
                </span>

                <p className="text-gray-700 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
