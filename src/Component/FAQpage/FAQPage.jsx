import React, { useState } from "react";
import {
  FaSearch,
  FaChevronDown,
  FaChevronUp,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import SubmitQuestionForm from "./SubmitQuestionForm";
import ShareFAQ from "./ShareFAQ";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const faqData = [
    {
      question: "What services do We offer?",
      answer:
        "We offer a Pakistan of Cash on delivery and services , In world wide you have to pay at least 50%.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can contact our customer support team via email at web.takib@gmail.com or by phone at +92-309-6867168.",
    },
    {
      question: "What are your business hours?",
      answer: "Our business hours are Monday to Friday, 9:00 AM to 5:00 PM.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes, we offer a 30-day money-back guarantee on all our products and services.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping times vary depending on your location. Typically, domestic orders take 3-5 business days, while international orders may take 7-14 business days.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFAQs = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 bg-white shadow-md z-10">
        <div className="container mx-auto px-6 py-3">
          <h1 className="text-2xl font-bold text-teal-600">About Us</h1>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3">
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  className="w-full px-4 py-2 rounded-full border-2 border-teal-300 focus:outline-none focus:border-teal-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch className="absolute right-3 top-3 text-teal-400" />
              </div>
            </div>

            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="mb-4 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg"
              >
                <button
                  className={`w-full px-6 py-4 text-left font-semibold text-teal-700 hover:text-teal-900 focus:outline-none transition-all duration-300 ease-in-out ${
                    activeIndex === index ? "border-b border-grey-500" : ""
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center">
                    <span>{faq.question}</span>
                    {activeIndex === index ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </div>
                </button>
                {activeIndex === index && (
                  <div className="px-6 py-4 text-teal-800">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>

          <div className="w-full md:w-1/3">
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
              <img src="/faq.jpg" className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900 to-transparent opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-50"></div>
            </div>
          </div>
        </div>

        <SubmitQuestionForm />

        <ShareFAQ />
      </div>
    </div>
  );
};

export default FAQPage;
