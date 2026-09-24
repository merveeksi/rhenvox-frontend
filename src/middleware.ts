import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isLocale } from "@/lib/i18n/routing";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segment = pathname.split("/")[1] ?? "";

  if (isLocale(segment)) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", segment);
    const response = NextResponse.next({ request: { headers: requestHeaders } });
    response.cookies.set("locale", segment, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return response;
  }

  const saved = request.cookies.get("locale")?.value;
  const locale = saved === "tr" ? "tr" : "en";
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|images/|favicon.ico|apple-touch-icon.png|site.webmanifest|opengraph-image|twitter-image|robots.txt|sitemap.xml).*)",
  ],
};
