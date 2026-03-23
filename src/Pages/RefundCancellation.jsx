import React from "react";

const RefundCancellation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 pt-35 pb-16">
      
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
        Refund & Cancellation Policy
      </h1>

      {/* Container */}
<div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-blue-900/80 backdrop-blur-lg p-6 md:p-10 rounded-xl shadow-2xl space-y-8 border border-gray-700">        
        {/* Introduction */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Overview
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            At SuchiPlus, we aim to provide the best streaming experience.
            Please read our refund and cancellation policies carefully before
            subscribing to our services.
          </p>
        </section>

        {/* Refund Policy */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Refund Policy
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm md:text-base">
            <li>All subscription payments are non-refundable once processed.</li>
            <li>
              Refunds may be considered only in case of duplicate transactions
              or technical issues.
            </li>
            <li>
              Approved refunds will be processed within 5–7 business days.
            </li>
            <li>
              Contact our support team for refund requests with proper details.
            </li>
          </ul>
        </section>

        {/* Cancellation Policy */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Cancellation Policy
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm md:text-base">
            <li>
              You can cancel your subscription anytime from your account settings.
            </li>
            <li>
              Cancellation will stop auto-renewal for the next billing cycle.
            </li>
            <li>
              You will continue to have access until the end of your current plan.
            </li>
            <li>
              No partial refunds will be provided for unused time.
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Need Help?
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            If you have any questions about refunds or cancellations, feel free to contact us:
          </p>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Email: support@suchiplus.com <br />
            Phone: +91 1234567890
          </p>
        </section>

      </div>
    </div>
  );
};

export default RefundCancellation;