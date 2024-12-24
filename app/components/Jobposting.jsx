"use client";

import React from "react";

const JobPosting = () => {
  return (
    <>
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
      </main>
    </>
  );
};

export default JobPosting;
