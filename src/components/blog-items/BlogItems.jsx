import Image from "next/image";
import { assets, blog_data } from "../../../public/images/assets";
import Link from "next/link";

const BlogItems = ({ active }) => {
  return (
    <section className="w-11/12 mx-auto flex flex-wrap gap-5 cursor-pointer xl:mx-24 mb-5">
      {blog_data
        .filter((data) => (active === "All" ? true : data.category === active))
        .map((data) => {
          return (
            <div
              key={data.id}
              className="max-w-[330px] sm:max-w-[300px] bg-white border rounded-sm border-black duration-300 hover:shadow-[-7px_7px_0px_#000]"
            >
              <Link href={`/blogs/${data.id}`}>
                <Image
                  src={data.image}
                  alt="blogImage"
                  width={400}
                  height={400}
                  className="border-b border-black"
                />
              </Link>

              <p className=" mt-2 px-2 py-1 inline-block bg-black text-white text-sm">
                {data.category}
              </p>
              <div className="p-2">
                <h5 className="mb-1 text-lg font-medium tracking-tight text-gray-900">
                  {data.title}
                </h5>
                <p className="text-sm tracking-tight text-gray-700">
                  {data.description}
                </p>
              </div>
              <Link
                href={`/blogs/${data.id}`}
                className="inline-flex items-center p-1 text-center font-semibold "
              >
                Read more{" "}
                <Image
                  src={assets.arrow}
                  alt="arrow"
                  width={12}
                  className="ml-2"
                />
              </Link>
            </div>
          );
        })}
    </section>
  );
};

export default BlogItems;
