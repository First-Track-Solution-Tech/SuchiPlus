import React, { useState, useEffect } from "react";

const Hero = () => {
  const images = [
    "/images/banner_bg.png",
    "/images/HeroBanner2.png",
    "/images/movie2.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto Slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen relative overflow-hidden">
      
      {/* Background Image Slider */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Hero Background"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl">
          Unlimited movies, TV shows and more
        </h1>

        <p className="mt-4 text-base md:text-xl text-white">
          Starts at ₹149. Cancel at any time.
        </p>

        <p className="mt-4 text-sm md:text-lg text-white max-w-2xl">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        {/* Email Section */}
        <div className="mt-6 flex flex-col md:flex-row gap-4 w-full max-w-xl">
          
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-4 py-3 md:py-4 rounded border border-gray-400 bg-black/60 text-white placeholder-gray-300"
          />

          <button className="bg-blue-600 px-6 md:px-8 py-3 md:py-4 rounded text-lg md:text-xl font-semibold text-white hover:bg-blue-700 transition">
            Get Started →
          </button>

        </div>

      </div>
    </section>
  );
};

export default Hero;