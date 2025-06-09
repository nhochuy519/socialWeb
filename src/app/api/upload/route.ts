import { NextResponse } from "next/server";

import formidable from "formidable";

import cloudinary from "@/lib/cloudinary";

export const config = {
  api: {
    bodyParser: false,
  },
};

export const POST = async (req: Request) => {
  const form = new formidable.IncomingForm();
  console.log(form);
  return NextResponse.json(
    {
      status: "oke",
      message: "Error fetching posts",
    },
    { status: 200 }
  );
};
