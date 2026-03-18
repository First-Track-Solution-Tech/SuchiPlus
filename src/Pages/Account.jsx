import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaCrown,
  FaDownload,
  FaTv
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Account = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const features = [
    {
      icon: <FaCrown className="text-yellow-400 text-2xl" />,
      title: "Premium Access",
      desc: "Unlock all movies & series"
    },
    {
      icon: <FaDownload className="text-blue-400 text-2xl" />,
      title: "Offline Downloads",
      desc: "Watch anytime without internet"
    },
    {
      icon: <FaTv className="text-purple-400 text-2xl" />,
      title: "Multi Device",
      desc: "TV, Mobile & Laptop support"
    },
    {
      icon: <FaLock className="text-green-400 text-2xl" />,
      title: "Secure Account",
      desc: "Your data is fully protected"
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-6 text-white
    bg-gradient-to-br from-black via-gray-900 to-black">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Create Account
      </h1>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-2 gap-4 items-start">

        {/* LEFT: Form */}
        <div className="w-full max-w-md mx-auto bg-gradient-to-br from-gray-900 to-gray-800
        border border-gray-700 p-8 rounded-2xl shadow-xl">

          <div className="text-center mb-6">
            <FaUserCircle className="text-6xl text-blue-500 mx-auto mb-3" />
            <p className="text-gray-400 text-sm">
              Join SuchiPlus and start streaming
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2">
              <FaUserCircle className="text-gray-400 mr-2" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent w-full outline-none text-sm"
                required
              />
            </div>

            <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent w-full outline-none text-sm"
                required
              />
            </div>

            <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2">
              <FaPhone className="text-gray-400 mr-2" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="bg-transparent w-full outline-none text-sm"
                required
              />
            </div>

            <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="bg-transparent w-full outline-none text-sm"
                required
              />
            </div>

            <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="bg-transparent w-full outline-none text-sm"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700
              py-2 rounded-lg font-semibold transition"
            >
              Create Account
            </button>

          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-gray-700"></div>
            <span className="text-gray-400 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

{/* Signin Link */}
        <p className="text-gray-400 text-center mt-6">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-400 hover:underline">
            Sign In
          </Link>
        </p>

          
        </div>

        {/* RIGHT: Vertical Feature Cards */}
        <div className="flex flex-col gap-6 lg:-ml-12">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
              border border-gray-700 p-8 rounded-2xl
              hover:scale-[1.05] hover:border-blue-500
              transition duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-5">
                {item.icon}
                <div>
                  <h3 className="font-semibold text-xl">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-base mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Account;