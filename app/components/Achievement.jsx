"use client";
import React from 'react';
import { segment2 } from '@/custom';
import Image from 'next/image';
import { segment3 } from '@/custom';
import { segment4 } from '@/custom';

const Achievement = () => {
  return (
    <>
      <main>
        <div className='flex flex-row items-center justify-between gap-[5rem] mt-32'>
          
          {/* Segment 2 */}
          <div className='bg-[#e9c5f0] h-[12rem] w-[15rem] rounded-md flex flex-col'>
            <div className='flex flex-col items-center justify-center'>
              {segment2.map((item, index) => (
                <div key={index} className='flex flex-col items-center'>
                  <Image
                    src={item.img}
                    height={15}
                    width={45}
                    className='py-5'
                  />
                  <h1 className="text-3xl font-semibold text-blue-800 mb-4">{item.first}</h1>
                  <h2 className="text-1xl font-semibold text-gray-700 mb-4">{item.second}</h2>
                </div>
              ))}
            </div>
          </div>

          {/* Segment 3 */}
          <div className='bg-[#e9c5f0] h-[12rem] w-[15rem] rounded-md'>
            <div className='flex flex-col items-center justify-center'>
              {segment3.map((item, index) => (
                <div key={index} className='flex flex-col items-center'>
                  <Image
                    src={item.img}
                    height={15}
                    width={45}
                    className='py-5'
                  />
                  <h1 className="text-3xl font-semibold text-blue-800 mt-4">{item.third}</h1>
                  <h2 className="text-1xl font-semibold text-gray-700 mt-2">{item.fourth}</h2>
                </div>
              ))}
            </div>
          </div>

          {/* Segment 4 */}
          <div className='bg-[#e9c5f0] h-[12rem] w-[15rem] rounded-md'>
            <div className='flex flex-col items-center justify-center'>
              {segment4.map((item, index) => (
                <div key={index} className='flex flex-col items-center'>
                  <Image
                    src={item.img}
                    height={15}
                    width={45}
                    className='py-5'
                  />
                  <h1 className="text-3xl font-semibold text-blue-800 mb-4">{item.fifth}</h1>
                  <h2 className="text-1xl font-semibold text-gray-700 mb-4 ">{item.sixth}</h2>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default Achievement;
