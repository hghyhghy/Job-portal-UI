"use client";

import React from "react";
import Image from "next/image";
const JobPosting = () => {

  const handleclick =() => {

    window.location.href='/procedure';
  };


  return (
    <>

            <div className="absolute right-4  py-32 px-10">
              <Image
                src="/trial.svg"
                height={205}
                width={350}
                alt="Trial"
              />
            </div>

      <main className="flex flex-col items-start justify-start gap-4 mt-5"> {/* Reduced gap from gap-0 */}
        <div className="flex flex-col items-start justify-start min-h-screen w-[300%]">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Basic Job Details
            </h2>
            {/* Job Title */}
            <div className="mb-4">
              <label
                htmlFor="jobTitle"
                className="block text-gray-700 font-medium mb-2"
              >
                Job Title
              </label>
              <select
                id="jobTitle"
                className=" text-black cursor-pointer  w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="" disabled selected>
                  Select a job title
                </option>
                <option value="developer">Software Developer</option>
                <option value="designer">UI/UX Designer</option>
                <option value="manager">Project Manager</option>
                <option value="analyst">Business Analyst</option>
                <option value="tester">QA Tester</option>
                <option value="engineer">DevOps Engineer</option>
                <option value="writer">Content Writer</option>
                <option value="support">Customer Support</option>
                <option value="architect">Solutions Architect</option>
                <option value="consultant">IT Consultant</option>
              </select>
            </div>

            {/* Number of Openings */}
            <div className="mb-4">
              <label
                htmlFor="noOfOpenings"
                className="block text-gray-700 font-medium mb-2"
              >
             No of Openings
              </label>
              <select
                id="noOfOpenings"
                className=" text-black cursor-pointer  w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="" disabled selected>
                  Select number of openings
                </option>
                {[...Array(20).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
            </div>

            {/* Preferred Location */}
            <div className="mb-4">
              <label
                htmlFor="preferredLocation"
                className="block text-gray-700 font-medium mb-2"
              >
             Preferred Location
              </label>
              <select
                id="preferredLocation"
                className=" text-black cursor-pointer  w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="" disabled selected>
                  Select a preferred location
                </option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="bangalore">Bangalore</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="chennai">Chennai</option>
                <option value="kolkata">Kolkata</option>
                <option value="pune">Pune</option>
                <option value="jaipur">Jaipur</option>
                <option value="ahmedabad">Ahmedabad</option>
                <option value="lucknow">Lucknow</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start min-h-screen w-[300%] -mt-[15rem]">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Candidate Requirement
            </h2>

            {/* Minimum Experience */}
            <div className="mb-4">
              <label
                htmlFor="minExperience"
                className="block text-gray-700 font-medium mb-2"
              >
                Minimum Experience
              </label>
              <select
                id="minExperience"
                className="text-black cursor-pointer w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="" disabled selected>
                  Select minimum experience
                </option>
                {[...Array(11).keys()].map((num) => (
                  <option key={num} value={num}>
                    {num} years
                  </option>
                ))}
              </select>
            </div>

            {/* Maximum Experience */}
            <div className="mb-4">
              <label
                htmlFor="maxExperience"
                className="block text-gray-700 font-medium mb-2"
              >
                Maximum Experience
              </label>
              <select
                id="maxExperience"
                className="text-black cursor-pointer w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="" disabled selected>
                  Select maximum experience
                </option>
                {[...Array(21).keys()].map((num) => (
                  <option key={num} value={num}>
                    {num} years
                  </option>
                ))}
              </select>
            </div>

            {/* Monthly Salary */}
            <div className="mb-4">
              <label
                htmlFor="monthlySalary"
                className="block text-gray-700 font-medium mb-2"
              >
                Monthly Salary
              </label>
              <select
                id="monthlySalary"
                className="text-black cursor-pointer w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="" disabled selected>
                  Select monthly salary
                </option>
                {[
                  "₹10,000 - ₹20,000",
                  "₹20,000 - ₹30,000",
                  "₹30,000 - ₹40,000",
                  "₹40,000 - ₹50,000",
                  "₹50,000 - ₹60,000",
                  "₹60,000 - ₹70,000",
                  "₹70,000 - ₹80,000",
                  "₹80,000 - ₹90,000",
                  "₹90,000 - ₹1,00,000",
                  "₹1,00,000+",
                ].map((salary, index) => (
                  <option key={index} value={salary}>
                    {salary}
                  </option>
                ))}
              </select>
            </div>

            {/* Job Description */}
            <div className="mb-4">
              <label
                htmlFor="jobDescription"
                className="block text-gray-700 font-medium mb-2"
              >
                Job Description
              </label>
              <textarea
                id="jobDescription"
                rows="4"
                className="text-black cursor-pointer w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter job description"
              ></textarea>
            </div>

            {/* Skills */}
            <div className="mb-4">
              <label
                htmlFor="preferredLocation"
                className="block text-gray-700 font-medium mb-2"
              >
             Required Skills
              </label>
              <select
                id="preferredLocation"
                className=" text-black cursor-pointer  w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="" disabled selected>
                  Select Skills 
                </option>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="csharp">C#</option>
                <option value="ruby">Ruby</option>
                <option value="php">PHP</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="react">React</option>
                <option value="angular">Angular</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">

            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start min-h-screen w-[300%]">
        </div>

        {/* New Section */}
        <div className="flex flex-col items-start justify-start min-h-screen w-[300%] -mt-[42rem]">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Contact Information
            </h2>

            {/* Contact Person Name */}
            <div className="mb-4">
              <label
                htmlFor="contactPerson"
                className="block text-gray-700 font-medium mb-2"
              >
                Contact Person Name
              </label>
              <input
                type="text"
                id="contactPerson"
                className="text-black w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter contact person name"
              />
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-gray-700 font-medium mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                className="text-black w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter phone number"
              />
            </div>

            {/* Email ID */}
            <div className="mb-4">
              <label
                htmlFor="emailId"
                className="block text-gray-700 font-medium mb-2"
              >
                Email ID
              </label>
              <input
                type="email"
                id="emailId"
                className="text-black w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter email ID"
              />
            </div>

            {/* Company Name */}
            <div className="mb-4">
              <label
                htmlFor="companyName"
                className="block text-gray-700 font-medium mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                className="text-black w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter company name"
              />
            </div>

            {/* Job Address */}
            <div className="mb-4">
              <label
                htmlFor="jobAddress"
                className="block text-gray-700 font-medium mb-2"
              >
                Job Address
              </label>
              <textarea
                id="jobAddress"
                rows="3"
                className="text-black w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter job address"
              ></textarea>
            </div>
          </div>
        </div>
        



      </main>

      <div className="flex flex-col items-start justify-start h-[15rem] w-[67.5%] bg-gray-200 rounded-md  shadow-2xl">
        
        <div className=" px-10 py-10 flex flex-col gap-5">

        <h4 className=" text-gray-600">
        By submitting this job posting, I provide consent to be contacted by candidates, WorkIndia’s sales agents, and customer support via WhatsApp, SMS, phone calls, and email.

        
        </h4>

        <h4 className=" text-gray-600">
        I understand that KYC verification is required and acknowledge the updated refund and privacy policies linked below.
        </h4>
        </div>

        <div className=" flex flex-row items-center justify-center gap-5 px-10">
          <form action="/" method="post">
          <div className=" flex flex-row gap-4">

          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
          <label htmlFor="vehicle1">
              <h4 className="text-gray-600">
                I agree to the{" "}
                <span className="text-blue-950 underline decoration-blue-950 decoration-2 underline-offset-2">
                  Terms and Conditions and privacy policy
                </span>
              </h4>
            </label>

          </div>
          </form>
        </div>
      </div>

      <div className="flex flex-col items-start justify-start py-10">

      <button className="bg-[#3F51B5]  text-white  font-light py-3 px-6 rounded shadow-md transition duration-300 ease-in-out">
        Post Job Now 
      </button>

      </div>

      <div className="relative flex  items-center justify-center bg-black w-1/2 left-[24rem] h-1 px-80">
      </div>

      

      <div className=" flex flex-col">

        <div className=" flex flex-row  text-blue-900 gap-5 mt-5 px-5 relative left-[16rem]  cursor-pointer">

          <h3>Post job in Hyderabad.</h3>
          <h3>Post job in Chennai.</h3>
          <h3>Post job in Lucknow. </h3>
          <h3>Post job in Surat. </h3>
          <h3> Post job in Meerut. </h3>
          <h3>Post job in jaipur. </h3>
        </div>


        <div  className=" flex flex-row  text-blue-900 gap-5 mt-5 px-5 relative left-[16rem]  cursor-pointer">
          <h3>Post job in Aurangabad.</h3>
          <h3>Post job in Kolhapur. </h3>
          <h3> 

          Post job in Nagpur.
          </h3>
          <h3> Post job in Ahmednagar.</h3>
          <h3> 
          Post job in Gandhinagar.  </h3>


        </div>

        <div className=" flex flex-row  text-blue-900 gap-5 mt-5 px-5 relative left-[16rem]  cursor-pointer">

        <h3>Post job in Nashik.</h3>
        <h3>Post job in Indore. </h3>
        <h3>Post job in Meerut. </h3>
        </div>
      </div>


      <div className="flex flex-row items-center justify-center mt-20 relative left-[36rem]">
          <button
            onClick={handleclick}
            className="px-20 py-2 border-2 border-blue-600 text-blue-600 rounded-lg bg-[#EAEEFF] hover:bg-blue-100"
          >
            Head To the Process 
      </button>

      </div>
        





    </>

    
  );
};

export default JobPosting;
