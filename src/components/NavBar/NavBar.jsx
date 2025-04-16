import React from 'react'
import Style from './NavBar.module.css'

import logo from '../../assets/logo-corelia.png'
import vector from '../../assets/Vector.svg'
import { NavLink } from 'react-router-dom';

export default function NavBar() {

 

  return <>
  
  <div className='flex '>


  <nav className="mt-10 w-52 ">
  <img className='w-36 ps-6 pb-5' src={logo}  alt="logo" />
   
        <NavLink className="flex items-center px-6 py-2 mt-4 text-black  bg-opacity-25" to={'/'} >
        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
            </svg>
                 
            <span className="mx-3">Dashboard</span>
        </NavLink>

        
        <NavLink className="flex items-center px-6 py-2 mt-4 text-black bg-opacity-25"  to={'/tickets'}>
            
            <span className="mx-3">Tickets</span>
        </NavLink>

        
        <NavLink className="flex items-center px-6 py-2 mt-4 text-black bg-opacity-25"  to={'/teams'}>

            <span className="mx-3">Teams</span>
        </NavLink>

        
        <NavLink className="flex items-center px-6 py-2 mt-4 text-black bg-opacity-25"  to={'/product'}>
            

            <span className="mx-3">Product</span>
        </NavLink>

        
        <NavLink className="flex items-center px-6 py-2 mt-4 text-black bg-opacity-25"  to={'/infrastructure'}>
            
            <span className="mx-3">Infrastructure</span>
        </NavLink>

        
        <NavLink className="flex items-center px-6 py-2 mt-4 text-black bg-opacity-25"  to={'/safe'}>
            
            <span className="mx-3">Safe</span>
        </NavLink>

        
        <NavLink className="flex items-center px-6 py-2 mt-4 text-black bg-opacity-25"  to={'/documents'}>
            
            <span className="mx-3">Documents</span>
        </NavLink>

        
        <NavLink className="flex items-center px-6 py-2 mt-4 text-black bg-opacity-25"  to={'/knowledgeBases'}>
            
            <span className="mx-3">Knowledge bases</span>
        </NavLink>

        
        <NavLink className="flex items-center px-6 py-2 mt-4 text-black bg-opacity-25"  to={'/tasks'}>
            
            <span className="mx-3">Tasks</span>
        </NavLink>

        
        
        <NavLink className="flex items-center px-6 py-2 mt-4 text-black bg-opacity-25"  to={'/communication'}>
            
            <span className="mx-3">Communication</span>
        </NavLink>
        


        <NavLink className="flex items-center px-6 py-2 mt-4 text-black bg-opacity-25"  to={'/reports'}>
            
            <span className="mx-3">Reports</span>
        </NavLink>

        
    </nav>





    <div className="flex items-center mt-1">
        <button  className="text-gray-500 focus:outline-none lg:hidden">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>

        <div className="relative mx-4 lg:mx-0">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </span>

            <input className="w-32 pl-10 pr-4 rounded-md form-input sm:w-64 focus:border-indigo-600" type="text" placeholder="Search"/>
        </div>
    </div>
    
    <div className="flex items-center">
        <div x-data="{ notificationOpen: false }" className="relative">
            <button  className="flex mx-4 text-gray-600 focus:outline-none">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
           
        </div>
        
        <div x-data="{ dropdownOpen: false }"  className="relative">
            <button  className="relative block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none">
                <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80" alt="Your avatar"/>
            </button>


            
        </div>
    </div>



  </div>
  </>
}
