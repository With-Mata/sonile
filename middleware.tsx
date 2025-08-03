import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { env } from "./env";
import { cookies } from "next/headers";

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // Skip middleware for these paths
  const excludedPaths = [
    "/bouncer", // avoid redirect loop
    "/favicon.ico",
  ];

  const isStaticAsset =
    pathname.startsWith("/_next/") || pathname.startsWith("/images/");

  if (excludedPaths.includes(pathname) || isStaticAsset) {
    return NextResponse.next();
  }

  const cookieStore = await cookies();
  const token = cookieStore.get("auth")?.value;

  if (!token) {
    // Redirect to /bouncer if no token is found
    return NextResponse.redirect(new URL("/bouncer", req.url));
  }

  try {
    // Verify the token
    jwt.verify(token, env.SECRET_KEY);
  } catch (err) {
    // Redirect to /bouncer if token verification fails
    return NextResponse.redirect(new URL("/bouncer", req.url));
  }

  return NextResponse.next();
}

// Apply middleware only to these paths
export const config = {
  runtime: "nodejs",
  matcher: [
    /*
      Match all routes EXCEPT:
      - API routes
      - Static files
    */
    "/((?!api|_next/static|_next/image|favicon.ico|images|robots.txt|sitemap.xml|pdf).*)",
  ],
};
