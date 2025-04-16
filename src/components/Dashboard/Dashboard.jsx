import React, { useState } from 'react'
import Style from './Dashboard.module.css'

import { Link } from 'react-router-dom';
import alarm from '../../assets/alarm.svg'
import mail from '../../assets/mail.svg'
import request from '../../assets/request.svg'
import transfer from '../../assets/transfer.svg'
import DashboardTickets from '../DashboardTickets/DashboardTickets';
import DashboardProduct from '../DashboardProduct/DashboardProduct';
import DashboardTeam from '../DashboardTeam/DashboardTeam';


export default function Dashboard() {

  const [selectedButton, setSelectedButton] = useState(1);
  function handleClick(number){
    setSelectedButton(number)
  }

  return <>
<div className="container">

  
 <div className='md:flex justify-between mt-5 md:gap-20' >

<div className=''>
  <h1 className='font-bold'>Dashboard</h1>
  <h4 className='text-gray-600'>Welcome to #1 ticket management platform in Egypt</h4>
  </div>

  <div className='xl:me-36 grid md:grid-cols-6 lg:me-20 w-full md:w-fit gap-2'>
        <button className='md:col-span-2 w-full md:w-auto bg-teal-500 text-white rounded-md hover:bg-teal-800 px-1 py-3 xs:px-3 xs:py-1.5 sm:px-8 sm:py-3 text-[15px] xs:text- sm:text-base my-1'> 
          <Link to={'/ticketsOpen'}> Transfer Ticket </Link> </button>
 
        <button className='md:col-span-2 w-full md:w-auto bg-teal-500 text-white rounded-md hover:bg-teal-800 px-1 py-3 xs:px-3 xs:py-1.5 sm:px-8 sm:py-3 text-[15px] xs:text- sm:text-base my-1'>
           <Link to={"/newTicket"}> New Ticket </Link> </button>
 
        <button className='md:col-span-2 w-full md:w-auto bg-teal-500 text-white rounded-md hover:bg-teal-800 px-1 py-3 xs:px-3 xs:py-1.5 sm:px-8 sm:py-3 text-[15px] xs:text- sm:text-base my-1'> 
          Add Mamber </button>
 
 
      </div>

 
</div>


<div className='grid md:grid-cols-5 w-full md:w-fit mt-3 md:gap-x-32 md:gap-y-3 lg:gap-8'>

<button className='bg-red-700  text-white rounded-lg px-5 py-4 hover:bg-teal-900 w-full md:w-44 md:col-span-1 my-1'> 
 <h4 className='text-3xl font-bold text-center'>10</h4>
 <h4 className='flex text-center items-center justify-center'>  <img className='pe-2' src={alarm} alt="" /> Delayed </h4>
</button>

<button className='bg-teal-500 text-white rounded-lg px-5 py-4 hover:bg-teal-900 w-full md:w-44 md:col-span-1 my-1'> 
<Link to={'/email'}>
 <h4 className='text-3xl font-bold text-center'>1</h4>
 <h4 className='flex text-center items-center justify-center'> <img className='pe-2' src={mail} alt="" />Email</h4>

</Link>
</button>

<button className='bg-teal-500 text-white rounded-lg px-5 py-4 hover:bg-teal-900 w-full md:w-44 md:col-span-1 my-1'> 
 <h4 className='text-3xl font-bold'>1</h4>
 <h4 className='flex justify-center items-center'> <img className='pe-2' src={mail} alt="" /> Incident</h4>
</button>

<button className='bg-white  rounded-lg px-5 py-4 hover:bg-teal-100 w-full md:w-44 md:col-span-1 my-1'> 
 <h4 className='text-3xl font-bold'>0</h4>
 <h4 className='flex justify-center items-center'> <img className='pe-2' src={transfer} alt="" /> Transfer</h4>
</button>

<button className='bg-white  rounded-lg px-5 py-4 hover:bg-teal-100 w-full md:w-44 md:col-span-1 my-1'> 
 <h4 className='text-3xl font-bold'>0</h4>
 <h4 className='flex justify-center items-center'> <img className='pe-2' src={request} alt="" /> Request</h4>
</button>


</div>






<div className="bg-white shadow-md rounded-md mt-8  flex w-full min-w-[380px] md:w-[499px] lg:w-[700px] ">
  <div
    onClick={() => handleClick(1)}
    className={`cursor-pointer flex-1 px-4 py-3 text-center rounded-md ${
      selectedButton === 1 ? "bg-teal-500 text-white" : "bg-white"
    }`}
  >
    <h2 className="font-bold text-base sm:text-lg md:text-xl">Tickets</h2>
  </div>
  <div
    onClick={() => handleClick(2)}
    className={`cursor-pointer flex-1 px-4 py-3 text-center rounded-md ${
      selectedButton === 2 ? "bg-teal-500 text-white" : "bg-white"
    }`}
  >
    <h2 className="font-bold text-base sm:text-lg md:text-xl">Team</h2>
  </div>
  <div
    onClick={() => handleClick(3)}
    className={`cursor-pointer flex-1 px-4 py-3 text-center rounded-md ${
      selectedButton === 3 ? "bg-teal-500 text-white" : "bg-white"
    }`}
  >
    <h2 className="font-bold text-base sm:text-lg md:text-xl">Product</h2>
  </div>
</div>




      {/* Dynamic Content Based on Selected Tab */}
      <div className="mt-6">{selectedButton === 1 && <DashboardTickets />}</div>
      <div className="mt-6">{selectedButton === 2 && <DashboardTeam />}</div>
      <div className="mt-6">{selectedButton === 3 && <DashboardProduct />}</div>

</div>
  </>
}
