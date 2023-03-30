import React from 'react'
import { HiPhone,HiEnvelope } from "react-icons/hi2";

export default function Contact() {
  return (
    <div className='h-screen bg-gradient-to-b from-cyan-600 to-cyan-900 flex items-center justify-center' id='contact'>
        <div className='container'>
        <h1 className='text-6xl mb-12 max-md:mb-20 max-md:text-5xl text-center text-lime-50'>Feel free to Contact</h1>
        <div className='text-8xl flex flex-col justify-center items-center'>
        <div className='flex items-center max-md:flex-col my-2'><HiPhone/><p className='text-2xl mx-4 max-md:mx-0 max-md:text-xl'>+91 9650540074</p></div>
        <div className='flex items-center max-md:flex-col my-2'><HiEnvelope/><p className='text-2xl mx-4 max-md:mx-0 max-md:text-xl'>saurabh_upadhyay7@outlook.com</p></div>
        </div>   
        </div>
    </div>
  )
}
