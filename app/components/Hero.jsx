"use client";
import Image from 'next/image';
import React from 'react';
import Searchbar from './Searchbar';

const Hero = () => {
  return (
    <main className="bg-[#EAEEFF] min-h-screen"> {/* Use min-h-screen for background to cover full height */}
      <div>
        <div className="flex flex-col items-center justify-center mt-2 gap-5">
          {/* Heading */}
          <div>
            <h2 className="text-black font-thin text-5xl py-5">
              India's <span className="font-semibold text-red-600">Largest</span> Job Portal
            </h2>
          </div>

          {/* Subheading */}
          <div>
            <h4 className="text-gray-700 font-medium text-2xl px-9">
              WorkIndia helps you hire staff in 2 days
            </h4>
          </div>

          {/* Hero Image */}
          <div>
            <Image
              src="/landing_hero.png" // Path to the image in the public folder
              alt="Example"
              width={650} // Set the width of the image
              height={400} // Set the height of the image
              className="rounded-md shadow-lg"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-5">
            <button className="bg-[#33418A] text-white font-thin text-sm px-20 py-2 rounded-md hover:bg-blue-800">
              Hire Now
            </button>
            <button className="bg-[#33418A] text-white font-thin text-sm px-20 py-2 rounded-md hover:bg-blue-800">
              Get a Job
            </button>
          </div>

          {/* Searchbar Component */}
          <Searchbar />
        </div>
      </div>
    </main>
  );
};

export default Hero;
