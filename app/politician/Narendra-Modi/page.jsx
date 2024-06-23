import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Narendra Modi | India Elects",
  description:
    "Narendra Damodardas Modi is an Indian politician who has been serving as the 14th Prime Minister of India since May 26, 2014",
  openGraph: {
    title: "Narendra Modi | India Elects",
    description:
      "Narendra Damodardas Modi is an Indian politician who has been serving as the 14th Prime Minister of India since May 26, 2014",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Shri_Narendra_Modi%2C_Prime_Minister_of_India.jpg",
  },
};
const page = () => {
  return (
    <div className="mt-4 p-4">
      <div className="py-1 w-full h-20 bg-zinc-600/50 mb-4 flex items-center justify-between overflow-hidden pr-10 pl-1">
        <Link href="/">
          <h2 className="text-3xl font-bold">India Elects</h2>
        </Link>
      </div>
      <h1 className="text-4xl font-bold">Narendra Modi</h1>
      <div className="container flex items-center justify-center">
        <img
          className="w-full h-auto mb-4 rounded-lg lg:w-1/5 lg:h-1/5 border border-zinc-800"
          src="https://upload.wikimedia.org/wikipedia/commons/4/44/Shri_Narendra_Modi%2C_Prime_Minister_of_India.jpg"
          alt="Narendra Modi - Prime Minister Of India"
          title="Narendra Modi - Prime Minister Of India"
        />
      </div>

      <p className="text-justify">
        <b> Narendra Damodardas Modi</b> is an Indian politician who has been
        serving as the 14th Prime Minister of India since May 26, 2014. Prior to
        his tenure as Prime Minister, Modi held the position of Chief Minister
        of Gujarat from 2001 to 2014. He represents the Varanasi constituency in
        the Indian Parliament as a Member of Parliament (MP). Modi is affiliated
        with the Bharatiya Janata Party (BJP) and also has ties to the Rashtriya
        Swayamsevak Sangh (RSS), a Hindu nationalist paramilitary volunteer
        organization. He holds the distinction of being the longest-serving
        prime minister from a party other than the Indian National Congress.
      </p>
      <div className="btmlink mt-5">
        <h3 className="text-2xl font-bold">More Personalities:</h3>
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
  );
};

export default page;
