import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
const Menu = ({items}) => {
  return (
    <div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-items-center mx-auto gap-y-12 gap-x-8'>
        {items.map((item) => {
            const {id, title, img, desc, price } = item
            return (
                <motion.article key={id} 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1 , x: 0 }}
                exit={{opacity: 0,x: -100}}
                transition={{delay:.4}}
                className='flex max-xs:flex-col items-center justify-between bg-white shadow-2xl rounded-xl gap-4 p-6'>
                    <Image src={img} alt={title} priority width={150} height={200} className='block  border-solid border-2 border-accent rounded-md w-full object-cover' />
                    <div className=''>
                        <div className="header flex items-center justify-between">
                            <h3 className='h3 font-semibold'>{title}</h3>
                            <h4 className='h4 text-accent font-semibold'>${price}</h4>
                        </div>
                        <p className="pt-3">{desc}</p>
                    </div>
                </motion.article>
            )
        })}
    </div>
  )
}

export default Menu