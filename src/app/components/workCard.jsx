"use client"
import React from 'react'
import Image from "next/image"
import { useState } from 'react'
import Modal from './modal'

const WorkCacrd = ({item}) => {

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };


  return (
    <div className='w-full  bg-slate-200 shadow-lg p-4 flex justify-between items-center lg:max-w-[1000px] rounded-xl gap-2 m-auto'>
    <div className='w-2/3'>
      <h2 className='font-semibold text-xl text-[#2B567F]'>{item.number}<span className='font-semibold pr-1 text-xl text-[#2B567F]'>|</span>{item.title}</h2>
      <p>{item.text}</p>
      <div className="py-4">
      <button className="bg-[#C3E1FF] hover:bg-[#2B567F] text-[#2B567F] hover:text-gray-50 font-bold py-2 px-4 rounded" onClick={handleOpenModal}>
        More Info
      </button>
      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        <p className='p-4'>{item.longText}</p>
      </Modal>
    </div>
    </div>
    <div className='h-[100px] w-[100px] relative'>
    <Image 
    alt='WorkCard image'
    fill
    className='object-cover'
    src={item.image}/>
    </div>

  </div>
  )
}

export default WorkCacrd