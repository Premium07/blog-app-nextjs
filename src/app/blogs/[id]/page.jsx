"use client";
import React, { useEffect, useState } from "react";
import { assets, blog_data } from "../../../../public/images/assets";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";

const page = ({ params }) => {
  const socials = [<FaFacebookF />, <FaTwitter />, <FaGooglePlusG />];
  const [data, setData] = useState(null);
  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(params.id) === blog_data[i].id) {
        setData(blog_data[i]);
        // console.log(blog_data[i]);
        break;
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);
  return data ? (
    <>
      <div className="bg-gray-200 p-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src={assets.logo}
              width={150}
              alt="logo"
              className="w-[150px] sm:w-auto"
            />
          </Link>
          <button className="flex items-center gap-2 font-medium py-2 px-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000]">
            Get Started{" "}
            <Image
              src={assets.arrow}
              alt="arrowimage"
              width={12}
              quality={100}
            />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            src={data.author_img}
            width={60}
            height={60}
            alt="picture"
            className="mx-auto mt-6 border border-white rounded-full"
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto ">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          src={data.image}
          width={1280}
          height={720}
          alt="image"
          className="border-4 border-white"
        />
        <h2 className="my-8 text-[26px] font-semibold">Introduction</h2>
        <p>{data.description}</p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 1: Self-Reflection and Global Setting
        </h3>
        <p className="my-3">
          Before you can manage your lifestyle, you must have acheive. Start by
          reflecting on your values, aspirations, and long-term goals.
        </p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 2: Self-Reflection and Global Setting
        </h3>
        <p className="my-3">
          Before you can manage your lifestyle, you must have acheive. Start by
          reflecting on your values, aspirations, and long-term goals.
        </p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 3: Self-Reflection and Global Setting
        </h3>
        <p className="my-3">
          Before you can manage your lifestyle, you must have acheive. Start by
          reflecting on your values, aspirations, and long-term goals.
        </p>
        <h3 className="my-5 text-[18px] font-semibold">Conclusion</h3>
        <p className="my-3">
          Managing your lifestyle is a journey that requires commitment and
          self-awarness. By following this step-by-step guides, Before you can
          manage your lifestyle, you must have acheive. Start by reflecting on
          your values, aspirations, and long-term goals.
        </p>
        <div className="my-24">
          <p className="text-black font-semibold my-4">
            Share this article on Social Media.
          </p>
          <div className="flex text-black gap-2">
            {socials.map((social, index) => {
              return (
                <div
                  key={index}
                  className="bg-white p-2 rounded-full text-md cursor-pointer shadow-md flex justify-center items-center hover:bg-black hover:text-white duration-300"
                >
                  <span className="text-xl">{social}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default page;
