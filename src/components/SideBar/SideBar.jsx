import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SideBar() { // هنا شيلنا الـ toggleSidebar من الـ props
  return (
    <div className="bg-white h-full w-[200px] lg:relative fixed transform transition-transform duration-200 ease-in-out overflow-y-auto mt-11 lg:mt-16">
      {/* Navigation Links */}
      <nav className="pt-4">
        <NavLink
          to="/"
          className="flex items-center px-6 py-2 text-black bg-opacity-25"
        >
          {/* أيقونة Dashboard */}
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
            />
          </svg>
          <span className="mx-3">Dashboard</span>
        </NavLink>

        {/* باقي الـ NavLinks */}
        <NavLink
          to="/tickets"
          className="flex items-center px-6 py-2 mt-4 text-black bg-opacity-25"
        >
          <span className="mx-3">Tickets</span>
        </NavLink>

        <NavLink
          to="/teams"
          className="flex items-center px-6 py-2 mt-4 text-black bg-opacity-25"
        >
          <span className="mx-3">Teams</span>
        </NavLink>

        <NavLink
          to="/product"
          className="flex items-center px-6 py-2 mt-4 text-black bg-opacity-25"
        >
          <span className="mx-3">Product</span>
        </NavLink>

        <NavLink
          to="/infrastructure"
          className="flex items-center px-6 py-2 mt-4 text-black bg-opacity-25"
        >
          <span className="mx-3">Infrastructure</span>
        </NavLink>

        <NavLink
          to="/safe"
          className="flex items-center px-6 py-2 mt-4 text-black bg-opacity-25"
        >
          <span className="mx-3">Safe</span>
        </NavLink>

        <NavLink
          to="/documents"
          className="flex items-center px-6 py-2 mt-4 text-black bg-opacity-25"
        >
          <span className="mx-3">Documents</span>
        </NavLink>

        <NavLink
          to="/knowledgebases"
          className="flex items-center px-6 py-2 mt-4 text-black bg-opacity-25"
        >
          <span className="mx-3">Knowledge Bases</span>
        </NavLink>

        <NavLink
          to="/tasks"
          className="flex items-center px-6 py-2 mt-4 text-black bg-opacity-25"
        >
          <span className="mx-3">Tasks</span>
        </NavLink>

        <NavLink
          to="/communication"
          className="flex items-center px-6 py-2 mt-4 text-black bg-opacity-25"
        >
          <span className="mx-3">Communication</span>
        </NavLink>

        <NavLink
          to="/reports"
          className="flex items-center px-6 py-2 mt-4 text-black bg-opacity-25"
        >
          <span className="mx-3">Reports</span>
        </NavLink>
      </nav>
    </div>
  );
}
