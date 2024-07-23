import React from "react";
import Link from "next/link";
import Footer from "@/components/footer";

const POSTS_PER_PAGE = 3;

async function getCategoryData(category) {
  const res = await fetch("https://xanimewatcher.vercel.app/blogs.json");
  const data = await res.json();
  return data.categories[category] || [];
}

export async function generateMetadata({ params }) {
  const { category } = params;
  return {
    title: `${category} | India Elects`,
    description: `Read the latest blogs in ${category} on India Elects.`,
  };
}

const CategoryPage = async ({ params }) => {
  const { category } = params;
  const page = parseInt(params.page) || 1; // Get the current page from params
  const blogs = await getCategoryData(category);

  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const currentBlogs = blogs.slice(start, end);

  const totalPages = Math.ceil(blogs.length / POSTS_PER_PAGE);

  const getPageUrl = (pageNum) => `/blogs/${category}/${pageNum}`;

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="lg:mb-8 py-1 w-full h-20 bg-zinc-600/50 mb-4 flex items-center justify-between overflow-hidden pr-10 pl-1">
        <Link href="/">
          <h2 className="text-3xl font-bold">India Elects</h2>
        </Link>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold capitalize">{category}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {currentBlogs.map((blog, index) => (
            <Link
              key={index}
              href={`/blogs/${category}/${blog.title
                .replace(/ /g, "-")
                .toLowerCase()}`}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{blog.title}</h3>
                  <p className="text-gray-700 mt-2">{blog.summary}</p>
                  <p className="text-gray-500 mt-4">{blog.date}</p>
                  <p className="text-gray-500 mt-2">by {blog.author}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-between mt-8">
          <Link
            href={page > 1 ? getPageUrl(page - 1) : "#"}
            className={`bg-gray-300 text-gray-800 py-2 px-4 rounded-lg ${
              page === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Previous
          </Link>
          <Link
            href={page < totalPages ? getPageUrl(page + 1) : "#"}
            className={`bg-gray-300 text-gray-800 py-2 px-4 rounded-lg ${
              page === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Next
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryPage;
