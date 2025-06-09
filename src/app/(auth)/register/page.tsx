"use client";

import React, { useState } from "react";

import instance from "@/lib/axiosInstance";

import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [usernameErr, setUsernameErr] = useState<string>("");
  const [passwordErr, setPasswordErr] = useState<string>("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState<string>("");

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let isValid: boolean = true;

    // Reset errors
    setUsernameErr("");
    setPasswordErr("");
    setConfirmPasswordErr("");

    if (!username.trim()) {
      setUsernameErr("Username is required.");
      isValid = false;
    }

    if (!password) {
      setPasswordErr("Password is required.");
      isValid = false;
    }

    if (!confirmPassword) {
      setConfirmPasswordErr("Confirm Password is required.");
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordErr("Passwords do not match.");
      isValid = false;
    }

    if (isValid) {
      try {
        const data = { username, password, passwordConfirm: confirmPassword };
        const res = await instance.post("/register", data);

        if (res.status !== 201) {
          setErrorMessage(res.data.message);
        } else {
          alert("Registered successfully");
          router.push("/login");
        }
      } catch (err: any) {
        if (err.response && err.response.data && err.response.data.message) {
          setErrorMessage(err.response.data.message);
        } else {
          setErrorMessage("Something went wrong.");
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-blue-600 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 border rounded-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {usernameErr && (
              <p className="text-red-500 text-sm mt-1">{usernameErr}</p>
            )}
          </div>

          <div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordErr && (
              <p className="text-red-500 text-sm mt-1">{passwordErr}</p>
            )}
          </div>

          <div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded-md"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {confirmPasswordErr && (
              <p className="text-red-500 text-sm mt-1">{confirmPasswordErr}</p>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label htmlFor="showPassword" className="text-sm text-gray-700">
              Show Password
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Sign up now
          </button>
        </form>
        {errorMessage && (
          <p className="text-red-500 text-sm text-center mb-4">
            {errorMessage}
          </p>
        )}
        <div className="text-center text-sm mt-4">
          <span className="text-gray-500">Already have an account? </span>
          <a href="/login" className="text-blue-600 hover:underline">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
}
