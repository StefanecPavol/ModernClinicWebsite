"use client"
import React from 'react'
import Image from "next/image"

import { FaMedal } from "react-icons/fa";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { RiMentalHealthLine } from "react-icons/ri";
import { GiProgression } from "react-icons/gi";
import {motion} from "framer-motion"

const AboutPage = () => {
  return (
    <div className='flex flex-col lg:flex-row h-full w-[90%] m-auto p-4 sm:px-8 md:px-12 lg:px-20 gap-4 justify-center items-center'>
        <div className='mt-10 lg:w-1/2 flex flex-col gap-4 lg:gap-8'>
          <h1 className='font-bold text-3xl md:text-5xl text-[#2B567F] text-center'>About Us</h1>
          <p className='md:text-lg pr-4 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, accusamus nesciunt obcaecati officia mollitia accusantium! Nisi asperiores nobis dolor, molestiae maiores sunt praesentium accusantium sed.</p>
          <div className='w-full flex flex-col sm:flex-row flex-wrap items-center gap-4 lg:gap-8 mt-4 justify-center'>
            <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.3, delay: 0.5}}
            className='w-[70%] sm:w-2/5 flex justify-between text-gray-50 items-center p-4 bg-[#2B567F] rounded-xl'>
              <FaMedal  size={30}/>
              <p>45 Awards</p>
            </motion.div>

            <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.3, delay: 0.8}}
            className='w-[70%] sm:w-2/5 flex justify-between text-gray-50 items-center p-4 bg-[#2B567F] rounded-xl'>
              <BiSolidPlaneAlt  size={30}/>
              <p>Limitless</p>
            </motion.div>


            
            <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.3, delay: 1.1}}
            className='w-[70%] sm:w-2/5 flex justify-between text-gray-50 items-center p-4 bg-[#2B567F] rounded-xl'>
              <RiMentalHealthLine  size={30}/>
              <p>Purposeful</p>
            </motion.div>



            <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.3, delay: 1.4}}
            className='w-[70%] sm:w-2/5 flex justify-between text-gray-50 items-center p-4 bg-[#2B567F] rounded-xl'>
              <GiProgression size={30}/>
              <p>Progression</p>
            </motion.div>

            <motion.div
            initial={{opacity: 0, x: "-100vh"}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.5, delay: 1.7}}
            >
              <p className='mt-4 text-center italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </motion.div>
          </div>
        </div>

        <div className='lg:w-1/2 h-1/2 relative w-full rounded-xl overflow-hidden'>
          <Image 
            className='object-contain w-[80%] h-[80%]' // Zabezpečte, aby obrázok zaberl celú dostupnú šírku a výšku
            src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            layout="fill" // Nastaví rozmery obrázka na základe jeho pôvodnej veľkosti
            objectFit="cover" // Zabezpečí, aby obrázok pokryl celý dostupný priestor bez deformácie
            alt="Image" // Alt atribút pre prístupnosť
          />
        </div>
    </div>
  )
}

export default AboutPage