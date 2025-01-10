import Image from "next/image";
import React from "react";

const Schedule = () => {
  return (
    <div className="container px-4 lg:px-40 my-10">
      <h1 className="text-3xl text-center md:text-4xl font-medium text-black mb-4 md:mb-6">
        Schedule
      </h1>
      <div className="wrapper bg-white rounded shadow w-full ">
        <div className="header flex justify-between border-b p-2">
          <span className="text-lg font-bold">March 22, 2025</span>
          <div className="buttons">
            <button className="p-1">
              <svg
                width="1em"
                fill="gray"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-arrow-left-circle"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fill-rule="evenodd"
                  d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"
                />
                <path
                  fill-rule="evenodd"
                  d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"
                />
              </svg>
            </button>
            <button className="p-1">
              <svg
                width="1em"
                fill="gray"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-arrow-right-circle"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fill-rule="evenodd"
                  d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"
                />
                <path
                  fill-rule="evenodd"
                  d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
          </div>
        </div>
        <main className="w-full lg:inline-block hidden">
          <table className="w-full ">
            <thead>
              <tr className="bg-blue-600 text-[#fff]">
                <th className="p-2 border-r h-20 my-2 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span className="xl:block lg:block md:block sm:block hidden">
                    Date
                  </span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                    Date
                  </span>
                </th>
                <th className="p-2 border-r h-20 my-2 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span className="xl:block lg:block md:block sm:block hidden">
                    Speaker
                  </span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                    Spkr
                  </span>
                </th>
                <th className="p-2 border-r h-20 my-2 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span className="xl:block lg:block md:block sm:block hidden">
                    Content
                  </span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                    Con.
                  </span>
                </th>
                <th className="p-2 border-r h-20 my-2 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span className="xl:block lg:block md:block sm:block hidden">
                    Location
                  </span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                    Loc
                  </span>
                </th>
                {/* <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
              <span className="xl:block lg:block md:block sm:block hidden">Thursday</span>
              <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Thu</span>
            </th>
            <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
              <span className="xl:block lg:block md:block sm:block hidden">Friday</span>
              <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Fri</span>
            </th>
            <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
              <span className="xl:block lg:block md:block sm:block hidden">Saturday</span>
              <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Sat</span>
            </th> */}
              </tr>
            </thead>
            <tbody>
              <tr className="text-center h-20">
                <td className="border p-1 h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ">
                  <div className="flex justify-center items-center flex-col h-24 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className=" flex justify-center items-center h-30 py-1 w-full cursor-pointer">
                      <div className="event bg-purple-400 text-white rounded p-1 text-sm mb-1 flex gap-2">
                        <span className="event-name">Meeting</span>
                        <span className="time">9:00 - 10:00</span>
                      </div>
                      {/* <div className="event bg-purple-400 text-white rounded p-1 text-sm mb-1">
                    <span className="event-name">
                      Meating
                    </span>
                    <span className="time">
                      18:00~20:00
                    </span>
                  </div> */}
                    </div>
                  </div>
                </td>
                <td className="border p-1 h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col lg:flex-row justify-center items-center h-24 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className=" w-full">
                      <span className="text-gray-500">
                        <Image
                          width={500}
                          height={500}
                          className="shadow-md w-16 h-20 object-cover"
                          src="/speaker-two.jpg"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex flex-col text-black  items-center  py-1 w-full cursor-pointer">
                      <p className="text-base">Chalie Clark</p>
                    </div>
                  </div>
                </td>
                <td className="border p-2 h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col justify-center items-center h-24 w-full  mx-auto ">
                    <div className=" w-full">
                      <span className="text-gray-500 text-center">
                        Community Engagement and Social Impact.
                      </span>
                    </div>
                    <div className="flex justify-center items-center h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
                <td className="border p-2 h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col justify-center items-center h-24 w-full  mx-auto ">
                    <div className=" w-full">
                      <span className="text-gray-500 text-center">
                        PRAIRIE LAND PARK, HALL C 503 RUTH STREET WEST,
                        SASKATOON
                      </span>
                    </div>
                    <div className="flex justify-center items-center h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
              </tr>

              <tr className="text-center h-20">
                <td className="border p-1 h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ">
                  <div className="flex justify-center items-center flex-col h-24 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className=" flex justify-center items-center h-30 py-1 w-full cursor-pointer">
                      <div className="event bg-purple-400 text-white rounded p-1 text-sm mb-1 flex gap-2">
                        <span className="event-name">Meeting</span>
                        <span className="time">10:00 - 11:00</span>
                      </div>
                      {/* <div className="event bg-purple-400 text-white rounded p-1 text-sm mb-1">
                    <span className="event-name">
                      Meating
                    </span>
                    <span className="time">
                      18:00~20:00
                    </span>
                  </div> */}
                    </div>
                  </div>
                </td>
                <td className="border p-1 h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col lg:flex-row justify-center items-center h-24 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className=" w-full">
                      <span className="text-gray-500">
                        <Image
                          width={500}
                          height={500}
                          className="shadow-md w-16 h-20 object-cover"
                          src="/speaker-one.jpg"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex flex-col text-black  items-center  py-1 w-full cursor-pointer">
                      <p className="text-base">Jason Aebig</p>
                    </div>
                  </div>
                </td>
                <td className="border p-2 h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col justify-center items-center h-24 w-full  mx-auto ">
                    <div className=" w-full">
                      <span className="text-gray-500 text-center">
                        Empowering Black Women in Business
                      </span>
                    </div>
                    <div className="flex justify-center items-center h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
                <td className="border p-2 h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col justify-center items-center h-24 w-full  mx-auto ">
                    <div className=" w-full">
                      <span className="text-gray-500 text-center">
                        PRAIRIE LAND PARK, HALL C 503 RUTH STREET WEST,
                        SASKATOON
                      </span>
                    </div>
                    <div className="flex justify-center items-center h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
              </tr>

              <tr className="text-center h-20">
                <td className="border p-1 h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ">
                  <div className="flex justify-center items-center flex-col h-24 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className=" flex justify-center items-center h-30 py-1 w-full cursor-pointer">
                      <div className="event bg-purple-400 text-white rounded p-1 text-sm mb-1 flex gap-2">
                        <span className="event-name">Meeting</span>
                        <span className="time">12:00 - 13:00</span>
                      </div>
                      {/* <div className="event bg-purple-400 text-white rounded p-1 text-sm mb-1">
                    <span className="event-name">
                      Meating
                    </span>
                    <span className="time">
                      18:00~20:00
                    </span>
                  </div> */}
                    </div>
                  </div>
                </td>
                <td className="border p-1 h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col justify-center items-center h-24 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">Lunch Time</span>
                    </div>
                    <div className="flex justify-center items-center h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
                <td className="border p-1 h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col justify-center items-center h-24 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">Lunch Time</span>
                    </div>
                    <div className="flex justify-center items-center h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
                <td className="border p-1 h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col justify-center items-center h-24 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">Lunch Time</span>
                    </div>
                    <div className="flex justify-center items-center h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
              </tr>

              <tr className="text-center h-20">
                <td className="border p-1 h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ">
                  <div className="flex justify-center items-center flex-col h-24 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className=" flex justify-center items-center h-30 py-1 w-full cursor-pointer">
                      <div className="event bg-purple-400 text-white rounded p-1 text-sm mb-1 flex gap-2">
                        <span className="event-name">Meeting</span>
                        <span className="time">13:00 - 14:00</span>
                      </div>
                      {/* <div className="event bg-purple-400 text-white rounded p-1 text-sm mb-1">
                    <span className="event-name">
                      Meating
                    </span>
                    <span className="time">
                      18:00~20:00
                    </span>
                  </div> */}
                    </div>
                  </div>
                </td>
                <td className="border p-1 h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col lg:flex-row justify-center items-center h-24 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className=" w-full">
                      <span className="text-gray-500">
                        <Image
                          width={500}
                          height={500}
                          className="shadow-md w-16 h-20 object-cover"
                          src="/speaker-three.jpg"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex flex-col text-black  items-center  py-1 w-full cursor-pointer">
                      <p className="text-base">Khalid Michaels</p>
                    </div>
                  </div>
                </td>
                <td className="border p-2 h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col justify-center items-center h-24 w-full  mx-auto ">
                    <div className=" w-full">
                      <span className="text-gray-500 text-center">
                        Entrepreneurial Success Stories
                      </span>
                    </div>
                    <div className="flex justify-center items-center h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
                <td className="border p-2 h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col justify-center items-center h-24 w-full  mx-auto ">
                    <div className=" w-full">
                      <span className="text-gray-500 text-center">
                        PRAIRIE LAND PARK, HALL C 503 RUTH STREET WEST,
                        SASKATOON
                      </span>
                    </div>
                    <div className="flex justify-center items-center h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
              </tr>

              <tr className="text-center h-20">
                <td className="border p-1 h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ">
                  <div className="flex justify-center items-center flex-col h-24 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className=" flex justify-center items-center h-30 py-1 w-full cursor-pointer">
                      <div className="event bg-purple-400 text-white rounded p-1 text-sm mb-1 flex gap-2">
                        <span className="event-name">Meeting</span>
                        <span className="time">14:00 - 15:00</span>
                      </div>
                      {/* <div className="event bg-purple-400 text-white rounded p-1 text-sm mb-1">
                    <span className="event-name">
                      Meating
                    </span>
                    <span className="time">
                      18:00~20:00
                    </span>
                  </div> */}
                    </div>
                  </div>
                </td>
                <td className="border p-1 h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col lg:flex-row justify-center items-center h-24 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className=" w-full">
                      <span className="text-gray-500">
                        <Image
                          width={500}
                          height={500}
                          className="shadow-md w-16 h-20 object-cover"
                          src="/speaker-four.jpg"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="flex flex-col text-black  items-center  py-1 w-full cursor-pointer">
                      <p className="text-base">John Frank</p>
                    </div>
                  </div>
                </td>
                <td className="border p-2 h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col justify-center items-center h-24 w-full  mx-auto ">
                    <div className=" w-full">
                      <span className="text-gray-500 text-center">
                        Networking and Collaboration Opportunities
                      </span>
                    </div>
                    <div className="flex justify-center items-center h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
                <td className="border p-2 h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col justify-center items-center h-24 w-full  mx-auto ">
                    <div className=" w-full">
                      <span className="text-gray-500 text-center">
                        PRAIRIE LAND PARK, HALL C 503 RUTH STREET WEST,
                        SASKATOON
                      </span>
                    </div>
                    <div className="flex justify-center items-center h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </main>
        <div className="block lg:hidden">
          <div className="flex justify-between text-[#fff] bg-blue-600 px-2 py-3">
            <span className=" border-r border-[#fff] pr-3">Date</span>
            <span className=" border-r border-[#fff] pr-3">Speakers</span>
            <span className=" border-r border-[#fff] pr-3">Content</span>
            <span className="  pr-3">Location</span>
          </div>
          <main className="bg-gray-200 ">
            <div>
              <div className="border-y border-gray-300 text-black text-sm py-2 px-2 flex justify-center items-center">
                9:00 - 10:00
              </div>
              <div className="flex flex-col gap-y-3 px-4 py-2">
                <div className="flex gap-2">
                  <div className=" ">
                    <span className="text-gray-500">
                      <Image
                        width={500}
                        height={500}
                        className="shadow-md w-20 h-20 object-cover"
                        src="/speaker-two.jpg"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="flex flex-col text-black  items-center  py-1  cursor-pointer">
                    <p className="text-base">Chalie Clark</p>
                  </div>
                </div>
                <div>
                  <span className="text-black text-center">
                    Community Engagement and Social Impact
                  </span>
                </div>
                <div>
                  <span className="text-black  text-center">
                    RAIRIE LAND PARK, HALL C 503 RUTH STREET WEST, SASKATOON
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="border-y border-gray-300 text-black text-sm py-2 px-2 flex justify-center items-center">
                10:00 - 11:00
              </div>
              <div className="flex flex-col gap-y-3 px-4 py-2">
                <div className="flex gap-2">
                  <div className=" ">
                    <span className="text-gray-500">
                      <Image
                        width={500}
                        height={500}
                        className="shadow-md w-20 h-20 object-cover"
                        src="/speaker-one.jpg"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="flex flex-col text-black  items-center  py-1  cursor-pointer">
                    <p className="text-base">Jason Aebig</p>
                  </div>
                </div>
                <div>
                  <span className="text-black text-center">
                    Empowering Black Women in Business
                  </span>
                </div>
                <div>
                  <span className="text-black  text-center">
                    RAIRIE LAND PARK, HALL C 503 RUTH STREET WEST, SASKATOON
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="border-y border-gray-300 text-black text-sm py-2 px-2 flex justify-center items-center">
                11:00 - 12:00
              </div>
              <div className="flex justify-center items-center flex-col gap-y-3 px-4 py-2">
                {/* <div className="flex gap-2">
                  <div className=" ">
                    <span className="text-gray-500">
                      <Image
                        width={500}
                        height={500}
                        className="shadow-md w-20 h-20 object-cover"
                        src="/speaker-one.jpg"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="flex flex-col text-black  items-center  py-1  cursor-pointer">
                    <p className="text-base">Jason Aebig</p>
                  </div>
                </div> */}
                <div>
                  <span className="text-black text-center">Lunch</span>
                </div>
                {/* <div>
                  <span className="text-black  text-center">
                   RAIRIE LAND PARK, HALL C
503 RUTH STREET WEST, SASKATOON

                  </span>
                </div> */}
              </div>
            </div>
            <div>
              <div className="border-y border-gray-300 text-black text-sm py-2 px-2 flex justify-center items-center">
                12:00 - 13:00
              </div>
              <div className="flex flex-col gap-y-3 px-4 py-2">
                <div className="flex gap-2">
                  <div className=" ">
                    <span className="text-gray-500">
                      <Image
                        width={500}
                        height={500}
                        className="shadow-md w-20 h-20 object-cover"
                        src="/speaker-three.jpg"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="flex flex-col text-black  items-center  py-1  cursor-pointer">
                    <p className="text-base">Khalid Michaels</p>
                  </div>
                </div>
                <div>
                  <span className="text-black text-center">
                    Entrepreneurial Success Stories
                  </span>
                </div>
                <div>
                  <span className="text-black  text-center">
                    RAIRIE LAND PARK, HALL C 503 RUTH STREET WEST, SASKATOON
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="border-y border-gray-300 text-black text-sm py-2 px-2 flex justify-center items-center">
                13:00 - 14:00
              </div>
              <div className="flex flex-col gap-y-3 px-4 py-2">
                <div className="flex gap-2">
                  <div className=" ">
                    <span className="text-gray-500">
                      <Image
                        width={500}
                        height={500}
                        className="shadow-md w-20 h-20 object-cover"
                        src="/speaker-four.jpg"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="flex flex-col text-black  items-center  py-1  cursor-pointer">
                    <p className="text-base">John Frank</p>
                  </div>
                </div>
                <div>
                  <span className="text-black text-center">
                    Networking and Collaboration Opportunities
                  </span>
                </div>
                <div>
                  <span className="text-black  text-center">
                    RAIRIE LAND PARK, HALL C 503 RUTH STREET WEST, SASKATOON
                  </span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
