import Image from 'next/image';
import Link from 'next/link';
import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/effect-fade"

import {EffectFade,Autoplay} from "swiper"

import Img1 from "../public/img/heroSlider/1.webp"
import Img2 from "../public/img/heroSlider/2.webp"
import Img3 from "../public/img/heroSlider/3.webp"

const slides = [
  {
    title: 'Your Luxery Hotel For Vacation',
    bg: Img1,
    btnText:'See Our Rooms'
  },
  {
    title: 'Your Luxery Hotel For Vacation',
    bg: Img2,
    btnText:'See Our Rooms'
  },
  {
    title: 'Your Luxery Hotel For Vacation',
    bg: Img3,
    btnText:'See Our Rooms'
  },
]

const HeroSlider = () => {
  return <Swiper 
  modules={[EffectFade,Autoplay]}
  effect={'fade'}
  loop = {true}
  autoplay= {{
    delay: 2800,
    disableOnInteraction: false
  }}
  
  className='h-[600px] lg:h-[860px]'>
    {slides.map((slide,index) => {
        const {title,bg,btnText} = slide
        return <SwiperSlide key={index} className='w-full h-full relative flex items-center justify-center'>
        <div className=' z-20 text-white text-center mx-auto mt-72 max-xs:mt-48'>
        <h2 className='font-tertiary tracking-[6px] mb-5'>Just Enjoy & Relax</h2>
        <h1 className='text-[32px] pb-10 font-primary text-white uppercase max-w-[920px] lg:text-[68px] leading-tight tracking-[2px] mx-auto'>{title}</h1>
        <Link href={"#rooms"} className='py-5 px-8 btn-primary mx-auto'>{btnText}</Link>
        </div>
        <div className='absolute top-0 w-full h-full -z-10'>
          <Image src={bg} className='h-full w-full object-cover' alt="ss" />
        </div>
        <div className="absolute top-0 bg-black/70 h-full w-full -z-10"></div>
      </SwiperSlide>
    })}
    </Swiper>;
};

export default HeroSlider;
