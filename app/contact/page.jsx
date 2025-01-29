"use client";
import React from 'react'
import Nav from '../components/Nav';

const page = () => {
  return (

    <>
    <main className=' min-h-screen bg-[#F9F9F9]'>
        <Nav/>
        <div>
            <div className=' flex flex-col items-center justify-center mt-20'>

                  <div className=' flex flex-col items-center justify-center'>
                        
                        <h1 className=' text-slate-800 text-4xl'>Contact Us</h1>
                        <h1 className=' font-extrabold text-black '>____________________________________________________</h1>
                        

                  </div>
                  <div className=' bg-[#f0f0f8] w-[800px] h-[300px] rounded-lg mt-10 flex flex-col '>

                <div className=' px-10 flex items-center justify-center flex-col mt-4'>
                    <h1 className='text-4xl text-slate-900'>WorkIndia</h1>
                    <h1 className=' text-sm text-slate-500'>C/O Eloquent Info Solutions Private Limited</h1>
                </div>    

                <div className=' flex flex-row gap-10 mt-7 px-9'>
                    <h1 className=' text-1xl text-slate-800'>📍 Hustlehub 1704, 3rd floor, 437, 17th Cross Rd, Sector 4, HSR Layout, Bengaluru, Karnataka 560102</h1>
                </div>

                <div className=' flex flex-row gap-10 mt-7 px-9'>
                    <h1 className=' text-1xl text-slate-800'>☏  <span className=' text-blue-500'>08069824660</span></h1>
                </div>

                <div className=' flex flex-row gap-10 mt-7 px-9'>
                  <h1 className=' text-1xl text-slate-800'>🖂  <span className=' text-blue-500'>help@workindia.in</span> </h1>
                </div>



                  </div>
            </div>
        </div>
    </main>
    </>
  )
}

export default page