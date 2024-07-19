import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Chief Ministers of India List | India Elects",
  description:
    "List of Chief Ministers of Indian states with their respective states.",
  keywords: [
    "Chief Ministers of India",
    "Indian Chief Ministers",
    "State Chief Ministers",
    "Chief Ministers list",
    "India government leaders",
    "state governance India",
    "political leaders India",
  ],
};

const ChiefMinisters = async () => {
  let data;
  let error;

  try {
    const res = await fetch(
      "https://xanimewatcher.vercel.app/ChiefMinisters.json",
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
    <div className="container mx-auto p-4">
      <Link href="/">
        <h2 className="text-2xl font-bold mb-8 cursor-pointer bg-zinc-400 px-3 w-fit">
          Back to Home
        </h2>
      </Link>
      <h1 className="text-2xl font-bold mb-4">Chief Ministers of India</h1>
      <p className="mb-4">
        India, the world's largest democracy, is comprised of 28 states and 8
        Union Territories. Each state is governed by a Chief Minister who is the
        head of the government in that state. The Chief Minister is responsible
        for the administration of the state and plays a crucial role in
        implementing policies, maintaining law and order, and ensuring the
        welfare of the citizens.
      </p>
      <p className="mb-4">
        <strong>What is a Chief Minister?</strong> A Chief Minister is the
        elected head of the government in each Indian state. The Chief Minister
        is appointed by the Governor of the state, typically being the leader of
        the majority party in the state legislative assembly. The Chief
        Minister’s role is to guide the state’s administration and work in
        coordination with the central government to ensure the state’s
        development and the implementation of national policies.
      </p>
      <h2 className="text-lg font-bold mb-2">Roles and Responsibilities</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          Policy Formulation and Implementation: Developing and executing state
          policies and programs.
        </li>
        <li>Law and Order: Ensuring peace and stability within the state.</li>
        <li>
          Administration: Overseeing the functioning of various state
          departments and ensuring effective governance.
        </li>
        <li>
          Legislation: Introducing and enacting laws within the state assembly.
        </li>
        <li>
          Coordination with Central Government: Collaborating with the central
          government on national policies affecting the state.
        </li>
      </ul>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">State</th>
              <th className="py-2 px-4 border-b">Chief Minister</th>
              <th className="py-2 px-4 border-b">Took Office</th>
            </tr>
          </thead>
          <tbody>
            {data.ChiefMinisters.map((cm) => (
              <tr key={cm.State}>
                <td className="py-2 px-4 border-b">{cm.State}</td>
                <td className="py-2 px-4 border-b">{cm.ChiefMinister}</td>
                <td className="py-2 px-4 border-b pr-8">{cm.office}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link href="/Governors-list">
            <div className="block mx-auto mt-8 max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 cursor-pointer">
              <div className="bg-white p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Governors of India List
                </h2>
                <p className="text-sm text-gray-600">
                  List of Governors of Indian states with their respective
                  states.
                </p>
              </div>
            </div>
          </Link>
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

export default ChiefMinisters;
