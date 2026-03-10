import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Logo - Top Left */}
        <div className="mb-8">
          <img
            src="/images/logo.png"
            alt="SuchiPlus Logo"
            className="w-36"
          />
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/About" className="hover:text-gray-400">About</Link></li>
              <li><Link to="/Blog" className="hover:text-gray-400">Blog</Link></li>
              <li><Link to="/Contact" className="hover:text-gray-400">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/HelpCenter" className="hover:text-gray-400">Help Center</Link></li>
              <li><Link to="/FAQ" className="hover:text-gray-400">FAQs</Link></li>
              <li><Link to="/TermsOfService" className="hover:text-gray-400">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/PrivacyPolicy" className="hover:text-gray-400">Privacy Policy</Link></li>
              <li><Link to="/CookiePolicy" className="hover:text-gray-400">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition duration-300">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-sky-500 transition duration-300">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition duration-300">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} SuchiPlus. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;