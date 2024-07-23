import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-gray-300 text-center py-4 absolute b-0 w-screen">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <Link href="/AboutUs">
              <h4 className="mx-4 hover:text-gray-400">About Us</h4>
            </Link>
            <span>|</span>
            <Link href="/ContactUs">
              <h4 className="mx-4 hover:text-gray-400">Contact Us</h4>
            </Link>
          </div>
          <p className="mt-2">&copy; 2024 India Elects. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
