"use client"
import React from 'react'
import Image from "next/image"
import { useState } from 'react';
import Modal from '../components/modal';
import WorkCard from '../components/workCard';
import {motion} from "framer-motion"

const workItems = [
  {
    id: 1,
    number: "01",
    title : "Lorem Ipsum",
    image: "https://images.pexels.com/photos/263194/pexels-photo-263194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, voluptate.",
    longText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ipsam maiores atque ex laborum, natus aut veritatis quisquam similique accusantium alias beatae maxime cum ut.",
  },
  {
    id: 2,
    number: "02",
    title : "Lorem Ipsum",
    image: "https://images.pexels.com/photos/6129044/pexels-photo-6129044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, voluptate.",
    longText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ipsam maiores atque ex laborum, natus aut veritatis quisquam similique accusantium alias beatae maxime cum ut.",
  },
  {
    id: 3,
    number: "03",
    title : "Lorem Ipsum",
    image: "https://images.pexels.com/photos/3825443/pexels-photo-3825443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, voluptate.",
    longText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ipsam maiores atque ex laborum, natus aut veritatis quisquam similique accusantium alias beatae maxime cum ut.",
  },
]

const PageWork = () => {

  
  return (
    <div className='flex flex-col h-full w-[90%] m-auto p-4 sm:px-8 md:px-12 lg:px-20 gap-4 mb-10'>

        {/*TEXT CONTAINER */}
        <div className='w-[80%] m-auto text-center my-5'>
          <h1 className='font-bold text-3xl md:text-5xl text-[#2B567F]'>Our Work</h1>
          <p className='text-l md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit reiciendis, saepe doloribus libero atque dolorem sint at a obcaecati maxime, nemo animi, fuga molestias beatae.</p>
        </div>

        <div className='flex flex-col gap-8'>

        {workItems.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.5 }} // Každá karta bude mať o 0.2 sekundy oneskorený štart
        >
          <WorkCard item={item} />
        </motion.div>
))}
        </div>

        
      

    </div>
  )
}

export default PageWork