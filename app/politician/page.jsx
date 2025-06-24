
import Link from "next/link";
import React from "react";

// Schema markup for Politicians page
const politiciansSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Politicians Biodata",
  "description": "Read about various politicians around the country in concise and summarised manner. Explore about your favorite leaders",
  "url": "https://indiaelects.vercel.app/politician",
  "publisher": {
    "@type": "Organization",
    "name": "India Elects",
    "logo": {
      "@type": "ImageObject",
      "url": "https://indiaelects.vercel.app/logo.png"
    }
  },
  "mainEntity": {
    "@type": "ItemList",
    "name": "Indian Politicians",
    "description": "Comprehensive profiles of Indian political leaders"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://indiaelects.vercel.app"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Politicians",
      "item": "https://indiaelects.vercel.app/politician"
    }
  ]
};

export const metadata = {
  title: "Politicians Biodata | India Elects",
  description:
    "Read about various politicians around the country in concise and summarised manner. Explore about your favorite leaders",
};

const Politician = async () => {
  let data;
  let error;

  try {
    const res = await fetch(
      "https://xanimewatcher.vercel.app/politiciansdata.json",
      {
        next: { revalidate: 3600 }, // Revalidate cache every hour
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    data = await res.json();
  } catch (err) {
    error = err.message;
  }
  if (error) {
    return (
      <>
        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(politiciansSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema)
          }}
        />
        
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Error Loading Politicians</h3>
              <p className="text-sm text-gray-500 mb-4">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(politiciansSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header */}
        

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Politicians Biodata</h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
              Explore comprehensive profiles of Indian political leaders
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">{data?.length || 0}</div>
                <div className="text-gray-600">Political Leaders</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">All Parties</div>
                <div className="text-gray-600">Comprehensive Coverage</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">Updated</div>
                <div className="text-gray-600">Latest Information</div>
              </div>
            </div>
          </div>
        </section>

        {/* Information Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About Our Politicians Database</h2>
                <p className="text-gray-600 mb-6">
                  Read about various politicians around the country in concise and
                  summarised manner. Explore about your favorite leaders and their
                  political journey, achievements, and contributions to Indian democracy.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900">Comprehensive Profiles</h3>
                    <p className="text-sm text-gray-600">Detailed information about political leaders</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900">Verified Information</h3>
                    <p className="text-sm text-gray-600">Accurate and up-to-date data</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900">Easy Access</h3>
                    <p className="text-sm text-gray-600">Quick navigation to detailed profiles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Politicians Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Browse Politicians</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.map((politician) => (
                <Link
                  key={politician.name}
                  href={`/politician/${politician.name.replace(" ", "-")}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 overflow-hidden">
                    <div className="relative">
                      <img
                        src={politician.image}
                        alt={`${politician.name} - Indian Politician`}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-lg group-hover:text-indigo-200 transition-colors duration-300">
                          {politician.name}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Political Leader</span>
                        <div className="inline-flex items-center text-indigo-600 text-sm font-medium group-hover:text-indigo-700">
                          View Profile
                          <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Explore More</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/cheif-ministers-list" className="group">
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 mb-3">
                    Chief Ministers
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Current Chief Ministers of Indian states
                  </p>
                  <div className="mt-4 inline-flex items-center text-indigo-600 text-sm">
                    View List
                    <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>

              <Link href="/Governors-list" className="group">
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 mb-3">
                    Governors
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Constitutional heads of Indian states
                  </p>
                  <div className="mt-4 inline-flex items-center text-indigo-600 text-sm">
                    View List
                    <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>

              <Link href="/prime-ministers" className="group">
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 mb-3">
                    Prime Ministers
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Historical list of Prime Ministers of India
                  </p>
                  <div className="mt-4 inline-flex items-center text-indigo-600 text-sm">
                    View List
                    <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-300 py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-center space-x-8 mb-4">
              <Link href="/AboutUs" className="hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/ContactUs" className="hover:text-white transition-colors">
                Contact Us
              </Link>
              <Link href="/PrivacyPolicy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
            <div className="text-center">
              <p>&copy; 2024 India Elects. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Politician;
