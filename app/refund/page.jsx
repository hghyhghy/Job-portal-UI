"use client";
import React from 'react'
import Nav from '../components/Nav';
import Image from 'next/image';
import App4 from '../components/App4';

const page = () => {
  return (

    <>
    <main className=' min-h-screen bg-[#F9F9F9]'>
        <Nav/>
        <div>
            <div className=' flex flex-col items-start justify-start px-48 mt-24'>
                <div>
                    <h1 className='text-slate-800 text-4xl'>Refund Policy</h1>
                    <h1 className=' text-sm text-slate-600 mt-2'>We want you to be satisfied and hence, all plans purchased on the WorkIndia platform are eligible for refund, provided the request meets the guidelines in our refund policy.</h1>
                </div>
                <div className=' flex flex-col gap-5 px-48 items-start justify-start mt-10 -ml-48'>

                    <h1 className='text-slate-800 text-3xl'>How to request for a refund?</h1>
                    <p className=' text-slate-600'>Now, you can directly raise a support ticket for refund on the dashboard. Click the Contact us button, explain your issue. Our support team will reach out to you within 24 hours to resolve the issue.</p>
                    <p className=' text-slate-600'>Via Chat support on website (www.workindia.in) or application (Workindia For Recruiter) during business hours (Mon-Sat: 10am-6pm).</p>
                    <p className=' text-slate-600'>Via E-mail:help@workindia.in</p>
                    <p className=' text-slate-600'>Via customer support call at 080 6982 4660</p>
                </div>


            </div>

            <div className=' mt-10 flex flex-col gap-2 items-center justify-center px-48'>
                <h1 className=' font-sans font-extrabold text-5xl text-slate-900'>Trusted by over 15,000 brands worldwide</h1>
                <h1 className=' text-2xl text-slate-700'>Businesses around the globe choose Instapage to power their marketing and drive growth.</h1>
            </div>

            <div className=' flex flex-row gap-5 mt-20'>
                <div className=' w-[760px] h-[450px] bg-[#DCD5FB] rounded-lg'>
                    <div className=' flex flex-row'>

                    <Image
                    src="/refunds.jpg"
                    height={200}
                    width={300}
                    alt='refund'
                    className=' px-10 mt-32 rounded-lg w-fit items-center justify-center'
                    
                    />
                    <Image
                    src="/refund1.svg"
                    height={290}
                    width={200}
                    alt='refund1'
                    className=' mt-32 -px-3 h-[200px]'
                    />
                    </div>
                </div>
                <div className=' flex flex-col gap-5 ml-28'>
            <h1 className='text-5xl text-slate-900 font-extrabold'>The largest <br /> integration <br /> ecosystem</h1>
            
            <p className=' text-slate-600'>Instapage easily connects with 120+ apps <br /> including advertising, CRM, email, e-commerce, marketing automation, and sales solutions.</p>

            <App4/>

                </div>
            </div>
        </div>
    </main>
    </>
  )
}

export default page