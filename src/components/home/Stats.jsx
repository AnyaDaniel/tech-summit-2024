"use client";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
const Stats = () => {
  const stats = [
    { label: "Projects Completed", value: 100 },
    { label: " Partners", value: 10 },
    { label: "Years of Experience", value: 5 },
    { label: "Workers Employed", value: 1000 },
  ];
  return (
    <>
      <section className="my-16  mx-4 lg:mx-40 ">
        <div className="  ">
          <div className='relative  rounded-3xl lg:rounded-none backdrop-blur-sm w-full md:h-60  mx-auto z-20 -2 flex flex-row justify-between items-start lg:items-center p-3 lg:p-10  bg-blend-multiply bg-opacity-80 bg-black bg-fixed bg-cover  object-cover  bg-[url("/home/hero-2.jpg")] bg-no-repeat'>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-y-2 items-center z-50"
              >
                <h1 className=" font-[900] lg:text-[38px] text-dreamWhite text-[28px]">
                  <CountUp
                    end={stat.value}
                    duration={50}
                    delay={0}
                    start={stat.value / 2}
                  />
                </h1>
                <p className="text-xs lg:text-sm text-dreamWhite text-center lg:text-left">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
