import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-gray-300 text-center py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">India Elects</h3>
              <p className="text-gray-400">
                Your definitive source for comprehensive election data and political information in India.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/loksabha_result_2024" className="block hover:text-blue-400 transition-colors">
                  Lok Sabha 2024
                </Link>
                <Link href="/prime-ministers" className="block hover:text-blue-400 transition-colors">
                  Prime Ministers
                </Link>
                <Link href="/neighbouring-countries" className="block hover:text-blue-400 transition-colors">
                  Neighbouring Countries
                </Link>
                <Link href="/politician" className="block hover:text-blue-400 transition-colors">
                  Politicians
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Information</h4>
              <div className="space-y-2">
                <Link href="/AboutUs" className="block hover:text-blue-400 transition-colors">
                  About Us
                </Link>
                <Link href="/ContactUs" className="block hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
                <Link href="/PrivacyPolicy" className="block hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-6">
            <p className="mb-2">
              This content is protected by <a href="https://www.dmca.com/r/2lgljqm" className="text-blue-400 hover:text-blue-300"> DCMA </a>
            </p>
            <p>&copy; 2024 India Elects. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
