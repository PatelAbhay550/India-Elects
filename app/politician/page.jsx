import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Politicians Biodata | India Elects",
  description:
    "Read about various politicians around the country in concise and sumarised manner. Explore about your faviourate leaders",
};
const Politician = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      {" "}
      <div className="lg:mb-8 py-1 w-full h-20 bg-zinc-600/50 mb-4 flex items-center justify-between overflow-hidden pr-10 pl-1">
        <Link href="/">
          <h2 className="text-3xl font-bold">India Elects</h2>
        </Link>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">Politicians Biodata</h1>
        <p>
          Read about various politicians around the country in concise and
          sumarised manner. Explore about your faviourate leaders
        </p>
        <div className="text-center">
          <Link href="/politician/Narendra-Modi">
            <div className="py-1 w-full h-20 bg-zinc-600 mt-8 flex items-center justify-between overflow-hidden pr-10 pl-5">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Shri_Narendra_Modi%2C_Prime_Minister_of_India.jpg"
                alt="Narendra Modi Politician India"
                className="h-full w-['80px']"
              />
              <h2 className="text-2xl text-slate-50">Narendra Modi</h2>
            </div>
          </Link>
          <Link href="/politician/Rahul-Gandhi">
            <div className="py-1 w-full h-20 bg-zinc-600 mt-8 flex items-center justify-between overflow-hidden pr-10 pl-5">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Rahul_Gandhi.png"
                alt="Rahul Gandhi Politician India"
                className="h-full w-['80px']"
              />
              <h2 className="text-2xl text-slate-50">Rahul Gandhi</h2>
            </div>
          </Link>
          <Link href="/politician/Nitish-Kumar">
            <div className="py-1 w-full h-20 bg-zinc-600 mt-8 flex items-center justify-between overflow-hidden pr-10 pl-5">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Nitish_Kumar_with_JDU_functionaries_%28cropped%29.jpg"
                alt="Nitish Kumar Politician India"
                className="h-full w-['80px']"
              />
              <h2 className="text-2xl text-slate-50">Nitish Kumar</h2>
            </div>
          </Link>
        </div>
      </div>
      <footer className="bg-gray-800 text-gray-300 text-center py-4 absolute b-0 w-screen">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <Link href="/AboutUs">
              <h4 className="mx-4 hover:text-gray-400">About Us</h4>
            </Link>
            <span>|</span>
            <Link href="/ContactUs">
              <h4 className="mx-4 hover:text-gray-400">Contact Us</h4>
            </Link>
          </div>
          <p className="mt-2">&copy; 2024 India Elects. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Politician;
