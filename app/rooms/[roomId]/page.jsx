"use client"
import { useGlobalContext } from "@/app/context"
import { KidsDropDown,AdultDropDown,CheckIn,CheckOut } from "@/components";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const Page = ({params}) => {
    const {rooms} = useGlobalContext()
    const id = Number(params.roomId)
    const theRoom = rooms.find((room)=> {
        return room.id === id
    })
  const {name,description,price,facilities,imageLg} = theRoom

    return (
<section >
    {/* <ScrollToTop /> */}
    <div className='bg-room bg-cover bg-center h-[560px] flex items-center justify-center relative'> 
      <div className='absolute w-full h-full bg-black/70'></div>
        <h2 className='text-6xl font-primary z-20 text-white text-center'>
          {name} Details
        </h2>
    </div>

    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row h-full py-24'>
      {/* left side */}
      <div className='w-full h-full lg:w-[60%]'>
        <h2 className="h2">{name}</h2>
        <p className='mb-8'>{description}</p>
        <Image src={imageLg} alt="image" />
          {/* facilities */}
          <div className=''> 
            <h3 className='h3 mt-8'>Room Facilities</h3>
            <p className='mb-12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam placeat saepe suscipit modi corrupti maiores ipsa illum eos officiis quaerat</p>
            <div className=' mt-5 grid gap-6  grid-cols-3 mb-12'>
              {facilities.map((facilitie,index) => {
                const {name,icon} = facilitie
                return (
                  <div key={index} className='flex items-center '>
                    <p className='text-accent text-2xl'>{icon}</p>
                    <p className='ml-1'>{name}</p>
                  </div>
                )
              })}
            </div>
          </div>
      </div>

      {/* right side */}
      <div className='w-full h-full lg:w-[40%]'>
        <div className='bg-accent/20 py-8 px-6 mb-12'>
          <div className='flex flex-col mb-4 space-y-4 '>
            <h3>Your Reservation</h3>

          <div className='h-[60px]'>
            <CheckIn/>
            </div>
          <div className='h-[60px]'>
          <CheckOut/>
          </div>
          <div className='h-[60px]'>
            <AdultDropDown/> 
          </div>
          <div className='h-[60px]'>
          <KidsDropDown/>
          </div>
        {/* button */}
        <button className='btn-lg text-white btn-primary w-full'>Book Now For ${price}</button>

          </div>
        </div>
        {/* hotel rules */}
        <div>
          <h3 className='h3 mt-6'>Hotel Rules</h3>
          <p className="my-4">lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magni soluta dolores blanditiis voluptatibus pariatur accusantium quaerat quo nostrum a</p>
              <ul className='flex flex-col gap-y-4'>
                <li className='flex items-center'><FaCheck className='mr-2 text-accent'/> Check in 3:00 PM - 9:00 PM</li>
                <li className='flex items-center'><FaCheck className='mr-2 text-accent'/> Check Out 10:30 PM</li>
                <li className='flex items-center'><FaCheck className='mr-2 text-accent'/> No Pets</li>
                <li className='flex items-center'><FaCheck className='mr-2 text-accent'/> No Smoking</li>
              </ul>
        </div>
      </div>
      </div>
    </div>
  </section>
  )
}

export default Page