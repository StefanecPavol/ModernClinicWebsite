"use client"
import React from 'react'
import Image from "next/image"
import {motion} from "framer-motion"
import Link from "next/link"

const HomePage = () => {
  return (
    <div className='flex flex-col lg:flex-row h-full w-[90%] m-auto p-4 sm:px-8 md:px-12 lg:px-20 gap-4'>
      <motion.div
      initial={{opacity: 1}}
      animate={{opacity: 0, y: "+100vh"}}
      transition={{duration: 1, delay: 1}}
      className='w-screen h-screen bg-[#2B567F] fixed top-0 left-0 z-50 flex justify-center items-center'>
        <h1 className='text-gray-50 text-6xl select-none'>Welcome</h1>
      </motion.div>
      {/* IMAGE CONTAINER */}
      <motion.div 
      initial={{y:-200, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration:1, delay: 2}}
      className='h-3/5 relative lg:h-full lg:w-1/2 rounded-xl overflow-hidden'>
        <Image src="https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="stethoscope" fill className='object-contain lg:p-8'/>
      </motion.div>
      {/* TEXT CONTENT CONTAINER */}
      <motion.div 
      initial={{y:-200, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration:1, delay: 2}}
      className='flex flex-col gap-4 items-center justify-center lg:h-full lg:w-1/2'>
        <h1 className='font-bold text-3xl md:text-5xl text-[#2B567F]'>Welcome to the website of our modern clinic</h1>
        <p className='text-l md:text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti perferendis veniam distinctio accusantium laborum quod!</p>
      {/* BUTTONS */}
      <motion.div 
      initial={{y: +100, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration:0.5, delay: 3}}
      className='flex gap-4 w-full'>
        <Link href="/about">
        <button 
        className='p-4 rounded-lg ring-1 ring-[#2B567F] bg-[#2B567F] text-gray-50 hover:shadow-lg'>About Us</button>
        </Link>
        <Link href="/contact">
        <button className='p-4 rounded-lg ring-1 ring-[#2B567F] hover:shadow-lg'>Contact</button>
        </Link>
      </motion.div>
      </motion.div>
    </div>
  )
}

export default HomePage