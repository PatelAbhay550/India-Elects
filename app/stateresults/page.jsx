import Link from "next/link";
import React from "react";

const Stateresult = () => {
  const states = [
    {
      name: "Sikkim",
      href: "/stateresults/Sikkim",
      title: "Sikkim Legislative Assembly Result 2024",
      description: "Get analytics of each constituency | Sikkim Election 2024",
      constituencies: 32,
      status: "Results Declared",
      icon: "🏔️",
      gradient: "from-green-400 to-emerald-600"
    },
    {
      name: "Andhra Pradesh",
      href: "/stateresults/Andhrapradesh",
      title: "Andhra Pradesh Legislative Assembly Result 2024",
      description: "Get analytics of each constituency | Andhra Pradesh Election 2024",
      constituencies: 175,
      status: "Results Declared",
      icon: "🏛️",
      gradient: "from-blue-400 to-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-xl">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              State Election Results 2024
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive analysis and detailed results of Legislative Assembly elections across Indian states
            </p>
            <div className="flex items-center justify-center mt-6 space-x-4">
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Live Updates</span>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-full">
                <span className="text-sm font-medium">2024 Assembly Elections</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{states.length}</h3>
            <p className="text-gray-600 font-medium">States Covered</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {states.reduce((total, state) => total + state.constituencies, 0)}
            </h3>
            <p className="text-gray-600 font-medium">Total Constituencies</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">100%</h3>
            <p className="text-gray-600 font-medium">Results Declared</p>
          </div>
        </div>

        {/* State Results Grid */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Select a State to View Results
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {states.map((state, index) => (
              <Link key={state.name} href={state.href}>
                <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
                  {/* Gradient Header */}
                  <div className={`bg-gradient-to-r ${state.gradient} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-4xl">{state.icon}</span>
                        <div className="bg-white/20 px-3 py-1 rounded-full">
                          <span className="text-sm font-medium">{state.status}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-100 transition-colors duration-300">
                        {state.name}
                      </h3>
                      <p className="text-blue-100 font-medium">
                        Legislative Assembly Election 2024
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {state.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-gray-100 px-3 py-2 rounded-lg">
                          <span className="text-sm text-gray-600">Constituencies</span>
                          <div className="text-lg font-bold text-gray-800">{state.constituencies}</div>
                        </div>
                      </div>
                      <div className="flex items-center text-green-600">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-sm font-medium">Complete Data</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors duration-300">
                      <span className="font-medium text-gray-800 group-hover:text-blue-800">
                        View Detailed Results
                      </span>
                      <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mt-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Comprehensive Election Analytics
            </h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Access detailed constituency-wise results, candidate information, vote margins, 
              and comprehensive analytics for the 2024 Legislative Assembly elections.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-blue-600 font-semibold">Real-time Updates</div>
                <div className="text-sm text-blue-800 mt-1">Live result tracking</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="text-green-600 font-semibold">Detailed Analytics</div>
                <div className="text-sm text-green-800 mt-1">In-depth analysis</div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="text-purple-600 font-semibold">Constituency Data</div>
                <div className="text-sm text-purple-800 mt-1">Complete coverage</div>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <div className="text-orange-600 font-semibold">Historical Trends</div>
                <div className="text-sm text-orange-800 mt-1">Comparative analysis</div>
              </div>
            </div>
          </div>
        </div>
      </div>      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <Link href="/AboutUs" className="hover:text-white transition-colors duration-300">
                <span className="font-medium">About Us</span>
              </Link>
              <div className="w-1 h-4 bg-gray-600"></div>
              <Link href="/ContactUs" className="hover:text-white transition-colors duration-300">
                <span className="font-medium">Contact Us</span>
              </Link>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm">&copy; 2024 India Elects. All rights reserved.</p>
              <p className="text-xs text-gray-400 mt-1">Trusted source for election data and analysis</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Stateresult;
