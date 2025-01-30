"use client";  // Ensures this component is client-side

import { segment5 } from "@/custom";
import { segment6 } from "@/custom";
import { segment7 } from "@/custom";
import Image from "next/image";
import React from "react";
import Better from "./Better";
import { useState } from "react";
const Verification_temp= () => {

  const handleclick = () => {
    // Redirect using window.location
    window.location.href = '/postjob'; // Redirect to '/Postjob'
  };

  return (
    <>
      <main>
        <h1 className="font-mono text-3xl text-black mt-20">Get Started in three easy steps</h1>
        <div className="mt-20 flex flex-row items-center justify-center gap-12">
          {/* Segment 5 */}
          <div className="flex flex-col items-center justify-center">
            {segment5.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={item.img}
                  alt="post a job"
                  height={300}
                  width={350}
                  className="rounded-lg"
                />
                <h2 className="text-3xl font-light text-black mb-4">
                  {item.first}
                </h2>
                <h2
                  className={`text-1xl font-extralight mb-4 ${
                    index % 2 === 0 ? "text-gray-400" : "text-blue-800"
                  }`}
                >
                  {item.second}
                </h2>
              </div>
            ))}
          </div>

          {/* Segment 6 */}
          <div className="flex flex-col items-center justify-center">
            {segment6.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={item.img}
                  alt="post a job"
                  height={300}
                  width={350}
                  className="rounded-lg "
                />
                <h2 className="text-3xl font-light text-black mb-4">
                  {item.first}
                </h2>
                <h2
                  className={`text-1xl font-extralight mb-4 ${
                    index % 2 === 0 ? "text-gray-400" : "text-blue-800"
                  }`}
                >
                  {item.second}
                </h2>
              </div>
            ))}
          </div>

          {/* Segment 7 */}
          <div className="flex flex-col items-center justify-center">
            {segment7.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={item.img}
                  alt="post a job"
                  height={300}
                  width={350}
                  className="rounded-lg"
                />
                <h2 className="text-3xl font-light text-black mb-4">
                  {item.first}
                </h2>
                <h2
                  className={`text-1xl font-extralight mb-4 whitespace-pre-wrap ${
                    index % 2 === 0 ? "text-gray-400" : "text-blue-800"
                  }`}
                >
                  {item.second}
                </h2>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row items-center justify-center mt-20">
          <button
            onClick={handleclick}
            className="px-20 py-2 border-2 border-blue-600 text-blue-600 rounded-lg bg-[#EAEEFF] hover:bg-blue-100"
          >
            Post a job
          </button>
        </div>
        <Better/>
      </main>
    </>
  );
};

export default Verification_temp;
