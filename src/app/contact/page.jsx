"use client"
import React, { useRef, useState } from 'react'
import Image from "next/image"
import emailjs from '@emailjs/browser';

const ContactPage = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset()
          setModalOpen(true);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <div className='flex flex-col lg:flex-row h-full w-[90%] m-auto p-4 sm:px-8 md:px-12 lg:px-20 gap-4 mb-10'>
      
      {/* TEXT & FORM */}
      <div className='flex flex-col lg:w-1/2'>

       <div className='w-[80%] m-auto text-center my-5'>
          <h1 className='font-bold text-3xl md:text-5xl text-[#2B567F]'>Contact Us</h1>
          <p className='text-l md:text-xl'>You can contact us using the form below.</p>
        </div>

        <div className='w-[80%] m-auto text-center my-5'>
          <form 
          ref={form}
          onSubmit={sendEmail}
          className='flex flex-col w-full gap-6'>
            <input 
            className='p-4 bg-[#C3E1FF] rounded-xl text-gray-800 placeholder:text-gray-800 text-[1.1rem] outline-gray-200'
            type="email" 
            required
            name="user_email" 
            placeholder='Your Email...' />

            <textarea 
            className='p-4 bg-[#C3E1FF] rounded-xl text-gray-800 placeholder:text-gray-800 text-[1.1rem] resize-none outline-gray-200'
            name="user_message"
            rows="10"
            placeholder='Your Message...'
            required
            ></textarea>

            <button 
            className='bg-[#2B567F] p-4 rounded-xl text-gray-50'
            type="submit">Send Message</button>
          </form>
        </div>
      </div>
      {modalOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white p-8 rounded-lg flex flex-col items-center justify-center">
          <p className="text-xl mb-4">Email bol úspešne odoslaný!</p>
          <button className="bg-[#2B567F] text-gray-50 px-4 py-2 rounded-md" onClick={() => setModalOpen(false)}>Zavrieť</button>
        </div>
      </div>
      )}
      {/* IMAGE */}
      <div className='flex flex-col lg:w-1/2 justify-center p-8'>
          <div className='h-[400px] relative rounded-xl overflow-hidden'>
            <Image src="https://images.pexels.com/photos/5699458/pexels-photo-5699458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='Contact Image' fill className='object-cover'/>
          </div>
      </div>

    </div>
  )
}

export default ContactPage