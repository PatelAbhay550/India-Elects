import Footer from "@/components/footer";
import Link from "next/link";
import React, { useEffect } from "react";

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

  

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mt-8">
            <span className="font-bold">India Elects</span> - Election Results Hub
          </h1>
          <div className="mt-8">
            <Link href="/loksabha_result_2024">
              <div className="block mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div className="bg-white p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Lok Sabha 2024 Constituency-Wise Result
                  </h2>
                  <p className="text-sm text-gray-600">
                    Get analytics of each constituency | Lok Sabha Election 2024
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/Summary">
              <div className="block mx-auto mt-8 max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div className="bg-white p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Summary | 2024 Lok Sabha
                  </h2>
                  <p className="text-sm text-gray-600">
                    Get analytics of short summary for Lok Sabha Election 2024
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/stateresults">
              <div className="block mx-auto mt-8 max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div className="bg-white p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    State Election Results
                  </h2>
                  <p className="text-sm text-gray-600">
                    Get analytics of State Legislative Assembly Election 2024
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/politician">
              <div className="block mx-auto mt-8 max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div className="bg-white p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Politician Biodata
                  </h2>
                  <p className="text-sm text-gray-600">
                    Get detailed biography of Indian Politicians and leaders
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/blogs">
              <div className="block mx-auto mt-8 max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div className="bg-white p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Latest Blogs to read
                  </h2>
                  <p className="text-sm text-gray-600">
                    Get detailed blogs of Indian Politics and other topics
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/cheif-ministers-list">
              <div className="block mx-auto mt-8 max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div className="bg-white p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Chief Ministers of India
                  </h2>
                  <p className="text-sm text-gray-600">
                    List of Chief Ministers of Indian states with their respective states.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/Governors-list">
              <div className="block mx-auto mt-8 max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div className="bg-white p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Governors of India List
                  </h2>
                  <p className="text-sm text-gray-600">
                    List of Governors of Indian states with their respective states.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <p className="text-lg text-gray-600 mt-4 mb-2 text-justify">
          Your definitive source for comprehensive election data and analysis in India. Whether you're a political enthusiast, a researcher, or a citizen eager to stay informed, India Elects brings you real-time updates, historical trends, and insightful commentary on elections across the nation.
        </p>

        <div className="ad-container mt-8 text-center">
          <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-format="fluid"
            data-ad-layout-key="-gw-3+1f-3d+2z"
            data-ad-client="ca-pub-8804622562841633"
            data-ad-slot="9165950400"></ins>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
