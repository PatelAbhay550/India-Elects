import SikkimResults from "@/components/SikkimResults";
import React from "react";

export const metadata = {
  title: "Sikkim 2024 Legislative Assembly Result | India Elects",
  description:
    "Get constituency wise result of Sikkim 2024 Legislative Assembly, comprehensive information in form of Charts, tables.",
};

const Sikkim = async () => {
  let data;
  let error;

  try {
    const res = await fetch("https://indiaelects.vercel.app/api/sikkimresult", {
      next: { revalidate: 3600 }, // Revalidate cache every hour
    });
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

  return <SikkimResults results={data} />;
};

export default Sikkim;
