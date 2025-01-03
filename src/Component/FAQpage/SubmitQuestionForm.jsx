import React, { useState } from "react";
import Swal from "sweetalert2";
const SubmitQuestionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can handle the form submission (e.g., send the data to an API).
    console.log("Form submitted:", formData);

    Swal.fire({
      title: "Thank you!",
      text: "Our support team will review your case and reach out to you as soon as possible.",
      icon: "success",
    });
    event.target.reset();
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-teal-700 mb-4">
        Submit Your Question
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-teal-700 font-semibold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-teal-700 font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="question"
            className="block text-teal-700 font-semibold mb-2"
          >
            Question
          </label>
          <textarea
            id="question"
            rows="4"
            className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Your Question"
            value={formData.question}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-teal-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-teal-700 transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmitQuestionForm;
