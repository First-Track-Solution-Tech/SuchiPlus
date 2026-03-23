import React from "react";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const Downloads = () => {

  const isSubscribed = false;

  if (!isSubscribed) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 py-35 
      bg-gradient-to-br from-black via-gray-900 to-black text-white">

        <div className="max-w-2xl w-full text-center bg-white/5 backdrop-blur-lg 
        border border-white/10 rounded-2xl p-10 shadow-2xl">

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 
            p-6 rounded-full text-white text-5xl shadow-lg">
              <FaDownload />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Downloads Available with Subscription
          </h1>

          {/* Description */}
          <p className="text-gray-300 mb-10 text-sm md:text-base leading-relaxed">
            Subscribe to <span className="text-blue-400 font-semibold">SuchiPlus</span> 
            to download your favorite movies and TV shows and watch them offline anytime,
            anywhere on your device.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 text-sm">

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 
            p-5 rounded-xl border border-gray-700 hover:border-blue-500 
            transition duration-300">
              Unlimited Downloads
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 
            p-5 rounded-xl border border-gray-700 hover:border-blue-500 
            transition duration-300">
              Watch Offline
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 
            p-5 rounded-xl border border-gray-700 hover:border-blue-500 
            transition duration-300">
              HD Quality
            </div>

          </div>

          {/* Subscribe Button */}
          <Link
            to="/Account"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 
            px-10 py-3 rounded-lg text-lg font-semibold hover:scale-105 
            transition transform duration-300 shadow-lg"
          >
            Get Subscription
          </Link>

          {/* Price */}
          <p className="mt-6 text-gray-400 text-sm">
            Plans start at ₹199/month • Cancel anytime
          </p>

        </div>

      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black 
    text-white min-h-screen pt-24 px-6">
      My Downloads
    </div>
  );
};

export default Downloads;