import React from 'react'
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Afolakemi Idris',
    company: 'distinct interiors',
    image: '/contestants/Afolake Idris - Distinct Interiors1.jpg',
  },
  {
    name: 'Somtochukwu Ufondu',
    company: 'Somtico fashion hub',
    image: '/contestants/somtochukwu Ufondu1.jpg',
  },
  {
    name: 'Fehintoluwa Alawonde',
    company: 'Ennyalabakes',
    image: '/contestants/Fehintoluwa Alawonde Ennyalabakes1.jpg',
  },
  {
    name: 'Oluwaseun Oyekoya',
    company: 'Teal city logistics ltd',
    image: '/contestants/Teal city logistics.jpeg',
  },
  {
    name: 'Kayode Okunola',
    company: 'TKT Auto sales and repairs',
    image: '/contestants/Mr okunola1.jpg',
  },
  {
    name: 'Olamide Ladapo',
    company: 'Butter and bliss foods ltd',
    image: '/contestants/Butter and bliss.jpg',
  },
  {
    name: 'Peter OlasunkanmiBiz',
    company: 'vital signs and technologies',
    image: '/contestants/olasunkami.jpg',
  },
  {
    name: 'Peace Olabisi',
    company: 'LipstrybyP',
    image: '/contestants/Portrait_Placeholder.png',
  },
  
  {
    name: 'Emoedume Morningstar',
    company: 'LIMITL3SS FORGOD',
    image: '/contestants/morning-star.jpg',
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
          <section className="bg-white py-4">
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
                      className="w-full h-64  aspect-[3/4]"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* Mentorship Leads */}
          <article className="space-y-6">
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
          <article className="space-y-6">
            <h2 className="text-3xl font-bold border-b-2 border-gray-300 pb-2">Judges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {judges.map((judge, index) => (
                <div key={index} className="bg-white border rounded-lg shadow p-4">
                  <h3 className="text-xl font-semibold mb-1">{judge.name}</h3>
                  <p className="text-gray-600">{judge.title}</p>
                </div>
              ))}
            </div>
          </article>
  
          
          <article className="space-y-4 text-lg text-gray-800">
          <h1 className="text-4xl font-bold border-b-2 border-gray-300 pb-2">
            Final Pitch Contest
          </h1>
          <p><strong>Date:</strong> Saturday, June 28, 2025</p>
          <p><strong>Time:</strong> 10:00am - 2:30pm</p>
          <p><strong>Venue:</strong> 161 Jessop Avenue, Saskatoon SK.</p>
          <p>
            <strong>Eventbrite link for the final pitch contest:</strong>{' '}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              https://www.eventbrite.ca/e/sbbn-entrepreneur-pitch-contest-tickets-1414228127399?aff=oddtdtcreator
            </a>
          </p>
        </article>
        </section>
      </>
    );
  };
  
  const judges = [
    { name: "Stephane Oreilly", title: "SREDA" },
    { name: "Olu Ahmed", title: "BDC" },
    { name: "Jason Aebig", title: "CEO, Chambers" },
    { name: "Nowshad Ali", title: "CEO, On Purpose Leadership" },
    { name: "Johaine Thomas-Miranjie", title: "President & CEO, JTM Business Solutions" },
  ];
  

export default Page