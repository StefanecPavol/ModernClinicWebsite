"use client"
import React, { useState } from 'react'
import Link from "next/link"
import {motion} from "framer-motion"

import { FaRegHospital } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import NavLink from './navLink';

const links = [
    {url: "/", title: "Home"},
    {url: "/about", title: "About"},
    {url: "/work", title: "Work"},
    {url: "/contact", title: "Contact"},
]

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const listVariants = {
        closed: {
            x: "100vw"
        },
        opened: {
            x: 0,
            transition: {
                when:"beforeChildren",
                staggerChildren: 0.1,
            }
        }
    }

    const listItemVariants = {
        closed: {
            x: "-10",
            opacity: 0,
        },
        opened: {
            x: 0,
            opacity: 1,
        }
    }

  return (
    <div className='h-[80%] flex items-center bg-[#C3E1FF] justify-between w-[90%] m-auto p-4 sm:px-8 md:px-12 lg:px-20 rounded-xl shadow-lg'>
        {/* LOGO */}
        <div>
            <Link href="/">
                <p className='flex items-center p-1 bg-gray-50 font-bold text-3xl text-[#2B567F] rounded'><FaRegHospital size={35}/>iClinic</p>
            </Link>
        </div>

        <div className='hidden md:flex gap-2 lg:gap-6 xl:gap-8 h-full text-xl'>
            {links.map(link =>(
                <NavLink link={link} key={link.title}/>
            ))}
        </div>

        {/* MOBILE MENU */}
        <div className='flex items-center md:hidden z-40'>
            <button 
            onClick={() => setOpen(!open)}
            className='z-50 relative'>
                {!open ? (
                    <MdOutlineMenu size={35} className='text-[#2B567F]'/>
                ): (
                    <IoMdClose size={35} className='text-[#2B567F]'/>
                )}
            </button>
        {/*MOBILE LINKS */}
        {open && 
            <motion.div 
            variants={listVariants}
            initial="closed"
            animate="opened"
            className='fixed top-0 left-0 w-screen h-screen bg-[#C3E1FF] text-gray-800 flex flex-col items-center justify-center gap-8 text-4xl'>
            {links.map(link=> (
                <motion.div
                onClick={() => setOpen(false)}
                variants={listItemVariants}
                className='w-screen text-center flex' key={link.url} >
                    <Link 
                    className='w-full text-center p-4 hover:bg-[#2B567F] hover:text-gray-100 duration-150'
                    href={link.url}>{link.title}</Link>
                </motion.div>
                ))}
            </motion.div>    
        }
        </div>
    </div>
  )
}

export default Navbar