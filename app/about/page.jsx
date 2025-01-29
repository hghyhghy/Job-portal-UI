"use client";
import React from 'react'
import Image from 'next/image';
import App1 from '../components/App1';
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

            <div className=' flex  items-center justify-center  mt-10 flex-col gap-6 bg-[#F9F9F9]   rounded-lg w-[1050px] h-[790px] ml-72'>

                <div className=' flex flex-row items-center justify-center'>
                    <div className=' flex flex-col gap-14'>

                        <div className=' flex flex-col gap-5 px-20'>
                                        <h1 className=' text-5xl text-blue-700 font-sans font-semibold'>
                                            2015
                                        </h1>
                                        <p className='text-slate-700'>Founded WorkIndia | Launch of our 1st semi-automated product |
                                        Raised USD 500K seed round from Angel Investors</p>
                        </div>
                        <div className=' flex flex-col gap-5 px-20'>
                                        <h1 className=' text-5xl text-blue-700 font-sans font-semibold'>
                                            2017
                                        </h1>
                                        <p className='text-slate-700'>Beenext and its affiliates invests USD 1.2M into WorkIndia</p>
                        </div>
                        <div className=' flex flex-col gap-5 px-20'>
                                        <h1 className=' text-5xl text-blue-700 font-sans font-semibold'>
                                            2019
                                        </h1>
                                        <p className='text-slate-700'>Beenext and its affiliates invests USD 3.4M into WorkIndia</p>
                        </div>
                        <div  className=' flex flex-col gap-5 px-20'>
                                        <h1 className=' text-5xl text-blue-700 font-sans font-semibold'>
                                            2021
                                        </h1>
                                        <p className='text-slate-700'>WorkIndia launches Large Corporate Vertical</p>
                        </div>

                    </div>
                    <div className=' flex flex-col gap-14'>

                        <div className=' flex flex-col gap-5 px-20'>
                                        <h1 className=' text-5xl text-blue-700 font-sans font-semibold'>
                                            2016
                                        </h1>
                                        <p className=' text-slate-700'> Launched and Pioneered our first fully automated app for hiring |
                                        Beenext invests USD 300K in WorkIndia</p>
                        </div>
                        <div className=' flex flex-col gap-5 px-20'>
                                        <h1 className=' text-5xl text-blue-700 font-sans font-semibold'>
                                            2018
                                        </h1>
                                        <p className=' text-slate-700'>WorkIndia starts generating revenue and hits 1Crore ARR in 6 months</p>
                        </div>
                        <div className=' flex flex-col gap-5 px-20'>
                                        <h1 className=' text-5xl text-blue-700 font-sans font-semibold'>
                                            2020
                                        </h1>
                                        <p className=' text-slate-700'>Xiaomi Invests USD 6M into WorkIndia | Attains its position of becoming India's Largest Job Portal for blue & gray collar individuals</p>
                        </div>
                        <div className=' flex flex-col gap-5 px-20'>
                                        <h1 className=' text-5xl text-blue-700 font-sans font-semibold'>
                                            2022
                                        </h1>
                                        <p className=' text-slate-700'>Scales 250% in Revenue with highly positive unit-economics</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className=' flex items-start justify-start px-72'>
                <div className=' flex flex-col gap-2'>
                    <h1 className=' text-blue-900 text-4xl uppercase'>Impact</h1>
                    <p className=' text-slate-700'>✦ Trusted by 2.6Cr Indians for finding meaningful employment opportunities.</p>
                    <p className=' text-slate-700'>✦ Catering to the critical hiring needs of over 15 lakh SMBs and multiple large corporates</p>
                    <p className=' text-slate-700'>✦ Empowering 1 lakh Indians monthly by helping them find relevant jobs.</p>
                    <p className=' text-slate-700'>✦ Enabling 3Mn+ Interview calls a month</p>
                </div>

            </div>
             <div className=' flex items-start justify-start px-72 mt-10'>
                <h1 className='text-slate-700 text-4xl uppercase'>Our Founders</h1>
             </div>
            <div className=' flex flex-row items-center justify-center gap-5 mt-28'>
                 <div className=' w-[300px] h-[390px] bg-[#F9F9F9] rounded-lg flex flex-col items-center justify-center gap-5 '>

                      <Image
                      src="/name1.jpg"
                      height={50}
                      width={150}
                      alt='name'
                      className=' w-full -mt-5 px-3 rounded-xl'
                      />

                    <h1 className=' text-1xl text-blue-700 px-3 font-sans'>Nilesh Dungarwal, Co-founder & CEO</h1>
                    <p className=' text-slate-700 font-sans px-3'>The visionary behind WorkIndia, Nilesh has made it his life's purpose to provide meaningful livelihoods to blue-collar workers.  </p>
                    <App1/>

                 </div>
                 <div className=' w-[300px] h-[420px] bg-[#F9F9F9] rounded-lg flex flex-col items-center justify-center gap-5 '>

                            <Image
                            src="/name2.jpg"
                            height={50}
                            width={150}
                            alt='name'
                            className=' w-full -mt-5 px-3 rounded-xl'
                            />

                            <h1 className=' text-1xl text-blue-700 px-3 font-sans'>Moiz Arsiwala, Co-founder & CTO</h1>
                            <p className=' text-slate-700 font-sans px-3'>Moiz Arsiwala- a technology leader with almost a decade’s experience and proven leadership skills in the world of web technologies.  </p>
                            <App1/>

                            </div>
                            <div className=' w-[300px] h-[390px] bg-[#F9F9F9] rounded-lg flex flex-col items-center justify-center gap-5 '>

                            <Image
                            src="/name3.png"
                            height={20}
                            width={150}
                            alt='name'
                            className=' w-full -mt-2 px-3 rounded-xl'
                            />

                            <h1 className=' text-1xl text-blue-700 px-3 font-sans'>Kunal Patil, Co-founder & Chairman/Advisor</h1>
                            <p className=' text-slate-700 font-sans px-3'>An alumnus of the Stern School of Business, NYU, Kunal is embarked on his journey of empowering significant lives </p>

                            </div>
            </div>
        </div>
    </main>
    </>
    )
}

export default page