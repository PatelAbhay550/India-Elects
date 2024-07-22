// pages/politician/[politicianname]/page.jsx

import Link from "next/link";
import React from "react";

export async function generateMetadata({ params }) {
  let metadata = {
    title: "Politician | India Elects",
    description: "Detailed biodata of Indian politicians",
    openGraph: {
      title: "Politician | India Elects",
      description: "Detailed biodata of Indian politicians",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Shri_Narendra_Modi%2C_Prime_Minister_of_India.jpg", // Default image
    },
  };
  const { politicianname } = params;
  if (politicianname) {
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
      const data = await res.json();

      const politician = data.find(
        (p) =>
          p.name.toLowerCase().replace(/\s+/g, "-") ===
          politicianname.toLowerCase()
      );

      if (politician) {
        const formattedName = politicianname.replace("-", " ");
        metadata = {
          title: `${formattedName} | India Elects`,
          description: `Get all information about ${politician.name}, a prominent politician in India.`,
          openGraph: {
            title: `${formattedName} | India Elects`,
            description: `Get all information about ${politician.name}, a prominent politician in India.`,
            image: politician.image,
          },
        };
      }
    } catch (err) {
      console.error(
        "Error fetching politician data for metadata:",
        err.message
      );
    }
  }

  return metadata;
}

const PoliticianPage = async ({ params }) => {
  const { politicianname } = params;

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

  const politician = data.find(
    (p) =>
      p.name.replace(" ", "-").toLowerCase() === politicianname.toLowerCase()
  );

  if (!politician) {
    return (
      <div className="container mx-auto p-4 text-red-600">
        <h2>Politician not found</h2>
        <Link href="/">Navigate to home</Link>
      </div>
    );
  }

  return (
    <div className="mt-4 p-4">
      <div className="py-1 w-full h-20 bg-zinc-600/50 mb-4 flex items-center justify-between overflow-hidden pr-10 pl-1">
        <Link href="/">
          <h2 className="text-3xl font-bold">India Elects</h2>
        </Link>
      </div>
      <h1 className="text-4xl font-bold">{politician.name}</h1>
      <div className="container flex items-center justify-center">
        <img
          className="w-full h-auto mb-4 rounded-lg lg:w-1/5 lg:h-1/5 border border-zinc-800"
          src={politician.image}
          alt={`${politician.name} - Politician`}
          title={`${politician.name} - Politician`}
        />
      </div>

      <p className="text-justify">
        <b>{politician.name}</b> {politician.biodata}
      </p>
      <div className="btmlink mt-5">
        <h3 className="text-2xl font-bold">More Personalities:</h3>
        {data
          .filter((p) => p.name !== politician.name)
          .slice(0, 3) // Show 3 other politicians as examples
          .map((p) => (
            <Link key={p.name} href={`/politician/${p.name.replace(" ", "-")}`}>
              <div className="py-1 w-full h-20 bg-zinc-600 mt-8 flex items-center justify-between overflow-hidden pr-10 pl-5">
                <img
                  src={p.image}
                  alt={`${p.name} Politician India`}
                  className="h-full w-['80px']"
                />
                <h2 className="text-2xl text-slate-50">{p.name}</h2>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default PoliticianPage;
