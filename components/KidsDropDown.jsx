import { useGlobalContext } from '@/app/context';
import {Menu} from "@headlessui/react"
import { BsChevronDown } from 'react-icons/bs';

const Lis = [
  {name: '0 Kids'},
  {name: '1 Kid'},
  {name: '2 Kids'},
  {name: '3 Kids'},
  {name: '4 Kids'},
]

const KidsDropDown = () => {
    const {kids,setKids} = useGlobalContext()

   return <Menu as={'div'} className='w-full h-full relative bg-white'>  
      <Menu.Button className='flex items-center justify-between w-full h-full px-8'>
        {kids}
        <BsChevronDown className='text-accent text-base'/>
      </Menu.Button>

      <Menu.Items as='ul'  className='flex absolute w-full flex-col z-40 bg-white '>
        {Lis.map((li,index) => (
           <Menu.Item key={index} as={'li'} onClick={() => setKids(li.name)} 
           className='border-b last-of-type:border-b-0 flex items-center justify-center cursor-pointer h-12 w-full hover:bg-accent hover:text-white'>
            {li.name}
          </Menu.Item>
        ))}
      </Menu.Items>

    </Menu>;
}

export default KidsDropDown