import ElectionResults from "@/components/ElectionResults";
import React from "react";

export const metadata = {
  title: "Constituency wise Result | Get 2024 Election data India",
  description:
    "Get constituency wise result Indian election data 2024, comprehensive information in form of Charts, tables.",
};

const ElectionsPage = async () => {
  let data;
  let error;

  try {
    const res = await fetch("http://indiaelects.vercel.app/api/e2024", {
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

  return <ElectionResults results={data} />;
};

export default ElectionsPage;
