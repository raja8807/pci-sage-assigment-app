import React from 'react'
import logo from '../../assets/logo.jpg'

import Search from './search'
import Notification from './notification'

function Header() {
    return (
        <header className='p-5 bg-white'>
            <div className='flex justify-between items-center'>
                <img src={logo} className='h-[50px] cursor-pointer' />
                <Search/>
                <Notification/>

                {/* <div className='md:hidden w-[25px] h-[25px] bg-[#076C74]'>

                </div> */}
            </div>

        </header>
    )
}

export default Header