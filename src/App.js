import React, { useState, useContext, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

import Header from './components/header/header';
import Nav from './components/nav/nav';
import Top from './components/nav/top';

import Dashboard from './components/pages/dashboard';
import Assesments from './components/pages/assesments';
import Assessor from './components/pages/assessor';
import Customer from './components/pages/customer'
import QA from './components/pages/qa'
import FAQ from './components/pages/faq'
import NotFound from './components/pages/notFound';


import AppContext from './context/context';

function App() {
  const navigateTo = useNavigate()

  const [currentPage, setCurrentPage] = useState({
    path : 'dashboard',
    head : 'Dashboard'
  })

  useEffect(() => {
    navigateTo(currentPage.path)
  }, [currentPage])

  return (
    <div className="bg-[#ECF5FA] h-screen">
      <AppContext.Provider value={{ currentPage, setCurrentPage }}>
        <div className='sticky top-0'>
          <Header />
          <Top />
        </div>


        <div className='flex'>
          <Nav />
          <div className='w-full ml-[84px] bg-white rounded-3xl '>
            <h1 className='text-2xl mx-10 my-5   font-bold text-primary underline border-b border-grey'>{currentPage.head}</h1>
            
              <Routes>
                {/* <Route index element={<NotFound />} /> */}
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='assesments' element={<Assesments />} />
                <Route path='customer' element={<Customer />} />
                <Route path='assessor' element={<Assessor />} />
                <Route path='qa' element={<QA />} />
                <Route path='faq' element={<FAQ />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
              {/* <div className='w-[500px] h-[150px] m-10 bg-white border rounded-md'>

              </div> */}
            
          </div>
        </div>

      </AppContext.Provider>
    </div>
  );
}

export default App;
