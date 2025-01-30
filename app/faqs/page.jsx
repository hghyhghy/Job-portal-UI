"use client";
import React from 'react'
import Nav from '../components/Nav';
import Image from 'next/image';
import App from '../components/App';

const page = () => {
  return (
    <>
    <main className='min-h-screen bg-[#F9F9F9]'>
        <Nav/>
        <div>

            <div className=' mt-20 flex items-center justify-center'>
                <h1 className='text-4xl text-slate-700 font-sans'>Common Help Categories</h1>
            </div>
            
        <div className=' flex flex-row gap-10 items-center justify-center mt-20'>
            <div className='flex flex-col w-[210px] h-[200px] bg-slate-200 rounded-lg border border-purple-200 cursor-pointer'>

                <Image
                src="/faq1.svg"
                height={50}
                width={50}
                alt='faq'
                className=' ml-20 mt-10'
                />

                <div className=' flex items-center justify-center mt-5'>
                    <h1 className=' text-slate-800 text-2xl font-sans'>Job Posting</h1>
                </div>

            </div>
            <div className='flex flex-col w-[210px] h-[200px] bg-slate-200 rounded-lg border border-purple-200 cursor-pointer'>
              
              <Image
              src="/faq2.svg"
              height={50}
              width={50}
              alt='faq'
              className=' ml-20 mt-10'
              />

              <div className=' flex items-center justify-center mt-5'>
                <h1 className=' text-slate-800 text-2xl font-sans'>General issues</h1>
              </div>

            </div>
            <div className='flex flex-col w-[210px] h-[200px] bg-slate-200 rounded-lg border border-purple-200 cursor-pointer'>
                
              <Image
              src="/faq3.svg"
              height={50}
              width={50}
              alt='faq'
              className=' ml-20 mt-10'
              />

              <div className=' flex items-center justify-center mt-5'>
                <h1 className=' text-slate-800 text-2xl font-sans'>How we Work</h1>
              </div>

            </div>   
        </div>    

        <div className=' mt-10 flex items-center justify-center text-black mb-10'>
            <App/>
        </div>
        </div>
    </main>
    </>
  )
}

export default page