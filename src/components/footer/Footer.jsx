import Image from "next/image";
import { assets } from "../../../public/images/assets";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";

const Footer = () => {
  const socials = [
    { id: 1, icon: <FaFacebookF /> },
    { id: 1, icon: <FaTwitter /> },
    { id: 1, icon: <FaGooglePlusG /> },
  ];
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
      <Image src={assets.logo_light} alt="logo" width={120} />
      <p className="text-sm text-white">
        All Rights Reserved. Copyright @blogger{" "}
      </p>
      <div className="flex text-black gap-2">
        {socials.map((social) => {
          return (
            <div
              key={social.id}
              className="bg-white p-2 rounded-full text-md cursor-pointer"
            >
              {social.icon}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
