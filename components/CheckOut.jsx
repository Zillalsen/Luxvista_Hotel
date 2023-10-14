"use client"
import React, { useState } from 'react';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { BsCalendar } from 'react-icons/bs';

const CheckOut = () => {
  const [endDate,setEndDate] = useState(false)

  return <div className='flex items-center justify-between px-8 w-full h-full bg-white '>
  <DatePicker 
  className='outline-none'
  selected={endDate} 
  onChange={(date) => setEndDate(date)}
  placeholderText='Check Out'/>
  <div className='z-10'>
    <div><BsCalendar className='text-accent text-base'/></div>
  </div>
</div>
};
export default CheckOut;
