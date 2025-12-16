import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center px-6 lg:px-12">
        
      <div className="max-w-5xl w-full flex flex-col items-center text-center gap-8">
{/* Gradient Glow Background */}


        {/* Badge */}
        <div className="flex items-center mt-10 gap-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-4 py-1.5">
          <span className="text-xs font-semibold text-white bg-gradient-to-br from-violet-500 to-violet-700 px-2 py-0.5 rounded-full">
            2025
          </span>
          <span className="text-sm text-gray-300">
            Next-Gen AI Studio
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-heading text-white tracking-tight leading-tight
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          AI-Driven Success <br />
          <span className="text-white/90">Redefining the Future.</span>
        </h1>

        {/* Description */}
        <p className="max-w-xl text-gray-400 text-base sm:text-lg leading-relaxed">
          Creating latest solutions that redefine innovation.
          Stay ahead with AI-powered technology for the future.
        </p>

        {/* Buttons */}
        <div className="flex flex-col cursor-pointer sm:flex-row gap-4 pt-4">
          <button className="px-6 py-3 cursor-pointer rounded-xl bg-white text-black font-medium
            hover:bg-gray-200 transition">
            Connect With Us
          </button>

          <button className="px-6 py-3 cursor-pointer rounded-xl bg-white/10 text-white
            border border-white/20 backdrop-blur-md
            hover:bg-white/20 transition">
            What is Nubien?
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
