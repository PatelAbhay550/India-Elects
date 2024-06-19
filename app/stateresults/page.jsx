import Link from "next/link";
import React from "react";

const Stateresult = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <Link href="/stateresults/Sikkim">
            <div className="block mx-auto mt-8 max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 cursor-pointer">
              <div className="bg-white p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Sikkim Legislative Assembly Result 2024
                </h2>
                <p className="text-sm text-gray-600">
                  Get analytics of each constituency | Sikkim Election 2024
                </p>
              </div>
            </div>
          </Link>
          <Link href="/stateresults/Andhrapradesh">
            <div className="block mx-auto mt-8 max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 cursor-pointer">
              <div className="bg-white p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Andhra Pradesh Legislative Assembly Result 2024
                </h2>
                <p className="text-sm text-gray-600">
                  Get analytics of each constituency | Andhra Pradesh Election
                  2024
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
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
    </div>
  );
};

export default Stateresult;
