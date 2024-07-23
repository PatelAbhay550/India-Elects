import React from "react";
import Link from "next/link";
import Footer from "@/components/footer";

async function getCategoriesData() {
  const res = await fetch("https://xanimewatcher.vercel.app/blogs.json");
  const data = await res.json();
  return data.categories;
}

const CategoriesPage = async () => {
  const categories = await getCategoriesData();

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="lg:mb-8 py-1 w-full h-20 bg-zinc-600/50 mb-4 flex items-center justify-between overflow-hidden pr-10 pl-1">
        <Link href="/">
          <h2 className="text-3xl font-bold">India Elects</h2>
        </Link>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">All Categories</h1>
        <div className="mt-4">
          {Object.keys(categories).map((category) => (
            <div key={category} className="mb-8">
              <h2 className="text-2xl font-bold capitalize">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {categories[category].slice(0, 3).map((blog, index) => (
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
      <Footer />
    </div>
  );
};

export default CategoriesPage;
