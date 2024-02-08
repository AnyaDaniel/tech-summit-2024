import React from "react";
import Image from "next/image";
import Link from "next/link";

const Sponsor = () => {
  const sponsors = [
    { img: "/sponsor-one", id: 1 },
    { img: "/alive", id: 2 },
    { img: "/sponsor-three", id: 3 },
    { img: "/sponsor-four", id: 4 },
    { img: "/naija", id: 5 },
  ];

  return (
    <section
      id="Speakers"
      className="mt-10 min-w-full lg:px-40 px-4 items-start lg:gap-x-8  flex flex-col lg:flex-row  h-auto py-10 lg:py-20 mb-12 bg-[#DD0042] "
    >
      <div className="mx-auto">
        <header className="flex flex-col justify-center items-center section-head-parallax">
          <h4 className="text-[#fff] lg:text-5xl font-thin border-b-4 pb-4 text-center lg:w-[400px] mx-auto">
            Our Sponsors
          </h4>
          <div>
            <p className="mt-3 text-[#fff] text-center sm:mt-5 text-lg md:mt-5 font-thin">
              A heartfelt thank you to our esteemed sponsors for supporting the
              Saskatoon Black Business Expo! These visionary partners play a
              crucial role in fostering economic empowerment within the
              community. Their commitment enables us to provide a platform for
              Black-owned businesses to thrive and connect with a wider
              audience.
            </p>
            <div className="flex flex-col items-center lg:flex-row gap-x-4   ">
              {sponsors.map((sponsor) => (
                <span key={sponsor.id} className="w-full lg:w-1/3 mb-4 lg:mb-0">
                  <Image
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover"
                    src={sponsor.img + ".png"}
                    alt={`Sponsor ${sponsor.id}`}
                  />
                </span>
              ))}
            </div>
            <Link href="/contact" className="flex justify-center">
              <button className="bg-white mt-5 w-auto px-4 py-2 text-red-600 text-lg">
                Contact Us
              </button>
            </Link>
          </div>
        </header>
      </div>
    </section>
  );
};

export default Sponsor;
