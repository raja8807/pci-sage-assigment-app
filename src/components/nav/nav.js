import React, {useState,useContext} from 'react'
import { MdDashboard,MdOutlinePeopleAlt } from 'react-icons/md'
import { BsFillFileEarmarkBarGraphFill, BsPersonSquare,BsQuestionCircleFill } from 'react-icons/bs'
import { FaIdCardAlt } from 'react-icons/fa'

import AppContext from '../../context/context'

function Nav() {

  // const [currentPage, setCurrentPage] = useState('dashboard')

  const currentPage = useContext(AppContext).currentPage
  const setCurrentPage = useContext(AppContext).setCurrentPage

  const pages = [
    {
      id : 'dashboard',
      path: 'dashboard',
      head : 'Dashboard',
      name : <p className={`mt-1 text-xs font-bold text-${currentPage.path == 'dashboard' ? 'secondary' : 'primary'} text-center`}>Dashboard</p>,
      icon : <MdDashboard className={`text-white bg-${currentPage.path == 'dashboard' ? 'secondary' : 'primary'} w-[60px] h-[40px] rounded-lg p-3`}/>,
    },
    {
      id : 'assesments',
      path: 'assesments',
      head : 'My Assesments',
      name : <p className={`mt-1 text-xs font-bold text-${currentPage.path == 'assesments' ? 'secondary' : 'primary'} text-center`}>Assesments</p>,
      icon : <BsFillFileEarmarkBarGraphFill className={`text-white bg-${currentPage.path == 'assesments' ? 'secondary' : 'primary'} w-[60px] h-[40px] rounded-lg p-3`}/>,
    },
    {
      id : 'customer',
      path: 'customer',
      head : 'Manage Customer',
      name : <p className={`mt-1 text-xs font-bold text-${currentPage.path == 'customer' ? 'secondary' : 'primary'} text-center`}>Customer</p>,
      icon : <MdDashboard className={`text-white bg-${currentPage.path == 'customer' ? 'secondary' : 'primary'} w-[60px] h-[40px] rounded-lg p-3`}/>,
    },
    {
      id : 'assessor',
      path: 'assessor',
      head : 'Assessor',
      name : <p className={`mt-1 text-xs font-bold text-${currentPage.path == 'assessor' ? 'secondary' : 'primary'} text-center`}>Assessor</p>,
      icon : <FaIdCardAlt className={`text-white bg-${currentPage.path == 'assessor' ? 'secondary' : 'primary'} w-[60px] h-[40px] rounded-lg p-3`}/>,
    },
    {
      id : 'qa',
      path: 'qa',
      head:"Q&A",
      name : <p className={`mt-1 text-xs font-bold text-${currentPage.path == 'qa' ? 'secondary' : 'primary'} text-center`}>QA Review</p>,
      icon : <BsPersonSquare className={`text-white bg-${currentPage.path == 'qa' ? 'secondary' : 'primary'} w-[60px] h-[40px] rounded-lg p-3`}/>,
    },
    {
      id : 'faq',
      path: 'faq',
      head:'Frequetly Asked Questions',
      name : <p className={`mt-1 text-xs font-bold text-${currentPage.path == 'faq' ? 'secondary' : 'primary'} text-center`}>FAQ</p>,
      icon : <BsQuestionCircleFill className={`text-white bg-${currentPage.path == 'faq' ? 'secondary' : 'primary'} w-[60px] h-[40px] rounded-lg p-3`}/>,
    },
  ]


  return (
    <nav className=' w-[84px] fixed left-0 flex flex-col justify-center items-center'>
      {
        pages.map((page)=>{
          return <div className='mb-5 cursor-pointer hover:scale-110 active:scale-100' key={page.id} onClick={()=>{
              setCurrentPage(page)
          }}>
              {
                page.icon
              }
              {
                page.name
              }
          </div>
        })
      }
      {/* <div className='mb-5'>
        <MdDashboard className='text-white bg-primary w-[60px] h-[40px] rounded-lg p-3' />
        <p className='mt-1 text-xs font-bold text-primary text-center'>Dashboard</p>
      </div>
      <div className='mb-5'>
        <BsFillFileEarmarkBarGraphFill className='text-white bg-primary w-[60px] h-[40px] rounded-lg p-3' />
        <p className='mt-1 text-xs font-bold text-primary text-center'>Assesments</p>
      </div>

      <div className='mb-5'>
        <MdOutlinePeopleAlt className='text-white bg-primary w-[60px] h-[40px] rounded-lg p-3' />
        <p className='mt-1 text-xs font-bold text-primary text-center'>Customer</p>
      </div>

      <div className='mb-5'>
        <FaIdCardAlt className='text-white bg-primary w-[60px] h-[40px] rounded-lg p-3' />
        <p className='mt-1 text-xs font-bold text-primary text-center'>Assessors</p>
      </div>
      <div className='mb-5'>
        <BsPersonSquare className='text-white bg-primary w-[60px] h-[40px] rounded-lg p-3' />
        <p className='mt-1 text-xs font-bold text-primary text-center'>QA Review</p>
      </div>
      <div className='mb-5'>
        <BsQuestionCircleFill className='text-white bg-primary w-[60px] h-[40px] rounded-lg p-3' />
        <p className='mt-1 text-xs font-bold text-primary text-center'>FAQ</p>
      </div> */}
    </nav>
  )
}

export default Nav