export default function Home() {
  return (
    <main className="min-h-screen bg-[#1f140f] flex items-center justify-center px-6">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SECTION */}
        <div className="text-white space-y-6">
          <p className="text-sm tracking-wider uppercase text-gray-300">
            Welcome To Fashly
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Best Fashion Designer<br />
            To Enhance The Look<br />
            Of Your Body
          </h1>

          <p className="text-gray-400 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>

          <button className="bg-[#e86f53] hover:bg-[#cf6046] text-white px-6 py-3 rounded-full font-semibold transition">
            Get Started
          </button>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-white">
            <img
              src="/fashion-girl.jpg.jpg"
              alt="Fashion Designer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </main>
  );
}
