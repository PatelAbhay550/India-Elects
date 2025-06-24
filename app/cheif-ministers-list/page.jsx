import Link from "next/link";
import React from "react";

// Schema markup for Chief Ministers page
const chiefMinistersSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Chief Ministers of India List - Complete Directory",
  "description": "List of Chief Ministers of Indian states with their respective states, roles, responsibilities and current office holders.",
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
  "datePublished": "2024-01-01",
  "dateModified": "2024-12-01",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://indiaelects.vercel.app/cheif-ministers-list"
  },
  "articleSection": "Politics",
  "keywords": ["Chief Ministers of India", "Indian Chief Ministers", "State Chief Ministers", "Chief Ministers list", "India government leaders", "state governance India", "political leaders India"]
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
      "name": "Chief Ministers of India",
      "item": "https://indiaelects.vercel.app/cheif-ministers-list"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a Chief Minister?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Chief Minister is the elected head of the government in each Indian state. The Chief Minister is appointed by the Governor of the state, typically being the leader of the majority party in the state legislative assembly."
      }
    },
    {
      "@type": "Question",
      "name": "How many Chief Ministers are there in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "India has 28 state Chief Ministers, one for each of the 28 states. Union Territories are governed by Lieutenant Governors or Administrators."
      }
    }
  ]
};

export const metadata = {
  title: "Chief Ministers of India List | India Elects",
  description:
    "List of Chief Ministers of Indian states with their respective states.",
  keywords: [
    "Chief Ministers of India",
    "Indian Chief Ministers",
    "State Chief Ministers",
    "Chief Ministers list",
    "India government leaders",
    "state governance India",
    "political leaders India",
  ],
};

const ChiefMinisters = async () => {
  let data;
  let error;

  try {
    const res = await fetch(
      "https://xanimewatcher.vercel.app/ChiefMinisters.json",
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
            __html: JSON.stringify(chiefMinistersSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema)
          }}
        />
        
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Unable to Load Data</h2>
            <p className="text-red-600 mb-4">{error}</p>
            
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
          __html: JSON.stringify(chiefMinistersSchema)
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
      
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
  

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Chief Ministers of India</h1>
          <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
            Leaders governing India's states and Union Territories
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">{data?.ChiefMinisters?.length || 0}</div>
              <div className="text-gray-600">Total Chief Ministers</div>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About Chief Ministers</h2>
                <p className="text-gray-600 mb-4">
                  India, the world's largest democracy, is comprised of 28 states and 8
                  Union Territories. Each state is governed by a Chief Minister who is the
                  head of the government in that state. The Chief Minister is responsible
                  for the administration of the state and plays a crucial role in
                  implementing policies, maintaining law and order, and ensuring the
                  welfare of the citizens.
                </p>
                <p className="text-gray-600">
                  <strong>What is a Chief Minister?</strong> A Chief Minister is the
                  elected head of the government in each Indian state. The Chief Minister
                  is appointed by the Governor of the state, typically being the leader of
                  the majority party in the state legislative assembly. The Chief
                  Minister's role is to guide the state's administration and work in
                  coordination with the central government to ensure the state's
                  development and the implementation of national policies.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Responsibilities</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-2 w-2 bg-indigo-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-600">Policy Formulation and Implementation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-2 w-2 bg-indigo-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-600">Law and Order Maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-2 w-2 bg-indigo-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-600">State Administration Oversight</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-2 w-2 bg-indigo-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-600">Legislative Leadership</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-2 w-2 bg-indigo-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-600">Central Government Coordination</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chief Ministers Table */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600">
              <h2 className="text-xl font-bold text-white">Current Chief Ministers</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      State
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Chief Minister
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Took Office
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.ChiefMinisters.map((cm, index) => (
                    <tr key={cm.State} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {cm.State}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {cm.ChiefMinister}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {cm.office}
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
            <Link href="/Governors-list" className="group">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 mb-3">
                  Governors of India
                </h3>
                <p className="text-gray-600 text-sm">
                  Complete list of Governors serving in Indian states and Union Territories
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

export default ChiefMinisters;
