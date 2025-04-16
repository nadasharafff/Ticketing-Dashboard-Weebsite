import React from 'react'
import Style from './Documents.module.css'
import { useState } from 'react'
import { useEffect } from 'react';
import filter from '../../assets/filter.svg';

export default function Documents() {

    const [counter, setCounter] = useState(0);

    useEffect(()=> {

    }, []);

  return <>
  <div className="container mt-4">
  <div className='block'>
        <h1 className='font-bold'>Documents</h1>
        <h4 className='text-gray-600'>Welcome to #1 ticket management platform in Egypt</h4>
       </div>

       <div className='pe-6 mt-3 min-w-[250px] w-screen lg:w-[1222px]'>
            {/* Container with Responsive flex-wrap */}
        <div className='flex flex-wrap items-center bg-white px-2 py-3 border border-gray-300 rounded-t-lg'>
          {/* Organization Select */}
          <div className="text-gray-500 text-sm border w-full sm:w-48 mb-2 sm:mb-0">
            <select name="" id="" className='border-none outline-none w-full sm:w-auto text-xs sm:text-sm font-bold'>
                <option value="">Organization</option>
                <option value="">Organization</option>
                <option value="">Organization</option>
            </select>
        </div>
         {/* Filter Section */}
          <div className="flex-1 text-gray-500 text-xs sm:text-sm border py-[8px] px-2 flex items-center w-full sm:w-auto">
                     <img src={filter} alt="icon" className="w-3 h-3 sm:w-4 sm:h-4" />
                     <h2 className='px-2 sm:px-3 text-[10px] sm:text-sm'>Add a filter</h2>
                 </div>
        </div>


             {/* Responsive Table (Stacked on Small Screens) */}

        <div className='sm:grid grid-cols-12 bg-white '>
                  <div className='col-span-2 ms-1 border h-full '>
                    <h4 className='my-2 ms-3 sm:text-sm md:text-lg'> + 08-Architecture </h4>
                    <h4 className='my-2 ms-3 sm:text-sm md:text-lg'> - 09-Architecture </h4>
                    <h4 className='my-2 ms-3 sm:text-sm md:text-lg'> + 08-Architecture </h4>
                  </div>

                  {/* Table */}
                  <div className="overflow-x-auto col-span-10">
      <table className="w-full border-collapse hidden sm:table">
        <thead>
          <tr className="bg-gray-200 text-gray-500 text-left">
            <th className="px-6 py-2">Name</th>
            <th className="px-6 py-2 w-1/3">Last Update</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(11)].map((_, index) => (
            <tr className="border-b hover:bg-gray-300" key={index}>
              <td className="px-6 py-2 text-blue-500">
                ExploitDFI-P1FRWS66 <span className="text-gray-500">(docx)</span>
              </td>
              <td className="px-6 py-2 text-gray-500">
                2023 - 1 - 17
                <br />
                RASHA ISMAIL
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Table for mobile */}

      <div className="sm:hidden">
        {[... Array(11)].map((_, index)=> (
           <div  className="border border-gray-300 rounded-lg p-3 mb-2 bg-white text-xs">
           <div className="text-blue-600 font-semibold"> ExploitDFI-P1FRWS66 <span className="text-gray-500">(docx)</span> </div>
           <div className="text-gray-500 text-[10px]"> 
            2023 - 1 - 17
                <br />
                RASHA ISMAIL</div> 
       </div>
        ))}
        </div>
    </div>
                 </div>
       </div>
  </div>
  </>
}
