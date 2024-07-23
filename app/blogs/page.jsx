import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Latest Blogs | India Elects",
  description:
    "Read about various topics around the country in concise and summarized manner. Explore your favorite topics related to politics and more.",
};

const Blog = async () => {
  let data;
  let error;

  try {
    const res = await fetch("https://xanimewatcher.vercel.app/blogs.json", {
      next: { revalidate: 1 }, // Revalidate cache every hour
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
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="lg:mb-8 py-1 w-full h-20 bg-zinc-600/50 mb-4 flex items-center justify-between overflow-hidden pr-10 pl-1">
        <Link href="/">
          <h2 className="text-3xl font-bold">India Elects</h2>
        </Link>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">All Latest Blogs</h1>
        <p>
          Read about various topics around the country in concise and summarized
          manner. Explore your favorite topics in detail.
        </p>
        {Object.keys(data.categories).map((category) => (
          <div key={category} className="mt-8">
            <h2 className="text-3xl font-semibold text-left">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {data.categories[category].map((blog, index) => (
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
