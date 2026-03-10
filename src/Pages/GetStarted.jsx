import React from "react";

const GetStarted = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-indigo-900 px-4">

      {/* Card */}
      <div className="bg-black/80 backdrop-blur-md text-white rounded-2xl shadow-2xl w-full max-w-md p-8">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-center mb-2 text-pink-500">
          SuchiPlus
        </h1>

        <p className="text-sm text-gray-400 text-center mb-4">
          Step 1 of 3
        </p>

        <h2 className="text-2xl font-semibold text-center mb-2">
          Welcome Back 👋
        </h2>

        <p className="text-gray-400 text-center mb-6">
          Continue your streaming journey. Enter your password to access your
          account.
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="text-sm text-gray-400">Email</label>
          <input
            type="email"
            value="yourmail@example.com"
            disabled
            className="w-full mt-1 p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-300"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="text-sm text-gray-400">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full mt-1 p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-pink-500"
          />
        </div>

        {/* Forgot */}
        <div className="text-right mb-6">
          <a
            href="#"
            className="text-sm text-pink-400 hover:underline"
          >
            Forgot password?
          </a>
        </div>

        {/* Button */}
        <button className="w-full bg-gradient-to-r from-pink-500 to-red-500 py-3 rounded-lg font-semibold hover:opacity-90 transition">
          Continue
        </button>

        {/* Bottom text */}
        <p className="text-center text-gray-400 text-sm mt-6">
          New to SuchiPlus?{" "}
          <span className="text-pink-400 cursor-pointer hover:underline">
            Create an account
          </span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;