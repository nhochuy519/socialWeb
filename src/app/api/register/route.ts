import { connectToDb } from "@/lib/connectToDb";

import User from "@/lib/model/User";

import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";

export const POST = async (req: Request) => {
  try {
    console.log("thực hiện post");
    await connectToDb();
    const { username, password, passwordConfirm } = await req.json();

    if (!username || !password || !passwordConfirm) {
      return NextResponse.json(
        {
          status: "fail",
          message: "Missing information",
        },
        { status: 400 }
      );
    }
    if (password !== passwordConfirm) {
      return NextResponse.json(
        {
          status: "fail",
          message: "Passwords do not match.",
        },
        { status: 400 }
      );
    }
    console.log("thực hiện tìm kiếm");
    const findUsername = await User.findOne({ username });
    if (findUsername) {
      return NextResponse.json(
        {
          status: "fail",
          message: "User already exists",
        },
        { status: 400 }
      );
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      password: hashPassword,
    });

    return NextResponse.json(
      {
        status: "success",
        message: "User created successfully",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log("Database error:", error);
    return NextResponse.json(
      {
        status: "error",
        message: "Error connecting to database",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
};
