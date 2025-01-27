"use client";
import { GoArrowRight } from "react-icons/go";
import React, { useState } from "react";
import { data1 } from "@/custom";
import { GoChevronRight } from "react-icons/go";
import Showdetails from "./Showdetails";

const Employerreview = () => {
  const [index, setIndex] = useState(0);

  const handleclick = () => {
    // Move to the next two cards, looping back when exceeding the array length
    setIndex((prevIndex) => (prevIndex + 2) % data1.length);
  };

  // Get the two cards to display
  const reviewsToShow = [
    data1[index],
    data1[(index + 1) % data1.length], // Loop back for the second card if at the end
  ];

  return (
    <>
      <main>
        <div className="flex flex-col space-y-6 items-center">
          <div className="text-center">
            <h1 className="text-slate-800 font-sans text-5xl mb-4">
              Employer Reviews
            </h1>
            <h1 className="text-blue-900 font-semibold w-[50rem] mb-4">
              ___________________________________________________
            </h1>
          </div>

          {/* Button centered above the cards */}
          <div className="mb-4">
            <button
              onClick={handleclick}
              className="text-white font-bold text-3xl flex items-center justify-center bg-blue-900 rounded-full px-2 py-2
              ml-[36.2rem]         "
            >
              <GoChevronRight />
            </button>

          {/* Reviews */}
          <div className="flex gap-1 justify-center mb-5">
            {reviewsToShow.map((review, idx) => (
              <div
              key={idx}
              className="w-[600px] h-[300px] bg-[#f0f4ff] border-2 border-[#d1d9ff] rounded-lg shadow-lg p-5 gap-10"
              >
                <h1 className="text-[#4a6ff1] font-sans mb-2">{review.name}</h1>
                <p className="text-[#333] font-sans mb-2">{review.comment1}</p>
                <p className="text-[#666] font-sans">{review.comment2}</p>
              </div>
            ))}
          </div>
            </div>
        </div>

        <Showdetails/>
      </main>

    </>
  );
};

export default Employerreview;
