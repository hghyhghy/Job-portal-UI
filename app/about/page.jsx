"use client";
import React, { useState } from 'react'
import Nav from '../components/Nav';
const page = () => {

  return (

    <>
    
    <main>
        <Nav/>
        <div>
            <div className=' flex items-start justify-start  px-72 mt-10 flex-col gap-6'>
                <h1 className=' text-4xl font-sans text-blue-700 uppercase'>Vision
                </h1>
                <h1 className=' text-2xl font-sans text-slate-700'>Provide Meaningful Livelihoods To The 258 Mn Blue Collar Of India</h1>
            </div>

            <div className=' flex items-start justify-start  px-72 mt-10 flex-col gap-6'>
                <h1 className=' text-4xl font-sans text-blue-700 uppercase'>
                We are WorkIndia - India’s largest blue and gray-collar job portal.
                </h1>
                <h1 className=' text-2xl font-sans text-slate-700'>
                A technology-based recruitment marketplace for blue and gray-collar hiring with a singular purpose: To provide meaningful livelihoods to the 250 million blue-collar workers of India, enabling 30 mn job seekers and 100k businesses to get connected every month. We have built a recruitment ecosystem that eliminates middlemen, fraudulent jobs, and vulgar jobs, ensuring genuine employees and employers.
                </h1>
            </div>

            <div className=' flex  items-center justify-center  mt-10 flex-col gap-6 bg-[#F9F9F9] border border-slate-700 rounded-lg w-[850px] h-[500px] ml-72'>

                <div className=' flex flex-row items-center justify-center gap-32'>
                    <div className=' flex flex-col gap-14'>

                        <div>
                                        <h1 className=' text-5xl text-blue-700 font-sans font-semibold'>
                                            2015
                                        </h1>
                        </div>
                        <div>
                                        <h1 className=' text-5xl text-blue-700 font-sans font-semibold'>
                                            2017
                                        </h1>
                        </div>
                        <div>
                                        <h1 className=' text-5xl text-blue-700 font-sans font-semibold'>
                                            2019
                                        </h1>
                        </div>
                        <div>
                                        <h1 className=' text-5xl text-blue-700 font-sans font-semibold'>
                                            2021
                                        </h1>
                        </div>

                    </div>
                    <div className=' flex flex-col gap-14'>

                        <div>
                                        <h1 className=' text-5xl text-blue-700 font-sans font-semibold'>
                                            2016
                                        </h1>
                        </div>
                        <div>
                                        <h1 className=' text-5xl text-blue-700 font-sans font-semibold'>
                                            2018
                                        </h1>
                        </div>
                        <div>
                                        <h1 className=' text-5xl text-blue-700 font-sans font-semibold'>
                                            2020
                                        </h1>
                        </div>
                        <div>
                                        <h1 className=' text-5xl text-blue-700 font-sans font-semibold'>
                                            2022
                                        </h1>
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