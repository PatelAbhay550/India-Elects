// pages/politician/[politicianname]/page.jsx

import Link from "next/link";
import React from "react";

// Function to generate schema markup for individual politician
const generatePoliticianSchema = (politician) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": politician.name,
  "description": `Get all information about ${politician.name}, a prominent politician in India.`,
  "image": politician.image,
  "url": `https://indiaelects.vercel.app/politician/${politician.name.replace(" ", "-").toLowerCase()}`,
  "jobTitle": "Politician",
  "nationality": "Indian",
  "knowsAbout": "Indian Politics"
});

const generateBreadcrumbSchema = (politician) => ({
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
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": politician.name,
      "item": `https://indiaelects.vercel.app/politician/${politician.name.replace(" ", "-").toLowerCase()}`
    }
  ]
});

export async function generateMetadata({ params }) {
  let metadata = {
    title: "Politician | India Elects",
    description: "Detailed biodata of Indian politicians",
    openGraph: {
      title: "Politician | India Elects",
      description: "Detailed biodata of Indian politicians",
      images:["https://upload.wikimedia.org/wikipedia/commons/4/44/Shri_Narendra_Modi%2C_Prime_Minister_of_India.jpg"], 
    },
  };
  const { politicianname } = params;
  if (politicianname) {
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
      const data = await res.json();

      const politician = data.find(
        (p) =>
          p.name.toLowerCase().replace(/\s+/g, "-") ===
          politicianname.toLowerCase()
      );

      if (politician) {
        const formattedName = politicianname.replace("-", " ");
        metadata = {
          title: `${formattedName} | India Elects`,
          description: `Get all information about ${politician.name}, a prominent politician in India.`,
          openGraph: {
            title: `${formattedName} | India Elects`,
            description: `Get all information about ${politician.name}, a prominent politician in India.`,
            images: [politician.image],
          },
        };
      }
    } catch (err) {
      console.error(
        "Error fetching politician data for metadata:",
        err.message
      );
    }
  }

  return metadata;
}

const PoliticianPage = async ({ params }) => {
  const { politicianname } = params;

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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
              <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Error Loading Politician Data</h3>
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
    );
  }

  const politician = data.find(
    (p) =>
      p.name.replace(" ", "-").toLowerCase() === politicianname.toLowerCase()
  );

  if (!politician) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 mb-4">
              <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Politician Not Found</h3>
            <p className="text-sm text-gray-500 mb-4">The politician you're looking for doesn't exist in our database.</p>
            <Link 
              href="/politician"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Browse All Politicians
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const politicianSchema = generatePoliticianSchema(politician);
  const breadcrumbSchema = generateBreadcrumbSchema(politician);

  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(politicianSchema)
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
        

        {/* Breadcrumb */}
        <nav className="bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-indigo-600">Home</Link>
              </li>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <li>
                <Link href="/politician" className="hover:text-indigo-600">Politicians</Link>
              </li>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <li className="text-gray-900">{politician.name}</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/3">
                <div className="relative">
                  <img
                    src={politician.image}
                    alt={`${politician.name} - Indian Politician`}
                    className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl border-4 border-white/20"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              <div className="lg:w-2/3 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{politician.name}</h1>
                <p className="text-xl text-indigo-100 mb-6">Indian Political Leader</p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                    <span className="text-sm text-indigo-100">Position</span>
                    <div className="font-semibold">Political Leader</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                    <span className="text-sm text-indigo-100">Country</span>
                    <div className="font-semibold">India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Biography</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed text-justify">
                    <strong className="text-gray-900">{politician.name}</strong> {politician.biodata}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More Politicians Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">More Political Leaders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {data
                .filter((p) => p.name !== politician.name)
                .slice(0, 3)
                .map((p) => (
                  <Link
                    key={p.name}
                    href={`/politician/${p.name.replace(" ", "-")}`}
                    className="group"
                  >
                    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 overflow-hidden">
                      <div className="relative">
                        <img
                          src={p.image}
                          alt={`${p.name} - Indian Politician`}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white font-bold text-lg group-hover:text-indigo-200 transition-colors duration-300">
                            {p.name}
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
            
            <div className="text-center mt-8">
              <Link 
                href="/politician"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                View All Politicians
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
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

export default PoliticianPage;
