import { toTitleCase } from "@/app/lib/TitleCase";

export async function generateStaticParams() {
  try {
    const res = await fetch(
      "https://www.thehindu.com/infographics/2025-11-16/bihar-assembly-election-results-2025/assets/data/2025.json",
      {
        next: { revalidate: 86400 },
      }
    );

    if (!res.ok) {
      return [];
    }

    const data = await res.json();
    const constituencySet = new Set();

    Object.values(data).forEach((candidates) => {
      candidates.forEach((candidate) => {
        constituencySet.add(candidate.AC_Name);
      });
    });

    return Array.from(constituencySet).map((constituency) => ({
      constituency: constituency.toLowerCase().replace(/ /g, "-"),
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { constituency } = await params;
  const constituencyName = constituency
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${constituencyName} Assembly Constituency Results 2025 - Bihar Election | India Elects`,
    description: `Detailed ${constituencyName} constituency results from Bihar Assembly Election 2025. View winning candidate, party performance, runner-up details, vote share, and margin statistics.`,
    keywords: [
      `${constituencyName} election result`,
      `${constituencyName} bihar assembly 2025`,
      `${constituencyName} constituency`,
      "bihar assembly election 2025",
      "bihar election results",
      `${constituencyName} winner 2025`,
      "bihar legislative assembly",
    ],
    openGraph: {
      title: `${constituencyName} Bihar Assembly Election Results 2025 | India Elects`,
      description: `Complete election results for ${constituencyName} constituency - winner, runner-up, party details, and vote statistics from Bihar Assembly Election 2025.`,
      url: `https://indiaelects.vercel.app/bihar-election-2025/${constituency}`,
      siteName: "India Elects",
      images: [
        {
          url: "https://indiaelects.vercel.app/logo.png",
          width: 800,
          height: 600,
          alt: "India Elects Logo",
        },
      ],
      locale: "en_IN",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${constituencyName} Bihar Assembly Results 2025`,
      description: `${constituencyName} constituency election results - winner, party, vote share & margin. Bihar 2025.`,
      images: ["https://indiaelects.vercel.app/logo.png"],
      site: "@IndiaElects",
      creator: "@IndiaElects",
    },
    metadataBase: new URL("https://indiaelects.vercel.app"),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `https://indiaelects.vercel.app/bihar-election-2025/${constituency}`,
    },
  };
}

const generateStructuredData = (constituencyName, winner, allCandidates) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: `${constituencyName} Bihar Assembly Election Results 2025`,
  description: `Complete election results for ${constituencyName} assembly constituency including winner ${winner?.Candidate || ""} (${winner?.Party || ""}) with ${winner?.Votes ? winner.Votes.toLocaleString() : ""} votes.`,
  author: {
    "@type": "Organization",
    name: "India Elects",
    url: "https://indiaelects.vercel.app",
  },
  publisher: {
    "@type": "Organization",
    name: "India Elects",
    logo: {
      "@type": "ImageObject",
      url: "https://indiaelects.vercel.app/logo.png",
    },
  },
  datePublished: "2025-11-16",
  dateModified: "2025-11-23",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://indiaelects.vercel.app/bihar-election-2025/${constituencyName.toLowerCase().replace(/ /g, "-")}`,
  },
  articleSection: "Election Results",
  about: {
    "@type": "Event",
    name: `${constituencyName} Constituency - Bihar Assembly Election 2025`,
    startDate: "2025-11-16",
    endDate: "2025-11-16",
    location: {
      "@type": "Place",
      name: constituencyName,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Bihar",
        containedInPlace: {
          "@type": "Country",
          name: "India",
        },
      },
    },
  },
});

export default async function ConstituencyPage({ params }) {
  const { constituency } = await params;
  const constituencyName = constituency
    .replace(/-/g, " ")
    .toUpperCase();

  let data;
  let error;

  try {
    const res = await fetch(
      "https://www.thehindu.com/infographics/2025-11-16/bihar-assembly-election-results-2025/assets/data/2025.json",
      {
        next: { revalidate: 3600 },
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
    return (
      <div className="container mx-auto p-4 text-red-600">
        Error loading data: {error}
      </div>
    );
  }

  // Extract all candidates for this constituency
  const constituencyCandidates = [];
  Object.values(data).forEach((candidates) => {
    candidates.forEach((candidate) => {
      if (candidate.AC_Name.toUpperCase() === constituencyName) {
        constituencyCandidates.push({
          ...candidate,
          Vote_Percentage: ((candidate.Votes / candidate.Polled_Votes) * 100).toFixed(2),
        });
      }
    });
  });

  // Sort by position
  constituencyCandidates.sort((a, b) => a.Position - b.Position);

  if (constituencyCandidates.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Constituency not found</h1>
      </div>
    );
  }

  const winner = constituencyCandidates[0];
  const runnerUp = constituencyCandidates[1];
  const totalPolledVotes = winner.Polled_Votes;
  const constituencyDisplayName = toTitleCase(constituencyName);

  const structuredData = generateStructuredData(
    constituencyDisplayName,
    winner,
    constituencyCandidates
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="container mx-auto p-4 md:p-8">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {constituencyDisplayName} Assembly Constituency Results 2025
          </h1>
          <p className="text-gray-600">Bihar Legislative Assembly Election</p>
        </header>

        <article>
          <p className="text-lg mb-6 leading-relaxed">
            In the 2025 Bihar Assembly elections, <strong>{constituencyDisplayName}</strong> constituency 
            elected <strong>{toTitleCase(winner.Candidate)}</strong> from the{" "}
            <strong>{winner.Party_name} ({winner.Party})</strong> as the winning candidate with{" "}
            <strong>{winner.Votes.toLocaleString()} votes</strong> ({winner.Vote_Percentage}% vote share).
            {runnerUp && (
              <>
                {" "}{toTitleCase(runnerUp.Candidate)} of {runnerUp.Party_name} ({runnerUp.Party}) secured 
                the second position with {runnerUp.Votes.toLocaleString()} votes ({runnerUp.Vote_Percentage}% vote share).
              </>
            )}
          </p>

          {/* Key Stats */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-5">
              <div className="text-sm text-blue-800 font-medium mb-1">Total Votes Polled</div>
              <div className="text-3xl font-bold text-blue-900">
                {totalPolledVotes.toLocaleString()}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-5">
              <div className="text-sm text-green-800 font-medium mb-1">Constituency Type</div>
              <div className="text-3xl font-bold text-green-900">
                {winner.Constituency_Type}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-5">
              <div className="text-sm text-purple-800 font-medium mb-1">Region</div>
              <div className="text-2xl font-bold text-purple-900">
                {winner.Region}
              </div>
            </div>
          </section>

          {/* Winner and Runner-up */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Winner Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-400 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <svg
                  className="w-8 h-8 text-green-600 mr-3"
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
                <h2 className="text-2xl font-bold text-green-800">Winner</h2>
              </div>
              <div className="mb-4">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {toTitleCase(winner.Candidate)}
                </div>
                <div className="text-lg font-semibold text-green-700 mb-2">
                  {winner.Party_name} ({winner.Party})
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  Alliance: {winner.Alliance}
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Votes</span>
                  <span className="text-xl font-bold text-green-700">
                    {winner.Votes.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Vote Share</span>
                  <span className="text-xl font-bold text-green-700">
                    {winner.Vote_Percentage}%
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full bg-green-200 rounded-full h-3">
                  <div
                    className="bg-green-600 h-3 rounded-full"
                    style={{ width: `${winner.Vote_Percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Runner-up Card */}
            {runnerUp && (
              <div className="bg-gradient-to-br from-gray-50 to-slate-50 border-2 border-gray-300 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <svg
                    className="w-8 h-8 text-gray-600 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h2 className="text-2xl font-bold text-gray-700">Runner-up</h2>
                </div>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {toTitleCase(runnerUp.Candidate)}
                  </div>
                  <div className="text-lg font-semibold text-gray-700 mb-2">
                    {runnerUp.Party_name} ({runnerUp.Party})
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    Alliance: {runnerUp.Alliance}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Votes</span>
                    <span className="text-xl font-bold text-gray-700">
                      {runnerUp.Votes.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Vote Share</span>
                    <span className="text-xl font-bold text-gray-700">
                      {runnerUp.Vote_Percentage}%
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gray-500 h-3 rounded-full"
                      style={{ width: `${runnerUp.Vote_Percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Victory Margin */}
          {runnerUp && (
            <section className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold mb-3">Victory Margin</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Votes</div>
                  <div className="text-3xl font-bold text-blue-600">
                    {(winner.Votes - runnerUp.Votes).toLocaleString()}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Percentage</div>
                  <div className="text-3xl font-bold text-blue-600">
                    {(winner.Vote_Percentage - runnerUp.Vote_Percentage).toFixed(2)}%
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* All Candidates */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">All Candidates Performance</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Position
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Candidate
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Party
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Alliance
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                        Votes
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                        Vote %
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {constituencyCandidates.map((candidate, index) => (
                      <tr
                        key={index}
                        className={
                          candidate.Position === 1
                            ? "bg-green-50"
                            : candidate.Position === 2
                            ? "bg-gray-50"
                            : ""
                        }
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {candidate.Position}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap font-medium">
                          {toTitleCase(candidate.Candidate)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {candidate.Party}
                          </div>
                          <div className="text-xs text-gray-500">
                            {candidate.Party_name}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {candidate.Alliance}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right font-medium">
                          {candidate.Votes.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right font-bold">
                          {candidate.Vote_Percentage}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Vote Share Visualization */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Vote Share Distribution</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="space-y-4">
                {constituencyCandidates.slice(0, 10).map((candidate, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex-1">
                        <span className="font-semibold">{toTitleCase(candidate.Candidate)}</span>
                        <span className="text-sm text-gray-600 ml-2">({candidate.Party})</span>
                      </div>
                      <span className="font-bold text-lg ml-4">
                        {candidate.Vote_Percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full ${
                          index === 0
                            ? "bg-green-600"
                            : index === 1
                            ? "bg-gray-500"
                            : "bg-blue-400"
                        }`}
                        style={{ width: `${candidate.Vote_Percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
