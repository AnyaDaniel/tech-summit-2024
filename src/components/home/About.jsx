import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaHouseDamage,
  FaMobileAlt,
  FaPhoneSquare,
  FaUsers,
} from "react-icons/fa";
import { MdSafetyCheck } from "react-icons/md";

const About = () => {
  return (
    <section
      id="about"
      className="lg:px-10  pt-20  px-4  overflow-hidden  text-clip"
    >
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 ">
        <div className="border border-[#1D3466]  flex flex-col justify-center gap-y-4 items-center bg-[#fff] lg:p-4 p-2">
          <p className="font-semibold lg:text-xl text-lg text-center text-#1d3466">
            WHEN
          </p>
          <svg
            className="w-20 h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="#1D3466"
          >
            <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z" />
          </svg>
          <p className="font-semibold  text-center">MARCH 23, 2024</p>
        </div>
        <div className="border border-[#DD0042]  flex flex-col justify-center gap-y-4 items-center bg-[#fff] lg:px-4 p-2">
          <p className="font-semibold lg:text-xl text-lg text-center">WHERE</p>
          <svg
            className="w-20 h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            fill="#DD0042"
          >
            <path d="M172.3 501.7C27 291 0 269.4 0 192 0 86 86 0 192 0s192 86 192 192c0 77.4-27 99-172.3 309.7-9.5 13.8-29.9 13.8-39.5 0zM192 272c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80z" />
          </svg>
          <p className="font-semibold text-sm text-center">
            PRAIRIELAND PARK - HALL C
          </p>
        </div>
        <div className="border border-[#6AC54D]  flex flex-col justify-center gap-y-4 items-center bg-[#fff] lg:p-4 p-2">
          <p className="font-semibold lg:text-xl text-lg text-center">TIME</p>
          <svg
            className="w-20 h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="#6AC54D"
          >
            <path d="M256 8C119 8 8 119 8 256S119 504 256 504 504 393 504 256 393 8 256 8zm92.5 313h0l-20 25a16 16 0 0 1 -22.5 2.5h0l-67-49.7a40 40 0 0 1 -15-31.2V112a16 16 0 0 1 16-16h32a16 16 0 0 1 16 16V256l58 42.5A16 16 0 0 1 348.5 321z" />
          </svg>

          <p className="font-semibold  text-center">11AM</p>
        </div>
      </div>
      {/* <div className='flex py-7 px-5 items-start lg:w-full bg-[url("/about-hero.jpg")] bg-blend-multiply  bg-[#1D3466]  bg-cover bg-center bg-no-repeat  flex-col lg:flex-row  gap-y-6 lg;gap-y-0 gap-x-6'>
        <div className="text-white     rounded-xl lg:w-1/2 w-full">
          <div className="">
            <h2 className="lg:text-5xl font-bold">Where:</h2>
            <p className="mt-3 text-white sm:mt-5 text-lg lg:text-2xl   md:mt-5 font-medium ">
              PRAIRIE LAND PARK, HALL C 503 RUTH STREET WEST, SASKATOON
            </p>
          
          </div>
        </div>
        <div className="text-white     rounded-xl lg:w-1/2 w-full">
          <div className="">
            <h2 className="lg:text-5xl font-bold">When:</h2>
            <span className="lg:flex  items-center gap-x-4">
              <p className="mt-3 text-red-600 sm:mt-5 text-lg   md:mt-5 font-semibold ">
                March 23, 2024
              </p>
              <p className="mt-3 text-[#fff] sm:mt-5 text-lg   md:mt-5 font-semibold ">
                11:00am
              </p>
            </span>

            <p className="mt-3 text-white sm:mt-5 text-lg    md:mt-5 font-thin ">
              Register before March 23, 2024, 2020 to the part of this program.
            </p>
            
          </div>
        </div>
      </div> */}
    </section>
  );
};

// function Item({ icon, title, content }) {
//   return (
//     <div className=" rounded-[40px] mb-5  flex items-center">
//       <div className="flex flex-col md:flex-row gap-5">
//         <div>
//           <div className="h-12 w-12 bg-gradient-to-r text-white from-blue-900 to-blue-500  p-3 rounded-[50px] flex items-center justify-center">
//             {icon}
//           </div>
//         </div>
//         <div>
//           <h2 className="text-lg text-blue-700  font-bold mb-2 capitalize">
//             {title}
//           </h2>
//           <p className="font-light text-sm">{content}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
export default About;
