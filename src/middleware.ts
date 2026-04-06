import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const allowedOrigins = [
  "https://digistano-website.vercel.app",
  "https://digistano.com",
  "https://www.digistano.com",
];

export function middleware(request: NextRequest) {
  const origin = request.headers.get("origin");
  const isAllowedOrigin = origin && allowedOrigins.includes(origin);

  if (request.method === "OPTIONS") {
    const response = new NextResponse(null, { status: 204 });

    if (isAllowedOrigin) {
      response.headers.set("Access-Control-Allow-Origin", origin);
      response.headers.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
      response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    }

    return response;
  }

  const response = NextResponse.next();

  if (isAllowedOrigin) {
    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  }

  return response;
}

export const config = {
  matcher: ["/api/:path*"],
};