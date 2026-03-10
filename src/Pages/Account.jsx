import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  FaUserCircle, FaCrown, FaLock, FaDownload, FaTv, FaSignOutAlt, FaGoogle, FaEye, FaEyeSlash 
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Account = () => {
  const navigate = useNavigate();

  const accountOptions = [
    { icon: <FaCrown className="text-yellow-400 text-lg" />, title: "Subscription", desc: "Manage your streaming plan, billing details and upgrade options.", action: "View Plans" },
    { icon: <FaDownload className="text-blue-400 text-lg" />, title: "Downloads", desc: "Access your downloaded movies and manage offline viewing.", action: "Manage Downloads" },
    { icon: <FaTv className="text-purple-400 text-lg" />, title: "Devices", desc: "See which devices are currently signed into your account.", action: "View Devices" },
    { icon: <FaLock className="text-green-400 text-lg" />, title: "Security", desc: "Update your password and secure your SuchiPlus account.", action: "Update Security" },
  ];

  // Register form state
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", password: "", confirmPassword: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const number = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, phone: number });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword) {
      alert("Please fill all fields"); return;
    }
    if (formData.phone.length < 6) { alert("Enter valid phone number"); return; }
    if (formData.password !== formData.confirmPassword) { alert("Passwords do not match"); return; }

    const fullPhone = `${countryCode}${formData.phone}`;
    console.log("Full Phone:", fullPhone);
    alert("Registration Successful");
    navigate("/signin");
  };

  const handleGoogleRegister = () => {
    alert("Google Registration Successful (Demo)");
    navigate("/");
  };

  return (
    <div className="min-h-screen pt-35 pb-4 px-4 text-white bg-gradient-to-br from-black via-gray-900 to-black">

      {/* Page Title */}
      <h1 className="text-2xl md:text-3xl font-bold mb-10 text-center md:text-left">Account</h1>

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Left Box - Register Form */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 p-4 rounded-xl shadow-md space-y-3">

            <FaUserCircle className="text-5xl text-blue-500 mx-auto mb-2" />
            <h2 className="text-lg font-semibold text-center mb-2">Register Your Account</h2>

            <form onSubmit={handleSubmit} className="space-y-2">
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full p-2 text-sm bg-gray-700 rounded border border-gray-600 focus:outline-none"/>
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 text-sm bg-gray-700 rounded border border-gray-600 focus:outline-none"/>

              {/* Phone + Country code */}
              <div className="flex">
                <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)} className="bg-gray-700 text-white p-2 rounded-l text-sm border border-gray-600 focus:outline-none">
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                </select>
                <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="w-full p-2 text-sm bg-gray-700 rounded-r border border-gray-600 focus:outline-none"/>
              </div>

              <div className="relative">
                <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-2 text-sm bg-gray-700 rounded border border-gray-600 focus:outline-none"/>
                <span onClick={()=>setShowPassword(!showPassword)} className="absolute right-2 top-2 cursor-pointer">{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
              </div>

              <div className="relative">
                <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} className="w-full p-2 text-sm bg-gray-700 rounded border border-gray-600 focus:outline-none"/>
                <span onClick={()=>setShowConfirmPassword(!showConfirmPassword)} className="absolute right-2 top-2 cursor-pointer">{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}</span>
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm transition">Register</button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-2 text-gray-400 text-xs">
              <span className="border-t border-gray-600 flex-1 mr-2"></span>OR<span className="border-t border-gray-600 flex-1 ml-2"></span>
            </div>

            {/* Google Sign-in */}
            <button onClick={handleGoogleRegister} className="w-full flex items-center justify-center gap-2 bg-white text-black py-2 rounded text-sm hover:bg-gray-200 transition">
              <FcGoogle size={18}/> Sign up with Google
            </button>

            <p className="text-gray-400 text-xs text-center mt-1">
              Already have an account? <Link to="/signin" className="text-blue-400 hover:underline">Sign In</Link>
            </p>

          </div>
        </div>

        {/* Right Box - Account Options */}
<div className="lg:col-span-2 grid md:grid-cols-2 gap-5">
  {accountOptions.map((item, index) => (
    <div
      key={index}
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
      border border-gray-700 p-6 rounded-xl
      hover:scale-[1.03] hover:border-blue-500
      transition duration-300 cursor-pointer shadow-md"
    >
      <div className="flex items-start gap-4">
        <div className="text-2xl">{item.icon}</div>

        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2">{item.title}</h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            {item.desc}
          </p>

          <p className="text-blue-400 text-sm mt-3 font-medium">
            {item.action} →
          </p>
        </div>
      </div>
    </div>
  ))}
</div>
</div>
      {/* Logout */}
      <div className="mt-6 border-t border-gray-800 pt-3 text-center md:text-left">
        <button className="flex items-center gap-2 text-red-400 hover:text-red-500 transition mx-auto md:mx-0 text-sm">
          <FaSignOutAlt /> Logout
        </button>
      </div>

    </div>
  )
}

export default Account;