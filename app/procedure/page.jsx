"use client";
import React from 'react'
import Nav from '../components/Nav'
import Image from 'next/image'

const page = () => {


  return (
    <>
    <Nav/>


    
    <main className=' flex flex-col items-center justify-center gap-5 mt-4 bg-[#F4F5F9] min-h-screen'>

    <div className=' text-blue-950 flex flex-row items-center justify-center  mt-2'>

                <h1 className=' text-5xl mb-5'>You'r Just a few Steps away</h1>
    </div>

    <div className=' flex flex-row items-center justify-center mt-3 bg-sky-400  rounded-full px-5 py-2'>

     <h1 className=' text-6xl text-black'>  1</h1>

</div>

     <div className=' text-black flex flex-row-reverse gap-5 items-center justify-center mt-5'>

         <div>

         <Image
         src="/match.jpg"
         alt='match'
         height={450}
         width={350}
         className=' rounded-md'
         />
         </div>

         <div className=' leading-[1.8] bg-slate-300 px-5 py-5 rounded-lg shadow-lg'>
             
             <h2 className=' text-4xl text-blue-900'>Get your Matched Profile </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit <br/>
            Quisquam quod ad labore dolore quam quaerat cum est <br/>illo temporibus ea
            Lorem ipsum dolor sit, amet <br/> consectetur adipisicing elit.<br/> Placeat sint delectus temporibus <br/>id quos mollitia in fugiat expedita <br/> libero recusandae assumenda <br/> unde quo labore voluptate, soluta aliquam, voluptatibus tenetur et.            .</p>
         </div>
     </div>

<div className=' flex flex-row items-center justify-center mt-3 bg-sky-400  rounded-full px-5 py-2'>

     <h1 className=' text-6xl text-black'> 2 </h1>

</div>

     <div className=' text-black flex flex-row gap-5 items-center justify-center mt-9'>

      <Image
      
      src="/selected.jpg"
      alt='selected'
      height={450}
      width={350}
      className=' rounded-md'

      
      />

    <div className=' leading-[1.8] bg-slate-300 px-5 py-5 rounded-lg'>
             
             <h2 className=' text-4xl text-blue-900'>Get Shortlisted </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit <br/>
            Quisquam quod ad labore dolore quam quaerat cum est <br/>illo temporibus ea
            Lorem ipsum dolor sit, amet <br/> consectetur adipisicing elit.<br/> Placeat sint delectus temporibus <br/>id quos mollitia in fugiat expedita <br/> libero recusandae assumenda <br/> unde quo labore voluptate, soluta aliquam, voluptatibus tenetur et.            .</p>
         </div>

     </div>


     <div className=' flex flex-row items-center justify-center mt-3 bg-sky-400  rounded-full px-5 py-2'>

        <h1 className=' text-6xl text-black'> 3 </h1>

        </div>

    
    <div className=' text-black flex flex-row-reverse gap-5 items-center justify-center mt-9'>

        <Image
        
        src="/exam.jpg"
        alt='exam'
        height={450}
        width={350}
        className=' rounded-md'
        
        />

        <div className=' leading-[1.8] bg-slate-300 px-5 py-5 rounded-lg shadow-lg'>
             
             <h2 className=' text-4xl text-blue-900'>Give Your Scheduled Exam </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit <br/>
            Quisquam quod ad labore dolore quam quaerat cum est <br/>illo temporibus ea
            Lorem ipsum dolor sit, amet <br/> consectetur adipisicing elit.<br/> Placeat sint delectus temporibus <br/>id quos mollitia in fugiat expedita <br/> libero recusandae assumenda <br/> unde quo labore voluptate, soluta aliquam, voluptatibus tenetur et.            .</p>
         </div>

        



    </div>


    <div className=' flex flex-row items-center justify-center mt-3 bg-sky-400  rounded-full px-5 py-2'>

        <h1 className=' text-6xl text-black'> 4 </h1>

    </div>

    <div className=' text-black flex flex-row gap-5 items-center justify-center mt-9'>

        <Image
        src="/interview.webp"
        alt='interview'
        height={450}
        width={350}
        className=' rounded-md'
        
        />

<div className=' leading-[1.8] bg-slate-300 px-5 py-5 rounded-lg shadow-lg'>
             
             <h2 className=' text-4xl text-blue-900'>Get Call for interview </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit <br/>
            Quisquam quod ad labore dolore quam quaerat cum est <br/>illo temporibus ea
            Lorem ipsum dolor sit, amet <br/> consectetur adipisicing elit.<br/> Placeat sint delectus temporibus <br/>id quos mollitia in fugiat expedita <br/> libero recusandae assumenda <br/> unde quo labore voluptate, soluta aliquam, voluptatibus tenetur et.            .</p>
         </div>



    </div>


    <div className=' flex flex-row items-center justify-center mt-3  bg-sky-400 rounded-full px-5 py-2'>

        <h1 className=' text-6xl text-black'> 5 </h1>

    </div>


    <div className=' text-black flex flex-row-reverse gap-5 items-center justify-center mt-9'>


        <Image
        src="/offer.jpg"
        alt='offer'
        height={450}
        width={350}
        className=' rounded-md'
        />

<div className=' leading-[1.8] bg-slate-300 px-5 py-5 rounded-lg shadow-lg'>
             
             <h2 className=' text-4xl text-blue-900'>Letter of Intent </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit <br/>
            Quisquam quod ad labore dolore quam quaerat cum est <br/>illo temporibus ea
            Lorem ipsum dolor sit, amet <br/> consectetur adipisicing elit.<br/> Placeat sint delectus temporibus <br/>id quos mollitia in fugiat expedita <br/> libero recusandae assumenda <br/> unde quo labore voluptate, soluta aliquam, voluptatibus tenetur et.            .</p>
         </div>


    </div>





    </main>
    
    </>
  )
}

export default page