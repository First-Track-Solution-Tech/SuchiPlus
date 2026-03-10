import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-screen relative overflow-hidden">
      
      {/* Background Image */}
      <img
        src="/images/HeroBanner2.png"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl">
          Unlimited movies, TV shows and more
        </h1>

        <p className="mt-4 text-base md:text-xl text-white">
          Starts at ₹199. Cancel anytime.
        </p>

        <p className="mt-4 text-sm md:text-lg text-white max-w-2xl">
          Ready to watch? Enter your email to create your SuchiPlus account.
        </p>

        {/* Email Section */}
        <div className="mt-6 flex flex-col md:flex-row gap-4 w-full max-w-xl">

          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-4 py-3 md:py-4 rounded border border-gray-400 bg-black/60 text-white placeholder-gray-300 focus:outline-none"
          />

          {/* Navigate to Account Page */}
          <Link
            to="/Account"
            className="bg-blue-600 px-6 md:px-8 py-3 md:py-4 rounded text-lg md:text-xl font-semibold text-white hover:bg-blue-700 transition text-center"
          >
            Get Started →
          </Link>

        </div>

      </div>
    </section>
  );
};

export default Hero;