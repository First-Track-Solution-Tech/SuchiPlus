import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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
      <div className="hidden md:flex items-center gap-6">
        <Link to="/" className="text-white text-xl hover:text-blue-400 transition">
          <FaHome />
        </Link>

        <Link to="/Search" className="text-white text-xl hover:text-blue-400 transition">
          <FaSearch />
        </Link>

        <select className="bg-transparent border border-gray-400 text-white px-3 py-1 rounded focus:outline-none">
          <option className="text-black">English</option>
          <option className="text-black">हिन्दी</option>
        </select>

        <Link
          to="/signin"
          className="bg-blue-600 px-4 py-1.5 rounded text-white font-semibold hover:bg-blue-700 transition"
        >
          Sign In
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div
        className="md:hidden text-white text-2xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-95 backdrop-blur-md flex flex-col items-center gap-6 py-6 md:hidden shadow-lg transition-all duration-300">
          
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-white text-lg hover:text-blue-400"
          >
            <FaHome />
          </Link>

          <Link
            to="/Search"
            onClick={() => setMenuOpen(false)}
            className="text-white text-lg hover:text-blue-400"
          >
            <FaSearch />
          </Link>

          <select className="bg-transparent border border-gray-400 text-white px-3 py-1 rounded">
            <option className="text-black">English</option>
            <option className="text-black">हिन्दी</option>
          </select>

          <Link
            to="/signin"
            onClick={() => setMenuOpen(false)}
            className="bg-blue-600 px-5 py-2 rounded text-white font-semibold hover:bg-blue-700 transition"
          >
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;