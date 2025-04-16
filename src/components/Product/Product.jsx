import React from 'react'
import Style from './Product.module.css'
import { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router';
import BarChart from './BarChart'
import DoughnutChart from './DoughnutChart';
import ProductTable from './ProductTable';
export default function Product() {


  return <>
  <div className="container">
  <div className='block sm:flex justify-between mt-5' >
  
  <div className=''>
    <h1 className='font-bold'>Product</h1>
    <h4 className='text-gray-600'>Welcome to #1 ticket management platform in Egypt</h4>
    </div>
  
    <div className='xl:me-32 sm:ms-16 md:ms-0 md:flex md:items-center md:justify-center min-w-fit w-full md:w-fit'>
    <button className='bg-blue-500 text-white border rounded-md hover:bg-blue-800 md:px-8 sm:py-3 w-full md:w-auto'> Add Member</button>
   
    <button className='bg-teal-500 text-white border rounded-md hover:bg-teal-800 md:px-8 sm:py-3 w-full md:w-auto'> <Link to={"/newTicket"}>New Ticket</Link> </button>
  
    </div>
  </div>

   {/* Charts */}
   <div className='grid grid-cols-1 md:grid-cols-12 xl:gap-0 md:gap-[85px] lg:gap-2'>
      {/* Bar chart */}
      <div className='bg-white  mt-3 rounded-lg  md:col-span-6 min-w-[377px] w-full md:w-[500px] xl:w-[606px]'>
        <div className='border border-gray-200 mt-3 mx-3'>
              <BarChart />
        </div>
      </div>

             {/* Doughnut chart */}
           <div className='bg-white mt-3 rounded-lg md:col-span-6 min-w-[377px] w-full md:w-[500px] flex' >
           
            <div className='border border-gray-200  mb-2 mt-1 ms-1 mt w-56 pt-3'>
             <DoughnutChart />
            </div>
                <div className='grid-cols-1 md:grid-cols-12  w-56  my-auto mx-auto sm:border border-gray-200'>
                  <h3 className='sm:ps-12 pt-6 font-bold'>Total Services:</h3>
                  <h3 className='text-center text-3xl font-bold px-24 py-11'>8</h3>
                </div>
            </div>

    </div>

    <div className='bg-white grid w-full min-w-[377px] sm:w-full overflow-auto md:w-[1010px] lg:w-full xl:w-[1133px]  grid-cols-2 sm:grid-cols-6 gap-11 sm:gap-5 lg:me-28 mt-4 p-4 rounded-lg font-bold text-xl'>
      <h3 className='bg-teal-500 w-fit text-white border rounded-md hover:bg-teal-800 text-center py-2 '>AS400</h3>
      <h3 className='py-2 md:ms-3'>AS400</h3>
      <h3 className='py-2'>AS400</h3>
      <h3 className='py-2'>AS400</h3>
      <h3 className='py-2'>AS400</h3>
      <h3 className='py-2'>AS400</h3>
      {/* <h3 className='py-2'>AS400</h3> */}
    </div>
    
    <ProductTable/>
  </div>
  </>
}
