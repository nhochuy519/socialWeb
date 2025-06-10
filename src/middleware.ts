import { authConfig } from "./lib/auth.config";
import NextAuth from "next-auth";
import { NextResponse } from "next/server";
const authMiddleware = NextAuth(authConfig).auth;

export default function middleware(req: Request) {
  const { pathname } = new URL(req.url);

  // Cho phép /login và /register luôn truy cập được (không cần đăng nhập)
  if (pathname === "/login" || pathname === "/register") {
    return NextResponse.next();
  }

  // Các route khác yêu cầu xác thực
  return authMiddleware(req);
}
export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
