import Sidebar from "@/components/admin-components/Sidebar";
import Image from "next/image";
import { assets } from "../../../public/images/assets";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
            <h3 className=" text-xl">Admin Panel</h3>
            <Image
              src={assets.profile_icon}
              alt="picture"
              width={40}
              quality={100}
            />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
