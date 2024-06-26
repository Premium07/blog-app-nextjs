import Image from "next/image";
import { assets } from "../../../public/images/assets";
import Link from "next/link";

const Header = () => {
  return (
    <div className="p-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            src={assets.logo}
            alt="logo"
            width={150}
            className="w-auto sm:w-auto"
          />
        </Link>
        <button className="flex items-center gap-2 font-medium py-2 px-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000]">
          Get Started{" "}
          <Image src={assets.arrow} alt="arrowimage" width={12} quality={100} />
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-6xl">Latest Blogs</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
          laborum modi enim a culpa beatae tempore, officia praesentium
          accusantium reprehenderit!
        </p>
        <form
          className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000]"
          action=""
        >
          <input
            type="email"
            placeholder="Enter Your Email"
            className="pl-4 outline-none"
          />
          <button
            type="submit"
            className="border-l border-black p-4 sm:px-8 active:bg-gray-600 active:text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
