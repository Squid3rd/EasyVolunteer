import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    Test: "API IS WORKING!",
  });
}