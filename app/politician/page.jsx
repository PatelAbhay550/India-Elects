
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Politicians Biodata | India Elects",
  description:
    "Read about various politicians around the country in concise and summarised manner. Explore about your favorite leaders",
};

const Politician = async () => {
  let data;
  let error;

  try {
    const res = await fetch(
      "https://xanimewatcher.vercel.app/politiciansdata.json",
      {
        next: { revalidate: 3600 }, // Revalidate cache every hour
      }
    );
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
        <h1 className="text-4xl font-bold">Politicians Biodata</h1>
        <p>
          Read about various politicians around the country in concise and
          summarised manner. Explore about your favorite leaders
        </p>
        <div className="text-center">
          {data.map((politician) => (
            <Link
              key={politician.name}
              href={`/politician/${politician.name.replace(" ", "-")}`}
            >
              <div className="py-1 w-full h-20 bg-zinc-600 mt-8 flex items-center justify-between overflow-hidden pr-10 pl-5">
                <img
                  src={politician.image}
                  alt={`${politician.name} Politician India`}
                  className="h-full w-20"
                />
                <h2 className="text-2xl text-slate-50">{politician.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Politician;
