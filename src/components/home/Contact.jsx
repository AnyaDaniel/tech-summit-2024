import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="bg-white " id="contact">
        <div className="max-w-screen-md mx-auto p-5">
          <div className="text-center mb-5">
            <p className="mt-4 text-sm leading-7 text-gray-500 font-regular uppercase">
              Contact
            </p>
            <h3 className="text-3xl lg:text-6xl leading-normal font-extrabold tracking-tight text-gray-900">
              Get In <span className="text-indigo-600">Touch</span>
            </h3>
          </div>

          <form
            className="w-full"
            action="https://formsubmit.co/66bf1b4e57168f977f3abcb44426a827"
            method="POST"
          >
            <input type="text" name="_honey" className="hidden"></input>
            <input
              type="hidden"
              name="_autoresponse"
              value="Hey, heres a copy of the mail you just sent out."
            ></input>
            <input
              type="hidden"
              name="_next"
              value="https://gig-ca.vercel.app"
            ></input>
            <input
              type="hidden"
              name="_subject"
              value="Dream CarePs Mail"
            ></input>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full   px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none bg-transparent border-b border-indigo-500 w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200"
                  type="text"
                  name="name"
                  placeholder="Jane"
                  aria-label="Full name"
                />
                {/* <p className="text-red-500 text-xs italic mt-1">
                Please fill out this field.
              </p> */}
              </div>
              {/* <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none bg-transparent border-b border-indigo-500 w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200"
                  type="text"
                  name="name"
                  placeholder="Doe"
                  aria-label="Full name"
                />
              </div> */}
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email Address
                </label>
                <input
                  className="appearance-none bg-transparent border-b border-indigo-500 w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200"
                  type="email"
                  name="email"
                  placeholder="jane@exp.com"
                  aria-label="Full name"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Your Message
                </label>
                <textarea
                  rows="5"
                  className="appearance-none bg-transparent border-b border-indigo-500 w-full text-gray-700 mr-3 p-4 focus:bg-gray-200 leading-tight focus:outline-none"
                  type="email"
                  name="message"
                  placeholder="jane@exp.com"
                  aria-label="Full name"
                ></textarea>
              </div>
              <div className="flex lg:flex-row flex-col justify-between w-full px-3 pt-4 gap-y-2">
                <div className="md:flex md:items-center">
                  <label className="block text-gray-500 font-bold">
                    <input className="mr-2 leading-tight" type="checkbox" />
                    <span className="text-sm">Send me your newsletter!</span>
                  </label>
                </div>
                <button
                  className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="responsive-map">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1rQmv2roJgM6LqPjd6yB55gUQKPfTsNk&ehbc=2E312F&noprof=1"
          width="600"
          height="450"
          className="h-72 w-full"
        ></iframe>
      </div> */}
    </>
  );
};

export default ContactUs;
