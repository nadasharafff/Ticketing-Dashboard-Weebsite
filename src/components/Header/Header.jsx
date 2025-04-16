import React, { useState } from 'react';
import logo from '../../assets/logo-corelia.png';
import { FaSearch, FaBell, FaBars } from 'react-icons/fa';

export default function Header({ toggleSidebar }) {
  const [showSearch, setShowSearch] = useState(false); // Controls search bar visibility

  return (
    <div className="flex items-center justify-between h-auto min-h-[50px] fixed bg-white w-full px-2 sm:px-4 py-1 sm:py-2  z-50">
      
      {/* Left Section: Sidebar Toggle & Logo */}
      <div className="flex items-center">
        {/* Sidebar Toggle (Hidden on Large Screens) */}
        <button onClick={toggleSidebar} className="lg:hidden p-1 sm:p-2 bg-white rounded-md shadow-md">
          <FaBars className="w-5 sm:w-6 h-5 sm:h-6 text-black" />
        </button>

        {/* Logo (Aligned to the Left) */}
        <img className="w-16 sm:w-28 lg:w-36 h-auto ml-2 sm:ml-4" src={logo} alt="logo" />
      </div>

      {/* Center & Right Section: Search, Notifications, Profile */}
      <div className="flex items-center gap-2 sm:gap-4 ml-auto">
        
        {/* Search Bar - Always Visible on Large Screens */}
        <div className={`relative transition-all duration-300 ${showSearch ? "w-32 sm:w-40" : "w-0 sm:w-40"} overflow-hidden`}>
          <input
            className="w-full px-2 py-1 rounded-md border border-gray-300 text-xs sm:text-sm focus:outline-none"
            type="text"
            placeholder="Search"
          />
        </div>

        {/* Search Icon - Toggles Search Bar on Small Screens */}
        <button className="text-gray-600 sm:hidden" onClick={() => setShowSearch(!showSearch)}>
          <FaSearch className="w-5 sm:w-6 h-5 sm:h-6" />
        </button>

        {/* Notification Icon */}
        <button className="text-gray-600 focus:outline-none">
          <FaBell className="w-5 sm:w-6 h-5 sm:h-6" />
        </button>

        {/* Avatar (Always Visible) */}
        <button className="w-6 sm:w-8 h-6 sm:h-8 overflow-hidden rounded-full shadow">
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
            alt="Your avatar"
          />
        </button>
      </div>
    </div>
  );
}
