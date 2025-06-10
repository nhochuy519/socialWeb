import { JWT } from "next-auth/jwt";
import { User, Account, Session } from "next-auth";
export const authConfig = {
  pages: {
    signIn: "/login", //Đây là nơi người dùng sẽ được chuyển hướng đến khi họ cố gắng truy cập một route yêu cầu xác thực nhưng chưa đăng nhập.
  },
  providers: [],
  callbacks: {
    async jwt({
      token,
      user,
      account,
    }: {
      token: JWT;
      user?: User;
      account?: Account | null;
    }) {
      console.log("token la", token);
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      console.log("session la", session);

      if (token) {
        session.user = {
          id: typeof token.id === "string" ? token.id : undefined,
          email: token.email,
          image: token.picture,
          name: token.name,
        };
      }
      return session;
    },
    authorized({ auth }: { auth: any }) {
      // console.log("auth là", auth);
      return !!auth;
    },
  },
};
