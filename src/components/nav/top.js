import React from 'react'
import { useNavigate } from 'react-router-dom'
import {BsHeartFill, BsPlus, BsQuestion, BsChevronLeft} from 'react-icons/bs'
import AppContext from '../../context/context'
function Top() {

   const navigateTo = useNavigate()

    return (
        <div className='h-[70px] bg-[#ECF5FA] flex justify-between items-center p-[28px]'>
            <div className='cursor-pointer h-[45px] w-[45px] border-2 border-primary rounded-[11px] flex justify-center items-center text-primary hover:text-secondary hover:border-secondary' 
            onClick={()=>{
            navigateTo(-1)
            }}
            >
                <BsChevronLeft className='w-[24px] h-[24px]'/>
            </div>
            <div className='flex'>
                <div className='h-[40px] py-1 px-2 bg-white border-b-2 rounded-[24px] flex justify-around items-center'>
                    <BsHeartFill className='text-white p-1 rounded-full bg-primary h-[27px] w-[27px]'/>
                    <p className='text-primary ml-2 font-bold'>Favourites</p>
                </div>

                <div className='h-[40px] py-1 px-2 bg-white border-b-2 rounded-[24px] flex justify-around items-center mx-5'>
                    <BsPlus className='text-white rounded-full bg-primary h-[27px] w-[27px]'/>
                    <p className='text-primary ml-2 font-bold'>Create Customer</p>
                </div>

                <div className='h-[40px] py-1 px-2 bg-[#A6F8EB] border-b-2 rounded-[24px] flex justify-around items-center'>
                    <BsQuestion className='text-white rounded-full bg-primary h-[27px] w-[27px]'/>
                    <p className='text-primary ml-2 font-bold'>Help</p>
                </div>
            </div>
        </div>
    )
}

export default Top