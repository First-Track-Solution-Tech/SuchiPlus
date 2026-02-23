import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 pt-28">
      <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>

      <div className="max-w-xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full p-3 bg-gray-800 rounded border border-gray-700"
            required
          />
          <input
            type="text"
            placeholder="Contact Number"
            value={form.contactNumber}
            onChange={(e) =>
              setForm({ ...form, contactNumber: e.target.value })
            }
            className="w-full p-3 bg-gray-800 rounded border border-gray-700"
            required
          />


          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full p-3 bg-gray-800 rounded border border-gray-700"
            required
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="w-full p-3 bg-gray-800 rounded border border-gray-700"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 py-3 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>

      <p className="text-center text-gray-400 mt-8">
        Email: support@netplus.com | Phone: +91 1234567890
      </p>
    </div>
  );
};

export default Contact;