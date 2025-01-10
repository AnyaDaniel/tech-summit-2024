import React from "react";

const Expect = () => {
  return (
    <div className="lg:my-10 my-5 lg:px-10 px-4">
        <h1 className="text-4xl md:text-5xl text-center font-semibold text-black mb-4 md:mb-6">
        What to Expect
      </h1> 
      <div className="flex lg:flex-row flex-col justify-between gap-y-3 items-center max-w-3xl mx-auto py-3">
        <span className="text-xl md:text-xl font-semibold  ">
        Business Showcase {" "}
        </span>
        <span className="h-0.5 lg:h-6 w-6 lg:w-0.5 bg-black"></span>
        <span className=" font-semibold text-xl md:text-xl mx-4">
        Networking
        </span>
        <span className="h-0.5 lg:h-6 w-6 lg:w-0.5 bg-black"></span>
        <span className=" font-semibold text-xl md:text-xl mx-4">
        Business Loan and Financing Opportunities 
        </span>
      </div>
      <div className="flex lg:flex-row flex-col justify-between gap-y-3 items-center max-w-3xl mx-auto py-3">
        <span className="h-0.5 lg:h-6 w-6 lg:w-0.5 bg-black "></span>
        <span className="font-semibold text-xl md:text-xl">
        Budgeting and Tax filing  {" "}
        </span>
        <span className="h-0.5 lg:h-6 w-6 lg:w-0.5 bg-black"></span>
        <span className=" font-semibold text-xl md:text-xl">
        Financial Management Talks{" "}
        </span>
      </div>
      <p className="text-gray-500 mx-auto text-center text-lg">
      The 2nd Saskatoon Black Business Expo is a dynamic gathering designed to inspire, connect, and empower entrepreneurs and business professionals. Expect a diverse showcase of Black-owned businesses offering a wide range of products and services, networking opportunities with industry leaders, and access to valuable resources. Highlights include expert-led talks on business loans and financing, budgeting and tax filing, and financial management strategies to help you take your business to the next level. Whether you’re looking to expand your network, gain actionable insights, or discover unique products, this Expo promises something for everyone.  
      </p>
      {/* <button className="bg-netYellow lg:w-60 mt-5 flex justify-center p-2 font-semibold">
      Learn More
    </button> */}
    </div>
  );
};

export default Expect;
