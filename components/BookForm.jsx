import { CheckIn,CheckOut,AdultDropDown,KidsDropDown } from '.';
import { useGlobalContext } from '@/app/context';
const BookForm = () => {
  const {handleSubmit} = useGlobalContext()
  return (
    <form onSubmit={handleSubmit} className='h-[300px] w-full lg:h-[70px]'>
      <div 
      className='flex w-full h-full flex-col lg:flex-row'>
        <div className='flex-1 border-r'>
          <CheckIn/>
        </div>
        <div className='flex-1 border-r'>
          <CheckOut/>
        </div>
        <div className='flex-1 border-r'>
          <AdultDropDown/> 
        </div>
        <div className='flex-1 border-r'>
          <KidsDropDown/>
        </div>
        {/* button */}
        <button type='submit' className='btn btn-primary'>Check Now</button>
      </div>
    </form>
  )
};

export default BookForm;
