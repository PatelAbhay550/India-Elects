import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Governors of India List | India Elects",
  description:
    "List of Governors of Indian states with their respective states.",
  keywords: [
    "Governors of India",
    "Indian Governors",
    "State Governors",
    "Governors list",
    "India government leaders",
    "state governance India",
    "political leaders India",
  ],
};

const Governors = async () => {
  let data;
  let error;

  try {
    const res = await fetch("https://xanimewatcher.vercel.app/Governers.json", {
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

  return (
    <div className="container mx-auto p-4">
      <Link href="/">
        <h2 className="text-2xl font-bold mb-8 cursor-pointer bg-zinc-400 px-3 w-fit">
          Back to Home
        </h2>
      </Link>
      <h1 className="text-2xl font-bold mb-4">Governors of India</h1>
      <p className="mb-4">
        India, the world's largest democracy, is comprised of 28 states and 8
        Union Territories. Each state is overseen by a Governor who is the head
        of the state. The Governor is responsible for ensuring that the state
        government functions within the framework of the Constitution and plays
        a crucial role in maintaining the law and order in the state.
      </p>
      <p className="mb-4">
        <strong>What is a Governor?</strong> A Governor is the constitutional
        head of each Indian state. The Governor is appointed by the President of
        India and holds office at the President’s pleasure. The Governor’s role
        includes overseeing the state’s administration, ensuring the
        implementation of central policies, and acting as a liaison between the
        central and state governments.
      </p>
      <h2 className="text-lg font-bold mb-2">Roles and Responsibilities</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          Constitutional Duties: Ensuring the state government functions within
          the legal framework.
        </li>
        <li>
          Executive Authority: Overseeing the implementation of state policies
          and programs.
        </li>
        <li>
          Legislation: Giving assent to bills passed by the state legislature.
        </li>
        <li>
          Financial Oversight: Ensuring the state budget is implemented as
          planned.
        </li>
        <li>
          Central Coordination: Acting as a representative of the central
          government in the state.
        </li>
      </ul>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">State</th>
              <th className="py-2 px-4 border-b">Governor</th>
            </tr>
          </thead>
          <tbody>
            {data.Governors.map((governor) => (
              <tr key={governor.State}>
                <td className="py-2 px-4 border-b">{governor.State}</td>
                <td className="py-2 px-4 border-b">{governor.Governor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <footer className="bg-gray-800 text-gray-300 text-center py-4 mt-4">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <Link href="/AboutUs">
              <p className="mx-4 hover:text-gray-400">About Us</p>
            </Link>
            <span>|</span>
            <Link href="/ContactUs">
              <p className="mx-4 hover:text-gray-400">Contact Us</p>
            </Link>
          </div>
          <p className="mt-2">&copy; 2024 India Elects. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Governors;
