import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
    <Link to="/About" className="hover:text-gray-400">
      About
    </Link>
  </li>

  <li>
    <Link to="/careers" className="hover:text-gray-400">
      Careers
    </Link>
  </li>

  <li>
    <Link to="/Contact" className="hover:text-gray-400">
      Contact
    </Link>
  </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/HelpCenter" className="hover:text-gray-400">Help Center</Link></li>
              <li><Link to="/FAQ" className="hover:text-gray-400">FAQs</Link></li>
              <li><Link to="/TermsOfService" className="hover:text-gray-400">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/PrivacyPolicy" className="hover:text-gray-400">Privacy Policy</Link></li>
              <li><Link to="/CookiePolicy" className="hover:text-gray-400">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Facebook</a></li>
              <li><a href="#" className="hover:text-gray-400">Twitter</a></li>
              <li><a href="#" className="hover:text-gray-400">Instagram</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} NETPLUS. All rights reserved.
        </div>

      </div>

    </footer>

  );
};

export default Footer;