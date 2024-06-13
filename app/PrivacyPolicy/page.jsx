import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Privacy Policy | India Elects",
  description:
    "The details about our privacy policy and how we collect and use data in our website",
};
const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Link href="/">
            <h2 className="text-2xl font-bold mb-8 cursor-pointer bg-zinc-400 px-3 w-fit ">
              Back to Home
            </h2>
          </Link>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Privacy Policy
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            At India Elects, we are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy outlines how we collect, use, and safeguard your data when
            you visit our website.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Information Collection
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            We collect information from you when you fill out a form or interact
            with our website in other ways. This may include your name, email
            address, and any other information you provide.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Use of Information
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            The information we collect may be used to personalize your
            experience, improve our website, and send periodic emails regarding
            your inquiries or other products and services.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Security
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            We implement a variety of security measures to maintain the safety
            of your personal information when you enter, submit, or access your
            personal information.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Third-Party Disclosure
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            We do not sell, trade, or otherwise transfer to outside parties your
            personally identifiable information unless we provide users with
            advance notice.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Contact Us
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a href="mailto:patelabhay550@gmail.com" className="text-blue-600">
              patelabhay550@gmail.com
            </a>
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

export default PrivacyPolicy;
