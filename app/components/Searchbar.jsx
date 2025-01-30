"use client";
import React, { useState } from "react";
import Imageshowing from "./Imageshowing";
import Verification_temp from "./Verification_temp";
const Searchbar = () => {
  const [city, setCity] = useState("");
  const [jobType, setJobType] = useState("");

  const cities = ["Delhi ", "bangalore ", "Kolkata", "Hyderabad", "Chenna","Mumbai","Pune"];
  const jobTypes = ["Full-Time", "Part-Time", "Contract", "Internship", "Freelance","Temporary","Remote","Volunteer"];

  return (

    <>
    
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-[65rem] h-[10rem] mb-10 py-10 mt-10">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Select Candidate Database ⓘ</h2>
      <div className="flex gap-4 items-center">
        {/* Select City Dropdown */}
        <div className="relative w-1/2">
        
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="block w-full cursor-pointer px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>
              Select City
            </option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Select Job Type Dropdown */}
        <div className="relative w-1/2">
          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>
              Select Job Type
            </option>
            {jobTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <button className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          Search
        </button>
      </div>

      
    </div>

    <Imageshowing/>
    <Verification_temp/>
    
    </>
  );
};

export default Searchbar;
