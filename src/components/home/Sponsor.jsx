import React from "react";
import Image from "next/image";
import Link from "next/link";

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

const Sponsor = () => {
  const sponsors = [
    { img: "/sponsor-one", id: 1 },
    { img: "/sponsor-two", id: 2 },
    { img: "/sponsor-three", id: 3 },
    { img: "/sponsor-four", id: 4 },
    { img: "/sponsor-five", id: 5 },
  ];
  return (
    <section
      id="Speakers"
      className="mt-10 min-w-full lg:px-40 px-4 items-start lg:gap-x-8  flex flex-col lg:flex-row  h-auto py-10 lg:py-20 mb-12 bg-[#DD0042] "
    >
      <div className=" mx-auto">
        <header className="lex flex-col justify-center items-center section-head-parallax ">
          <h4 className="text-[#fff]  lg:text-5xl font-thin border-b-4 pb-4 text-center lg:w-[400px] mx-auto">
            Our Sponsors
          </h4>
          <diV>
            <p className="mt-3 text-[#fff] text-center sm:mt-5 text-lg   md:mt-5 font-thin">
              A heartfelt thank you to our esteemed sponsors for supporting the
              Saskatoon Black Business Expo! These visionary partners play a
              crucial role in fostering economic empowerment within the
              community. Their commitment enables us to provide a platform for
              Black-owned businesses to thrive and connect with a wider
              audience.
            </p>
            <div className="flex flex-row gap-x-4 items-center   ">
              <span className="w-full lg:w-1/3">
                <Image
                  width={500}
                  height={500}
                  className=" w-60 h-auto object-cover"
                  src="/sponsor-one.png"
                  alt=""
                />
              </span>
              <span className="w-full lg:w-1/3">
                <Image
                  width={300}
                  height={300}
                  className=" w-60 h-auto object-cover"
                  src="/naija.png"
                  alt=""
                />
              </span>
              <span className="w-full lg:w-1/3">
                <Image
                  width={500}
                  height={500}
                  className=" w-60 h-auto object-cover"
                  src="/sponsor-two.jpg"
                  alt=""
                />
              </span>
              <span className="w-full lg:w-1/3">
                <Image
                  width={500}
                  height={500}
                  className=" w-60 h-auto object-cover"
                  src="/sponsor-three.png"
                  alt=""
                />
              </span>
              <span className="w-full lg:w-1/3">
                <Image
                  width={500}
                  height={500}
                  className=" w-60 h-auto object-cover"
                  src="/sponsor-four.png"
                  alt=""
                />
              </span>
              <span>
                  <Image
                    width={500}
                    height={500}
                    className=" w-full h-auto object-cover"
                    src="/alive.png"
                    alt=""
                  />
                </span>
                
            </div>
            <Link href="/contact" className="flex justify-center">
              <button className="bg-white mt-5 w-auto px-4 py-2 text-red-600 text-lg">
                Contact Us
              </button>
            </Link>
          </diV>
        </header>
      </div>

      {/* <ul className="lg:py-4 mx-4 lg:mx-0 px-4 flex  items-center flex-row justify-center lg:space-x-8 space-x-4  sticky top-0 w-full overflow-y-hidden z-10 lg:overflow-x-hidden overflow-x-scroll no-scrollbar">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`mr-2 cursor-pointer  ${
              activeTab.id === tab.id
                ? "font-bold bg-dreamBlue px-2 lg:px-6 py-2 text-dreamWhite"
                : "text-gray-400 font-normal"
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab.name}
          </li>
        ))}
      </ul> */}
    </section>
  );
};

export default Sponsor;
