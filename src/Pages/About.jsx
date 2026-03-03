import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">

      {/* Hero Section */}
      <div
        className="h-[100vh] flex flex-col justify-center items-center text-center px-6 relative bg-cover bg-center"
        style={{ backgroundImage: "url('/images/AboutBanner.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-wide">
            About SuchiPlus
          </h1>
          <p className="max-w-2xl text-gray-300 text-lg md:text-xl">
            SuchiPlus is your ultimate destination for streaming the best movies
            and series from around the world. Entertainment redefined.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-500">
          Our Mission
        </h2>
        <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
          Our mission is to bring unlimited entertainment to your screens.
          We believe in delivering high-quality content, seamless streaming,
          and a user-friendly experience that makes every moment enjoyable.
        </p>
      </div>

      {/* Team Section */}
      <div className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-500">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          <div className="bg-gray-800 rounded-xl p-6 text-center hover:scale-105 transition duration-300 shadow-lg">
            <img
              src="/images/movie2.png"
              alt="Founder"
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Sheetal</h3>
            <p className="text-gray-400 text-sm">Founder & CEO</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 text-center hover:scale-105 transition duration-300 shadow-lg">
            <img
              src="/images/movie3.png"
              alt="Developer"
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Suchi</h3>
            <p className="text-gray-400 text-sm">Lead Developer</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 text-center hover:scale-105 transition duration-300 shadow-lg">
            <img
              src="/images/movie4.png"
              alt="Designer"
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">Riya Patel</h3>
            <p className="text-gray-400 text-sm">UI/UX Designer</p>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="py-8 text-center border-t border-gray-800 text-gray-500 text-sm">
        © 2026 SuchiPlus. All Rights Reserved.
      </div>

    </div>
  );
};

export default About;