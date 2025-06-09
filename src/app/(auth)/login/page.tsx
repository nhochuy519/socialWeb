"use client";

import React, { useState } from "react";
import Image from "next/image";

import { login } from "@/lib/actions/auth";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (res?.error) {
      console.error("Login failed:", res.error);
    } else {
      console.log("Đăng nhập thành công");
    }
  };

  return (
    <div className="min-h-screen bg-blue-600 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border rounded-md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="flex items-center text-sm">
            <input type="checkbox" id="keepLogged" className="mr-2" />
            <label htmlFor="keepLogged">Keep me logged in</label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Log in now
          </button>
        </form>

        <div className="text-right mt-2 text-sm">
          <a href="#" className="text-blue-600 hover:underline">
            Forgot password
          </a>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          Or continue with
        </div>
        <div className="mt-3 flex justify-center gap-4">
          <button
            type="button"
            className="border rounded-full p-2 hover:bg-gray-100"
            onClick={() => {
              login();
            }}
          >
            <Image src="/ggIcon.png" alt="Google" width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
