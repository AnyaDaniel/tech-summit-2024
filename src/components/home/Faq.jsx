"use client";
import React, { useState } from "react";
import render from "html-to-react";

const data = [
  {
    question: "How can I attend the Black Business Expo?",
    answer:
      "Attendance is open to all! Simply visit our <a href='/attend' class='text-blue-700 underline'>Registration Page</a> here to secure your spot. Don't miss out on this opportunity to connect with Black-owned businesses and industry leaders",
  },
  {
    question: " How do I become an exhibitor at the expo?",
    answer:
      "We welcome businesses of all sizes to showcase their products and services. Head over to our <a href='/exhibitor' class='text-blue-700 underline'>Exhibitor Registration</a> Page here secure your booth. Hurry, as spaces are limited!",
  },
  {
    question: "Are there sponsorship opportunities available?",
    answer:
      "Absolutely! We appreciate the support of our sponsors in making this event possible. If you're interested in becoming a sponsor, please reach out to our <a href='/sponsorships' class='text-blue-700 underline'>Sponsorship Team</a> ",
  },
  {
    question: "What safety measures are in place for the event?",
    answer:
      "The health and safety of our attendees are our top priority. We will implement necessary safety measures in line with local guidelines.",
  },
  {
    question: " Can I volunteer for the Black Business Expo?",
    answer:
      "Yes, we would love your support! If you're interested in volunteering, please fill out our <a href='/volunteer' class='text-blue-700 underline'>Volunteer Application here</a>. Your dedication helps us create a memorable and impactful event.",
  },
  {
    question: " Is there parking available at the venue?",
    answer:
      "Certainly! Ample parking is provided at the venue on a first-come, first-served basis. Rest assured, there's plenty of space for everyone attending the Black Business Expo. ",
  },
  {
    question: "How can I stay informed about event updates?",
    answer:
      "Follow us on social media for real-time updates and behind-the-scenes content: Instagram: @Saskblackbusiness Twitter: @Saskblackbusiness Facebook: /Saskblackbusiness",
  },
  {
    question: "Are there opportunities for media coverage or press passes?",
    answer:
      "Media inquiries and press pass requests can be directed to our Media Relations Team (info@saskblackbusiness.ca) We welcome coverage that highlights the impact of Black entrepreneurship.",
  },
  {
    question:
      "How can I contact the event organizers for additional questions?",
    answer:
      "For any further inquiries, feel free to reach out to our dedicated Support Team (info@saskblackbusiness.ca). We're here to assist you and ensure you have a fantastic experience at the Black Business Expo!",
  },
];

const Faq = () => {
  const parser = render.Parser();
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="px-4 mt-28 mb-20 lg:max-w-4xl mx-auto">
      <h1 className="text-netBlue text-center font-bold lg:text-5xl text-3xl pb-5">
        FAQ
      </h1>
      {data.map((item, i) => (
        <div key={item.question} className="mb-5 border-black  border-b ">
          <div
            className={
              selected === i
                ? "  flex justify-between items-center cursor-pointer"
                : "flex justify-between items-center  cursor-pointer"
            }
            onClick={() => toggle(i)}
          >
            <h2 className="text-black text-xl font-medium">{item.question}</h2>
            <span className="text-black text-3xl">
              {selected === i ? "-" : "+"}
            </span>
          </div>
          <div
            className={
              selected === i
                ? "text-netBlue font-thin py-3 lg:py-5 block transition-all duration-350 ease-[cubic-bezier(0.95,0.05,0.795,0.035)]"
                : "text-netBlue font-thin hidden transition-all duration-350 ease-[cubic-bezier(0.95,0.05,0.795,0.035)]"
            }
          >
            {parser.parse(item.answer)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
