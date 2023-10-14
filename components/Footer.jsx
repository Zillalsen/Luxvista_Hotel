import logo1 from "../public/img/head/logo-white.svg"
import Image from "next/image"
const Footer = () => {
  return (
    <footer className='w-full bg-primary p-8'>
        <div className="flex items-center justify-between px-8 max-sm:flex-col max-sm:gap-3 md:px-16 ">
          <Image src={logo1} alt="logo" width={120} height={120} priority className="w-auto h-auto" />
          <p className="text-white text-center">© Copyright 2023. All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer
