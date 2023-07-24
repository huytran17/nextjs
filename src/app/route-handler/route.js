import { NextResponse } from "next/server";

export async function GET(request) {
  const res = await fetch("https://randomuser.me/api", {
    headers: {
      "Content-type": "application/json",
    },
  });

  const data = await res.json();

  return NextResponse.json({ data });
}
