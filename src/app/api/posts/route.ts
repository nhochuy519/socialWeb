import { connectToDb } from "@/lib/connectToDb";

import Post from "@/lib/model/Post";

import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    await connectToDb();
    const posts = await Post.find();

    return NextResponse.json(
      {
        status: "success",
        message: "Posts fetched successfully",
        data: posts,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: "Error fetching posts",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
};

export const POST = async (req: Request) => {
  try {
    await connectToDb();
    const data = await req.json();
    console.log(data);

    const createPost = await Post.create(data);
    console.log("createpost", createPost);

    return NextResponse.json(
      {
        status: "success",
        message: "Post created successfully",
        data,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
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
