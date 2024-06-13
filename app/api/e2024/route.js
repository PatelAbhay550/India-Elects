import fetch from "node-fetch";

export async function GET(req) {
  try {
    const response = await fetch(
      "https://www.thehindu.com/static/content/election-results/electionresults/static/data/loksabha/india_data_2024.json"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch election data" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
