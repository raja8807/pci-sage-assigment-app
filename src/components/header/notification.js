import React from 'react'

import User from './user';
import { FaBell } from 'react-icons/fa'
import { BsGearFill } from 'react-icons/bs'


function Notification() {
  return (
    <div className='flex justify-around items-center'>
        <BsGearFill className='cursor-pointer h-[27px] w-[27px] rounded-full bg-secondary p-1 text-white'/>
        <FaBell  className='cursor-pointer h-[27px] w-[27px] rounded-full bg-secondary mx-[15px] p-1 text-white'/>

        <div className='text-white w-[200px] h-[50px] bg-primary rounded-md px-2 mr-[10px]'>
            <p className='font-bold'>Hi, good morning</p>
            <p>Seder name</p>
        </div>

        <User/>

    </div>
  )
}

export default Notification;