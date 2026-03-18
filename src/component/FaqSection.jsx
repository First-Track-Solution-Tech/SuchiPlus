import React, { useState } from "react";
import { Link } from "react-router-dom";

const faqData = [
  "What is SuchiPlus?",
  "How much does SuchiPlus cost?",
  "Where can I watch?",
  "How do I cancel?",
  "What can I watch on SuchiPlus?",
  "Is SuchiPlus good for kids?"
];

const FaqSection = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-black text-white px-6 py-20">
      <h2 className="text-4xl font-extrabold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto space-y-2">
        {faqData.map((question, index) => (
          <div key={index} className="bg-[#2d2d2d]">
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="w-full flex justify-between items-center px-6 py-5 text-lg font-medium hover:bg-[#414141] transition"
            >
              {question}
              <span className="text-3xl">
                {open === index ? "×" : "+"}
              </span>
            </button>

            {open === index && (
              <div className="px-6 py-5 border-t border-gray-600 text-gray-300">
                This is a SuchiPlus-style FAQ answer section. You can replace
                this text with real content anytime.
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <p className="mb-6 text-lg">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-4 py-4 rounded bg-black border border-gray-500 text-white"
          />
          <Link 
          to="/Account" className="bg-blue-800 px-8 py-4 rounded text-lg font-semibold hover:bg-blue-900">
            Get Started →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
