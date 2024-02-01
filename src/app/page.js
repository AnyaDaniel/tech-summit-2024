import About from "@/components/home/About";
import Buttons from "@/components/home/Buttons";
import Deets from "@/components/home/Deets";
import Expect from "@/components/home/Expect";
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import Schedule from "@/components/home/Schedule";
import Speakers from "@/components/home/Speakers";
import Sponsor from "@/components/home/Sponsor";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Buttons/>
      <Deets />
      <Expect/>
      <About />
   
      <Speakers />

      {/* <Schedule />
      <Gallery/> */}
      <Sponsor/>
      <div className="w-full h-60">
        <iframe
          width="100%"
          height="600"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%20%20%20%20PRAIRIE%20LAND%20PARK,%20HALL%20C%20503%20RUTH%20STREET%20WEST,%20SASKATOON+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
}
