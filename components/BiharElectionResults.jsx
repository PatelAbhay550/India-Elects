import React from "react";
import Link from "next/link";
import { toTitleCase } from "@/app/lib/TitleCase";

const BiharElectionResults = ({ results }) => {
  // Get unique constituencies and their winners
  const constituenciesMap = {};
  results.forEach((candidate) => {
    const key = candidate.AC_Name;
    if (!constituenciesMap[key] || candidate.Position === 1) {
      if (candidate.Position === 1) {
        constituenciesMap[key] = {
          ...candidate,
          Vote_Percentage: ((candidate.Votes / candidate.Polled_Votes) * 100).toFixed(2),
        };
      }
    }
  });

  const winners = Object.values(constituenciesMap);

  // Calculate party-wise seats
  const partyCounts = {};
  winners.forEach((winner) => {
    partyCounts[winner.Party] = (partyCounts[winner.Party] || 0) + 1;
  });

  const partyStats = Object.entries(partyCounts)
    .map(([party, seats]) => ({
      party,
      seats,
      partyName: winners.find((w) => w.Party === party)?.Party_name || party,
    }))
    .sort((a, b) => b.seats - a.seats);

  // Calculate alliance-wise seats
  const allianceCounts = {};
  winners.forEach((winner) => {
    allianceCounts[winner.Alliance] = (allianceCounts[winner.Alliance] || 0) + 1;
  });

  const allianceStats = Object.entries(allianceCounts)
    .map(([alliance, seats]) => ({ alliance, seats }))
    .sort((a, b) => b.seats - a.seats);

  // Group by region
  const regionCounts = {};
  winners.forEach((winner) => {
    regionCounts[winner.Region] = (regionCounts[winner.Region] || 0) + 1;
  });

  const totalSeats = winners.length;
  const majorityMark = Math.ceil(totalSeats / 2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-700 text-white shadow-xl">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-2">
            Bihar Assembly Election Results 2025
          </h1>
          <p className="text-orange-100 text-lg mt-2">
            Complete constituency-wise results for all {totalSeats} seats
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Key Statistics */}
        <section className="mb-8 bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl shadow-lg border border-orange-200">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Election Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-orange-600 mb-2">{totalSeats}</div>
              <div className="text-gray-700 font-medium">Total Constituencies</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-green-600 mb-2">{majorityMark}</div>
              <div className="text-gray-700 font-medium">Seats for Majority</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-purple-600 mb-2">{partyStats.length}</div>
              <div className="text-gray-700 font-medium">Parties</div>
            </div>
          </div>
        </section>

        {/* Alliance Performance */}
        <section className="mb-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white px-8 py-6">
              <h2 className="text-2xl lg:text-3xl font-bold">Alliance Performance</h2>
            </div>
            <div className="p-8">
              <div className="space-y-6">
                {allianceStats.map((alliance, index) => (
                  <div key={index} className="pb-4 border-b last:border-b-0">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-bold text-xl text-gray-800">{alliance.alliance}</span>
                      <span className="text-3xl font-bold text-orange-600">{alliance.seats}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-orange-500 to-amber-600 h-6 rounded-full transition-all duration-700 flex items-center justify-end pr-3"
                        style={{ width: `${(alliance.seats / totalSeats) * 100}%` }}
                      >
                        <span className="text-xs font-bold ml-4 text-white">
                          {((alliance.seats / totalSeats) * 100).toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Party-wise Seats */}
        <section className="mb-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white px-8 py-6">
              <h2 className="text-2xl lg:text-3xl font-bold">Party-wise Seat Distribution</h2>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partyStats.map((party, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-orange-300 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="font-bold text-lg text-gray-900">{party.party}</div>
                        <div className="text-sm text-gray-600 mt-1">{party.partyName}</div>
                      </div>
                      <div className="text-4xl font-bold text-orange-600">{party.seats}</div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-orange-500 to-amber-600 h-3 rounded-full"
                        style={{ width: `${(party.seats / totalSeats) * 100}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-gray-600 mt-2 font-medium">
                      {((party.seats / totalSeats) * 100).toFixed(1)}% of seats
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Regional Distribution */}
        <section className="mb-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white px-8 py-6">
              <h2 className="text-2xl lg:text-3xl font-bold">Regional Distribution</h2>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(regionCounts)
                  .sort(([, a], [, b]) => b - a)
                  .map(([region, count]) => (
                    <div
                      key={region}
                      className="bg-gradient-to-br from-white to-indigo-50 border-2 border-indigo-200 rounded-xl p-6 hover:shadow-lg transition-all"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-bold text-gray-900">{region}</span>
                        <span className="text-3xl font-bold text-indigo-600">{count}</span>
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {((count / totalSeats) * 100).toFixed(1)}% of total seats
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* Constituency-wise Winners */}
        <section className="mb-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white px-8 py-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl lg:text-3xl font-bold">Constituency-wise Winners</h2>
                <div className="bg-white/20 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium">{totalSeats} Constituencies</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {winners
                  .sort((a, b) => a.AC_Name.localeCompare(b.AC_Name))
                  .map((winner, index) => (
                    <div
                      key={index}
                      className="group bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-orange-300 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      {/* Constituency Header */}
                      <div className="border-b border-gray-200 pb-4 mb-4">
                        <Link
                          href={`/bihar-election-2025/${winner.AC_Name.toLowerCase().replace(/ /g, "-")}`}
                        >
                          <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                            {toTitleCase(winner.AC_Name)}
                          </h3>
                        </Link>
                        <div className="flex items-center mt-2 space-x-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <div className="w-2 h-2 rounded-full mr-2 bg-green-400"></div>
                            Result Declared
                          </span>
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                            {winner.Constituency_Type}
                          </span>
                        </div>
                      </div>

                      {/* Winner Section */}
                      <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg mb-4">
                        <div className="flex items-center mb-2">
                          <svg
                            className="w-5 h-5 text-green-600 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm font-medium text-green-800">Winner</span>
                        </div>
                        <p className="font-semibold text-gray-800 text-lg">
                          {toTitleCase(winner.Candidate)}
                        </p>
                        <p className="text-green-700 font-medium">{winner.Party}</p>
                        <p className="text-xs text-gray-600 mt-1">{winner.Party_name}</p>
                      </div>

                      {/* Votes and Stats */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <div className="text-xs text-orange-800 font-medium mb-1">Votes</div>
                          <div className="text-lg font-bold text-orange-600">
                            {winner.Votes.toLocaleString()}
                          </div>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <div className="text-xs text-blue-800 font-medium mb-1">Vote %</div>
                          <div className="text-lg font-bold text-blue-600">
                            {winner.Vote_Percentage}%
                          </div>
                        </div>
                      </div>

                      {/* Region */}
                      <div className="mt-3 text-sm text-gray-600 font-medium">
                        <span className="text-gray-500">Region:</span> {winner.Region}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer Stats */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Election Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
              <div className="text-4xl font-bold text-orange-600 mb-2">{totalSeats}</div>
              <div className="text-orange-800 font-medium">Total Seats</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="text-4xl font-bold text-green-600 mb-2">{partyStats.length}</div>
              <div className="text-green-800 font-medium">Parties</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {allianceStats.length}
              </div>
              <div className="text-purple-800 font-medium">Alliances</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {Object.keys(regionCounts).length}
              </div>
              <div className="text-blue-800 font-medium">Regions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiharElectionResults;
