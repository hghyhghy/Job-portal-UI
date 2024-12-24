
"use client";
import { show } from "@/custom";
import Image from "next/image";
import { segment1 } from "@/custom";

const Imageshowing = () => {

  return (

    <>
    <div>

    <div className=" flex flex-row items-center justify-between gap-20">
           {show.map((item,index) => (

            <div key={index} className="flex justify-center items-center">
             
             <Image
             
             src={item.first}
             alt={`Image ${index}`}
             width={100} // Set the width of the image
             height={100} // Set the height of the image
             className="rounded-md shadow-md"
             />

            </div>
           ))}
    </div>

    <div className=" flex items-center justify-center">

        {segment1.map((item,index) => (
             
                <h2 key={index} className="text-2xl font-semibold text-gray-700 mb-4 py-6">{item.first}</h2>

        ))}
    </div>

    </div>

    </>


  )
}

export default Imageshowing
