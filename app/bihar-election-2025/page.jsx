import BiharElectionResults from "@/components/BiharElectionResults";
import React from "react";

const biharResultsSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Bihar Assembly Election Results 2025 - Constituency wise Results",
  description:
    "Complete constituency-wise results for Bihar Legislative Assembly Election 2025 with detailed candidate information, party performance, and vote statistics.",
  author: {
    "@type": "Organization",
    name: "India Elects",
    url: "https://indiaelects.vercel.app",
  },
  publisher: {
    "@type": "Organization",
    name: "India Elects",
    logo: {
      "@type": "ImageObject",
      url: "https://indiaelects.vercel.app/logo.png",
    },
  },
  datePublished: "2025-11-16",
  dateModified: "2025-11-23",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://indiaelects.vercel.app/bihar-election-2025",
  },
  articleSection: "Election Results",
  keywords: [
    "Bihar Assembly Election 2025",
    "Bihar Election Results",
    "Constituency wise results",
    "Bihar Legislative Assembly",
    "Bihar elections",
  ],
  about: {
    "@type": "Event",
    name: "Bihar Assembly Election 2025",
    startDate: "2025-11-16",
    endDate: "2025-11-16",
    location: {
      "@type": "AdministrativeArea",
      name: "Bihar",
      containedInPlace: {
        "@type": "Country",
        name: "India",
      },
    },
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://indiaelects.vercel.app",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Bihar Assembly Election Results 2025",
      item: "https://indiaelects.vercel.app/bihar-election-2025",
    },
  ],
};

export const metadata = {
  title: "Bihar Assembly Election Results 2025 - Constituency wise Results | India Elects",
  description:
    "Complete constituency-wise results for Bihar Legislative Assembly Election 2025. View winner details, party performance, vote share, and comprehensive election statistics.",
  keywords: [
    "Bihar Assembly Election 2025",
    "Bihar Election Results",
    "Bihar Legislative Assembly",
    "Constituency wise results",
    "Bihar elections",
    "Bihar Assembly constituencies",
  ],
  openGraph: {
    title: "Bihar Assembly Election Results 2025 | India Elects",
    description:
      "Complete constituency-wise results for Bihar Legislative Assembly Election 2025 with detailed statistics.",
    url: "https://indiaelects.vercel.app/bihar-election-2025",
    siteName: "India Elects",
    images: [
      {
        url: "https://indiaelects.vercel.app/logo.png",
        width: 800,
        height: 600,
        alt: "India Elects Logo",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bihar Assembly Election Results 2025",
    description: "Complete constituency-wise Bihar election results 2025.",
    images: ["https://indiaelects.vercel.app/logo.png"],
    site: "@IndiaElects",
    creator: "@IndiaElects",
  },
  metadataBase: new URL("https://indiaelects.vercel.app"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://indiaelects.vercel.app/bihar-election-2025",
  },
};

const BiharElection2025Page = async () => {
  let data;
  let error;

  try {
    const res = await fetch(
      "https://www.thehindu.com/infographics/2025-11-16/bihar-assembly-election-results-2025/assets/data/2025.json",
      {
        next: { revalidate: 3600 }, // Revalidate cache every hour
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const jsonData = await res.json();

    // Process data into flat array
    data = [];
    Object.values(jsonData).forEach((candidates) => {
      candidates.forEach((candidate) => {
        data.push(candidate);
      });
    });
  } catch (err) {
    error = err.message;
  }

  if (error) {
    return <div className="container mx-auto p-4 text-red-600">{error}</div>;
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(biharResultsSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <BiharElectionResults results={data} />
    </>
  );
};

export default BiharElection2025Page;
