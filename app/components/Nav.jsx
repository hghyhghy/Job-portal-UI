"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null); // Tracks the currently active dropdown

  const handleMouseEnter = (dropdownName) => {
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null); // Close dropdown when mouse leaves
  };

  return (

    <div className=" flex flex-row items-center justify-around px-10 ">

      <div>


      <Link href="/" passHref>
      <Image
        src="/workindia-full.png" // Path to the image in the public folder
        alt="/Example"
        width={150} // Set the width of the image
        height={100} // Set the height of the image
        className="rounded-md shadow-lg cursor-pointer" // Added cursor-pointer for better UX
      />
    </Link>
      </div>
    
    <div>
      
    <nav className="bg-[#FFFFFF]  text-blue-500 p-4 flex items-center justify-around">
      <ul className="flex gap-8 items-start">
        {/* Candidate Dropdown */}
        <li
          className="relative"
          onClick={() => handleMouseEnter("candidate")}
          onMouseLeave={handleMouseLeave}
        >
          <span className="cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-md">
            Candidate
          </span>
          {activeDropdown === "candidate" && (
            <ul className="absolute left-0 mt-2 bg-white text-blue-500 rounded shadow-lg w-[12rem]">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Install App</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Find Job By Category
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Interview Tips</li>
            </ul>
          )}
        </li>

        {/* Employee Dropdown */}
        <li
          className="relative"
          onClick={() => handleMouseEnter("employee")}
          onMouseLeave={handleMouseLeave}
        >
          <span className="cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-md">
            Employee
          </span>
          {activeDropdown === "employee" && (
            <ul className="absolute left-0 mt-2 bg-white text-blue-500 rounded shadow-lg w-[12rem]">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Start Hiring</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Pricing Plans</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Refund Policy</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">FAQs</li>
            </ul>
          )}
        </li>

        {/* Company Dropdown */}
        <li
          className="relative"
          onClick={() => handleMouseEnter("company")}
          onMouseLeave={handleMouseLeave}
        >
          <span className="cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-md">
            Company
          </span>
          {activeDropdown === "company" && (
            <ul className="absolute left-0 mt-2 bg-white text-blue-500 rounded shadow-lg w-[12rem]">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">About Us</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Contact</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Careers</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Terms and Conditions
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>

    </div>

    <div className="flex justify-center gap-4 mt-4">

    <button className="bg-white border border-violet-950 text-black font-thin text-sm px-4 py-2 rounded-md">
  Find a Job
  </button>
  <button className="bg-[#33418A] border border-violet-950 text-white font-thin text-sm px-7 py-2 rounded-md">
    Hire Now
  </button>


    </div>

    </div>


  );
};

export default Nav;
