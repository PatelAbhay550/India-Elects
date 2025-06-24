import ElectionResults from "@/components/ElectionResults";
import React from "react";

// Schema markup for Lok Sabha Results 2024
const loksabhaResultsSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Lok Sabha Election Results 2024 - Constituency wise Results",
  "description": "Get constituency wise result Indian election data 2024, comprehensive information in form of Charts, tables.",
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
  "datePublished": "2024-06-04",
  "dateModified": "2024-06-08",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://indiaelects.vercel.app/loksabha_result_2024"
  },
  "articleSection": "Election Results",
  "keywords": ["Lok Sabha 2024", "Election Results", "Constituency wise results", "Indian elections", "Parliamentary elections"],
  "about": {
    "@type": "Event",
    "name": "Indian General Election 2024",
    "startDate": "2024-04-19",
    "endDate": "2024-06-01",
    "location": {
      "@type": "Country",
      "name": "India"
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
      "name": "Lok Sabha Results 2024",
      "item": "https://indiaelects.vercel.app/loksabha_result_2024"
    }
  ]
};

export const metadata = {
  title: "Constituency wise Result | Get 2024 Election data India",
  description:
    "Get constituency wise result Indian election data 2024, comprehensive information in form of Charts, tables.",
};

const ElectionsPage = async () => {
  let data;
  let error;

  try {
    const res = await fetch("http://indiaelects.vercel.app/api/e2024", {
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
    return <div className="container mx-auto p-4 text-red-600">{error}</div>;
  }

  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(loksabhaResultsSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      
      <ElectionResults results={data} />
    </>
  );
};

export default ElectionsPage;
