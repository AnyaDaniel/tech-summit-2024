/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// for keepers
const testimonials = [
  {
    img: "/home/sol.png",
    id: 1,
    // job: "Real Estate Agent",
    author: " Solterra Developments",
    desc: "Dream Care Formwork transformed our construction project into a seamless and efficient endeavor. Their commitment to quality, attention to detail, and top-notch formwork services were truly impressive. The results exceeded our expectations, and we couldn't be happier with the final outcome.",
  },
  {
    img: "/home/testimonial-two.jpg",
    id: 2,
    // job: "Client",
    author: "PR Pomeroy",
    desc: "We've worked with numerous formwork companies in the past, but Dream Care Formwork stands out as an exceptional choice. Their expertise in the industry and dedication to safety and quality are evident in every project. They are a reliable and professional team that consistently delivers on time, ensuring our projects progress smoothly. We highly recommend Dream Care Formwork for any construction project.",
  },
  {
    img: "/home/testimonial-three.jpg",
    id: 3,
    // job: "Client",
    author: "JMB Concrete",
    desc: "Dream Care Formwork is a true asset to the construction industry. Their ability to handle even the most complex formwork challenges with precision and efficiency is remarkable. They not only provide outstanding results but also maintain a strong focus on safety. It's rare to find a company that combines exceptional craftsmanship with a genuine commitment to their clients' satisfaction. We are thrilled with the exceptional service we received.",
  },
  {
    img: "/home/testimonial-three.jpg",
    id: 4,
    // job: "Client",
    author: "Full Throttle Concrete",
    desc: "Dream Care Formwork's placing and finishing services were instrumental in making our project a success. The concrete work was flawless, and their attention to detail and commitment to a consistent and high-quality finish were evident in every aspect of their work. Their team's professionalism and ability to adapt to our project's specific needs were truly impressive. We wouldn't hesitate to recommend Dream Care Formwork for their exceptional formwork services.",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <div className="absolute inset-y-0 left-0 lg:flex lg:items-center">
        <button className="mt-24 lg:mt-0 -ml-6 h-12 w-12 rounded-full bg-white p-3 shadow-lg">
          <svg
            className="h-full w-full text-indigo-900"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z" />
          </svg>
        </button>
      </div>
    ),
    nextArrow: (
      <div className="absolute inset-y-0 right-0 lg:flex lg:items-center">
        <button className="mt-24 lg:mt-0 -mr-6 h-12 w-12 rounded-full bg-white p-3 shadow-lg">
          <svg
            className="h-full w-full text-indigo-900"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z" />
          </svg>
        </button>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-w-screen flex items-center justify-center">

      <div className="w-full bg-white py-6 lg:py-10 text-gray-800 mt-5">

        <div className="w-full max-w-6xl mx-auto">
          <div className="">
            <h1 className="pb-3 lg:pb-0 md:text-3xl text-2xl font-bold lg:mb-5 text-black text-center  flex md:justify-center lg:justify-center justify-center">
              Still on the fence, here’s what <br />
              our users are saying
            </h1>
          </div>

          <Slider {...settings}>
            {/* {testimonials.map((item) => (
              <div key={item.id} className="px-3">
                <div className="w-full mx-auto rounded-lg border border-gray-300 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center"></div>
                  <div className="w-full py-4">
                    <blockquote>
                      <p className="text-sm leading-tight quote text-center">{`"${item.desc}"`}</p>
                    </blockquote>
                  </div>
                  <div className=" flex flex-row items-center gap-x-2  pt-3 border-t border-gray-500">
                    <Image
                      width={20}
                      height={20}
                      src={item.img}
                      className="w-10 h-10"
                      alt="Testimomials"
                    />
                    <div className="flex flex-col ">
                      <h6 className="font-bold text-sm capitalize text-gray-600">
                        {item.author}
                      </h6>
                      <p className="font-thin text-xs capitalize text-gray-400">
                        {item.job}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))} */}
            {testimonials.map((item) => (
              <div key={item.id} className="max-w-6xl mx-auto px-8 lg:py-16">
                <div className="relative">
                  <div className="relative text-center items-center justify-around lg:flex rounded-lg shadow-2xl overflow-hidden">
                    {/* <div className="h-56 lg:h-auto lg:w-5/12 relative flex items-center justify-center">
                      <Image
                        width={500}
                        height={300}
                        className="absolute h-auto w-auto object-cover"
                        src={item.img}
                        alt=""
                      />
                      <div className="absolute inset-0  opacity-75"></div>
                    </div> */}
                    <div className="relative lg:w-8/12 bg-white">
                      <svg
                        className="absolute h-full text-white w-24 -ml-12"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                      >
                        <polygon points="50,0 100,0 50,100 0,100" />
                      </svg>
                      <div className="relative  py-12 lg:py-24 px-8 lg:px-16 text-gray-700 leading-relaxed">
                        <p>{`"${item.desc}"`}</p>
                        <p className="font-semibold text-indigo-600 text-lg pt-3  hover:text-indigo-900">
                          {item.author}
                        </p>
                        <p className="font-thin italic text-gray-500 text-sm   hover:text-indigo-900">
                          {item.job}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
