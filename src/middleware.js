import { NextResponse } from "next/server";

export function middleware(req) {
  return NextResponse.redirect(new URL("/path2", req.url));
}

export const config = {
  matcher: "/path1",
};
