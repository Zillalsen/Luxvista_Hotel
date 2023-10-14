"use client"
import React, { useState } from 'react';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { BsCalendar } from 'react-icons/bs';

const CheckIn = () => {
  const [startDate,setStartDate] = useState(false)

  return <div className='relative flex items-center justify-between w-full h-full bg-white px-8'>
    <DatePicker 
    className='outline-none'
    selected={startDate} 
    onChange={(date) => setStartDate(date)}
    placeholderText='Check In'/>
    <div className='z-10'>
      <div><BsCalendar className='text-accent text-base'/></div>
    </div>
  </div>;
};

export default CheckIn;
