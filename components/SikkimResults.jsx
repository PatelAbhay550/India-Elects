import React from "react";
import stateListData from "./sikkim-result.json"; // Assuming you have state-list.json in the same directory
import Link from "next/link";

const ElectionResults = ({ results }) => {
  // Map state codes to state names
  const stateCodeToName = {};
  stateListData.forEach((state) => {
    stateCodeToName[state.STATE_CODE] = state.STATE;
  });

  // Function to group results by state
  const groupResultsByState = () => {
    // Create an object to hold grouped results
    const groupedResults = {};

    // Iterate through results and group by stateCode
    results.forEach((result) => {
      const stateName = stateCodeToName[result.stateCode];
      if (!groupedResults[stateName]) {
        groupedResults[stateName] = [];
      }
      groupedResults[stateName].push(result);
    });

    return groupedResults;
  };

  const groupedResults = groupResultsByState();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-teal-50">
      {/* Hero Header Section with Himalayan Theme */}
      <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full"></div>
          <div className="absolute top-1/2 right-10 w-16 h-16 bg-white/10 rounded-full"></div>
        </div>
        <div className="relative container mx-auto px-6 py-8">
          <Link href="/" className="inline-block group mb-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition-all duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold group-hover:text-blue-100 transition-colors duration-300">
                IndiaElects
              </h2>
            </div>
          </Link>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-2">
                🏔️ Sikkim Assembly Results 2024
              </h1>
              <p className="text-blue-100 text-lg">
                Complete constituency-wise results from the Himalayan state
              </p>
            </div>
            <div className="mt-4 lg:mt-0 flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Results Declared</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {Object.keys(groupedResults).length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No Results Found</h3>
              <p className="text-gray-600">Election results are not available at this time.</p>
            </div>
          </div>
        ) : (
          <>
            {Object.entries(groupedResults).map(([stateName, stateResults]) => (
              <div key={stateName} className="space-y-8">
                {/* Chief Minister Spotlight Card */}
                <div className="bg-gradient-to-r from-teal-600 to-blue-700 rounded-2xl shadow-xl overflow-hidden">
                  <div className="p-8 text-white">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                      <div className="relative">
                        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                          <img
                            className="w-full h-full object-cover"
                            src="https://sikkim.gov.in/Content/images/hcm.jpg"
                            alt="Sikkim Chief Minister - Prem Singh Tamang (Golay)"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-teal-800 px-3 py-1 rounded-full text-sm font-bold">
                          Winner
                        </div>
                      </div>
                      <div className="text-center lg:text-left">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-2">
                          Prem Singh Tamang (Golay)
                        </h2>
                        <p className="text-xl text-teal-100 mb-3">Chief Minister-elect</p>
                        <div className="flex flex-wrap gap-3">
                          <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                            Sikkim Krantikari Morcha (SKM)
                          </span>
                          <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                            2nd Term as CM
                          </span>
                          <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                            Himalayan State Leader
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* State Information Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Sikkim - The Himalayan Gem
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                      <div className="text-3xl mb-3">🏔️</div>
                      <div className="text-2xl font-bold text-blue-600 mb-2">Himalayan State</div>
                      <div className="text-blue-800 text-sm">Northeast India's mountain jewel</div>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                      <div className="text-3xl mb-3">🌱</div>
                      <div className="text-2xl font-bold text-green-600 mb-2">Organic State</div>
                      <div className="text-green-800 text-sm">100% organic farming state</div>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                      <div className="text-3xl mb-3">🏛️</div>
                      <div className="text-2xl font-bold text-purple-600 mb-2">32 Seats</div>
                      <div className="text-purple-800 text-sm">Legislative Assembly</div>
                    </div>
                  </div>
                </div>

                {/* Election Overview */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Election Overview
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                    <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        {stateResults.length}
                      </div>
                      <div className="text-blue-800 font-medium">Total Constituencies</div>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        {stateResults.filter(result => result.status === "Result Declared").length}
                      </div>
                      <div className="text-green-800 font-medium">Results Declared</div>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                      <div className="text-3xl font-bold text-purple-600 mb-2">
                        {new Set(stateResults.map(result => result.leadingParty)).size}
                      </div>
                      <div className="text-purple-800 font-medium">Parties Won</div>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl">
                      <div className="text-3xl font-bold text-teal-600 mb-2">
                        100%
                      </div>
                      <div className="text-teal-800 font-medium">Counting Complete</div>
                    </div>
                  </div>
                </div>

                {/* Constituency Results */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white px-8 py-6">
                    <h2 className="text-2xl lg:text-3xl font-bold">Constituency-wise Results</h2>
                    <p className="text-gray-300 mt-2">Detailed breakdown of all {stateResults.length} constituencies in Sikkim</p>
                  </div>
                  
                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                      {stateResults.map((result, index) => (
                        <div
                          key={index}
                          className="group bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-teal-300 transition-all duration-300 transform hover:-translate-y-1"
                        >
                          {/* Constituency Header */}
                          <div className="border-b border-gray-200 pb-4 mb-4">
                            <h3 className="text-xl font-bold text-gray-800 group-hover:text-teal-600 transition-colors duration-300">
                              {result.constituency}
                            </h3>
                            <div className="flex items-center mt-2">
                              <span
                                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                                  result.status === "Result Declared"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-orange-100 text-orange-800"
                                }`}
                              >
                                <div
                                  className={`w-2 h-2 rounded-full mr-2 ${
                                    result.status === "Result Declared"
                                      ? "bg-green-400"
                                      : "bg-orange-400"
                                  }`}
                                ></div>
                                {result.status}
                              </span>
                            </div>
                          </div>

                          {/* Winner Section */}
                          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg mb-4">
                            <div className="flex items-center mb-2">
                              <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-sm font-medium text-green-800">Winner</span>
                            </div>
                            <p className="font-semibold text-gray-800 text-lg">
                              {result.leadingCandidate}
                            </p>
                            <p className="text-green-700 font-medium">
                              {result.leadingParty}
                            </p>
                          </div>

                          {/* Runner-up Section */}
                          <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg mb-4">
                            <div className="flex items-center mb-2">
                              <svg className="w-5 h-5 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                              </svg>
                              <span className="text-sm font-medium text-gray-600">Runner-up</span>
                            </div>
                            <p className="font-semibold text-gray-800">
                              {result.trailingCandidate}
                            </p>
                            <p className="text-gray-600 font-medium">
                              {result.trailingParty}
                            </p>
                          </div>

                          {/* Margin */}
                          <div className="bg-teal-50 p-4 rounded-lg">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-teal-800">Victory Margin</span>
                              <span className="text-xl font-bold text-teal-600">
                                {typeof result.margin === 'number' 
                                  ? result.margin.toLocaleString() 
                                  : result.margin
                                }
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sikkim Facts */}
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
                  <h2 className="text-3xl font-bold mb-6 text-center">
                    Did You Know About Sikkim?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🌿</div>
                      <h3 className="font-semibold mb-1">Organic State</h3>
                      <p className="text-sm opacity-90">First fully organic state in India</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-2">🏔️</div>
                      <h3 className="font-semibold mb-1">Himalayan Beauty</h3>
                      <p className="text-sm opacity-90">Home to Kanchenjunga peak</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-2">🦋</div>
                      <h3 className="font-semibold mb-1">Biodiversity</h3>
                      <p className="text-sm opacity-90">Rich flora and fauna diversity</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-2">🏛️</div>
                      <h3 className="font-semibold mb-1">Small State</h3>
                      <p className="text-sm opacity-90">Least populous state in India</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ElectionResults;
