import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Signin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.emailOrPhone && formData.password) {
      alert("Login Successful");
      navigate("/");
    } else {
      alert("Please fill all fields");
    }
  };

  const handleGoogleSignIn = () => {
    alert("Google Sign-In Successful (Demo)");
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black to-blue-900">
      
      <div className="bg-gray-800 p-8 rounded-lg w-full max-w-md shadow-lg">

        <h2 className="text-white text-2xl font-bold mb-6 text-center">
          Sign In
        </h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>

          {/* Email or Phone */}
          <input
            type="text"
            name="emailOrPhone"
            placeholder="Email or Phone "
            value={formData.emailOrPhone}
            onChange={handleChange}
            className="w-full p-3 mb-4 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 mb-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Forgot Password */}
          <div className="text-right mb-4">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-400 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Signin Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold transition duration-300"
          >
            Sign In
          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-600"></div>
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-600"></div>
        </div>

        {/* Google Sign In */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-3 bg-white text-black py-2 rounded font-semibold hover:bg-gray-200 transition duration-300"
        >
          <FcGoogle size={22} />
          Sign in with Google
        </button>

        {/* Register Link */}
        <p className="text-gray-400 text-center mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-400 hover:underline">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Signin;