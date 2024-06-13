import Link from "next/link";
import React from "react";
export const metadata = {
  title: "About Us | India Elects",
  description:
    "Welcome to India Elects, your premier destination for comprehensive election data and analysis in India.",
};
const AboutUsPage = () => {
  return (
    <div className="bg-white text-zinc-800 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/">
          <h2 className="text-2xl font-bold mb-8 cursor-pointer bg-zinc-400 px-3 w-fit ">
            Back to Home
          </h2>
        </Link>
        <h2 className="text-3xl font-bold mb-8">About India Elects</h2>
        <p className="text-lg mb-6">
          Welcome to India Elects, your premier destination for comprehensive
          election data and analysis in India. Whether you're a political
          enthusiast, a researcher, or a concerned citizen, India Elects offers
          real-time updates, historical trends, and insightful commentary on
          elections across the nation.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Explore Our Features:</h3>
        <ul className="list-disc ml-6 mb-6">
          <li className="mb-2">
            Live Election Results: Stay updated with minute-by-minute election
            results as they unfold across states and constituencies.
          </li>
          <li className="mb-2">
            Historical Data: Dive deep into past elections to understand voting
            patterns, candidate performances, and electoral trends over the
            years.
          </li>
          <li className="mb-2">
            Constituency Profiles: Get detailed insights into each
            constituency's demographics, past election results, and key
            candidates.
          </li>
          <li className="mb-2">
            Expert Analysis: Read expert opinions, analysis, and predictions
            from seasoned political analysts and commentators.
          </li>
        </ul>
        <p className="text-lg mb-6">
          At India Elects, we are committed to providing unbiased, accurate, and
          up-to-date election information. Our platform is designed to empower
          voters, researchers, and journalists with the knowledge they need to
          make informed decisions and understand the pulse of Indian democracy.
        </p>
        <h3 className="text-2xl font-semibold mb-4">
          Stay Informed, Stay Engaged
        </h3>
        <p className="text-lg mb-6">
          Whether it's national, state, or local elections, India Elects is your
          go-to platform for all things related to Indian elections. Join us in
          exploring the dynamics of democracy and the power of your vote.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Follow Us Today</h3>
        <p className="text-lg mb-6">
          Connect with us on social media and subscribe to our newsletter for
          the latest updates, analysis, and trends shaping Indian politics.
        </p>
      </div>
      <footer className="bg-gray-800 text-gray-300 text-center py-4">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <a href="/AboutUs" className="mx-4 hover:text-gray-400">
              About Us
            </a>
            <span>|</span>
            <a href="/ContactUs" className="mx-4 hover:text-gray-400">
              Contact Us
            </a>
          </div>
          <p className="mt-2">&copy; 2024 India Elects. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPage;
