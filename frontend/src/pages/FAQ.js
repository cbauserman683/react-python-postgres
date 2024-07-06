import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer web development, mobile app development, and UI/UX design services.",
    },
    {
      question: "How can I contact you?",
      answer:
        "You can contact us through the contact form on our Contact page.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We use modern technologies such as React, FastAPI, and PostgreSQL for our projects.",
    },
  ];

  return (
    <div class="min-h-screen flex flex-col items-center bg-gray-100 p-8">
      <div class="max-w-3xl w-full">
        <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h1>
        <div class="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} class="bg-white p-6 rounded-lg shadow-md">
              <h2 class="text-2xl font-semibold mb-4">{faq.question}</h2>
              <p class="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
