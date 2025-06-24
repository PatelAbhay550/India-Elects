import Link from "next/link";
import React from "react";

// Schema markup for Governors page
const governorsSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "List of Governors of India",
  "description": "Complete list of Governors serving in Indian states and Union Territories with their roles and responsibilities",
  "url": "https://indiaelects.vercel.app/Governors-list",
  "datePublished": "2024-01-01",
  "dateModified": new Date().toISOString(),
  "author": {
    "@type": "Organization",
    "name": "India Elects",
    "url": "https://indiaelects.vercel.app"
  },
  "publisher": {
    "@type": "Organization",
    "name": "India Elects",
    "logo": {
      "@type": "ImageObject",
      "url": "https://indiaelects.vercel.app/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://indiaelects.vercel.app/Governors-list"
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
      "name": "Governors of India",
      "item": "https://indiaelects.vercel.app/Governors-list"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a Governor in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Governor is the constitutional head of each Indian state. The Governor is appointed by the President of India and holds office at the President's pleasure."
      }
    },
    {
      "@type": "Question",
      "name": "How many Governors are there in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "India has Governors for its 28 states and Lieutenant Governors or Administrators for Union Territories."
      }
    }
  ]
};

export const metadata = {
  title: "Governors of India List | India Elects",
  description:
    "List of Governors of Indian states with their respective states.",
  keywords: [
    "Governors of India",
    "Indian Governors",
    "State Governors",
    "Governors list",
    "India government leaders",
    "state governance India",
    "political leaders India",
  ],
};

const Governors = async () => {
  let data;
  let error;

  try {
    const res = await fetch("https://xanimewatcher.vercel.app/Governers.json", {
      next: { revalidate: 3600 }, // Revalidate cache every hour
    });
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
            __html: JSON.stringify(governorsSchema)
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
              <h3 className="text-lg font-medium text-gray-900 mb-2">Error Loading Data</h3>
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
          __html: JSON.stringify(governorsSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header */}
       

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Governors of India</h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
              Constitutional heads of Indian states and Union Territories
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">{data?.Governors?.length || 0}</div>
                <div className="text-gray-600">Total Governors</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">28</div>
                <div className="text-gray-600">States</div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">8</div>
                <div className="text-gray-600">Union Territories</div>
              </div>
            </div>
          </div>
        </section>

        {/* Information Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About Governors</h2>
                  <p className="text-gray-600 mb-4">
                    India, the world's largest democracy, is comprised of 28 states and 8
                    Union Territories. Each state is overseen by a Governor who is the head
                    of the state. The Governor is responsible for ensuring that the state
                    government functions within the framework of the Constitution and plays
                    a crucial role in maintaining the law and order in the state.
                  </p>
                  <p className="text-gray-600">
                    <strong>What is a Governor?</strong> A Governor is the constitutional
                    head of each Indian state. The Governor is appointed by the President of
                    India and holds office at the President's pleasure. The Governor's role
                    includes overseeing the state's administration, ensuring the
                    implementation of central policies, and acting as a liaison between the
                    central and state governments.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Responsibilities</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-2 w-2 bg-indigo-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-600">Constitutional Duties</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-2 w-2 bg-indigo-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-600">Executive Authority</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-2 w-2 bg-indigo-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-600">Legislative Oversight</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-2 w-2 bg-indigo-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-600">Financial Oversight</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-2 w-2 bg-indigo-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-600">Central Coordination</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Governors Table */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600">
                <h2 className="text-xl font-bold text-white">Current Governors</h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        State / Union Territory
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Governor
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data.Governors.map((governor, index) => (
                      <tr key={governor.State} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {governor.State}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {governor.Governor}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Related Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/cheif-ministers-list" className="group">
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 mb-3">
                    Chief Ministers of India
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Complete list of Chief Ministers serving in Indian states
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
                    Historical list of Prime Ministers of India with their tenure details
                  </p>
                  <div className="mt-4 inline-flex items-center text-indigo-600 text-sm">
                    View List
                    <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>

              <Link href="/stateresults" className="group">
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 mb-3">
                    State Election Results
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Latest election results and analysis for Indian states
                  </p>
                  <div className="mt-4 inline-flex items-center text-indigo-600 text-sm">
                    View Results
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

export default Governors;
