"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function PropertyFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is the property RERA registered?",
      answer:
        "Yes, Prestige Nautilus is registered under RERA with registration number P51800012345. All necessary approvals and clearances are in place.",
    },
    {
      question: "What are the payment plans available?",
      answer:
        "We offer flexible payment plans including construction-linked plans, down payment plans, and possession-linked plans. Our team can help you choose the best option based on your financial situation.",
    },
    {
      question: "When can I expect possession?",
      answer:
        "The expected possession date is December 2026. However, this is subject to force majeure and government approvals.",
    },
    {
      question: "What is the maintenance charge?",
      answer:
        "The maintenance charge is approximately ₹8-10 per sq.ft per month, which includes upkeep of common areas, security, and basic amenities.",
    },
    {
      question: "Are there any hidden charges?",
      answer:
        "There are no hidden charges. All costs including stamp duty, registration charges, GST, and other statutory charges will be clearly mentioned in the agreement.",
    },
    {
      question: "Can I customize my apartment?",
      answer:
        "Yes, customization options are available subject to structural feasibility. Our design team will work with you to personalize your home.",
    },
    {
      question: "Is home loan assistance available?",
      answer:
        "Yes, we have tie-ups with leading banks and financial institutions to help you with home loan processing at competitive interest rates.",
    },
    {
      question: "What is the car parking policy?",
      answer:
        "Each apartment comes with dedicated covered car parking. Additional parking slots can be purchased subject to availability.",
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
      <h2 className="text-lg sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
        Prestige Nautilus - Frequently Asked Questions
      </h2>

      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div
            key={faq.question}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-4 sm:px-5 py-3 sm:py-3.5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
              <span className="text-xs sm:text-sm font-medium text-gray-900 pr-3 sm:pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-gray-500 transition-transform shrink-0 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-4 sm:px-5 pb-3 sm:pb-3.5 pt-1">
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
