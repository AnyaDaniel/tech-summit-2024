"use client";
import Image from "next/image";
import React from "react";
import { FaToolbox, FaTools } from "react-icons/fa";
import { BiSolidLandscape } from "react-icons/bi";
import { BsHouseGearFill, BsHousesFill, BsPhoneFill } from "react-icons/bs";
import { MdRoofing, MdCleaningServices } from "react-icons/md";
import { TbFence } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  return (
    <div id="services">
      <div>
        <div className="px-4 lg:px-20 bg-grey py-20 ">
          <div className="lg:px-20 px-4">
            <div className="section-head ">
              <h4 className="text-dreamBlue ">
                <span className="text-black">What We </span> Offer?
              </h4>
              <p className="lg:max-w-xl mx-auto text-center">
                Whether it's building your dream home, renovating a space to
                perfection, or handling large-scale commercial projects, we have
                the expertise, experience, and dedication to deliver outstanding
                results
              </p>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-4 gap-y-4 lg:gap-y-8 pt-10">
              <div className="group cursor-pointer">
                <div className="flex gap-2 items-start">
                  {" "}
                  <span className="border-dreamBlue border-2 text-dreamBlue text-2xl p-6 mt-6 group-hover:hidden">
                    <MdRoofing />
                  </span>
                  <motion.span
                    animate={{ x: [0, 100, 0] }}
                    className="hidden group-hover:block"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="w-[50rem] h-30 mt-6"
                      src="/home/towers.jpg"
                      alt="Foundation"
                    />
                  </motion.span>
                  <div>
                    <h6 className="font-medium text-xl">Towers</h6>
                    <p className="font-thin">
                      Our expertise shines through in our specialized formwork
                      solutions for towering structures. We are committed to
                      ensuring the structural integrity and efficiency of these
                      challenging projects, utilizing our extensive experience
                      to meet the industry's highest standards.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative group cursor-pointer">
                <div className="flex gap-2 items-start ">
                  {" "}
                  <span className="border-dreamBlue border-2 text-dreamBlue text-2xl p-6 mt-6 group-hover:hidden">
                    <BiSolidLandscape />
                  </span>
                  <motion.span
                    animate={{ x: [0, 100, 0] }}
                    className="hidden group-hover:block"
                  >
                    <Image
                      width={500}
                      height={100}
                      className="shadow-md object-cover w-[50rem] h-30 mt-6"
                      src="/home/parkades.jpg"
                      alt="Roofing"
                    />
                  </motion.span>
                  <div>
                    <h6 className="font-medium text-xl">Parkades</h6>
                    <p className="font-thin">
                      When it comes to parkade construction, we take a tailored
                      approach that not only optimizes parking space but also
                      enhances the overall usability of urban parking
                      facilities. We understand the unique demands of these
                      spaces, and our formwork solutions address them
                      comprehensively.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="flex gap-2 items-start">
                  {" "}
                  <span className="border-dreamBlue border-2 text-dreamBlue text-2xl mt-6 p-6 group-hover:hidden">
                    <TbFence />
                  </span>
                  <motion.span
                    animate={{ x: [0, 100, 0] }}
                    className="hidden group-hover:block"
                  >
                    <Image
                      width={500}
                      height={100}
                      className="w-[50rem] h-30 mt-6"
                      src="/home/towerfoundation.jpg"
                      alt="Roofing"
                    />
                  </motion.span>
                  <div>
                    <h6 className="font-medium text-xl">Parkade Foundation</h6>
                    <p className="font-thin">
                      At the core of our parkade projects, we prioritize the
                      establishment of a robust foundation. Our attention to
                      stability and durability ensures that the foundation can
                      withstand the constant demands of a bustling parking
                      facility, making it a solid and long-lasting base for the
                      entire structure.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="flex gap-2 items-start">
                  {" "}
                  <span className="border-dreamBlue border-2 text-dreamBlue text-2xl mt-6 p-6 group-hover:hidden">
                    <BsHouseGearFill />
                  </span>
                  <motion.span
                    animate={{ x: [0, 100, 0] }}
                    className="hidden group-hover:block"
                  >
                    <Image
                      width={500}
                      height={100}
                      className="w-[50rem] h-30 mt-6 object-cover"
                      src="/home/renovation.jpg"
                      alt="Renovation"
                    />
                  </motion.span>
                  <div>
                    <h6 className="font-medium text-xl">Placing & Finishing</h6>
                    <p className="font-thin">
                      Our placing and finishing services are a testament to our
                      commitment to precision and consistency. Leveraging
                      cutting-edge equipment and a skilled team, we ensure that
                      concrete is expertly placed and meticulously finished,
                      resulting in a surface that is both durable and visually
                      appealing, meeting the highest project standards.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="flex gap-2 items-start">
                  {" "}
                  <span className="border-dreamBlue border-2 text-dreamBlue text-2xl mt-6 p-6 group-hover:hidden">
                    <BsHousesFill />
                  </span>
                  <motion.span
                    animate={{ x: [0, 100, 0] }}
                    className="hidden group-hover:block"
                  >
                    <Image
                      width={500}
                      height={100}
                      className="w-[50rem] h-30 mt-6 object-cover"
                      src="/home/sacking.jpg"
                      alt="Sacking"
                    />
                  </motion.span>
                  <div>
                    <h6 className="font-medium text-xl">Sacking</h6>
                    <p className="font-thin">
                      Our sacking services offer a range of options, from smooth
                      and polished finishes to textured surfaces, allowing us to
                      tailor the concrete's visual appeal to the specific
                      requirements of your project.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="flex gap-2 items-start">
                  {" "}
                  <span className="border-dreamBlue border-2 text-dreamBlue text-2xl mt-6 p-6 group-hover:hidden">
                    <BsPhoneFill />
                  </span>
                  <motion.span
                    animate={{ x: [0, 100, 0] }}
                    className="hidden group-hover:block"
                  >
                    <Image
                      width={500}
                      height={100}
                      className="w-[50rem] h-30 mt-6 object-cover"
                      src="/home/Suspended-slab.jpg"
                      alt="Renovation"
                    />
                  </motion.span>
                  <div>
                    <h6 className="font-medium text-xl">Suspended Slabs</h6>
                    <p className="font-thin">
                      Our formwork maximizes structural integrity and space
                      utilization in modern construction.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="group cursor-pointer">
                <div className="flex gap-2 items-start">
                  {" "}
                  <span className="border-dreamBlue border-2 text-dreamBlue text-2xl p-6 group-hover:hidden">
                    <MdCleaningServices />
                  </span>
                  <motion.span
                    animate={{ x: [0, 100, 0] }}
                    className="hidden group-hover:block"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="w-60 h-20"
                      src="/home/slope.jpg"
                      alt="Roofing"
                    />
                  </motion.span>
                  <div>
                    <h6 className="font-medium text-xl">Commercial Cleaning</h6>
                    <p className="font-thin">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Illum id laudantium optio suscipit omnis at!
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
