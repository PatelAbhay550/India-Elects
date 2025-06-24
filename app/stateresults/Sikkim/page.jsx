import SikkimResults from "@/components/SikkimResults";
import React from "react";

// Schema markup for Sikkim Assembly Results
const sikkimResultsSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Sikkim 2024 Legislative Assembly Election Results",
  "description": "Get constituency wise result of Sikkim 2024 Legislative Assembly, comprehensive information in form of Charts, tables.",
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
  "datePublished": "2024-06-02",
  "dateModified": "2024-06-04",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://indiaelects.vercel.app/stateresults/Sikkim"
  },
  "articleSection": "Election Results",
  "keywords": ["Sikkim Elections 2024", "Sikkim Assembly Results", "Legislative Assembly", "Constituency Results", "Himalayan state elections"],
  "about": {
    "@type": "Event",
    "name": "Sikkim Legislative Assembly Election 2024",
    "startDate": "2024-04-19",
    "location": {
      "@type": "State",
      "name": "Sikkim",
      "containedIn": {
        "@type": "Country",
        "name": "India"
      }
    }
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
      "name": "State Results",
      "item": "https://indiaelects.vercel.app/stateresults"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Sikkim Results",
      "item": "https://indiaelects.vercel.app/stateresults/Sikkim"
    }
  ]
};

export const metadata = {
  title: "Sikkim 2024 Legislative Assembly Result | India Elects",
  description:
    "Get constituency wise result of Sikkim 2024 Legislative Assembly, comprehensive information in form of Charts, tables.",
};

const Sikkim = async () => {
  let data;
  let error;

  try {
    const res = await fetch("http://indiaelects.vercel.app/api/sikkimresult", {
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
            __html: JSON.stringify(sikkimResultsSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema)
          }}
        />
        
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-teal-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Unable to Load Results</h2>
            <p className="text-red-600 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-300"
            >
              Try Again
            </button>
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
          __html: JSON.stringify(sikkimResultsSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      
      <SikkimResults results={data} />
    </>
  );
};

export default Sikkim;
