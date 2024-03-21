"use client"
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";


const Attend = () => {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({    satisfaction: "",
    eventOrganization: "",
    venue: "",
    exhibitors: "",
    networking: "",
    sessions: "",
    suggestions: "",
    likelihood: "",
    additionalComments: "", })
    
    function handleChange(e) {
      const former = JSON.parse(JSON.stringify(formData))
      former[e.target.name] = e.target.value
      setFormData(former)
    }
    return (
      <div className="mt-32 lg:mt-40 lg:mb-20">
        <div className=" flex items-center justify-center gap-x-3 text-2xl md:text-3xl text-center font-semibold text-black mb-4 md:mb-6">
          <Image
            className="w-auto h-auto  object-cover"
            src="/logo.png"
            width={100}
            height={50}
            alt="SASK Logo"
          />{" "}
          <h1> - Feedback Form</h1>
        </div>
         <div className="flex justify-center">
            <div className="max-w-lg text-center font-semibold text-black mb-4 md:mb-6">
                <p>
                Thank you for attending the first-ever Saskatoon Black Business Trade Show! Your feedback is incredibly valuable as we strive to improve our future events. Please take a few moments to complete this brief feedback form.
                </p>
            </div>
        </div>
        <form className="max-w-xl mx-auto" method="post" onSubmit={async e => {
        e.preventDefault()
        try {
          setLoading(true)
          const { data, err } = await axios.post("/api/attendee", formData)
          if (!err) {
            toast("Attendance Request form sent successfully and will be reviewed", {
              theme: "colored",
              type: "success",
            })
            setFormData({ name: "", email: "", phone: "", organisation: "", hearingMethod: null, regType: null, notes: "" })
          } else {
            toast(err, {
              theme: "colored",
              type: "warning",
            })
          }
        } catch (error) {
          console.log(error)
          if (error.response && error.response.status != "404") {
            return toast(error.response?.data?.err, {
              theme: "colored",
              type: "error"
            })
          }
          toast("Unable to connect to servers check your internet and try again", {
            theme: "colored",
            type: "error"
          })
        } finally {
          setLoading(false)
        }
      }}>
       
        <div className="grid md:grid-cols-1 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={handleChange}
              value={formData.name}
            />
            <label
              for="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Full name
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={handleChange}
            value={formData.email}
          />
          <label
            for="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
            <p className="mb-3">Overall Satisfaction</p>
          <label
            for="countries"
            className="peer-focus:font-medium  text-sm  text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
           How satisfied were you with your experience at the event?.
          </label>
          <select
            id="countries"
            className="block py-2.5 h-12 w-full text-sm px-2 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
            onChange={handleChange}
            value={formData.hearingMethod}
            name="hearingMethod"
          >
            <option className="hidden" value={""}>Select an option</option>
            <option value={"0"}>Extremely Satisfied</option>
            <option value={"1"}>Satisfied</option>
            <option value={"2"}>Neutral</option>
            <option value={"3"}>Disatisfied</option>
            <option value={"4"}>Extremely Disatisfied</option>
          </select>
        </div>
{/* Event Organisation */}
        <div className="mt-3 mb-3">
            <p className="mb-3 mt-5">Event Organization</p>
          <label className="text-gray-400 mb-4">Rate the organization and planning of the event:</label>

          <div className="flex items-center mt-3 mb-4">
            <input
              id="checkbox-1"
              type="radio"
              value="1"
              name="regType"
              required
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              checked={formData.regType == "1"}
              onChange={handleChange}
            />
            <label
              for="checkbox-1"
              className="ms-2 text-sm font-medium text-gray-900 "
            >
              Excellent
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="checkbox-1"
              type="radio"
              name="regType"
              value="2"
              required
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={handleChange}
              checked={formData.regType == "2"}
            />
            <label
              for="checkbox-1"
              className="ms-2 text-sm font-medium text-gray-900 "
            >
              Good
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="checkbox-3"
              type="radio"
              name="regType"
              value="2"
              required
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={handleChange}
              checked={formData.regType == "2"}
            />
            <label
              for="checkbox-1"
              className="ms-2 text-sm font-medium text-gray-900 "
            >
              Fair
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="checkbox-3"
              type="radio"
              name="regType"
              value="2"
              required
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={handleChange}
              checked={formData.regType == "2"}
            />
            <label
              for="checkbox-1"
              className="ms-2 text-sm font-medium text-gray-900 "
            >
              Poor
            </label>
          </div>
        </div>
        <hr />
{/* How would you rate the venue where the event took place? */}
        <div>
            <p className="mb-3 mt-3">Venue</p>
          <label className="text-gray-400 mb-4">How would you rate the venue where the event took place:</label>

          <div className="flex items-center mt-3 mb-4">
            <input
              id="checkbox-1"
              type="radio"
              value="1"
              name="regType"
              required
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              checked={formData.regType == "1"}
              onChange={handleChange}
            />
            <label
              for="checkbox-1"
              className="ms-2 text-sm font-medium text-gray-900 "
            >
              Excellent
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="checkbox-1"
              type="radio"
              name="regType"
              value="2"
              required
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={handleChange}
              checked={formData.regType == "2"}
            />
            <label
              for="checkbox-1"
              className="ms-2 text-sm font-medium text-gray-900 "
            >
              Good
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="checkbox-3"
              type="radio"
              name="regType"
              value="2"
              required
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={handleChange}
              checked={formData.regType == "2"}
            />
            <label
              for="checkbox-1"
              className="ms-2 text-sm font-medium text-gray-900 "
            >
              Fair
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="checkbox-3"
              type="radio"
              name="regType"
              value="2"
              required
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={handleChange}
              checked={formData.regType == "2"}
            />
            <label
              for="checkbox-1"
              className="ms-2 text-sm font-medium text-gray-900 "
            >
              Poor
            </label>
          </div>
        </div>
        <hr />
{/* Exhibitor page */}
        <div className="relative z-0 w-full mb-5 group mt-5">
            <p className="mb-3">Exhibitors</p>
          <label
            for="countries"
            className="peer-focus:font-medium  text-sm  text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
           What was your impression of the exhibitors and their presentations/products?
          </label>
          <select
            id="countries"
            className="block py-2.5 h-12 w-full text-sm px-2 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
            onChange={handleChange}
            value={formData.hearingMethod}
            name="hearingMethod"
          >
            <option className="hidden" value={""}>Select an option</option>
            <option value={"0"}>Very Impresive</option>
            <option value={"1"}>Impressive</option>
            <option value={"2"}>Neutral</option>
            <option value={"3"}>Disapointing</option>
            <option value={"4"}>Very Disapointing</option>
          </select>
        </div>
{/* Networking connect */}
        <div className="relative z-0 w-full mb-5 group mt-5">
            <p className="mb-3">Networking Opportunities</p>
          <label
            for="countries"
            className="peer-focus:font-medium  text-sm  text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
           Did you find ample opportunities to network at the event?
          </label>
          <select
            id="countries"
            className="block py-2.5 h-12 w-full text-sm px-2 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
            onChange={handleChange}
            value={formData.hearingMethod}
            name="hearingMethod"
          >
            <option className="hidden" value={""}>Select an option</option>
            <option value={"0"}>Yes, plenty</option>
            <option value={"1"}>Yes, but it could be improved</option>
            <option value={"2"}> No, not enough</option>
          </select>
        </div>
{/* Sesions and Workshop */}
<div className="relative z-0 w-full mb-5 group mt-5">
            <p className="mb-3">Sessions and Workshops</p>
          <label
            for="countries"
            className="peer-focus:font-medium  text-sm  text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
           If you attended any sessions or workshops, please rate their quality and relevance.
          </label>
          <select
            id="countries"
            className="block py-2.5 h-12 w-full text-sm px-2 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
            onChange={handleChange}
            value={formData.hearingMethod}
            name="hearingMethod"
          >
            <option className="hidden" value={""}>Select an option</option>
            <option value={"0"}>Excellent</option>
            <option value={"1"}>Good</option>
            <option value={"2"}>Fair</option>
            <option value={"3"}>Poor</option>
            <option value={"4"}>Did not attend any</option>
          </select>
        </div>
{/* Comment and extra feedbacks */}
        <div className="grid md:grid-cols-1 md:gap-6 mt-5">
            <h4>Suggestions for Improvement</h4>
          <div className="relative z-0 w-full mb-5 group">
            <textarea
              type="text"
              name="notes"
              onChange={handleChange}
              value={formData.notes}
              id="optional"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              cols={3}
            />
            <label
              for="orgname"
              className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Additional Comments or Special Requests
            </label>
          </div>
        </div>
        <button
          type="submit"
          className={`text-white ${loading ? "bg-blue-200" : "bg-blue-700 hover:bg-blue-800"} focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-3`}
          disabled={loading}
        >
          {loading ? "Submitting" : "Submit"}
        </button>
      </form>
      </div>
    );
  };
  
  export default Attend;
  