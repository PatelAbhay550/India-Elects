import React from "react";
import stateListData from "./Andhra-result.json"; // Assuming you have state-list.json in the same directory
import Link from "next/link";

const ElectionResults = ({ results }) => {
  // Map state codes to state names
  const stateCodeToName = {};
  stateListData.forEach((state) => {
    stateCodeToName[state.STATE_CODE] = state.STATE;
  });

  // Function to group results by state
  const groupResultsByState = () => {
    // Create an object to hold grouped results
    const groupedResults = {};

    // Iterate through results and group by stateCode
    results.forEach((result) => {
      const stateName = stateCodeToName[result.stateCode];
      if (!groupedResults[stateName]) {
        groupedResults[stateName] = [];
      }
      groupedResults[stateName].push(result);
    });

    return groupedResults;
  };

  const groupedResults = groupResultsByState();

  return (
    <div className="container mx-auto p-4 cursor-pointer">
      <Link href="/">
        <h2 className="text-2xl font-bold mb-8 cursor-pointer bg-zinc-400 px-3 w-fit ">
          IndiaElects
        </h2>
      </Link>
      <h1 className="text-3xl font-bold mb-2">
        Andhra Pradesh Legislative Assembly Results 2024
      </h1>

      {/* Grouped results */}
      {Object.keys(groupedResults).length === 0 ? (
        <p className="text-red-600">No results found.</p>
      ) : (
        <>
          {Object.entries(groupedResults).map(([stateName, stateResults]) => (
            <div key={stateName} className="mb-8">
              <div className="bg-white text-zinc-800 shadow-md flex flex-col items-center justify-center rounded-lg p-4 w-60 h-60 mb-8">
                <img
                  className="w-40 h-40 object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjqJCYCWC75xJr8Ss0rTQHvtgQAv2tnc6Etw&s"
                  alt="Andhra Pradesh new cheif minister - n chandrababu naidu"
                />
                <h2>Elected Cheif Minister</h2>
                <h2 className="font-bold w-full text-green-600">
                  Nara Chandrababu Naidu
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-6 lg:grid-cols-3 gap-4">
                {stateResults.map((result, index) => (
                  <div
                    key={index}
                    className="bg-white text-zinc-800 shadow-md rounded-lg p-4"
                  >
                    <h3 className="text-lg font-semibold mb-2">
                      {result.constituency}
                    </h3>
                    <p>
                      <strong>Winner Candidate:</strong>{" "}
                      {result.leadingCandidate} ({result.leadingParty})
                    </p>
                    <p>
                      <strong>Runner-Up Candidate:</strong>{" "}
                      {result.trailingCandidate} ({result.trailingParty})
                    </p>
                    <p>
                      <strong>Margin:</strong> {result.margin}
                    </p>
                    <p>
                      <strong>Status:</strong>{" "}
                      <span
                        className={`font-semibold ${
                          result.status === "Result Declared"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {result.status}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ElectionResults;
