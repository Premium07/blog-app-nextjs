import Image from "next/image";
import { assets } from "../../../public/images/assets";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";

const Footer = () => {
  const socials = [<FaFacebookF />, <FaTwitter />, <FaGooglePlusG />];
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
      <Image src={assets.logo_light} alt="logo" width={120} />
      <p className="text-sm text-white">
        All Rights Reserved. Copyright @blogger{" "}
      </p>
      <div className="flex text-black gap-2">
        {socials.map((social, index) => {
          return (
            <div key={index} className="bg-white p-2 rounded-full text-md cursor-pointer">
              {social}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
