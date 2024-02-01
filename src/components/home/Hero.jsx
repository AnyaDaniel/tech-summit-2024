"use client";
import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";

const Hero = () => {
  const isMobile = window.innerWidth <= 640;

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 9500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <div className="overflow-hidden h-screen">
      {isMobile ? (
        // Mobile screen content
        <main className="">
          <section className="">
            <div
              className={`relative h-screen w-full flex items-center justify-center text-center bg-center bg-cover bg-contain object-cover bg-[url("/hero-six.png")] bg-no-repeat`}
            ></div>
          </section>
        </main>
      ) : (
        // Web screen content
        <>
          {/* Add your web screen content here */}
          {/* Example: */}
          <main className="">
            <section className="">
      <main className="">
          <section className="">
            <div
              className={`relative h-[100vh]  lg:h-screen w-full flex items-center justify-center text-center bg-center lg:bg-top lg:bg-cover bg-contain object-cover bg-[url("/hero-four.png")] bg- bg-no-repeat `}
            >
             
            </div>
          </section>
        </main>
            </section>
          </main>
        </>
      )}
    </div>
  );
};

export default Hero;
