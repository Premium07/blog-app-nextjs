"use client";
import Image from "next/image";
import React, { useState } from "react";
import { assets } from "../../../../public/images/assets";

const Page = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Prem S. Gupta",
    authorImg: "/author_img.png",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
    console.log(data);
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };
  return (
    <section>
      <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-10 sm:pl-16">
        <p className="text-xl">Upload Thumbnail</p>
        <label htmlFor="image">
          <Image
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt="upload"
            width={140}
            height={70}
            className="mt-4 cursor-pointer"
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          name="image"
          hidden
          required
        />
        <p className="text-xl mt-4">Blog Title</p>
        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          type="text"
          placeholder="type here.."
          required
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border rounded-sm"
        />
        <p className="text-xl mt-4">Blog Description</p>
        <textarea
          name="description"
          onChange={onChangeHandler}
          value={data.description}
          type="text"
          placeholder="write content here.."
          rows={6}
          required
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border rounded-sm"
        />
        <p className="text-xl mt-4">Blog Category</p>
        <select
          name="category"
          onChange={onChangeHandler}
          value={data.category}
          className="w-40 mt-4 px-4 py-3 border rounded-sm text-gray-500"
        >
          <option value="Startup">Startup</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Technology">Technology</option>
        </select>
        <br />
        <button
          type="submit"
          className="mt-8 w-40 h-12 bg-black text-white mb-2"
        >
          Add
        </button>
      </form>
    </section>
  );
};

export default Page;
