import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Rahul Gandhi | India Elects",
  description:
    "Rahul Rajiv Gandhi is an Indian politician affiliated with the Indian National Congress (INC). He currently serves as a Member of Parliament in the Lok Sabha",
  openGraph: {
    title: "Rahul Gandhi | India Elects",
    description:
      "Rahul Rajiv Gandhi is an Indian politician affiliated with the Indian National Congress (INC). He currently serves as a Member of Parliament in the Lok Sabha",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Rahul_Gandhi.png",
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
      <h1 className="text-4xl font-bold">Rahul Gandhi</h1>
      <div className="container flex items-center justify-center">
        <img
          className="w-full h-auto mb-4 rounded-lg lg:w-1/5 lg:h-1/5 border border-zinc-800"
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Rahul_Gandhi.png"
          alt="Rahul Gandhi - Indian Politician"
          title="Rahul Gandhi - Indian Politician"
        />
      </div>
      <p className="text-justify">
        <b>Rahul Rajiv Gandhi</b> is an Indian politician affiliated with the
        Indian National Congress (INC). He currently serves as a Member of
        Parliament in the Lok Sabha, representing the Rae Bareli constituency in
        Uttar Pradesh since 2024. Previously, he represented Wayanad, Kerala,
        from 2019 to 2024, and Amethi, Uttar Pradesh, from 2004 to 2019. Gandhi
        held the position of party president of the INC from December 2017 to
        July 2019. He also chairs the Indian Youth Congress and the National
        Students Union of India, and serves as a trustee of the Rajiv Gandhi
        Foundation and Rajiv Gandhi Charitable Trust. Rahul Gandhi belongs to
        the Nehru–Gandhi political family.
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
  );
};

export default page;
