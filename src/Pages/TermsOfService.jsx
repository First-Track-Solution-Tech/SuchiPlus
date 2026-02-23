import React from "react";
import { Route } from "react-router-dom";

const TermsOfService = () => {

  return (
    <div className="min-h-screenbg-gradient-to-br from-black to-blue-900 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-blue-800">
            Terms & Conditions
          </h1>
          <p className="text-gray-400 mt-3">
            Please review the following terms carefully before using our platform.
          </p>
        </div>

        {/* Content Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="border rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              Platform Usage
            </h2>
            <p className="text-gray-500">
              Users must access the platform responsibly and agree not to misuse,
              disrupt, or interfere with the services provided.
            </p>
          </div>

          <div className="border rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              User Obligations
            </h2>
            <p className="text-gray-500">
              You are responsible for ensuring that your information is accurate
              and up to date while using our services.
            </p>
          </div>

          <div className="border rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              Modifications
            </h2>
            <p className="text-gray-500">
              We may revise these terms at any time. Continued use of the
              platform indicates your acceptance of updated conditions.
            </p>
          </div>

          <div className="border rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              Service Availability
            </h2>
            <p className="text-gray-500">
              We strive to maintain uninterrupted services but do not guarantee
              continuous availability due to maintenance or unforeseen issues.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};


export default TermsOfService;