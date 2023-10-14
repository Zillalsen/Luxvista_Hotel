"use client"
import { useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo1 from "../public/img/head/logo-white.svg"
import logo2 from "../public/img/head/logo-dark.svg"
const Navbar = () => {
  const [header,setHeader] = useState(false)
  useEffect(()=> {
    const handleScroll= () => {
    window.scrollY > 50 ? setHeader(true): setHeader(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => removeEventListener("scroll",handleScroll)
    
  },[header])
  return (
    <header className={`${header ? "bg-white":"bg-black/20"} w-full z-40 shadow-2xl fixed top-0 py-6 px-16 transition duration-300`}>
      <nav className='flex items-center justify-between max-md:flex-col max-md:justify-center max-md:gap-4 w-full '>
        <Link href="/">
        <Image src={header ? logo2 : logo1} alt='logo' className="w-auto h-auto" priority width={120} height={120}/>
        </Link>

        <div className={`${header ? "text-primary":"text-white"} flex items-center flex-wrap max-md:justify-center max-md:gap-4 gap-8 uppercase`}>
            <Link href='/' className='hover:text-accent font-medium transition'>Home</Link>
            <Link href='/resturant' className='hover:text-accent font-medium transition'>Resturant</Link>
            <Link href='/spa' className='hover:text-accent font-medium transition'>Spa</Link>
            <Link href='/contact' className='hover:text-accent font-medium transition'>Contact</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
