// pages/api/[person].js
import { NextResponse } from "next/server";
import wiki from "wikipedia";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const person = searchParams.get("person");

  if (!person) {
    return new NextResponse("No person specified", { status: 400 });
  }

  try {
    const page = await wiki.page(person);
    const summary = await page.summary();
    return NextResponse.json(summary);
  } catch (error) {
    return new NextResponse("Error fetching data", { status: 500 });
  }
}
