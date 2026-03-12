import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaFilm, FaTv, FaDownload, FaUser } from "react-icons/fa";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black bg-opacity-95 backdrop-blur-md border-t border-gray-800 md:hidden z-50">
      
      <div className="flex justify-around items-center py-3 text-white text-xs">
        
        <Link to="/" className="flex flex-col items-center hover:text-blue-400 transition">
          <FaHome className="text-lg" />
          <span>Home</span>
        </Link>

        <Link to="/movies" className="flex flex-col items-center hover:text-blue-400 transition">
          <FaFilm className="text-lg" />
          <span>Movies</span>
        </Link>

        <Link to="/tvshows" className="flex flex-col items-center hover:text-blue-400 transition">
          <FaTv className="text-lg" />
          <span>TV Shows</span>
        </Link>

        <Link to="/downloads" className="flex flex-col items-center hover:text-blue-400 transition">
          <FaDownload className="text-lg" />
          <span>Downloads</span>
        </Link>

        <Link to="/account" className="flex flex-col items-center hover:text-blue-400 transition">
          <FaUser className="text-lg" />
          <span>Account</span>
        </Link>

      </div>
    </div>
  );
};

export default BottomNav;