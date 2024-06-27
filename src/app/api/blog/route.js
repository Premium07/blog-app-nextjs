import { connectDB } from "../../../../lib/config/db";
import { writeFile } from "fs/promises";
import BlogModel from "../../../../lib/models/BlogModel";

const { NextResponse } = require("next/server");

const LoadDB = async () => {
  await connectDB();
};

LoadDB();

export async function GET(request) {
  return NextResponse.json({ msg: "API Working" });
}

export async function POST(request) {
  const formData = await request.formData();
  const timestamp = Date.now();

  const image = formData.get("image");
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timestamp}_${image.name}`;
  await writeFile(path, buffer);
  const imgURL = `/${timestamp}_${image.name}`;

  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    image: `${imgURL}`,
    authorImg: `${formData.get("authorImg")}`,
  };
  await BlogModel.create(blogData);
  console.log("Blog Saved");
  return NextResponse.json({ sucess: true, msg: "Blog Added" });
}
