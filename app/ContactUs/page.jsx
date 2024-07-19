"use client";
import Link from "next/link";
import React, { useState } from "react";
export const metadata = {
  title: "Contact Us | India Elects",
  description:
    "Welcome to India Elects, your premier destination for comprehensive election data and analysis in India.",
};

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your email handling logic or API call
    const { title, message } = formData;
    const mailtoLink = `mailto:patelabhay550@gmail.com?subject=${encodeURIComponent(
      title
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
    // Optionally, you can use fetch or Axios to send data to a backend server
    // and handle the email sending securely from the server side.
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Link href="/">
            <h2 className="text-2xl font-bold mb-8 cursor-pointer bg-zinc-400 px-3 w-fit ">
              Back to Home
            </h2>
          </Link>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 mb-8">
            Have questions, suggestions, or just want to get in touch? Fill out
            the form below or email us directly at{" "}
            <a href="mailto:patelabhay550@gmail.com" className="text-blue-600">
              patelabhay550@gmail.com
            </a>
            .
          </p>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                placeholder="Enter title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                id="message"
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
          <p className="text-sm text-gray-600">
            By submitting this form, you agree to our{" "}
            <Link href="/PrivacyPolicy" className="text-blue-600">
              privacy policy
            </Link>
            .
          </p>
        </div>
      </div>
      <footer className="bg-gray-800 text-gray-300 text-center py-4">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <a href="/AboutUs" className="mx-4 hover:text-gray-400">
              About Us
            </a>
            <span>|</span>
            <a href="/ContactUs" className="mx-4 hover:text-gray-400">
              Contact Us
            </a>
          </div>
          <p className="mt-2">&copy; 2024 India Elects. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactUsPage;
