import React from 'react'
import Style from './Teams.module.css'
import { useState } from 'react'
import { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

// import { Chart } from 'chart.js';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import TeamsTable from './TeamsTable';
export default function Teams() {
 
    
  return <>
  <div className="">
  <div className='sm:flex justify-between mt-5' >

<div className='md:block'>
  <h1 className='font-bold'>Teams</h1>
  <h4 className='text-gray-600'>Welcome to #1 ticket management platform in Egypt</h4>
  </div>

  <div className='xl:me-28 w-full md:w-fit'>
        {/* <button className='w-full md:w-auto bg-blue-500 text-white rounded-md hover:bg-blue-800 
        px-1 py-3 xs:px-3 xs:py-1.5 sm:px-8 sm:py-3 text-[11px] xs:text- sm:text-base'>
          Add Member
        </button> */}

         <button className='bg-blue-500 min-w-fit text-white border rounded-md hover:bg-blue-800 md:px-8 sm:py-3 w-full px-6 sm:w-auto me-5'> Add Member </button>
        
      </div>
    </div>



{/* Charts   */}
   <div className='grid grid-cols-1 md:grid-cols-12 xl:gap-0 md:gap-[85px] lg:gap-2'>
      {/* Bar chart */}
      <div className='bg-white  mt-3 rounded-lg  md:col-span-6 min-w-[377px] w-full md:w-[500px] xl:w-[606px]'>
        <div className='border border-gray-200 mt-3 mx-3'>
              <BarChart />
        </div>
      </div>

             {/* Doughnut chart */}
           <div className=' bg-white mt-3 rounded-lg md:col-span-6 min-w-[377px] w-full md:w-[500px] flex' >
           
            <div className='grid-cols-1 md:grid-cols-12  w-56 lg:flex my-auto'>
             <DoughnutChart />
            </div>
            <div className='md:flex'>
                <div className='border border-gray-200 mt-2 ms-1 me-1 p-6 mb-2 h-fit'>
                  <h3 className='ps-3 font-bold text-xs sm:text-lg'>Total Team:</h3>
                  <h3 className='text-center sm:text-3xl font-bold'>8</h3>
                </div>

                <div className='border border-gray-200 mt-2 ms-1 me-1 p-6 mb-2 h-fit'>
                  <h3 className='ps-3 font-bold text-xs sm:text-lg'>Total Member:</h3>
                  <h3 className='text-center sm:text-3xl font-bold'>80</h3>
                </div>
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
      <TeamsTable/>
  </div>
  </>
}


