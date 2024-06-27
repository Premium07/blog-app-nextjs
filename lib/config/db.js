import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://prem:user@mongodb@cluster0.aoxqhtx.mongodb.net/blog-app"
  );
  console.log("db connected");
};
