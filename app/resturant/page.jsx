"use client"
import React,{useState} from "react";
import Image from "next/image";
import bg from "../../public/img/res.webp"
import Category from "./Category";
import Menu from "./Menu";
import items from "./data"
import Link from "next/link";
const allCategories = ['all', ...new Set(items.map((item)=> item.category))]
const page = () => {
  const [menuItems,setMenuItems] = useState(items)
  const [categories,setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if(category === "all") {
      setMenuItems(items)
      return;
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
return <section>
      <div className="h-[600px] lg:h-[860px]">
        <div className='relative w-full h-full flex items-center justify-center'>
        <div className='z-20 text-white text-center'>
        <h2 className='font-tertiary tracking-[6px] mb-5'>Just Enjoy & Relax</h2>
        <h1 className='text-[32px] font-primary text-white uppercase max-w-[920px] lg:text-[68px] mb-16 leading-tight tracking-[2px]'>Enhance Your Dining at Our Restaurant</h1>
        <Link href={"#dishes"} className=' py-5 px-8 btn-primary mx-auto'>See Our Dishes</Link>
        </div>
        <div className='absolute top-0 w-full h-full'>
          <Image src={bg}  priority className='h-full w-full object-cover' alt="bg" />
        </div>
        <div className="absolute bg-black/70 h-full w-full"></div>
        </div>
        </div>

        <div id="dishes" className="py-16 px-6  mx-auto">
        <div className='text-center'>
        <div className='font-tertiary font-normal text-[15px] uppercase tracking-[6px]'>
          Hotel & Spa Adina
        </div>
        <h2 className='font-primary uppercase text-[45px] mb-4'>Our Menu</h2>
      </div>
        <Category categories={categories} filterItems={filterItems}/>
        <Menu items = {menuItems}/>
        </div>
      </section>;
};

export default page;
