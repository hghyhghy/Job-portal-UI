"use client"
import { useState } from 'react'
import React from 'react'
import { data2 } from '@/custom'
import Link from 'next/link'
import { data3 } from '@/custom'
const Showdetails = () => {
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }

  const [showcities, setshowcities] = useState(false)

  const handlecityshow = () => {

    setshowcities(!showcities)
  }

  // Access the paragraph directly from data2[0]
  const items = data2[0] // You don't need to index with `show` here
  const items1 =  data3[0]
  return (
    <main>
      <div className='flex flex-col min-h-screen'>
        <div className='mt-6'>
          <h1 className='text-slate-800 text-4xl text-center'>Hire for 50+ Job Categories</h1>
          <h1 className='text-yellow-800 font-bold text-center'>___________</h1>
        </div>

        <div className='flex flex-col gap-5 items-center justify-center px-14 py-5'>
          <div className='flex flex-col gap-5'>
            <Link href="/" className=' flex flex-row gap-5'>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>Nurse</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Retail</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Engineer</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Retail</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Receptionist</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Counsellor</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Teacher</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Office Boy</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Peon</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Nurse</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Maid</h1>

            </Link>
            <Link href="/" className=' flex flex-row gap-5 -mt-11'>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>Retail</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Nurse </h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Retail</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Engineer</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Counsellor</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Receptionalist</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Office Boy</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Teacher</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Nurse</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Maid</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Peon</h1>

            </Link>
          </div>

          {/* Show Details Box */}
          <div className='flex flex-row items-center justify-center -mt-7 gap-5'>
            {show && (
                  <Link 
                  href="/"
                  className='text-slate-700 font-mono text-2xl text-center px-10  '>
                    {items.paragraph}
                  </Link>
            )}
          </div>
        </div>

        {/* Button */}
        <div className='flex justify-center mt-1 mb-4'>
          <button
            onClick={handleShow}
            className="text-white font-normal text-lg bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg py-2 px-6 shadow-md transition duration-300"
          >
            {show ? 'Hide Details' : 'Show More'} 
          </button>
        </div>
      </div>
      
        <div className='flex flex-col min-h-screen'>
        <div className='mt-6'>
          <h1 className='text-slate-800 text-4xl text-center -mt-72'>Hire from 750+ Cities</h1>
          <h1 className='text-yellow-800 font-bold text-center'>___________</h1>
        </div>

        <div className='flex flex-col gap-5 items-center justify-center px-14 py-5 '>
          <div className='flex flex-col gap-5 mt-5'>
            <Link href="/" className=' flex flex-row gap-5 -mt-80'>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>Kolkata</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Bangalore</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Meerut</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Lucknow</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Gadewal</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Solamr</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Jammu</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Agra</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Sonamarg</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Bali</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Agra</h1>

            </Link>
            <Link href="/" className=' flex flex-row gap-5 -mt-11'>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>Agra</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Bali </h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Kolkata</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Delhi</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.NCR</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Mathura</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Ayodhya</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Paschim Bihar</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Dumka</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Meerut</h1>
            <h1 className='text-slate-700 font-mono text-2xl mt-5 mb-3'>.Balasore</h1>

            </Link>
          </div>

          {/* Show Details Box */}
          <div className='flex flex-row items-center justify-center -mt-60 gap-5'>
            {showcities && (
                  <Link 
                  href="/"
                  className='text-slate-700 font-mono text-2xl text-center px-10  '>
                    {items1.paragraph}
                  </Link>
            )}
          </div>
        </div>

        {/* Button */}
        <div className='flex justify-center mt-1  mb-4'>
          <button
            onClick={handlecityshow}
            className="text-white font-normal text-lg bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg py-2 px-6 shadow-md transition duration-300"
          >
            {showcities ? 'Hide Details' : 'Show More'} 
          </button>
        </div>
      </div>
    </main>
  )
}

export default Showdetails
