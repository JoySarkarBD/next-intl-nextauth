import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import createIntlMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { locales } from "./navigation";

// Public pages that don't require authentication
const publicPages = ["/", "/blogs", "/login", "/register"];

// Define admin pages using a regular expression
const adminPagesPattern = `^(/(${locales.join(
  "|"
)}))?(/admin|/admin/|admin/:path*)$`;
const adminPagesRegex = new RegExp(adminPagesPattern, "i");

// Create internationalization middleware
const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale: "en",
});

// Define the authentication middleware with role-based authentication
const authMiddleware = withAuth(
  async (req) => {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    const { nextUrl } = req;
    const role = token?.role;

    // Redirect non-admins from admin pages
    if (role !== "admin" && adminPagesRegex.test(nextUrl.pathname)) {
      return NextResponse.redirect(new URL("/denied", req.url));
    }

    return intlMiddleware(req);
  },
  {
    callbacks: {
      // Only authorize if there is a token
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: "/login",
    },
  }
);

export default function middleware(req: NextRequest) {
  // Check if the request is for a public page
  const publicPathnameRegex = new RegExp(
    `^(/(${locales.join("|")}))?(${publicPages
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")}|/blogs/[^/]+)/?$`,
    "i"
  );

  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicPage) {
    // Handle public pages with internationalization middleware
    return intlMiddleware(req);
  } else {
    // Handle private pages with authentication and internationalization middleware
    return (authMiddleware as any)(req);
  }
}

export const config = {
  // Skip paths that should not be internationalized
  // Match only internationalized pathnames
  matcher: ["/((?!api|_next|.*\\..*).*)", "/", "/(en|bn)/:path*"],
};
