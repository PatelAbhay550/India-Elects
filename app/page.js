import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mt-8">
            Welcome to <span className="font-bold">India Elects</span>
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Your definitive source for comprehensive election data and analysis
            in India. Whether you're a political enthusiast, a researcher, or a
            citizen eager to stay informed, India Elects brings you real-time
            updates, historical trends, and insightful commentary on elections
            across the nation.
          </p>
          <Link href="/loksabha_result_2024">
            <div className="block mx-auto mt-8 max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 cursor-pointer">
              <div className="bg-white p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Constituency-Wise Result
                </h2>
                <p className="text-sm text-gray-600">
                  Get analytics of each constituency | Lok Sabha Election 2024
                </p>
              </div>
            </div>
          </Link>
          <Link href="/Summary">
            <div className="block mx-auto mt-8 max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 cursor-pointer">
              <div className="bg-white p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Summary | 2024 Lok Sabha
                </h2>
                <p className="text-sm text-gray-600">
                  Get analytics of short summary for Lok Sabha Election 2024
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <footer className="bg-gray-800 text-gray-300 text-center py-4">
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
    </div>
  );
};

export default HomePage;
