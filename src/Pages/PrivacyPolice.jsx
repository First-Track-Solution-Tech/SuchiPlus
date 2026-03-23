import React from "react";
import { Route } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black px-6 py-35">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-8">
          Privacy Policy
        </h1>

        <div className="bg-gradient-to-br from-black to-blue-950 rounded-xl shadow-md p-8 space-y-6">
          <p className="text-white">
            Your privacy is important to us. This Privacy Policy explains how
            we collect, use, and protect your personal information when you use
            our website and services.
          </p>

          <div>
            <h2 className="text-lg font-bold text-blue-500 mb-2">
              Information We Collect
            </h2>
            <p className="text-white">
              We may collect personal information such as your name, email
              address, contact number, and usage data to improve our services.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-blue-500 mb-2">
              How We Use Your Information
            </h2>
            <p className="text-white">
              The information collected is used to provide better services,
              improve user experience, communicate updates, and ensure platform
              security.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-blue-500 mb-2">
              Data Protection
            </h2>
            <p className="text-white">
              We implement appropriate security measures to safeguard your data
              from unauthorized access or misuse.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-blue-500 mb-2">
              Third-Party Services
            </h2>
            <p className="text-white">
              We do not sell your personal information. However, we may share
              limited data with trusted third-party service providers to
              operate our services effectively.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-blue-500 mb-2">
              Updates to This Policy
            </h2>
            <p className="text-white">
              We may update this Privacy Policy from time to time. Changes will
              be reflected on this page.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;