"use client";
import React from 'react'
import Nav from '../components/Nav';
import { useState,useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { v4 as uuidv4 } from "uuid";

const page = () => {

  const [qr, setqr] = useState("")
  useEffect(() => {
    
    setqr(uuidv4())
  }, [])
    
  return (

    <>
    <main className=' min-h-screen bg-[#F9F9F9]'>
        <Nav/>
        <div>

        <div className="flex flex-col items-center justify-center mt-36 ">
      <h1 className="text-2xl font-bold mb-4 text-slate-800">Download Workindia App</h1>
      {qr && <QRCodeCanvas value={qr} size={200} />}
      <p className="mt-2 text-gray-600">Scan this QR code</p>
    </div>

        </div>
    </main>
    </>
  )
}

export default page