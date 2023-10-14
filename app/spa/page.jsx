import Image from 'next/image';
import bg from "../../public/img/spa.webp"
import Img1 from "../../public/img/spa/1.webp"
import Img2 from "../../public/img/spa/2.webp"
import Img3 from "../../public/img/spa/3.webp"
import Link from 'next/link';

const services = [
  {
    title:"Massage",
    desc: 'Indulge in pure relaxation with our signature Massage. Our skilled therapists will ease away tension and stress, leaving you feeling refreshed and rejuvenated.',
    img: Img1,
  },
  {
    title:"Facials",
    desc: 'Rejuvenate your skin with our soothing Facial Massage. Let expert hands refresh your complexion, promoting relaxation and enhancing your natural glow.',
    img: Img2,
  },
  {
    title:"Health & Body",
    desc: 'Enhance your well-being with our Health & Body therapies. Experience a holistic approach to rejuvenation, designed to promote vitality and balance for your mind, body, and soul.',
    img: Img3,
  },
]

const page = () => {
  return  <section>
         <div className='h-[600px] lg:h-[860px]'>
         <div className='relative w-full h-full flex items-center justify-center'>
        <div className='z-20 text-white text-center'>
        <h2 className='font-tertiary tracking-[6px] mb-5'>Just Enjoy & Relax</h2>
        <h1 className='text-[32px] font-primary text-white uppercase max-w-[920px] mb-16 lg:text-[68px] leading-tight tracking-[2px]'>Indulge in Tranquility at Our Luxury Spa</h1>
        <Link href={"#spa"} className='py-5 px-8 btn-primary mx-auto'>See Our Services</Link>
        </div>
        <div className='absolute top-0 w-full h-full'>
          <Image src={bg}  priority className='h-full w-full object-cover' alt="bg" />
        </div>
        <div className="absolute bg-black/70 h-full w-full"></div>
      </div>
         </div>

      <div className='w-full py-16 px-16 md:px-6'>
      <div className='text-center'>
        <div className='font-tertiary font-normal text-[15px] uppercase tracking-[6px] '>
          Hotel & Spa Adina
        </div>
        <h2 className='font-primary uppercase text-[45px] mb-4'>Spa & Serenity</h2>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  {services.map((service, index) => {
    const { title, desc, img } = service;
    return (
      <div 
      key={index} 
      id='spa'
      className="bg-white shadow-2xl rounded-lg hover:scale-105 transition duration-200">
        <div className="relative h-1/2">
          <div className="absolute bg-black/50 h-full w-full"></div>
          <Image src={img} alt="img" className="w-full h-full object-cover" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[18px]">
            {title}
          </div>
        </div>
        <div className="flex items-center h-1/2 p-4">
          {desc}
        </div>
      </div>
    );
  })}
</div>

    </div>
</section>;

}

export default page