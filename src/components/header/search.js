import React from 'react'
import { FaSearch, FaFilter, FaSort } from 'react-icons/fa'
function Search() {
    return (
        <div className='flex'>
            <div className=' border-2 border-primary rounded-3xl flex items-center py-1 px-2'>
                <input
                    className='w-[300px] rounded-3xl  outline-none'
                    type="search"
                    placeholder="Enter search items" />
                <FaSearch className='bg-secondary text-white p-1 rounded-full w-[20px] h-[20px] cursor-pointer' />
            </div>

            <div className='flex justify-center items-center py-1  mx-[15px]  rounded-3xl border-2 border-primary cursor-pointer' >
                <FaFilter className='p-1 w-[20px] h-[20px] rounded-xl bg-primary  mx-[7px] text-white ' />
                <p className='font-bold text-primary mr-[7px]'>Filter</p>
            </div>

            <div className='flex justify-center items-center py-1   rounded-3xl border-2 border-primary cursor-pointer'>
                <FaSort className=' p-1 w-[20px] h-[20px] rounded-xl bg-primary  mx-[7px] text-white' />

                <p className='font-bold text-primary mr-[7px]'>Sort</p>
            </div>
        </div>
    )
}

export default Search