import Link from "next/link";
import React from "react";

const Summary = ({ results }) => {
  return (
    <div className="container mx-auto p-4">
      <Link href="/">
        <h2 className="text-2xl font-bold mb-8 cursor-pointer bg-zinc-400 px-3 w-fit ">
          IndiaElects
        </h2>
      </Link>
      <h1 className="text-2xl font-bold mb-4">Election Summary</h1>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden text-zinc-800 ">
        <thead className="bg-gray-200">
          <tr>
            <th className="text-left py-2 px-4">Alliance/Party</th>
            <th className="text-left py-2 px-4">Total Seats</th>
            <th className="text-left py-2 px-4">Seats Won</th>
          </tr>
        </thead>
        <tbody>
          {results.table.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="py-2 px-4">
                {item.party
                  ? `${item.allianceName} - ${item.party}`
                  : item.allianceName}
              </td>
              <td className="py-2 px-4">{item.grandTotal}</td>
              <td className="py-2 px-4">{item.won}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Summary;
