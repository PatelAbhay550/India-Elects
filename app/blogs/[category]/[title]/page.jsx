import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamicParams = true;

// Function to generate breadcrumb schema
const generateBreadcrumbSchema = (category, title, blog) => ({
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
      "name": category.charAt(0).toUpperCase() + category.slice(1),
      "item": `https://indiaelects.vercel.app/blogs/${category}`
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": blog.title,
      "item": `https://indiaelects.vercel.app/blogs/${category}/${title}`
    }
  ]
});

// Function to fetch blog data
async function getBlogData(category, title) {
  try {
    const res = await fetch("https://xanimewatcher.vercel.app/blogs.json");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();

    const blog = data.categories[category]?.find(
      (b) => b.title.replace(/ /g, "-").toLowerCase() === title
    );

    if (!blog) {
      return null;
    }

    return blog;
  } catch (error) {
    console.error("Error fetching blog data:", error.message);
    return null;
  }
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": blog.title,
    "image": blog.image,
    "author": {
      "@type": "Person",
      "name": blog.author,
    },
    "datePublished": blog.date,
    "articleBody": blog.article,
    "publisher": {
      "@type": "Organization",
      "name": "India Elects",
      "logo": {
        "@type": "ImageObject",
        "url": "https://indiaelects.vercel.app/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://indiaelects.vercel.app/blogs/${category}/${title}`
    }
  };

  const breadcrumbSchema = generateBreadcrumbSchema(category, title, blog);

  return (
    <>
      {/* JSON-LD Schema Markup */}
      
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header */}
        

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
              <li>
                <Link href={`/blogs/${category}`} className="hover:text-indigo-600">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Link>
              </li>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <li className="text-gray-900 truncate max-w-xs">{blog.title}</li>
            </ol>
          </div>
        </nav>

        {/* Article Header */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-4">
                <Link 
                  href={`/blogs/${category}`}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white hover:bg-white/30 transition-colors"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Link>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {blog.title}
              </h1>
              <div className="flex items-center justify-center space-x-6 text-indigo-100">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <span>By {blog.author}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">              {/* Featured Image */}
              <div className="mb-12">
                <img
                  src={blog.image || "https://via.placeholder.com/800x400/6366f1/ffffff?text=India+Elects"}
                  alt={blog.title}
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>

              {/* Article Body */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                <div 
                  className="prose prose-lg max-w-none text-justify leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(blog.article) || "<p>Error rendering news</p>" }}
                  style={{
                    lineHeight: '1.8',
                    fontSize: '1.1rem',
                    color: '#374151'
                  }}
                />
              </div>

              {/* Tags Section */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share Section */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Share this article</h3>
                <div className="flex space-x-4">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(`https://indiaelects.vercel.app/blogs/${category}/${title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-colors"
                  >
                    Share on Twitter
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://indiaelects.vercel.app/blogs/${category}/${title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    Share on Facebook
                  </a>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex flex-col sm:flex-row gap-4 justify-between">
                <Link 
                  href="/blogs"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                >
                  <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  All Blogs
                </Link>
                <Link 
                  href={`/blogs/${category}`}
                  className="inline-flex items-center px-6 py-3 border border-indigo-600 text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition-colors"
                >
                  More in {category.charAt(0).toUpperCase() + category.slice(1)}
                  <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>            </div>
          </div>
        </article>

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

export default BlogPost;
