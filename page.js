import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mt-8">
            <span className="font-bold">India Elects</span> - Election Results
            Hub
          </h1>

          <Link href="/loksabha_result_2024">
            <div className="block mx-auto mt-8 max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 cursor-pointer">
              <div className="bg-white p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Lok Sabha 2024 Constituency-Wise Result
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
          <Link href="/stateresults">
            <div className="block mx-auto mt-8 max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 cursor-pointer">
              <div className="bg-white p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  State Election Results
                </h2>
                <p className="text-sm text-gray-600">
                  Get analytics of State Legislative Assembly Election 2024
                </p>
              </div>
            </div>
          </Link>
          <Link href="/politician">
            <div className="block mx-auto mt-8 max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 cursor-pointer">
              <div className="bg-white p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Politician Biodata
                </h2>
                <p className="text-sm text-gray-600">
                  Get detailed biography of Indian Politians and leaders
                </p>
              </div>
            </div>
          </Link>
          <Link href="/cheif-ministers-list">
            <div className="block mx-auto mt-8 max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 cursor-pointer">
              <div className="bg-white p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Chief Ministers of India
                </h2>
                <p className="text-sm text-gray-600">
                  List of Chief Ministers of Indian states with their respective
                  states.
                </p>
              </div>
            </div>
          </Link>
        </div>{" "}
        <p className="text-lg text-gray-600 mt-4 mb-2 text-justify">
          Your definitive source for comprehensive election data and analysis in
          India. Whether you're a political enthusiast, a researcher, or a
          citizen eager to stay informed, India Elects brings you real-time
          updates, historical trends, and insightful commentary on elections
          across the nation.
        </p>
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
