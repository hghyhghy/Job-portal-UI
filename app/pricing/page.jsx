"use client";
import Image from 'next/image';
import Nav from '../components/Nav';
import React from 'react'
import { pic1,pic2,pic3,pic4,pic5,pic6,pic7 } from '@/custom';
import { GoArrowRight } from "react-icons/go";
import { useState } from 'react';
import { data1 } from "@/custom";
import { GoChevronRight } from "react-icons/go";
import App from '../components/App';

const page = () => {

    const [index, setIndex] = useState(0);
  
    const handleclick1 = () => {
      // Move to the next two cards, looping back when exceeding the array length
      setIndex((prevIndex) => (prevIndex + 2) % data1.length);
    };
  
    // Get the two cards to display
    const reviewsToShow = [
      data1[index],
      data1[(index + 1) % data1.length], // Loop back for the second card if at the end
    ];
  const handleclick = () => {

    window.location.href="/postjob"
  }

  return (
    <>
      <main className='min-h-screen bg-[#F1F3FF]'>
        <Nav />

        <div>
          <div className='flex items-center justify-center mt-10'>
            <h1 className='text-4xl text-black font-bold'>
              Post unlimited jobs, <span className='text-blue-700'>get unlimited calls!</span>
            </h1>
          </div>

          <div className='flex flex-row items-center justify-center gap-5 mt-20'>
            {/* Card 1 */}
            <div className='w-[410px] h-[360px] bg-[#FFFFFF] rounded-lg border border-indigo-700  transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(79,70,229,0.8)]'>
              <h1 className='text-slate-700 text-2xl font-semibold px-5 py-3'>1 Month Plan - Basic</h1>
              <h4 className='text-slate-500 text-base font-normal px-5 -mt-3'>Best for 1 or more openings</h4>
              <h4 className='text-slate-400 px-5 line-clamp-1 text-sm'>MRP</h4>
              <h1 className='font-semibold text-2xl text-slate-700 px-5'>₹ 2200</h1>

              <div className='px-5 mt-5'>
                <button
                onClick={handleclick}
                className='bg-[#33418A] px-4 py-2 rounded-lg w-full'>
                    Post a Job 
                </button>
                <div className='mt-5'>
                  <div className='flex gap-5'>
                    <div>
                      <h1 className='font-semibold text-sm text-slate-700'>✪ Unlimited Candidate Responses</h1>
                      <h1 className='font-semibold text-sm text-slate-700 mt-2'>✪ Valid for 30 days</h1>
                      <h1 className='font-semibold text-sm text-slate-700 mt-2'>✪ Keep 1 job active</h1>
                      <h1 className='font-semibold text-sm text-slate-700 mt-2'>✪ Unlock 100 candidates from our database</h1>
                      <h1 className='font-semibold text-sm text-slate-700 mt-2'>✪ Boost jobs up to 3 times and get more calls</h1>
                    </div>
                    <div className='flex flex-col justify-start items-center'>
                      <span className='text-sm text-slate-700'>ⓘ</span>
                      <span className='text-sm text-slate-700 mt-2'>ⓘ</span>
                      <span className='text-sm text-slate-700 mt-2'>ⓘ</span>
                      <span className='text-sm text-slate-700 mt-2'>ⓘ</span>
                      <span className='text-sm text-slate-700 mt-2'>ⓘ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className='w-[410px] h-[360px] bg-[#FFFFFF] rounded-lg border border-indigo-700  transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(79,70,229,0.8)]'>
              <h1 className='text-slate-700 text-2xl font-semibold px-5 py-3'>3 Months Plan - Basic</h1>
              <h4 className='text-slate-500 text-base font-normal px-5 -mt-3'>Best for 5 or more openings</h4>
              <h4 className='text-slate-400 px-5 line-clamp-1 text-sm'>MRP</h4>
              <h1 className='font-semibold text-2xl text-slate-700 px-5'>₹ 4200</h1>

              <div className='px-5 mt-5'>
                <button 
                onClick={handleclick}
                className='bg-[#33418A] px-4 py-2 rounded-lg w-full'>
                  Post a job
                </button>

                <div className='mt-5'>
                  <div className='flex gap-5'>
                    <div>
                      <h1 className='font-semibold text-sm text-slate-700'>✪ Unlimited Candidate Responses</h1>
                      <h1 className='font-semibold text-sm text-slate-700 mt-2'>✪ Valid for 30 days</h1>
                      <h1 className='font-semibold text-sm text-slate-700 mt-2'>✪ Keep 1 job active</h1>
                      <h1 className='font-semibold text-sm text-slate-700 mt-2'>✪ Unlock 100 candidates from our database</h1>
                      <h1 className='font-semibold text-sm text-slate-700 mt-2'>✪ Boost jobs up to 3 times and get more calls</h1>
                    </div>
                    <div className='flex flex-col justify-start items-center'>
                      <span className='text-sm text-slate-700'>ⓘ</span>
                      <span className='text-sm text-slate-700 mt-2'>ⓘ</span>
                      <span className='text-sm text-slate-700 mt-2'>ⓘ</span>
                      <span className='text-sm text-slate-700 mt-2'>ⓘ</span>
                      <span className='text-sm text-slate-700 mt-2'>ⓘ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className='w-[410px] h-[360px] bg-[#FFFFFF] rounded-lg border border-indigo-700  transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(79,70,229,0.8)]'>
              <h1 className='text-slate-700 text-2xl font-semibold px-5 py-3'>1 Year Plan - Basic</h1>
              <h4 className='text-slate-500 text-base font-normal px-5 -mt-3'>Best for bulk hiring</h4>
              <h4 className='text-slate-400 px-5 line-clamp-1 text-sm'>MRP</h4>
              <h1 className='font-semibold text-2xl text-slate-700 px-5'>₹ 7500</h1>

              <div className='px-5 mt-5'>
                <button 
                onClick={handleclick}
                className='bg-[#33418A] px-4 py-2 rounded-lg w-full'>
                                    Post a job

                </button>

                <div className='mt-5'>
                  <div className='flex gap-5'>
                    <div>
                      <h1 className='font-semibold text-sm text-slate-700'>✪ Unlimited Candidate Responses</h1>
                      <h1 className='font-semibold text-sm text-slate-700 mt-2'>✪ Valid for 30 days</h1>
                      <h1 className='font-semibold text-sm text-slate-700 mt-2'>✪ Keep 1 job active</h1>
                      <h1 className='font-semibold text-sm text-slate-700 mt-2'>✪ Unlock 100 candidates from our database</h1>
                      <h1 className='font-semibold text-sm text-slate-700 mt-2'>✪ Boost jobs up to 3 times and get more calls</h1>
                    </div>
                    <div className='flex flex-col justify-start items-center'>
                      <span className='text-sm text-slate-700'>ⓘ</span>
                      <span className='text-sm text-slate-700 mt-2'>ⓘ</span>
                      <span className='text-sm text-slate-700 mt-2'>ⓘ</span>
                      <span className='text-sm text-slate-700 mt-2'>ⓘ</span>
                      <span className='text-sm text-slate-700 mt-2'>ⓘ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=' mt-10 flex items-center justify-center'>
            <h1 className=' text-slate-700 text-2xl font-medium'>Not sure what's the best plan for you?
           <span className=' text-blue-600'> Contact us at 🕻 08069824660</span></h1>
          </div>

          <div className=' mt-16 flex flex-row items-center justify-center gap-10 px-5'>
            <div className=' flex flex-row gap-5'>
              <h1 className=' text-6xl font-bold text-indigo-800'>2 Cr+</h1>
              <h1 className=' text-slate-700  mt-5'>Verified candidates visit WorkIndia <br />every month</h1>
            </div>
            <div className=' flex flex-row gap-5'>
              <h1 className=' text-6xl font-bold text-indigo-800'>93%</h1>
              <h1 className=' text-slate-700  mt-5'>Hiring happens within the first 3 days <br />of posting a unique job post</h1>
            </div>
            <div className=' flex flex-row gap-5'>
              <h1 className=' text-6xl font-bold text-indigo-800'>10 L+</h1>
              <h1 className=' text-slate-700  mt-5'>
              Companies trusts WorkIndia for their <br /> hiring needs</h1>
            </div>
          </div>

          <div className=' flex items-center justify-center mt-28 flex-col'>
            <h1 className='font-bold font-mono text-4xl text-slate-800'>More than one way to find right candidates</h1>
            <h1 className=' text-slate-600 text-1xl font-normal'>Giving you more ways to search, find, shortlist and hire candidates that match perfectly!</h1>
          </div>

        <div className=' flex items-center justify-center gap-6'>


          <div className=' flex flex-col w-[710px] h-[550px] bg-[#F4F6FF]  border border-indigo-500 mt-16 rounded-lg'>

            <div className=' flex items-center justify-center mt-24 flex-col gap-2'>

              <h1 className=' text-slate-900 text-4xl font-semibold font-sans '>⋆˙⟡ Unlimited Response ⋆˙⟡</h1>
              <h1 className='text-slate-700 text-1xl px-10'>Start getting calls from candidates within 2 hours ofposting a job.</h1>
              
              <button
                  onClick={handleclick}
                  className='bg-slate-200 text-slate-800 px-8 py-2 rounded-lg border border-indigo-400 flex items-center gap-2 mt-3'
                >
                  Get Started
                  <GoArrowRight />
                </button>


            </div>
            <div className=' mt-10 flex items-center justify-center'>

              <Image
              src="/a1.png"
              height={650}
              width={700}
              alt='img'
              />

            </div>
          </div>
          <div className=' flex flex-col w-[600px] h-[550px] bg-[#F4F6FF]  border border-indigo-500 mt-16 rounded-lg'>

          <div className=' mt-10 flex items-center justify-center'>

          <Image
          src="/a2.png"
          height={650}
          width={700}
          alt='img'
          />

</div>

<div className=' flex items-center justify-center mt-24 flex-col gap-2'>

  <h1 className=' text-slate-900 text-4xl font-semibold font-sans '>⋆˙⟡ Candidate Database ⋆˙⟡</h1>
  <h1 className='text-slate-700 text-1xl px-10'>Unlock from more than 2 Crore candidates available on our database.</h1>
  
  <button
      onClick={handleclick}
      className='bg-slate-200 text-slate-800 px-8 py-2 rounded-lg border border-indigo-400 flex items-center gap-2 mt-3'
    >
      Get Started
      <GoArrowRight />
    </button>


</div>

          </div>

        </div>

        <div className=' flex items-center justify-center mr-20 gap-5'>


          <div className=' flex flex-col w-[600px] h-[500px] bg-[#E3F7F1]  border border-indigo-500 mt-3 rounded-lg ml-20'>
            
          <div className=' mt-10 flex items-center justify-center'>

              <Image
              src="/a4.svg"
              height={150}
              width={100}
              alt='img'
              />

              </div>

            
              <div className=' flex items-center justify-center mt-24 flex-col gap-2'>

                      <h1 className=' text-slate-900 text-4xl font-semibold font-sans '>⋆˙⟡ Need help⋆˙⟡</h1>
                      <h1 className='text-slate-700 text-1xl px-10'>Our priority customer support makes sure you get instant help.</h1>

                      <button
                          onClick={handleclick}
                          className='bg-slate-200 text-slate-800 px-8 py-2 rounded-lg border border-indigo-400 flex items-center gap-2 mt-3'
                        >
                          Get Started
                          <GoArrowRight />
                        </button>


                                  </div>


                                  

                                
                                </div>
                                

                              <div className=' flex flex-col w-[728px] h-[550px] bg-[#F4F6FF]  border border-indigo-500 mt-12 rounded-lg'>
                                
                              <div className=' flex items-center justify-center mt-24 flex-col gap-2'>

                      <h1 className=' text-slate-900 text-4xl font-semibold font-sans '>⋆˙⟡ Power tools for urgent hiring⋆˙⟡</h1>
                      <h1 className='text-slate-700 text-1xl px-10'>Boost your job post and reach 3x more candidates and get more calls.</h1>

                      <button
                          onClick={handleclick}
                          className='bg-slate-200 text-slate-800 px-8 py-2 rounded-lg border border-indigo-400 flex items-center gap-2 mt-3'
                        >
                          Get Started
                          <GoArrowRight />
                        </button>


            </div>

              <div className=' mt-3 flex items-center justify-center'>

              <Image
              src="/a3.png"
              height={650}
              width={700}
              alt='img'
              />

              </div>

        </div>

        </div>



        </div>


        <div className=' flex items-center justify-center'>
          <h1 className=' text-slate-700 font-sans text-5xl mt-10'>How Our Pricing Works</h1>
        </div>


        <div className=' flex flex-row items-center justify-center gap-5'>

          <div className='w-[390px] h-[350px] bg-slate-200 mt-16 rounded-lg'> 

            <Image
            src="/a5.png"
            height={350}
            width={390}
            alt="Image" 
            />
          </div>
          <div className='w-[390px] h-[350px] bg-slate-200 mt-16 rounded-lg'> 

            <Image
            src="/a6.png"
            height={350}
            width={390}
            alt="Image" 
            />
          </div>
          <div className='w-[390px] h-[350px] bg-slate-200 mt-16 rounded-lg'> 

            <Image
            src="/a7.png"
            height={350}
            width={390}
            alt="Image" 
            />
          </div>


        </div>


        <div className=' flex items-center justify-center gap-5 mt-32'>

          <div>

            <h1 className=' font-sans text-4xl text-slate-800 font-semibold'>Trusted by employers <br /> of all sizes</h1>
          </div>

          <div>

            <Image
            src={pic1.img}
            height={150}
            width={100}
            alt='pic1'
            />
            
          </div>
          <div>

                <Image
                src={pic2.img}
                height={150}
                width={100}
                alt='pic1'
                />

                </div>          
                <div>

                <Image
                src={pic3.img}
                height={150}
                width={100}
                alt='pic1'
                />

                </div>         
                 <div>

                <Image
                src={pic4.img}
                height={100}
                width={100}
                alt='pic1'
                />

                </div>          
                <div>

                <Image
                src={pic5.img}
                height={150}
                width={100}
                alt='pic1'
                />

                </div>      
                    <div>

                <Image
                src={pic6.img}
                height={150}
                width={100}
                alt='pic1'
                />

                </div>         
                 <div>

                <Image
                src={pic7.img}
                height={150}
                width={100}
                alt='pic1'
                />

                </div>
        </div>

        <div className='flex flex-col mt-24 items-center justify-center'>
          <div>
            <h1 className=' text-6xl text-slate-900 font-sans font-semibold'>What recruiters think about WorkIndia</h1>
            <h1 className=' text-1xl text-slate-600 ml-56 mt-2'>37 Lakh recruiters have trusted WorkIndia since 2015. Hear from their own words below.</h1>
          </div>

          <div className=' mt-9'>

        <div className="flex flex-col space-y-6 items-center">
          <div className="text-center">
            <h1 className="text-slate-800 font-sans text-5xl mb-4">
              Employer Reviews
            </h1>
            <h1 className="text-blue-900 font-semibold w-[50rem] mb-4">
              ___________________________________________________
            </h1>
          </div>

          {/* Button centered above the cards */}
          <div className="mb-4">
            <button
              onClick={handleclick1}
              className="text-white font-bold text-3xl flex items-center justify-center bg-blue-900 rounded-full px-2 py-2
              ml-[36.2rem]         "
            >
              <GoChevronRight />
            </button>

          {/* Reviews */}
          <div className="flex gap-1 justify-center mb-5">
            {reviewsToShow.map((review, idx) => (
              <div
              key={idx}
              className="w-[600px] h-[300px] bg-[#f0f4ff] border-2 border-[#d1d9ff] rounded-lg shadow-lg p-5 gap-10"
              >
                <h1 className="text-[#4a6ff1] font-sans mb-2">{review.name}</h1>
                <p className="text-[#333] font-sans mb-2">{review.comment1}</p>
                <p className="text-[#666] font-sans">{review.comment2}</p>
              </div>
            ))}
          </div>
            </div>
        </div>
          </div>
        </div>

        <div className=' mt-16 flex items-center justify-center flex-col'>
           <div className=' flex flex-col gap-5 items-center justify-center'>
                  <h1 className=' text-6xl text-slate-700 font-sans'>Frequently Asked Questions</h1>
                  <h1 className=' text-2xl text-slate-600 font-sans'>Need help? Browse our frequently asked questions for fast answers.</h1>
           </div>

        </div>
        <div className=' mt-10 text-black'>

            <App/>
        </div>
      </main>
    </>
  );
};

export default page;
