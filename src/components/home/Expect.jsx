import React from "react";

const Expect = () => {
  return (
    <div className="lg:my-10 my-5 lg:px-10 px-4">
        <h1 className="text-4xl md:text-5xl text-center font-semibold text-black mb-4 md:mb-6">
        What to Expect
      </h1> 
      <div className="flex lg:flex-row flex-col justify-between gap-y-3 items-center max-w-3xl mx-auto py-3">
        <span className="text-xl md:text-xl font-semibold  ">
          Diverse Business Showcase{" "}
        </span>
        <span className="h-0.5 lg:h-6 w-6 lg:w-0.5 bg-black "></span>
        <span className="font-semibold text-xl md:text-xl">
        Networking opportunities{" "}
        </span>
        <span className="h-0.5 lg:h-6 w-6 lg:w-0.5 bg-black"></span>
        <span className=" font-semibold text-xl md:text-xl">
        Empowerment{" "}
        </span>
      </div>
      <p className="text-gray-500 mx-auto text-center text-lg">
        Immerse yourself in a dynamic environment celebrating black-owned
        businesses. Discover a vibrant showcase of excellence at the Saskatoon
        Black Business Expo!. Expect a diverse range of products and services,
        networking opportunities, and a chance to support and uplift the
        community. Join us for an inspiring day of empowerment and
        entrepreneurship.
      </p>
      {/* <button className="bg-netYellow lg:w-60 mt-5 flex justify-center p-2 font-semibold">
      Learn More
    </button> */}
    </div>
  );
};

export default Expect;
