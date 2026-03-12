import React from "react";
import { Link } from "react-router-dom";

const CookiesPolicy = () => {
  const sections = [
    {
      title: "1. What Are Cookies?",
      content:
        "Cookies are small text files stored on your device when you visit our platform. They help us remember your preferences and improve your experience."
    },
    {
      title: "2. Why We Use Cookies",
      content:
        "We use cookies to enhance performance, analyze traffic, personalize recommendations, and ensure secure login sessions."
    },
    {
      title: "3. Types of Cookies",
      content:
        "We use Essential Cookies (for basic functionality), Performance Cookies (for analytics), Functional Cookies (for preferences), and Marketing Cookies (for relevant content)."
    },
    {
      title: "4. Managing Cookies",
      content:
        "You can manage or disable cookies in your browser settings. However, some features of SuchiPlus may not function properly if cookies are disabled."
    },
    {
      title: "5. Updates to This Policy",
      content:
        "We may update this Cookies Policy occasionally. Any updates will be reflected on this page."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-blue-900 to-black text-white pt-28 px-6">

      {/* Header Section */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-extrabold mb-4">
          Cookies Policy
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Learn how SuchiPlus uses cookies and how you can control them.
        </p>
      </div>

      {/* Policy Cards */}
      <div className="max-w-5xl mx-auto space-y-8">
        {sections.map((section, index) => (
          <div
            key={index}
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-8 shadow-lg hover:scale-[1.02] transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-blue-400 mb-3">
              {section.title}
            </h2>
            <p className="text-gray-200 leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}
      </div>

      {/* Contact Box */}
      <div className="max-w-3xl mx-auto mt-20 bg-blue-800/30 border border-blue-500 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-semibold mb-3">
          Have Questions?
        </h3>
        <p className="text-gray-300 mb-4">
          If you have any concerns about our Cookies Policy, feel free to reach out.
        </p>
        <Link to="/Contact" className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Contact Support
        </Link>
      </div>

      {/* Footer */}
      <div className="mt-20 text-center text-gray-400 text-sm border-t border-gray-700 pt-6">
© SuchiPlus, Copyright ©2026, First Track Solution Technologies. All rights reserved      </div>

    </div>
  );
};

export default CookiesPolicy;