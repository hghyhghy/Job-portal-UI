
import React from 'react'
import Image from 'next/image'
import App from './App'

const Download = () => {

  const handleclick = () => {

    window.location.href = "/install"
  }  
  return (

    <>
    <main className='h-[600px] bg-[#4154AF]'>

        <div className=' py-28 px-10'>
            <h1 className=' text-slate-100 text-5xl'>Download the WorkIndia for Recruiters App</h1>
            <h1 className=' text-yellow-300 font-extrabold'>__________________</h1>
        </div>
        <div className=' flex flex-row gap-10 items-center justify-center -mt-20' >
            <div>
                <h1 className=' text-slate-200 mb-2'>Scan this QR code</h1>
                <Image
                src="/qr.png"
                height={200}
                width={250}
                alt='qr'
                />
                <button 
                onClick={handleclick}
                className=' mt-4  bg-transparent border border-white p-3 rounded-lg'>Download</button>
            </div>
            <div>
                <Image
                src="/phone.svg"
                height={300}
                width={500}
                alt='qr'
                />
            </div>
        </div>
    </main>

    <div className=' mt-10 text-black'>
        <App/>
    </div>
    </>
  )
}

export default Download