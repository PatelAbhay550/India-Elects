import React from "react";
import Link from "next/link";

// Schema markup for Categories page
const categoriesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Blog Categories - India Elects",
  "description": "Explore blogs by categories on India Elects. Find articles about politics, elections, governance and more.",
  "url": "https://indiaelects.vercel.app/blogs/categories",
  "publisher": {
    "@type": "Organization",
    "name": "India Elects",
    "logo": {
      "@type": "ImageObject",
      "url": "https://indiaelects.vercel.app/logo.png"
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
      "name": "Blogs",
      "item": "https://indiaelects.vercel.app/blogs"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Categories",
      "item": "https://indiaelects.vercel.app/blogs/categories"
    }
  ]
};

export const metadata = {
  title: "Blog Categories | India Elects",
  description: "Explore blogs by categories on India Elects. Find articles about politics, elections, governance and more.",
  keywords: ["blog categories", "Indian politics", "election blogs", "political articles", "governance"],
};

async function getCategoriesData() {
  try {
    const res = await fetch("https://xanimewatcher.vercel.app/blogs.json", {
      next: { revalidate: 3600 }
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data.categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return {};
  }
}

const CategoriesPage = async () => {
  const categories = await getCategoriesData();

  if (!categories || Object.keys(categories).length === 0) {
    return (
      <>
        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(categoriesSchema)
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
              <h3 className="text-lg font-medium text-gray-900 mb-2">Error Loading Categories</h3>
              <p className="text-sm text-gray-500 mb-4">Unable to load blog categories at this time.</p>
             
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
          __html: JSON.stringify(categoriesSchema)
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
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
                IndiaElects
              </h2>
            </Link>
          </div>
        </header>

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
                <Link href="/blogs" className="hover:text-indigo-600">Blogs</Link>
              </li>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <li className="text-gray-900">Categories</li>
            </ol>
          </div>
        </nav>        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-100">
                Blog Categories
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
                Discover insightful articles organized by topics and themes. From political analysis to election coverage, find the content that matters to you.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <div className="bg-white bg-opacity-20 rounded-full px-4 py-2 text-sm font-medium">
                  📊 Political Analysis
                </div>
                <div className="bg-white bg-opacity-20 rounded-full px-4 py-2 text-sm font-medium">
                  🗳️ Election Coverage
                </div>
                <div className="bg-white bg-opacity-20 rounded-full px-4 py-2 text-sm font-medium">
                  🏛️ Governance Insights
                </div>
              </div>
            </div>
          </div>
        </section>        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl shadow-lg p-8 text-center border border-indigo-200 hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-lg mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">{Object.keys(categories).length}</div>
                <div className="text-gray-600 font-medium">Categories</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-lg p-8 text-center border border-green-200 hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600 rounded-lg mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {Object.values(categories).reduce((total, cat) => total + cat.length, 0)}
                </div>
                <div className="text-gray-600 font-medium">Total Articles</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-lg p-8 text-center border border-purple-200 hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 rounded-lg mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">Daily</div>
                <div className="text-gray-600 font-medium">Updates</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-lg p-8 text-center border border-orange-200 hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-600 rounded-lg mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-2">Live</div>
                <div className="text-gray-600 font-medium">Analysis</div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {Object.keys(categories).map((category) => (
              <div key={category} className="mb-16">
                <div className="mb-8 text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 capitalize">
                    {category}
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mx-auto mb-4"></div>
                  <p className="text-gray-600 mb-6">
                    {categories[category].length} article{categories[category].length !== 1 ? 's' : ''} in this category
                  </p>
                  <Link 
                    href={`/blogs/${category}`}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 transition-colors"
                  >
                    View All {category} Articles
                    <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categories[category].slice(0, 3).map((blog, index) => (
                    <Link
                      key={index}
                      href={`/blogs/${category}/${blog.title
                        .replace(/ /g, "-")
                        .toLowerCase()}`}
                      className="group"
                    >
                      <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 h-full flex flex-col">
                        <div className="relative">
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                          <div className="absolute top-4 left-4">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                              {category}
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 mb-3">
                            {blog.title.length > 60 ? `${blog.title.substring(0, 60)}...` : blog.title}
                          </h3>
                          <p className="text-gray-600 mb-4 flex-1">
                            {blog.summary.length > 120 ? `${blog.summary.substring(0, 120)}...` : blog.summary}
                          </p>
                          
                          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                            <div className="flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                              </svg>
                              <span>{blog.author}</span>
                            </div>
                            <div className="flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                              </svg>
                              <span>{blog.date}</span>
                            </div>
                          </div>
                          
                          <div className="inline-flex items-center text-indigo-600 text-sm font-medium mt-auto">
                            Read Article
                            <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related Links */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Explore More</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/blogs" className="group">
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 mb-3">
                    All Blogs
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Browse all blog posts across all categories
                  </p>
                  <div className="mt-4 inline-flex items-center text-indigo-600 text-sm">
                    View All Blogs
                    <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>

              <Link href="/stateresults" className="group">
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 mb-3">
                    Election Results
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

              <Link href="/politician" className="group">
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 mb-3">
                    Politicians
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Information about political leaders and their profiles
                  </p>
                  <div className="mt-4 inline-flex items-center text-indigo-600 text-sm">
                    View Profiles
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

export default CategoriesPage;
