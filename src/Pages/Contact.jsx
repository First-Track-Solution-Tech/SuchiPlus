import React, { useState } from "react";

const Contact = () => {
  const [countryCode, setCountryCode] = useState("+91");

  const [form, setForm] = useState({
    name: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const fullNumber = `${countryCode}${form.contactNumber}`;

    alert("Message sent successfully!");
    console.log("Contact Number:", fullNumber);

    setForm({
      name: "",
      contactNumber: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white px-6 pt-28">
      
      <h1 className="text-4xl font-bold text-center mb-10 text-white">
        Contact Us
      </h1>

      <div className="max-w-xl mx-auto bg-gray-900 p-8 rounded-xl shadow-xl border border-gray-700">
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

          {/* Contact Number with Country Code */}
          <div className="flex">

            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="bg-gray-800 text-white p-3 rounded-l border border-gray-700 focus:outline-none"
            >
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+61">🇦🇺 +61</option>
              <option value="+81">🇯🇵 +81</option>
              <option value="+49">🇩🇪 +49</option>
              <option value="+33">🇫🇷 +33</option>
              <option value="+86">🇨🇳 +86</option>
              <option value="+971">🇦🇪 +971</option>
            </select>

            <input
              type="tel"
              placeholder="Contact Number"
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
            className="w-full bg-blue-600 py-3 rounded-lg hover:bg-blue-700 transition"
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