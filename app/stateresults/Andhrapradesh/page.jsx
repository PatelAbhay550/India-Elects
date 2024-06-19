import AndhraResults from "@/components/AndhraResults";
import React from "react";

export const metadata = {
  title: "Andhra Pradesh 2024 Legislative Assembly Result | India Elects",
  description:
    "Get constituency wise result of Andhra Pradesh 2024 Legislative Assembly, comprehensive information in form of Charts, tables.",
};

const Andhra = async () => {
  let data;
  let error;

  try {
    const res = await fetch("http://localhost:3000/api/andhraresult", {
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

  return <AndhraResults results={data} />;
};

export default Andhra;
