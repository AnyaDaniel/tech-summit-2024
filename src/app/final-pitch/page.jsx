import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
const teamMembers = [
  {
    name: 'Afolami Idris',
    company: 'Distinct Interiors',
    image: '/contestants/Afolake Idris - Distinct Interiors1.jpg',
    instagram: "https://www.instagram.com/distinteriors?igsh=ZWZ6bzBhd2ExMHlo"
  },
  {
    name: 'Somtochukwu Ufondu',
    company: 'Somtico Fashion Hub',
    image: '/contestants/Somtochukwu Ufondu1.jpg',
    instagram: "https://www.instagram.com/somticofashionhub?igsh=NXNqOWcweWVnOHI3"
  },
  {
    name: 'Fehintoluwa Alawonde',
    company: 'Ennyalabakes',
    image: '/contestants/Fehintoluwa Alawonde Ennyalabakes1.jpg',
    instagram: "https://www.instagram.com/ennyalabakes?igsh=MXRjcHhqeWN2Z296bA=="
  },
  {
    name: 'Oluwaseun Oyekoya',
    company: 'Teal City Logistics ltd',
    image: '/contestants/Teal city logistics.jpeg',
    instagram: "https://www.instagram.com/mycitylogistics?igsh=MWRkMWxxdnU3MzRhOA=="
  },
  {
    name: 'Kayode Okunola',
    company: 'TKT Auto Sales and Repairs',
    image: '/contestants/Mr okunola1.jpg',
    instagram: "https://www.instagram.com/kayodetokunola?igsh=ZnFmNDJqdWo4MHF5"
  },
  {
    name: 'Olamide Ladapo',
    company: 'Butter and Bliss Foods Ltd',
    image: '/contestants/Butter and bliss.jpg',
    instagram: "https://www.instagram.com/the_butterandbliss?igsh=MTg0NWVzY3EybW1pZQ=="
  },
  {
    name: 'Peter Olasunkanmi',
    company: 'Biz Vital Signs and Technologies',
    image: '/contestants/olasunkami.jpg',
    instagram: "https://www.instagram.com/bizvitalsigns?igsh=ZXdmZXBxOXp0bnA3"
  },
  {
    name: 'Praise Olabisi',
    company: 'LipstrybyP',
    image: '/contestants/praise.jpg',
    instagram: "https://www.instagram.com/lipistrybyp?igsh=MXE0OHc1M2RrYmNpdQ=="
  },
  
  {
    name: 'Emoedume Morningstar',
    company: 'LIMITL3SS FORGOD',
    image: '/contestants/morning-star.jpg',
    instagram: "https://www.instagram.com/limitl3ssbrand?igsh=MTYxbnlhbDV1c2d1cA=="
  },
  {
    name: 'Wilfred Sampson',
    company: 'Wise concepts',
    image: '/contestants/wilfred.jpg',
    instagram: "https://www.instagram.com/limitl3ssbrand?igsh=MTYxbnlhbDV1c2d1cA=="
  },
  
  
  
];

const Page = () => {
    return (
      <>
      <header className="pitch-header bg-green-800 text-white py-10 text-center">
        <Image src="/pitch-banner.png" alt="Pitch Banner" width={800} height={300} className="mx-auto rounded-lg shadow-lg mt-10" />
        <h1 className="pitch-title text-4xl font-bold mt-6"> SBBN Entrepreneur Pitch Competition </h1>
        <p className="pitch-subtitle text-lg mt-2"> Unlock Your Business Potential</p>
    </header>
        
        <section className="max-w-6xl mx-auto md:px-16 py-16 space-y-16">
            
          {/* Event Intro Section */}
          <article className="p-8 rounded-lg space-y-6 text-lg text-gray-800 leading-relaxed">
            <p className="text-2xl font-bold text-center">
              Join us for the SBBN Pitch Contest Final, where the boldest Black entrepreneurs take the stage to pitch their visions, disrupt industries, and make history.
            </p>
            
            <p>
              This is not just a contest — it's a movement, a celebration, and a front-row seat to the future of business powered by Black innovation.
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Witness the Top Finalists Live –</strong> Experience the energy as finalists present groundbreaking business ideas to a panel of expert judges.
              </li>
              <li>
                <strong>Celebrate Excellence –</strong> Cheer on the next wave of thriving Black entrepreneurs making their mark.
              </li>
              <li>
                <strong>Network with Changemakers –</strong> Connect with founders, creatives, investors, and community leaders shaping the future of Black business.
              </li>
              <li>
                <strong>Be Inspired –</strong> Hear real stories of resilience, creativity, and impact that will leave you fired up to pursue your own goals.
              </li>
            </ul>

            <p>
              Whether you're an aspiring entrepreneur, investor, supporter, or simply curious, this is your chance to be part of something powerful. History isn’t just happening. It’s being made — and you’re invited to witness it.
            </p>
          </article>
           {/* Contestants */}
           <section className="bg-white py-4 px-6 md:px-0 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Contestants</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-4 text-center space-y-2">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.company}</p>

                    {/* Instagram Icon */}
                    {member.instagram && (
                      <Link
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 bg-gray-100 text-black rounded-full h transition"
                      >
                        <FaInstagram size={25} />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* Mentorship Leads */}
          <article className="space-y-6 px-8 md:px-0">
            <h2 className="text-3xl font-bold border-b-2 border-gray-300 pb-2">Mentorship Session Leads</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside text-lg text-gray-700">
              <li>Mrs Olabimtan, CEO of O O and O Accounting</li>
              <li>Noblelinks Consulting</li>
              <li>WESK</li>
              <li>BDC</li>
              <li>SREDA in conjunction with Chambers</li>
            </ul>
          </article>
  
          {/* Judges */}
          <article className="space-y-6 px-8 md:px-0 mx-auto">
            <h2 className="text-3xl font-bold border-b-2 border-gray-300 pb-2">Judges</h2>
            <div className="flex flex-wrap justify-center gap-8">
            {judges.map((judge, index) => (
              <div
                key={index}
                className="bg-white items-center w-80 rounded-lg overflow-hidden shadow-md transition transform hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={judge.image}
                  alt={judge.name}
                  className="w-80 h-60 aspect-[3/4] rounded-md shadow"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold mb-1">{judge.name}</h3>
                  <p className="text-sm text-gray-500">{judge.title}</p>
                </div>
              </div>
            ))}
            </div>
          </article>
          
          <article className="space-y-4 text-lg text-gray-800 px-8 md:px-0">
          <h1 className="text-4xl font-bold border-b-2 border-gray-300 pb-2">
            Final Pitch Contest
          </h1>
          <p><strong>Date:</strong> Saturday, June 28, 2025</p>
          <p><strong>Time:</strong> 10:00am - 2:30pm</p>
          <p><strong>Venue:</strong> 161 Jessop Avenue, Saskatoon SK.</p>
          <p>
            <strong>Eventbrite link for the final pitch contest:</strong>{' '}
            <Link
              href="https://www.eventbrite.ca/e/sbbn-entrepreneur-pitch-contest-tickets-1414228127399?aff=oddtdtcreator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Register here
            </Link>
          </p>
        </article>
        </section>
      </>
    );
  };
  
  const judges = [
    {
      name: "Stephane Oreilly",
      title: "SREDA",
      image: "/judges/oriley.jpg",
    },
    {
      name: "Olu Ahmed",
      title: "BDC",
      image: "/judges/ahmed.jpg",
    },
    {
      name: "Jason Aebig",
      title: "CEO, Saskatoon Chamber of Commerce",
      image: "/judges/jason.jpg",
    },
    {
      name: "Nowshad Ali",
      title: "CEO, On Purpose Leadership",
      image: "/judges/ali.jpg",
    },
    {
      name: "Johaine Thomas-Miranjie",
      title: "President & CEO, JTM Business Solutions",
      image: "/judges/johaine.jpg",
    },
  ];
  

export default Page