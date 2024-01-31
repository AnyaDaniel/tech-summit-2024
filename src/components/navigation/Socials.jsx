"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaDiscord,
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

const socials = [
  { sm: <FaFacebookF className="text-2xl " />, url: "Home" },
  { sm: <FaTwitter className="text-2xl " />, url: "About Us" },
  { sm: <FaInstagram className="text-2xl " />, url: "Industries" },
  { sm: <FaDiscord className="text-2xl " />, url: "Services" },
  { sm: <FaTelegramPlane className="text-2xl " />, url: "Contact Us" },
];
const Socials = () => {
  const [showSocials, setShowSocials] = useState(false);
  return (
    <div className="fixed w-[60px] bottom-[40px]  right-[40px] z-[1000] ">
      {showSocials && (
        <div
          className="flex flex-col z-10  items-center   gap-y-8 mb-5"
          onClick={() => setShowSocials(false)}
        >
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-700 opacity-50" />
          </div>
          {socials.map((social) => (
            <span
              key={social.url}
              className=" text-lg flex w-12 h-12 justify-center items-center bg-gray-500 p-2 rounded-full z-40 "
            >
              <Link href={social.url} className="text-dreamWhite">
                {social.sm}
              </Link>
            </span>
          ))}
        </div>
      )}
      <div
        className="w-16 h-16  rounded-full bg-gray-300 shadow-xl flex justify-center items-center p-3 cursor-pointer z-[1000]"
        onClick={() => setShowSocials(!showSocials)}
      >
        {showSocials ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 352 512"
            className="w-8 h-8 cursor-pointer"
          >
            <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
          </svg>
        ) : (
          <div className="flex items-center justify-center space-x-2 animate-pulse dot-typing ">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <div className="w-3 h-3 bg-black rounded-full"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Socials;
