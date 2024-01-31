"use client";
import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";

const Hero = () => {
  const settings = { 
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 9500,
    slidesToShow: 1,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden h-screen">
      <div>
      <main className="">
          <section className="">
            <div
              className={`relative h-[100vh]  lg:h-screen w-full flex items-center justify-center text-center bg-center lg:bg-top lg:bg-cover bg-contain object-cover bg-[url("/hero-four.png")] bg- bg-no-repeat `}
            >
             
            </div>
          </section>
        </main>
        {/* <main className="">
          <section className="">
            <div
              className={`relative h-screen w-full bg-center flex items-center  bg-blend-multiply bg-red-300 bg-opacity-95 bg-cover bg- object-cover  bg-[url("/hero-one.jpg")] bg-no-repeat lg:px-20`}
            >
              <main className="px-4 sm:px-6 lg:px-8 z-50 lg:w-2/3">
                <div
                  className=" relative"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  <h2 className=" lg:text-6xl tracking-tight capitalize leading-10 font-bold text-5xl text-[#fff] sm:leading-none text-3xl md:text-6xl animate-typing  overflow-hidden">
                  Black Business Expo
                  </h2>
                  <p className="mt-3 text-white sm:mt-5 text-base  lg:max-w-[600px] md:mt-5 font-thin ">
                   Join us as we make waves towards empowering the community through promoting black businesses. <br />Let's empower the community!
                  </p>
                  <div
                    className="flex lg:mt-10 mt-5"
                   
                  >
                  
                    <Link href="/attend">
                      <button className="text-white  flex justify-center items-center py-2 px-4 bg-[#0A5AEE]  lg:w-auto lg:h-[40px] text-sm lg:text-lg">
                        Book A Slot
                      </button>
                    </Link>
                  </div>
                </div>
              </main>
            </div>
          </section>
        </main>
        <main className="">
          <section className="">
            <div
              className={`relative bg-center h-screen w-full flex items-center justify-center text-center bg-blend-multiply bg-opacity-70 bg-gray-600 bg-cover bg- object-cover  bg-[url("/hero-two.jpg")] bg-no-repeat `}
            >
              <main className="flex lg:max-w-3xl mx-auto">
                <div
                  className="text-center "
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  <span className="flex justify-center items-center gap-2 p-2 bg-[#0A5AEE] w-72 mx-auto mb-5 text-lg text-[#fff]">
                    <FaCalendarAlt className=""/>
                    <p>March 23, 2024</p>
                  </span>
                  <h2 className="  lg:text-5xl tracking-tight capitalize leading-10 font-bold sm:text-5xl text-[#fff] sm:leading-none text-3xl md:text-3xl animate-typing  ">
                    Connect with other businesses, consumers, Investors and
                    Coorporate Organizations.
                  </h2>
                  <p className="mt-3 text-white sm:mt-5 text-base  text-center md:mt-5 font-thin ">
                    Share your business ideas and expertise amongst the pillars
                    of the community in the business world.
                  </p>
                  <div className="flex justify-center lg:mt-10 mt-5">
                    <Link href="/volunteer">
                      <button className="text-white  flex justify-center items-center py-2 px-4 bg-[#0A5AEE]  lg:w-auto lg:h-[40px] text-sm lg:text-lg">
                        Get Involved
                      </button>
                    </Link>
                  </div>
                </div>
              </main>
            </div>
          </section>
        </main> */}
      </div>
    </div>
  );
};

export default Hero;
