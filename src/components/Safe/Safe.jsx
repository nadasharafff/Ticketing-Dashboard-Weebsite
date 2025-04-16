import React from 'react'
import Style from './Safe.module.css'
import { useState } from 'react'
import { useEffect } from 'react';
import filter from '../../assets/filter.svg';
import { FaRegCopy } from 'react-icons/fa';

export default function Safe() {

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedPassword, setSelectedPassword] = useState('');


    const data = Array.from({ length: 11 }, (_, index) => ({
      id: index + 1,
      description: 'RATMDBOPT', // Updated description
      server: 'Server', // Additional server info
      os: 'LINUX', // Operating system info
      login: 'root', // Secure data login
      password: 'Display', // Secure data password
      link: 'RATMDBOPT / OFF', // Links info
  }));
  const openModal = () => {
    setSelectedPassword('cKTghOWERmer123');
    setModalOpen(true);
};

const closeModal = (e) => {
    if (e.target.id === "modal-background") {
        setModalOpen(false);
    }
};

const copyToClipboard = () => {
    navigator.clipboard.writeText(selectedPassword);
    alert('Password copied to clipboard!');
};



  return <>
  <div className="container mt-4">
  <div className='block'>
        <h1 className='font-bold'>Safe</h1>
        <h4 className='text-gray-600'>Welcome to #1 ticket management platform in Egypt</h4>
       </div>


       <div className='pe-6 mt-3 min-w-[250px] w-screen lg:w-[1222px]'>
    {/* Container with Responsive flex-wrap */}
    <div className="flex flex-wrap items-center bg-white px-2 py-3 border border-gray-300 rounded-t-lg">
        {/* Organization Select */}
        <div className="text-gray-500 text-sm border w-full sm:w-auto mb-2 sm:mb-0">
            <select name="" id="" className='border-none outline-none w-full sm:w-auto text-xs sm:text-sm'>
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
    <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 max-w-2xl mx-auto text-xs sm:text-sm hidden sm:table">
            <thead>
                <tr className="bg-gray-200">
                    <th className="py-3 px-4 border-b border-gray-300 text-left text-gray-500">Description</th>
                    <th className="py-3 px-4 border-b border-gray-300 text-left text-gray-500">Secure data</th>
                    <th className="py-3 px-4 border-b border-gray-300 text-center text-gray-500">Links</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                        {/* Description */}
                        <td className="py-3 px-4 border-b border-gray-300 text-left">
                            <div className="text-blue-600 hover:underline cursor-pointer">{item.description}</div>
                            <div className="text-gray-500 text-xs mt-1">{item.server}</div>
                            <div className="text-gray-500 text-xs sm:text-sm mt-1">{item.os}</div>
                        </td>

                        {/* Secure data */}
                        <td className="py-3 px-4 border-b border-gray-300 text-left " onClick={openModal}>
                            <div className="text-gray-500 text-xs sm:text-sm">Login: <span className="text-gray-700">{item.login}</span></div>
                            <div className="text-gray-500 mt-1 text-xs sm:text-sm">Password: <span className="text-blue-600 cursor-pointer">{item.password}</span></div>
                        </td>

                        {/* Links */}
                        <td className="py-3 px-4 border-b border-gray-300 text-center whitespace-nowrap">
                            <div className="text-gray-500 text-xs sm:text-sm">Equipment - Infrastructure: <span className="text-blue-600 cursor-pointer">{item.link}</span></div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        {/* Mobile-Friendly Card Layout for Tiny Screens */}
        <div className="sm:hidden">
            {data.map((item) => (
                <div key={item.id} className="border border-gray-300 rounded-lg p-3 mb-2 bg-white text-xs">
                    <div className="text-blue-600 font-semibold">{item.description}</div>
                    <div className="text-gray-500 text-[10px]">{item.server} - {item.os}</div>

                    <div className="mt-2" onClick={openModal}>
                        <div className="text-gray-500">Login: <span className="text-gray-700">{item.login}</span></div>
                        <div className="text-gray-500">Password: <span className="text-blue-600 cursor-pointer">{item.password}</span></div>
                    </div>

                    <div className="mt-2">
                        <div className="text-gray-500">Equipment - Infrastructure: <span className="text-blue-600 cursor-pointer">{item.link}</span></div>
                    </div>
                </div>
            ))}
        </div>
        
    </div>
    
</div>


{modalOpen && (
                <div id="modal-background" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-2" onClick={closeModal}>
                    <div className="bg-white p-4 sm:p-6 rounded-lg w-[90%] max-w-xs sm:max-w-lg lg:max-w-xl lg:h-80 text-center overflow-auto" onClick={(e) => e.stopPropagation()}>
                        <div className="flex flex-col items-center gap-2">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="w-16 h-5 sm:w-28 sm:h-7 bg-blue-500 flex rounded-lg mt-2">
                                    <div className="w-3 h-2 sm:w-4 sm:h-3 bg-white mr-1 ms-1 mt-2"></div>
                                    <div className="w-1 h-2 sm:w-2 sm:h-3 bg-white mt-2"></div>
                                </div>
                            ))}
                        </div>
                        <h2 className="text-xs sm:text-lg mt-2 sm:mt-4">RATMDBOPT</h2>
                        <div className="mt-16 flex flex-col sm:flex-row items-center w-full text-xs sm:text-lg">
                            <span className="text-gray-600">Password:</span>
                            <div className="flex items-center sm:gap-2 mt-2 sm:mt-0 sm:ms-16 text-gray-600 font-semibold break-words">
                                <span>{selectedPassword}</span>
                                <FaRegCopy className="cursor-pointer text-gray-500" onClick={copyToClipboard} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
  </div>
  </>
}
