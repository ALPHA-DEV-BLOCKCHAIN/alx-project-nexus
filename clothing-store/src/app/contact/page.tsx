"use client";

export default function Contact() {
  return (
    <section className="flex flex-col md:flex-row min-h-screen">

      {/* LEFT SIDE — AUTO CAROUSEL */}
      <div className="w-full md:w-1/2 h-72 md:h-auto overflow-hidden relative">
        <div className="flex w-[300%] h-full animate-slide">
          <div
            className="w-1/3 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/contact1.jpg')" }}
          />
          <div
            className="w-1/3 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/contact2.jpg')" }}
          />
          <div
            className="w-1/3 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/contact4.jpg')" }}
          />
        </div>
      </div>

      {/* RIGHT SIDE — FULL BG IMAGE */}
      <div
        className="w-full md:w-1/2 relative flex items-center justify-center p-10 md:p-16"
        style={{
          backgroundImage: "url('/images/diorglass.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Glass Form */}
        <div className="relative bg-white/10 backdrop-blur-lg p-10 rounded-xl w-full max-w-lg border border-white/20">

          <h1 className="text-4xl font-bold text-white mb-6 text-center">
            Contact Us
          </h1>

          <form className="grid gap-4">

            <div>
              <label className="text-white text-sm">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 p-3 rounded-md bg-white/20 text-white 
                focus:ring-2 focus:ring-white border border-white/30"
              />
            </div>

            <div>
              <label className="text-white text-sm">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 p-3 rounded-md bg-white/20 text-white 
                focus:ring-2 focus:ring-white border border-white/30"
              />
            </div>

            <div>
              <label className="text-white text-sm">Message</label>
              <textarea
                placeholder="Write your message..."
                className="w-full mt-1 p-3 rounded-md h-32 bg-white/20 text-white 
                focus:ring-2 focus:ring-white border border-white/30"
              />
            </div>

            <button className="w-full bg-white text-black font-semibold py-3 rounded-md hover:bg-gray-200">
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}
