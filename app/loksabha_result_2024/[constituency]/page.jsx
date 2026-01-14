import { toTitleCase } from "@/app/lib/TitleCase";

export async function generateStaticParams() {
  try {
    const res = await fetch("https://indiaelects.vercel.app/api/e2024", {
      next: { revalidate: 86400 }, // Cache for 24 hours
    });
    
    if (!res.ok) {
      return [];
    }
    
    const data = await res.json();
    
    // Get unique constituencies and format them for URL params
    const constituencies = [...new Set(data.map(result => result.constituency))]
      .map(constituency => ({
        constituency: constituency.replace(/ /g, '%20').replace(/&/g, '%26'),
      }));
    
    return constituencies;
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export const generateMetadata = async ({ params }) => {
  const { constituency } = await params;
  const constituencyName = constituency
    .replace(/%20/g, " ")
    .replace(/%26/g, "&");
  const constituencyDisplay = constituency
    .replace(/%20/g, " ")
    .replace(/%26/g, "and");
  
  return {
    title: `${constituencyDisplay} Lok Sabha Election Results 2024 - Winner, Runner-up & Margin | India Elects`,
    description: `Detailed ${constituencyDisplay} constituency results from Lok Sabha Election 2024. View winning candidate, party affiliation, runner-up details, and victory margin with comprehensive election statistics.`,
    keywords: [
      `${constituencyDisplay} election result`,
      `${constituencyDisplay} lok sabha 2024`,
      `${constituencyDisplay} constituency`,
      "lok sabha election results 2024",
      "parliamentary election india 2024",
      `${constituencyDisplay} winner 2024`,
      "indian general election",
    ],
    alternates: {
      canonical: `https://indiaelects.vercel.app/loksabha_result_2024/${constituency}`,
    },
    openGraph: {
      title: `${constituencyDisplay} Lok Sabha Election Results 2024 | India Elects`,
      description: `Complete election results for ${constituencyDisplay} constituency - winner, runner-up, party details, and victory margin from Lok Sabha 2024.`,
      url: `https://indiaelects.vercel.app/loksabha_result_2024/${constituency}`,
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
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${constituencyDisplay} Lok Sabha Results 2024`,
      description: `${constituencyDisplay} constituency election results - winner, runner-up & margin. Lok Sabha 2024.`,
      images: ["https://indiaelects.vercel.app/logo.png"],
      site: "@IndiaElects",
      creator: "@IndiaElects",
    },
    // close, dont add anything
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
      canonical: `https://indiaelects.vercel.app/loksabha_result_2024/${constituency}`,
    },
  };
};
const generateStructuredData = (constituencyName, result) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: `${constituencyName} Lok Sabha Election Results 2024`,
  description: `Complete election results for ${constituencyName} parliamentary constituency including winner ${result?.leadingCandidate || ''} (${result?.leadingParty || ''}) and detailed vote statistics.`,
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
  datePublished: "2024-06-04",
  dateModified: "2024-06-08",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://indiaelects.vercel.app/loksabha_result_2024/${constituencyName.replace(/ /g, '%20').replace(/&/g, '%26')}`,
  },
  articleSection: "Election Results",
  about: {
    "@type": "Event",
    name: `${constituencyName} Constituency - Indian General Election 2024`,
    startDate: "2024-04-19",
    endDate: "2024-06-01",
    location: {
      "@type": "Place",
      name: constituencyName,
      containedInPlace: {
        "@type": "Country",
        name: "India",
      },
    },
  },
});

const parseVoteShareHTML = (html) => {
  if (!html) return [];
  const candidates = [];
  const regex = /<tr>\s*<td[^>]*>\s*<span><strong>([^<]+)<\/strong><\/span>\s*<span>([^<]+)<\/span>\s*<\/td>\s*<td>\s*<span><strong>([^<]+)<\/strong><\/span>\s*(?:<span>Lead ([^<]+)<\/span>\s*)?<span>Vote Share ([^<]+)<\/span>/gi;
  
  let match;
  while ((match = regex.exec(html)) !== null) {
    candidates.push({
      name: match[1].trim(),
      party: match[2].trim(),
      votes: match[3].trim(),
      lead: match[4] ? match[4].trim() : null,
      voteShare: match[5].trim()
    });
  }
  return candidates;
};

const page = async ({ params }) => {
  const { constituency } = await params;
  let data;
  let error;
  let voteShareData = [];

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

  const results = data;
  const stateResults = results.filter(
    (result) => result.constituency.toLowerCase() === constituency.toLowerCase()
  );

  // match the constituency with the constituency field in results but first escape
  const escapedConstituency = constituency
    .replace(/%20/g, " ")
    .replace(/%26/g, "&");
  const matchedResult = results.filter(
    (result) =>
      result.constituency.toLowerCase() === escapedConstituency.toLowerCase()
  );

  const structuredData = matchedResult[0] 
    ? generateStructuredData(escapedConstituency, matchedResult[0])
    : null;

  // Fetch vote share data from oneindia.com using constNo from the API
  if (matchedResult[0]?.constNo) {
    try {
      const voteShareRes = await fetch(
        `https://www.oneindia.com/elections-common/index.php?page=loksabhaConstituencyDetails&action=getCandidatesResultsAjax&year=2024&pc_id=${matchedResult[0].constNo}`,
        { next: { revalidate: 3600 } }
      );
      if (voteShareRes.ok) {
        const html = await voteShareRes.text();
        voteShareData = parseVoteShareHTML(html);
      }
    } catch (err) {
      console.error('Failed to fetch vote share data:', err);
    }
  }

  return (
    <>
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      <main className="container mx-auto p-4 md:p-8">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {escapedConstituency} Lok Sabha Election Results 2024
          </h1>
          <p className="text-gray-600">Parliamentary Constituency</p>
        </header>

        <article>
          {matchedResult.length > 0 ? (
            matchedResult.map((result, index) => (
              <p key={index} className="text-lg mb-6 leading-relaxed">
                In the 2024 Lok Sabha elections, <strong>{escapedConstituency}</strong> parliamentary constituency elected{" "}
                <strong>{toTitleCase(result.leadingCandidate)}</strong> from the{" "}
                <strong>{result.leadingParty}</strong> as the winning candidate. {toTitleCase(result.trailingCandidate)} of{" "}
                {result.trailingParty} secured the second position with a victory margin of{" "}
                <strong>{typeof result.margin === "number" ? result.margin.toLocaleString() : result.margin} votes</strong>.
              </p>
            ))
          ) : (
            <p className="text-lg mb-6">Loading constituency results...</p>
          )}

          {/* Winner and Runner-up Cards */}
          {matchedResult.length > 0 && (
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {matchedResult.map((result, index) => (
                <>
                  {/* Winner Card */}
                  <div key={`winner-${index}`} className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-400 rounded-xl p-6">
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
                        {toTitleCase(result.leadingCandidate)}
                      </div>
                      <div className="text-lg font-semibold text-green-700 mb-2">
                        {result.leadingParty}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">Status</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          result.status === "Result Declared"
                            ? "bg-green-100 text-green-800"
                            : "bg-orange-100 text-orange-800"
                        }`}>
                          {result.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Runner-up Card */}
                  <div key={`runner-${index}`} className="bg-gradient-to-br from-gray-50 to-slate-50 border-2 border-gray-300 rounded-xl p-6">
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
                        {toTitleCase(result.trailingCandidate)}
                      </div>
                      <div className="text-lg font-semibold text-gray-700 mb-2">
                        {result.trailingParty}
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </section>
          )}

          {/* Victory Margin */}
          {matchedResult.length > 0 && matchedResult[0].margin && (
            <section className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold mb-3">Victory Margin</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Votes</div>
                  <div className="text-3xl font-bold text-blue-600">
                    {typeof matchedResult[0].margin === "number"
                      ? matchedResult[0].margin.toLocaleString()
                      : matchedResult[0].margin}
                  </div>
                </div>
              </div>
            </section>
          )}
        </article>

        {/* Vote Share Details */}
        {voteShareData.length > 0 && (
          <section className="mb-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white px-8 py-6">
                <h2 className="text-2xl font-bold">All Candidates Performance</h2>
              </div>
              <div className="p-8">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Candidate
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Party
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
                      {voteShareData.map((candidate, idx) => (
                        <tr
                          key={idx}
                          className={
                            idx === 0
                              ? "bg-green-50"
                              : idx === 1
                              ? "bg-gray-50"
                              : ""
                          }
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-semibold text-gray-900">{toTitleCase(candidate.name)}</div>
                            {candidate.lead && (
                              <div className="text-sm text-green-600 font-medium">Lead: {candidate.lead}</div>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-900">{candidate.party}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right font-medium text-gray-900">
                            {candidate.votes}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right font-bold text-blue-600">
                            {candidate.voteShare}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Vote Share Visualization */}
                <div className="mt-8">
                  <h3 className="text-lg font-bold mb-4 text-gray-800">Vote Share Distribution</h3>
                  <div className="space-y-4">
                    {voteShareData.slice(0, 10).map((candidate, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex-1">
                            <span className="font-semibold">{toTitleCase(candidate.name)}</span>
                            <span className="text-sm text-gray-600 ml-2">({candidate.party.split(' ').slice(0, 3).join(' ')})</span>
                          </div>
                          <span className="font-bold text-lg ml-4">{candidate.voteShare}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className={`h-3 rounded-full ${
                              idx === 0
                                ? "bg-green-600"
                                : idx === 1
                                ? "bg-gray-500"
                                : "bg-blue-400"
                            }`}
                            style={{ width: candidate.voteShare }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
};

export default page;
