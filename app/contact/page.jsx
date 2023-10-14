import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import bg from "../../public/img/contact.webp"
import {BsFillTelephoneFill} from "react-icons/bs"
import {HiMail} from "react-icons/hi"

const page = () => {
  return (

<section>
    <div className='min-w-screen h-[450px] lg:h-[600px]'>
         <div className='relative w-full h-full flex items-center justify-center'>
        <div className='z-20 text-white text-center'>
        <h2 className='font-tertiary tracking-[6px] mb-5'>Reserve Your Spot</h2>
        <h1 className='text-[32px] font-primary text-white mb-16 uppercase max-w-[920px] lg:text-[68px] leading-tight tracking-[2px]'> Reach Out for Bookings & Inquiries</h1>
        <Link href={"#contact"} className='py-5 px-8 btn-primary mx-auto'>Contact Us</Link>
        </div>
        <div className='absolute top-0 w-full h-full'>
          <Image src={bg}  priority className='h-full w-full object-cover' alt="bg" />
        </div>
        <div className="absolute bg-black/70 h-full w-full"></div>
      </div>
         </div>

         <div id='contact' className='bg-white shadow-2xl lg:w-[650px] lg:mx-auto max-sm:mx-2 mx-16 h-auto py-16 border border-accent rounded-md  my-12'>
          <form className='flex flex-col items-center '>
            <div className="header w-full flex items-center justify-evenly ">
                <div className='flex flex-col items-center gap-3'>
                  <HiMail className='text-accent' size={23}/>
                  <Link href="/" className='font-medium max-sm:hidden' >contact@gmail.com</Link>
                </div>

                <div className='flex flex-col items-center gap-3'>
                  <BsFillTelephoneFill className='text-accent' size={21}/>
                  <Link href="/" className='font-medium max-sm:hidden'>+992 213 224 4529</Link>
                </div>
            </div>

            <div className='inputs py-7 w-full flex flex-col items-center max-sm:px-3 px-9'>
                
                <div className='w-full flex flex-col py-2 '>
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text" id="fullName" placeholder='john doe' className='border border-accent rounded-md p-2'  />
                </div>

                <div className='w-full flex flex-col py-2'>
                  <label htmlFor="email">Email</label>
                  <input type="text" id="email" placeholder='yourname@gmal.com' className='border border-accent rounded-md p-2' />
                </div>

                <div className='w-full flex flex-col py-2'>
                  <label htmlFor="text">Message</label>
                  <textarea type="text" id="text" placeholder='Enter Message Here' rows={5} className='border resize-none border-accent rounded-md p-2' />
                </div>              

                  <div className='w-full flex flex-col pt-4 '>
                    <button type='submit' className='bg-accent text-white hover:bg-white hover:border hover:border-accent hover:text-accent transition duration-200 py-3 w-full '>Send</button>
                  </div>

            </div>
            <div className="header"></div>
          </form>
         </div>
    </section>
  )
}

export default page