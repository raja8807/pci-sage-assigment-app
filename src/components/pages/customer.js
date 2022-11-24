import React from 'react'

function Customer() {

  let customers = [
    {
      id: '1',
      name: "company1"
    },
    {
      id: '2',
      name: "company2"
    },
    {
      id: '3',
      name: "company3"
    },
    {
      id: '4',
      name: "company4"
    },
    {
      id: '5',
      name: "company5"
    },
    {
      id: '6',
      name: "company6"
    },
    {
      id: '7',
      name: "company7"
    },
    {
      id: '8',
      name: "company8"
    },
    {
      id: '9',
      name: "company9"
    },
    {
      id: '10',
      name: "company6"
    },
  ]

  return (

    <div className='flex flex-wrap h-[416px] overflow-y-scroll'>

      {
        customers.map((customer) => {
          return <div key={customer.id} className='w-[320px] h-[200px] m-10 bg-white border border-grey-100 rounded-md shadow-md
          flex justify-center items-center font-bold
          '>
            <p className='text-2xl'>{customer.name}</p>
          </div>
        })
      }
    </div>


  )
}

export default Customer