import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://www.thehindu.com/infographics/2025-11-16/bihar-assembly-election-results-2025/assets/data/2025.json",
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch Bihar election data");
    }

    const data = await res.json();
    
    // Process data into a more usable format
    const processedData = [];
    
    Object.entries(data).forEach(([partyCode, candidates]) => {
      candidates.forEach(candidate => {
        processedData.push({
          ...candidate,
          Vote_Percentage: ((candidate.Votes / candidate.Polled_Votes) * 100).toFixed(2),
        });
      });
    });

    return NextResponse.json(processedData);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data", message: error.message },
      { status: 500 }
    );
  }
}
