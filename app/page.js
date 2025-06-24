import Footer from "@/components/footer";
import Link from "next/link";
import React from "react";

// Schema markup for homepage
const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "India Elects",
  "url": "https://indiaelects.vercel.app",
  "description": "Comprehensive platform for Indian election results, political analysis, and electoral data. Get detailed information about Lok Sabha elections, state assembly elections, and political leaders.",
  "publisher": {
    "@type": "Organization",
    "name": "India Elects",
    "url": "https://indiaelects.vercel.app",
    "logo": {
      "@type": "ImageObject",
      "url": "https://indiaelects.vercel.app/logo.png"
    }
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://indiaelects.vercel.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "India Elects",
  "url": "https://indiaelects.vercel.app",
  "logo": "https://indiaelects.vercel.app/logo.png",
  "description": "Leading platform for Indian election data, political analysis, and electoral information",
  "sameAs": [
    "https://twitter.com/indiaelects",
    "https://facebook.com/indiaelects"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "url": "https://indiaelects.vercel.app/ContactUs"
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
    }
  ]
};

const fetchBlogs = async () => {
  try {
    const res = await fetch("https://xanimewatcher.vercel.app/blogs.json", {
      next: { revalidate: 3600 }, // Revalidate cache every hour
    });
    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }
    const data = await res.json();
    return data.categories;
  } catch (error) {
    console.error(error);
    return {};
  }
};

const HomePage = async () => {
  const categories = await fetchBlogs();

  // Helper function to get top 3 blogs by category
  const getTopBlogs = (category) => {
    return (
      categories[category]?.slice(0, 3).map((blog) => ({
        title: blog.title,
        author: blog.author,
        date: blog.date,
        link: `/blogs/${category}/${blog.title
          .replace(/ /g, "-")
          .toLowerCase()}`,
      })) || []
    );
  };

  const menuItems = [
    {
      title: "Lok Sabha 2024 Results",
      description: "Get analytics of each constituency | Lok Sabha Election 2024",
      href: "/loksabha_result_2024",
      icon: "🏛️",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Election Summary 2024",
      description: "Get analytics of short summary for Lok Sabha Election 2024",
      href: "/Summary",
      icon: "📊",
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "State Election Results",
      description: "Get analytics of State Legislative Assembly Election 2024",
      href: "/stateresults",
      icon: "🗺️",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Prime Ministers of India",
      description: "Complete list of Prime Ministers of India with detailed information",
      href: "/prime-ministers",
      icon: "👨‍💼",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      title: "Neighbouring Countries",
      description: "Information about India's neighboring countries and relations",
      href: "/neighbouring-countries",
      icon: "🌏",
      gradient: "from-teal-500 to-teal-600"
    },
    {
      title: "Politician Biodata",
      description: "Get detailed biography of Indian Politicians and leaders",
      href: "/politician",
      icon: "👥",
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Latest Political Blogs",
      description: "Get detailed blogs of Indian Politics and other topics",
      href: "/blogs",
      icon: "📰",
      gradient: "from-red-500 to-red-600"
    },
    {
      title: "Chief Ministers",
      description: "List of Chief Ministers of Indian states with their respective states",
      href: "/cheif-ministers-list",
      icon: "🏢",
      gradient: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Governors of India",
      description: "List of Governors of Indian states with their respective states",
      href: "/Governors-list",
      icon: "🎖️",
      gradient: "from-pink-500 to-pink-600"
    }
  ];
  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              India Elects
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Your Ultimate Election Results & Political Information Hub
            </p>
            <p className="text-lg lg:text-xl max-w-4xl mx-auto mb-12 opacity-80 leading-relaxed">
              Your definitive source for comprehensive election data and analysis in India. Whether you're a political enthusiast, 
              a researcher, or a citizen eager to stay informed, India Elects brings you real-time updates, historical trends, 
              and insightful commentary on elections across the nation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/loksabha_result_2024" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                View 2024 Results
              </Link>
              <Link href="/blogs" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                Read Latest News
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Explore Political India
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Comprehensive information about Indian politics, elections, and governance at your fingertips
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.href} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                  <div className={`h-2 bg-gradient-to-r ${item.gradient}`}></div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{item.icon}</span>
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mt-4 flex items-center text-blue-600 font-semibold">
                      <span className="group-hover:mr-2 transition-all duration-300">Explore</span>
                      <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            India at a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">543</div>
              <div className="text-gray-600">Lok Sabha Seats</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">28</div>
              <div className="text-gray-600">States</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">8</div>
              <div className="text-gray-600">Union Territories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">15</div>
              <div className="text-gray-600">Prime Ministers</div>
            </div>
          </div>
        </div>

        {/* Ad Container */}
        <div className="ad-container text-center mb-16">
          <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-format="fluid"
            data-ad-layout-key="-gw-3+1f-3d+2z"
            data-ad-client="ca-pub-8804622562841633"
            data-ad-slot="9165950400"></ins>
        </div>
      </div>      <Footer />
      </div>
    </>
  );
};

export default HomePage;
