import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", contactNumber: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white px-6 pt-28 pb-10">
      
      <h1 className="text-4xl font-bold text-center mb-10">
        Contact Us
      </h1>

      <div className="max-w-xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-2xl">
        
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Phone Number with Country Code */}
          <div className="flex">
            <span className="px-4 flex items-center bg-gray-700 rounded-l border border-gray-700">
              +91
            </span>
            <input
              type="tel"
              placeholder="Enter phone number"
              value={form.contactNumber}
              onChange={(e) =>
                setForm({ ...form, contactNumber: e.target.value })
              }
              className="w-full p-3 bg-gray-800 rounded-r border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Message */}
          <textarea
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-lg hover:opacity-90 transition duration-300 font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>

      <p className="text-center text-gray-400 mt-8">
        Email: support@suchiplus.com | Phone: +91 1234567890
      </p>
    </div>
  );
};

export default Contact;