"use client";
import Nav from '../components/Nav'
import React from 'react'
import Image from 'next/image';
import App2 from '../components/App2';
import App3 from '../components/App3';
const page = () => {

  return (

    <>
    <main>
        <Nav/>
        <div className='min-h-screen bg-[#F9F9F9]'>

             <div>

              <div>
                <Image
                src="/work.jpeg"
                height={400}
                width={500}
                alt='work'
                className=' w-full mt-5'
                />
              </div>
             </div>


          <div className='flex flex-row gap-10'>
            <div className=' flex flex-col items-start justify-start px-48 gap-3 mt-40'>
             <div className='flex flex-row gap-3'>
              <h1 className=' text-blue-900  text-4xl'>Central Engineering
              </h1>
              <App2/>
             </div>
             <div className=' flex flex-flex-row gap-20'>

              <div className=' h-[90px] w-[900px] border border-slate-300 rounded-lg flex flex-col  gap-1 px-9 py-5 mb-5 hover:border-purple-950 hover:cursor-pointer hover:text-blue-800               '>
                <h1 className=' text-1xl text-slate-800 font-semibold'>SDE2- Fullstack Developer <span className='text-slate-500 ml-7'>360 days ago</span> </h1>
                <h1 className=' text-slate-400'>BANGALORE.3 years.Full time</h1>
              </div>

              <div className=' mt-5'>
                <App3/>
              </div>
             </div>
              <div className='flex flex-row gap-3'>
              <h1 className=' text-blue-900  text-4xl'>Quality
              </h1>
              <App2/>
             </div>
             
             <div className=' flex flex-row gap-20'>

             
              <div className=' h-[90px] w-[900px] border border-slate-300 rounded-lg  flex flex-col gap-1 px-9 py-5 mb-5 hover:border-purple-950 hover:cursor-pointer hover:text-blue-800 '>
                <h1 className=' text-1xl text-slate-800 font-semibold '>Quality Assurance Executive  <span className='text-slate-500 ml-7'>451 days ago</span> </h1>
                <h1 className=' text-slate-400'>BANGALORE.6 months.Full time</h1>

              </div>
              <div className=' mt-5'>
                  <App3/>
                </div>
             </div>
             </div>



            </div>


        </div>
    </main>
    </>
  )
}

export default page