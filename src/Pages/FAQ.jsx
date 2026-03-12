import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is SuchiPlus?",
      answer:
        "SuchiPlus is an online streaming platform where you can watch movies and series anytime, anywhere.",
    },
    {
      question: "How can I subscribe?",
      answer:
        "You can subscribe by creating an account and choosing your preferred subscription plan from the pricing section.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time from your account settings.",
    },
    {
      question: "Is SuchiPlus available on mobile?",
      answer:
        "Yes, SuchiPlus is available on mobile, tablet, and desktop devices.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can contact our support team through the Contact page or email us at support@SuchiPlus.com.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-800 to-blue-950 text-white px-6 pt-28">
      
      <h1 className="text-4xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h1>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg shadow-md overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-800 transition"
            >
              <span className="font-semibold">{faq.question}</span>
              <span className="text-blue-400 text-xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>

            {activeIndex === index && (
              <div className="px-6 pb-4 text-gray-400">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center text-gray-400 mt-16 text-sm">
© SuchiPlus, Copyright ©2026, First Track Solution Technologies. All rights reserved      </div>
    </div>
  );
};

export default FAQ;