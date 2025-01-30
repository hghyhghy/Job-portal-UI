"use client"
import { useState } from 'react'
import React from 'react'
import { data2 } from '@/custom'
import Link from 'next/link'
import { data3 } from '@/custom'
import Download from './Download'

const Showdetails = () => {
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }

  const items = data2[0] 
  const items1 =  data3[0]

  const jobCategories = [
    "Nurse", "Retail", "Engineer", "Receptionist", "Counsellor", "Teacher", 
    "Office Boy", "Peon", "Maid"
  ];

  return (
    <main>
      <div className='flex flex-col min-h-screen'>
        <div className='mt-6'>
          <h1 className='text-slate-800 text-4xl text-center'>Hire for 50+ Job Categories</h1>
          <h1 className='text-yellow-800 font-bold text-center'>___________</h1>
        </div>

        <div className='flex flex-wrap gap-4 justify-center px-14 py-5 -ml-[25.8rem]'>
          {jobCategories.map((job, index) => (
            <Link key={index} href="/">
              <button className='bg-blue-600 text-white text-lg font-medium py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300'>
                {job}
              </button>
            </Link>
          ))}
        </div>

        {/* Show Details Box */}
        {show && (
          <div className='flex flex-wrap gap-4 justify-start -mt-6 px-14 py-5'>
            {items.paragraph.split(" ").map((word, index) => (
              <button key={index} className='bg-blue-600 text-white text-lg font-medium py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300'>
                {word}
              </button>
            ))}
          </div>
        )}

        {/* Button */}
        <div className='flex justify-center mt-1 mb-4'>
          <button
            onClick={handleShow}
            className=" text-white font-normal text-lg bg-black hover:bg-white  hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg py-2 px-6 shadow-md transition duration-300"
          >
            {show ? 'Hide Details' : 'Show More'}
          </button>
        </div>
      </div>

      <div  className=' -mt-72'>
          <Download/>
      </div>
    </main>
  )
}

export default Showdetails;