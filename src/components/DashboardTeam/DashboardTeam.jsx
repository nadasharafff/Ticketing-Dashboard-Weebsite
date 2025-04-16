import React from 'react'
import Style from './DashboardTeam.module.css'
import { useState } from 'react'
import { useEffect } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import teamMember from '../../assets/team member.svg'
import ProductChart from "./ProductChart.json"
import { Doughnut } from 'react-chartjs-2';
// import { Datepicker } from "flowbite-react";

export default function DashboardTeam() {

  const tickets = Array(7).fill({
    name: "AS400",
    teamLeader: "Rasha",
    sla: "50 h",
    member: { name: "Rasha", role: "User", image: "/profile.jpg" },
  });
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

    const [counter, setCounter] = useState(0);

    useEffect(()=> {

    }, []);

   

  return <>

<div className="container grid grid-cols-1  md:grid-cols-12  lg:gap-[118px] md:gap-24">




<div className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-[701px] md:col-span-6 overflow-x-auto min-w-fit">
  <div className="flex justify-between  mb-4">
    <span className="font-semibold text-lg">Delayed Team / Member</span>
    <div className="sm:flex items-center gap-2 ms-5">
      <span className="text-xs sm:text-sm">From</span>

      <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} className="border p-1 sm:p-2 rounded text-xs sm:text-sm"/>
      <span className="text-xs sm:text-sm">To</span>

      <input type="date" value={toDate}  onChange={(e) => setToDate(e.target.value)} className="border p-1 sm:p-2 rounded text-xs sm:text-sm" />
    </div>
  </div>

  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-200 text-xs sm:text-sm">
      <thead className="bg-gray-100 text-gray-700">
        <tr>
          <th className="p-2 sm:p-3"></th>
          <th className="p-2 sm:p-3">Team Name</th>
          <th className="p-2 sm:p-3">Team Leader</th>
          <th className="p-2 sm:p-3">Delayed SLA</th>
          <th className="p-2 sm:p-3">Team Member</th>
          <th className="p-2 sm:p-3">Warning</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((ticket, index) => (
          <tr key={index} className="border-t">
            <td className="p-2 sm:p-3 text-center">
              <input type="checkbox" className="text-red-700 w-3 h-3 sm:w-4 sm:h-4" />
            </td>
            <td className="p-2 sm:p-3 text-center font-serif">{ticket.name}</td>
            <td className="p-2 sm:p-3 text-center text-blue-500">{ticket.teamLeader}</td>
            <td className="p-2 sm:p-3 text-center">{ticket.sla}</td>
            <td className="p-2 sm:p-3 flex items-center gap-2 justify-center whitespace-nowrap">
              <img className="w-5 h-5 sm:w-6 sm:h-6" src={teamMember} alt="" />
              <div>
                <p className="font-semibold">{ticket.member.name}</p>
                <p className="text-gray-500 text-[10px] sm:text-xs">{ticket.member.role}</p>
              </div>
            </td>
            <td className="p-2 sm:p-3 text-center">
              <button className="bg-blue-500 text-white px-2 sm:px-4 py-1 rounded text-xs sm:text-sm">Send</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
    
{/* Dooughnut */}

      <div className='bg-white mt-3 rounded-lg md:col-span-6 min-w-[377px] w-full md:w-fit lg:ms-0'>
  <div className='border border-gray-200 mt-3 me-3 ms-3 p-6'>
  <h2 className=' font-bold'>Total: </h2>
  <h2 className='text-center text-3xl font-bold'>8</h2>
  </div>
 <div className='w-64 lg:w-96 border border-gray-200 mt-3 me-3 ms-3'>
  <Doughnut 
    data={{
      labels: ProductChart.map((data) => data.label),
      datasets: [
        {
          
          data: ProductChart.map((data) => data.value),
          backgroundColor: [
            "rgba(227, 222, 86, 1)",
            "rgba(121, 102, 167, 1)",
            "rgba(29, 35, 163, 1)",
            "rgba(0, 160, 153, 1)",
            "rgba(180, 50, 50, 1)",
            "rgba(255, 0, 0, 1)",
            "rgba(40, 199, 111, 1)",
            "rgba(208, 208, 208, 1)",
          ],
          borderColor: [
            "rgba(227, 222, 86, 1)",
            "rgba(121, 102, 167, 1)",
            "rgba(29, 35, 163, 1)",
            "rgba(0, 160, 153, 1)",
            "rgba(180, 50, 50, 1)",
            "rgba(255, 0, 0, 1)",
            "rgba(40, 199, 111, 1)",
            "rgba(208, 208, 208, 1)",
          ],
        },
      ],
    }}
   />
  </div>
 </div> 
   
</div>
  </>
}
