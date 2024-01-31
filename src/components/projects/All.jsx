"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaBlog,
  FaClock,
  FaDiscord,
  FaFacebook,
  FaFacebookF,
  FaFacebookMessenger,
  FaHome,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTelegram,
  FaTelegramPlane,
  FaTwitter,
  FaUser,
} from "react-icons/fa";

const All = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const socials = [
    {
      sm: <FaFacebookF className="text-lg " />,
      url: "https://facebook.com/Saskblackbusiness",
    },
    {
      sm: <FaTwitter className="text-lg " />,
      url: "https://twitter.com/Saskblackbusiness",
    },
    {
      sm: <FaInstagram className="text-lg " />,
      url: "https://instagram.com/Saskblackbusiness",
    },
  ];
  return (
    <div className=" grid lg:grid-cols-3 grid-cols-1 gap-x-6 gap-y-10 lg:gap-y-12   ">
      <div
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <div className="h-72  relative group cursor-pointer ">
          <Image
            width={500}
            height={500}
            className="shadow-md w-full h-72 object-cover"
            src="/speaker-two.jpg"
            alt=""
          />

          <div className=" flex justify-center items-center text-center  group-hover:flex absolute  p-2  bg-red-500 w-full  text-[#fff] bg-opacity-75 bottom-0 text-xl">
            Chalie Clark 
          </div>
        </div>
        <p className="text-[#fff] text-center py-3 font-thin">
          Mayor of Saskatoon. 
        </p>
        <div className="flex justify-center items-center  px-0 l py-2 gap-x-4">
          {socials.map((social) => (
            <span
              key={social.url}
              onClick={() => {
                setIsActive(false);
                // openModal();
              }}
              className=" p-2 text-lg flex justify-center items-center "
            >
              <Link href={social.url} className="text-[#fff]">
                {social.sm}
              </Link>
            </span>
          ))}
        </div>
      </div>
      <div data-aos="zoom-out-up" data-aos-duration="1000">
        <div className="h-72  relative group cursor-pointer ">
          <Image
            width={500}
            height={500}
            className="shadow-md w-full h-72 object-cover"
            src="/speaker-one.jpg"
            alt=""
          />
          <div className=" flex justify-center items-center text-center  group-hover:flex absolute  p-2  bg-red-500 w-full  text-[#fff] bg-opacity-75 bottom-0 text-xl">
            Jason Aebig <br />
          </div>
        </div>
        <p className="text-[#fff] text-center py-3 font-thin">
          CEO & CO-founders of Saskatoon Chambers of
          Commerce
        </p>
        <div className="flex justify-center items-center  px-0 l py-2 gap-x-4">
          {socials.map((social) => (
            <span
              key={social.url}
              onClick={() => {
                setIsActive(false);
                // openModal();
              }}
              className=" p-2 text-lg flex justify-center items-center "
            >
              <Link href={social.url} className="text-[#fff]">
                {social.sm}
              </Link>
            </span>
          ))}
        </div>
      </div>

      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <div className="h-72  relative group cursor-pointer ">
          <Image
            width={500}
            height={500}
            className="shadow-md w-full h-72 object-cover"
            src="/speaker-three.jpg"
            alt=""
          />

          <div className=" flex justify-center items-center text-center  group-hover:flex absolute  p-2  bg-red-500 w-full  text-[#fff] bg-opacity-75 bottom-0 text-xl">
          Dr. John Owojori 
          </div>
        </div>
        <p className="text-[#fff] text-center py-3 font-thin">
         Board Chair, BPES
        </p>
        <div className="flex justify-center items-center  px-0 l py-2 gap-x-4">
          {socials.map((social) => (
            <span
              key={social.url}
              onClick={() => {
                setIsActive(false);
                // openModal();
              }}
              className=" p-2 text-lg flex justify-center items-center "
            >
              <Link href={social.url} className="text-[#fff]">
                {social.sm}
              </Link>
            </span>
          ))}
        </div>
      </div>
      {/* <div>
        <div className="h-72  relative group cursor-pointer ">
          <Image
            width={500}
            height={500}
            className="shadow-md w-full h-72 object-cover"
            src="/speaker-three.jpg"
            alt=""
          />

          <div className=" flex justify-center items-center text-center  group-hover:flex absolute  p-2  bg-red-500 w-full  text-[#fff] bg-opacity-75 bottom-0 text-xl">
            John Frank <br />
            ( Speaker)
          </div>
        </div>
        <p className="text-[#fff] text-center py-3 font-thin">
           He'll share with you
          his secret of success. Don't miss this!
        </p>
        <div className="flex justify-center items-center  px-0 l py-2 gap-x-4">
          {socials.map((social) => (
            <span
              key={social.url}
              onClick={() => {
                setIsActive(false);
                // openModal();
              }}
              className=" p-2 text-lg flex justify-center items-center "
            >
              <Link href={social.url} className="text-[#fff]">
                {social.sm}
              </Link>
            </span>
          ))}
        </div>
      </div> */}
      {/* <div>
        <div className="h-72  relative group cursor-pointer ">
          <Image
            width={500}
            height={500}
            className="shadow-md w-full h-72 object-cover"
            src="/speaker-two.jpg"
            alt=""
          />

          <div className=" flex justify-center items-center text-center  group-hover:flex absolute  p-2  bg-red-500 w-full  text-[#fff] bg-opacity-75 bottom-0 text-xl">
            John Doe 
          </div>
        </div>
        <p className="text-[#fff] text-center py-3 font-thin">
          Ben is one of the SEO & CO-founders of Samsung. He'll share with you
          his secret of success. Don't miss this!
        </p>
        <div className="flex justify-center items-center  px-0 l py-2 gap-x-4">
          {socials.map((social) => (
            <span
              key={social.url}
              onClick={() => {
                setIsActive(false);
                // openModal();
              }}
              className=" p-2 text-lg flex justify-center items-center "
            >
              <Link href={social.url} className="text-[#fff]">
                {social.sm}
              </Link>
            </span>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default All;
