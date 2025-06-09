import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { connectToDb } from "./lib/connectToDb";
import User from "./lib/model/User";

import bcrypt from "bcryptjs";

import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          await connectToDb();

          const user = await User.findOne({
            username: credentials.username,
          }).select("+password");
          console.log("user la", user);
          if (!user) {
            throw new Error("User not found");
          }
          const isValid = await bcrypt.compare(
            credentials.password as string,
            user.password
          );
          if (!isValid) throw new Error("Invalid password");
          return user;
        } catch (error) {
          console.log("error", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google") {
        try {
          await connectToDb();

          const existingUser = await User.findOne({ email: profile?.email });

          if (!existingUser) {
            await User.create({
              username: profile?.name,
              email: profile?.email,
              avatar: profile?.picture,
              provider: "google",
            });
          }
          console.log("tạo thành công");
        } catch (error) {
          console.error("Google sign-in error:", error);
          return false;
        }
      }

      return true;
    },
  },
});
