
"use client";
import Image from 'next/image';
import React from 'react'
import { segment10,segment8,segment9 } from '@/custom';
import Employerreview from './Employerreview';
const Better = () => {

    const handleclick = () => {
        // Redirect using window.location
        window.location.href = '/postjob'; // Redirect to '/Postjob'
      };
  return (
    
    <>
    <main>

        <div className=' bg-[#4252c7] h-[100rem] w-[94rem]  flex flex-row gap-20 items-center justify-center mt-5 relative -top-[33rem] px-5 '
          style={{
            clipPath: "ellipse(70% 50% at 50% 100%)",
          }}
        >



            <div className=' flex flex-col items-center justify-center'>

                {segment8.map((item,index) => (

                    <div key={index} className='flex flex-col gap-5 items-center relative top-80 '>
                     <Image
                     
                     src={item.img}
                        alt="post a job"
                        height={300}
                        width={350}
                        className="rounded-lg"
                     />

                    <h3 className=' text-white text-3xl'>{item.first}</h3>
                    <h3 className=' text-white text-1xl'>{item.second}</h3>

                    </div>
                ))}
            </div>


            <div className=' flex flex-col items-center justify-center gap-10'>

                {segment9.map((item,index) => (
                  
                  <div key={index} className='flex flex-col gap-5 items-center relative top-80 '>

                    <Image
                    src={item.img}
                    alt="post a job"
                    height={300}
                    width={350}
                    className="rounded-lg"
                    />
                                        <h3 className=' text-white text-3xl'>{item.first}</h3>
                                        <h3 className=' text-white text-1xl'>{item.second}</h3>
                  </div>


                ))}
            </div>

            <div className=' flex flex-col items-center justify-center gap-16'>
             
             {segment10.map((item,index)=> (

               <div key={index} className='flex flex-col gap-5 items-center relative top-80 '>

                  <Image
                                      src={item.img}
                                      alt="post a job"
                                      height={300}
                                      width={350}
                                      className="rounded-lg"

                  />

                    <h3 className=' text-white text-3xl'>{item.first}</h3>
                    <h3 className=' text-white text-1xl'>{item.second}</h3>
               </div>  
             ))}

            </div>

            


        </div>

    <div className="flex flex-row items-center justify-center relative -top-[43rem]">
          <button
            onClick={handleclick}
            className="px-20 py-2 border-2 border-blue-600 text-blue-600 rounded-lg bg-[#EAEEFF] hover:bg-blue-100"
            >
            Post a job
          </button>
    </div>
    <div className=' -mt-96'>

    <Employerreview/>
    </div>


              </main>

    
    </>
  )
}

export default Better