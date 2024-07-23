import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/footer";

export const dynamicParams = true;

// Function to fetch blog data
async function getBlogData(category, title) {
  const res = await fetch("https://xanimewatcher.vercel.app/blogs.json");
  const data = await res.json();

  const blog = data.categories[category]?.find(
    (b) => b.title.replace(/ /g, "-").toLowerCase() === title
  );

  if (!blog) {
    return null;
  }

  return blog;
}

// Function to generate metadata dynamically
export async function generateMetadata({ params }) {
  const { category, title } = params;

  try {
    const blog = await getBlogData(category, title);

    if (blog) {
      return {
        title: `${blog.title} | India Elects`,
        description:
          blog.summary || `Read more about ${blog.title} on India Elects.`,
        openGraph: {
          title: `${blog.title} | India Elects`,
          description:
            blog.summary || `Read more about ${blog.title} on India Elects.`,
          images: [blog.image],
          url: `https://indiaelects.vercel.app/blogs/${category}/${title}`, // Update with your actual URL
          type: "article",
        },
        twitter: {
          card: "summary_large_image",
          title: `${blog.title} | India Elects`,
          description:
            blog.summary || `Read more about ${blog.title} on India Elects.`,
          image: blog.image,
        },
      };
    }
  } catch (err) {
    console.error("Error generating metadata:", err.message);
  }

  return {
    title: "Blog Post | India Elects",
    description: "Read detailed and insightful blog posts on India Elects.",
    openGraph: {
      title: "Blog Post | India Elects",
      description: "Read detailed and insightful blog posts on India Elects.",
      image: "https://defaultimage.com/default.jpg", // Replace with a default image if available
    },
    twitter: {
      card: "summary_large_image",
      title: "Blog Post | India Elects",
      description: "Read detailed and insightful blog posts on India Elects.",
      image: "https://defaultimage.com/default.jpg", // Replace with a default image if available
    },
  };
}

// BlogPost Component
const BlogPost = async ({ params }) => {
  const { category, title } = params;

  const blog = await getBlogData(category, title);

  if (!blog) {
    notFound();
  }

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="lg:mb-8 py-1 top-0 absolute w-full h-20 bg-zinc-600/50 mb-4 flex items-center justify-between overflow-hidden pr-10 pl-1">
        <Link href="/">
          <h2 className="text-3xl font-bold text-white">India Elects</h2>
        </Link>
      </div>
      <div className="container mx-auto px-4 py-20">
        <div className="mb-4">
          <h1 className="text-4xl font-bold inline py-4 mb-3">{blog.title}</h1>
          <br />
          <br />
          <Link href={`/blogs/${category}`} className="mt-5">
            <span className="bg-blue-600 hover:underline px-3 py-2 text-white">
              {category}
            </span>
            <br />
          </Link>
        </div>
        <p className="text-gray-700 mt-4">
          by {blog.author} on {blog.date}
        </p>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-auto mt-4 rounded-lg"
        />
        <div
          className="text-justify mt-4"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        <p className="text-zinc-900 mt-4 text-2xl font-bold">Tags</p>
        <p>{blog.tags.join(", ")}</p>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;
