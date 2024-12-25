"use client";
import React, { useState } from "react";
import Nav from "../components/Nav";
import Image from "next/image";
import JobPosting from "../components/Jobposting";

const Page = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Nav />

      <main>
        {show && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-[46%] p-6 rounded-lg shadow-lg relative h-[300px]">
              <button
                onClick={() => setShow(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              >
                ✖
              </button>

              <div className="flex flex-row items-center justify-between gap-[5rem] px-5">
                <Image src="/career.jpg" height={400} width={250} alt="Career" className=" py-11" />

                <div className=" flex flex-col items-center   justify-center gap-2 px-5">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">You can Only Search the Job Related To Software Industry !
                  </h2>
                  <p className="text-gray-600">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, veniam!
                  </p>
                  <button
                  className="px-6 py-2 border-2 border-blue-600 text-blue-100 rounded-lg bg-[#33418A]"
                  onClick={() => setShow(false)}
                  >

                   Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}


      </main>

      <div className="p-4 flex flex-col items-start justify-start bg-[#F4F5F9] min-h-screen ">
            <JobPosting />
        </div>
    </>
  );
};

export default Page;
