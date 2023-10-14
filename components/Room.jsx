import Link from 'next/link';
import Image from 'next/image';
import {BsArrowsFullscreen,BsPeople} from "react-icons/bs"
import { motion } from 'framer-motion';
const Room = ({room}) => {
  const {id,name,description,size,maxPerson,price,image} = room
  return (
    <motion.div 
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1 , y: 0 }}
    transition={{delay:.2}}
      
    className='bg-white shadow-2xl min-h-[500px] group'>    
    <Link href={`/rooms/${id}`} className='overflow-hidden'>
      <Image src={image} 
      className='group-hover:scale-105 transition-all duration-300 w-full'
      alt="image" />
    </Link>
      {/* features */}
    <div 
    className='flex items-center justify-center h-[60px] bg-white shadow-lg max-w-[300px] mx-auto
    -translate-y-1/2 uppercase font-tertiary tracking-[1px] font-semibold text-base'>
      <div className='flex items-center justify-between w-[90%] sm:w-[80%] '>
        <div className='flex items-center gap-x-2'>
          <div className='text-accent'>
          <BsArrowsFullscreen className='text-[15px]'/> 
          </div>
          <div className='flex gap-x-1'>
            <p>Size</p>
            <p className='ml-2'>{size}</p>
          </div>
        </div>

        <div className='flex items-center gap-x-2'>
          <div className='text-accent'>
          <BsPeople className='text-[15px]'/> 
          </div>
          <div className='flex gap-x-1'>
            <p>Max Poeple</p>
            <p className='ml-2'>{maxPerson}</p>
          </div>
        </div>
      </div>
    </div>
    {/* details */}
      <div className='text-center'>
        <Link href={`/rooms/${id}`}>
        <h3 className='h3'>{name}</h3>
        </Link>
        <p className='mb-3 lg:mb-6 mx-auto max-w-[300px]'>{description.substring(0,70)}</p>
      </div>
      {/* btn */}
        <Link href={`/rooms/${id}`} className='btn btn-secondary btn-sm mx-auto max-w-[240px]'>
        Book Now from ${price}
        </Link>
  
  </motion.div>
  );
};

export default Room;
