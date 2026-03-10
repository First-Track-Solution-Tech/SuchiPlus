import React, { useState } from "react";
import { Link } from "react-router-dom";

const HelpCenter = () => {
  const [search, setSearch] = useState("");

  const topics = [
    "Account Management",
    "Subscription & Billing",
    "Streaming Issues",
    "Technical Support",
    "Privacy & Security",
    "Device Compatibility",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-blue-900 text-white px-6 pt-28">
      
      <h1 className="text-4xl font-bold text-center mb-6">
        Help Center
      </h1>

      <p className="text-center text-gray-300 mb-10">
        How can we help you today?
      </p>

      {/* Search Box */}
      <div className="flex justify-center mb-14">
        <input
          type="text"
          placeholder="Search help topics..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-80 md:w-96 px-5 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {topics
          .filter((topic) =>
            topic.toLowerCase().includes(search.toLowerCase())
          )
          .map((topic, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition duration-300 shadow-lg cursor-pointer"
            >
              <h2 className="text-xl font-semibold mb-2 text-blue-400">
                {topic}
              </h2>
              <p className="text-gray-400 text-sm">
                Find detailed information and guides about {topic}.
              </p>
            </div>
          ))}
      </div>

      {/* Support Section */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Still Need Help?
        </h2>
        <p className="text-gray-400 mb-6">
          Our support team is available 24/7 to assist you.
        </p>

        <Link to="/Contact" className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Contact Support
        </Link>
      </div>

      {/* Footer */}
      <div className="mt-20 text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
        © 2026 SuchiPlus. All Rights Reserved.
      </div>

    </div>
  );
};

export default HelpCenter;