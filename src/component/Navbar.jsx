import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 
      ${
        scrolled
          ? "bg-black bg-opacity-90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <h1 className="text-blue-500 text-2xl md:text-5xl font-extrabold cursor-pointer">
        SUCHIPLUS
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-7">

        <Link to="/" className="text-white hover:text-blue-400 transition text-lg">
          Home
        </Link>

        <Link to="/movies" className="text-white hover:text-blue-400 transition text-shadow-lg">
          Movies
        </Link>

        <Link to="/tvshows" className="text-white hover:text-blue-400 transition">
          TV Shows
        </Link>

        <Link to="/downloads" className="text-white hover:text-blue-400 transition">
          Downloads
        </Link>

        <Link to="/Search" className="text-white text-xl hover:text-blue-400 transition">
          <FaSearch />
        </Link>

        
        <Link
          to="/signin"
          className="bg-blue-600 px-4 py-1.5 rounded text-white font-semibold hover:bg-blue-700 transition"
        >
          Sign In
        </Link>
      </div>

      {/* Mobile Right Side (Only Search + Signin) */}
      <div className="flex md:hidden items-center gap-4">

        <Link to="/Search" className="text-white text-xl hover:text-blue-400 transition">
          <FaSearch />
        </Link>

        <Link
          to="/signin"
          className="bg-blue-600 px-3 py-1 rounded text-white text-sm font-semibold hover:bg-blue-700 transition"
        >
          Sign In
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;