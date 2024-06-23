import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Nitish Kumar | India Elects",
  description:
    "Nitish Kumar is a prominent Indian politician who currently serves as the 22nd Chief Minister of Bihar, a position he has held since February 22, 2015.",
  openGraph: {
    title: "Nitish Kumar | India Elects",
    description:
      "Nitish Kumar is a prominent Indian politician who currently serves as the 22nd Chief Minister of Bihar, a position he has held since February 22, 2015.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fe/Nitish_Kumar_with_JDU_functionaries_%28cropped%29.jpg",
  },
};
const page = () => {
  return (
    <div className="mt-4 p-4">
      <div className="lg:mb-8 py-1 w-full h-20 bg-zinc-600/50 mb-4 flex items-center justify-between overflow-hidden pr-10 pl-1">
        <Link href="/">
          <h2 className="text-3xl font-bold">India Elects</h2>
        </Link>
      </div>
      <h1 className="text-4xl font-bold">Nitish Kumar</h1>
      <div className="container flex items-center justify-center">
        <img
          className="w-full h-auto mb-4 rounded-lg lg:w-1/5 lg:h-1/5 border border-zinc-800"
          src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Nitish_Kumar_with_JDU_functionaries_%28cropped%29.jpg"
          alt="Nitish Kumar Indian Politician"
          title="Nitish Kumar Indian Politician"
        />
      </div>
      <p className="text-justify">
        <b>Nitish Kumar </b> is a prominent Indian politician who currently
        serves as the 22nd Chief Minister of Bihar, a position he has held since
        February 22, 2015. He previously served as Chief Minister from 2005 to
        2014 and for a brief period in 2000. With his current tenure, he has
        become Bihar's longest-serving Chief Minister, now in his 9th term.
        Known for his tenure marked by developmental initiatives and governance
        reforms, Nitish Kumar's leadership has focused on various sectors
        including education, infrastructure, and social welfare. His
        administration is credited with initiatives to improve law and order,
        promote inclusive growth, and address the state's developmental
        challenges. Nitish Kumar is a member of the Janata Dal (United) party,
        which he leads in Bihar. He has been a key figure in Bihar politics for
        several decades and has garnered respect for his pragmatic approach and
        commitment to the state's progress.
      </p>
      <div className="btmlink mt-5">
        <h3 className="text-2xl font-bold">More Personalities:</h3>
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
      </div>
    </div>
  );
};

export default page;
