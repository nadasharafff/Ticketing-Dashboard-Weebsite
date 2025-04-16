import React from 'react'
import Style from './Layout.module.css'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'
import Header from '../Header/Header'


export default function Layout() {




  return <>
    <div className='flex'>
    <div className='bg-white ms-14'>
    <SideBar/>
    </div>
      
      
      
       <div className=" container py-11">
       

       <div>
         <Outlet>
        </Outlet>
       </div>
       </div>
    </div>
     {/* <Footer/> */}
  </>
}
