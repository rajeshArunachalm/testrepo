"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What are the documents required for property purchase?",
    answer:
      "You will need identity proof, address proof, PAN card, income proof, and property-related documents like sale deed, encumbrance certificate, and NOC from the society.",
  },
  {
    question: "How can I get a home loan?",
    answer:
      "You can apply for a home loan through our partner banks. We provide end-to-end assistance with documentation, application, and approval process.",
  },
  {
    question: "What is RERA and why is it important?",
    answer:
      "RERA (Real Estate Regulatory Authority) ensures transparency and accountability in real estate transactions. All our listed properties are RERA-compliant.",
  },
  {
    question: "Can I schedule a property visit?",
    answer:
      "Yes, you can schedule property visits directly through our platform. Our experts will coordinate with developers and accompany you during visits.",
  },
  {
    question: "What are the payment terms for properties?",
    answer:
      "Payment terms vary by developer and project. Typically, there are milestone-based payment plans, construction-linked plans, and down payment plans available.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-gray-600">
            Get answers to common queries about property buying
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 py-3.5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm font-medium text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-3.5 pt-1">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
