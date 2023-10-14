"use client"
import { useGlobalContext } from '@/app/context'
import { Room } from '.'
import { HashLoader } from 'react-spinners'

const Rooms = () => {
  const { rooms,loading } = useGlobalContext()
  return (
    <section className='py-24 font-primary' id='rooms'>
      {loading && (
        <div className='w-full z-50 h-screen bottom-0 top-0 fixed bg-black/90 flex items-center justify-center'>
        <HashLoader color="#fff" />
        </div>
      )}
      <div className='container mx-auto lg:px-0'>
      <div className='text-center'>
        <div className='font-tertiary font-normal text-[15px] uppercase tracking-[6px]'>
          Hotel & Spa Adina
        </div>
        <h2 className='font-primary uppercase text-[45px] mb-4'>Room & Suites</h2>
      </div>
      <div className='grid grid-col-1 lg:grid-cols-3 mx-auto max-w-sm lg:max-w-none lg:mx-0  gap-[30px]'>
      {rooms.map((room) => {
          return <Room room={room} key={room.id}/>
        })}
      </div>      

      </div>
    </section>
  )
}

export default Rooms