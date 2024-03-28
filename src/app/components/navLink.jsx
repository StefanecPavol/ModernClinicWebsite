"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({link}) => {

    const pathName = usePathname();

  return (
    <Link 
    className={`p-2 rounded-xl ${pathName === link.url && "bg-[#2B567F] text-gray-50 "} hover:bg-[#2B567F] hover:text-gray-50 duration-150`}
    href={link.url} key={link.url}>{link.title}</Link>
  )
}

export default NavLink