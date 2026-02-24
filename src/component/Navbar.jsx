import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-10 py-4 md:py-6 flex justify-between items-center bg-transparent">
      
      {/* Logo */}
      <h1 className="text-blue-500 text-3xl md:text-5xl font-extrabold">
        SUCHIPLUS
      </h1>

      {/* Right Side */}
      <div className="flex items-center gap-3 md:gap-5">

        {/* Home Icon */}
        <Link
          to="/"
          className="text-white text-xl md:text-2xl hover:text-blue-400 transition"
          title="Home"
        >
          <FaHome />
        </Link>

        {/* Search Icon */}
        <Link
          to="/Search"
          className="text-white text-xl md:text-2xl hover:text-blue-400 transition"
          title="Search"
        >
          <FaSearch />
        </Link>

        {/* Language */}
        <select className="bg-transparent border border-gray-400 text-white px-2 md:px-3 py-1 rounded text-sm md:text-base">
          <option className="text-black">English</option>
          <option className="text-black">हिन्दी</option>
        </select>

        {/* Sign In */}
        <Link
          to="/signin"
          className="bg-blue-600 px-3 md:px-4 py-1.5 rounded text-white text-sm md:text-base font-semibold hover:bg-blue-700 transition"
        >
          Sign In
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
