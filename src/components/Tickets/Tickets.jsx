import React from 'react'
import Style from './Tickets.module.css'
import { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router';
import { Chart } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import TicketChart from "./Tickets.json"
import TicketsDonought from "./TicketsDonought.json"
import { Datepicker } from 'flowbite-react';
import TicketsOpen from './TicketsOpen';

// import teamMember from '../../assets/team member.svg';

export default function Tickets() {

  const tickets = Array(5).fill({
    id: "123459",
    level: "2",
    team: "AS400",
    type: "Incident",
    teamLeader: "Rasha",
    member: "Rala",
    status: "In Progress",
    date: "11/12/2022",
    time: "1:24 AM"
  });

  const [selectedButton, setSelectedButton] = useState(0);

      function handleClick(number){
         setSelectedButton(number)
       }

    function getGradient(chart){
      const { ctx, chartArea: {top, bottom, left, right}, scales: {x,y}} = chart;
      const gradientSegment = ctx.createLinearGradient(0, bottom, 0, top);
      gradientSegment.addColorStop(0,'rgba(121, 102, 167, 1)');
      gradientSegment.addColorStop(0.5,'rgba(121, 102, 167, 1)');
      gradientSegment.addColorStop(0.5,'rgba(102, 190, 121, 1)');
      gradientSegment.addColorStop(1,'rgba(102, 190, 121, 1)');
      return gradientSegment

    }

  return <>

<div className="container">

<div className='block sm:flex justify-between mt-5' >

<div className=''>
  <h1 className='font-bold'>Tickets</h1>
  <h4 className='text-gray-600'>Welcome to #1 ticket management platform in Egypt</h4>
  </div>

  <div className='sm:ms-16 xl:me-32 md:ms-0  md:flex md:items-center md:justify-center min-w-fit w-full md:w-fit'>
  <button className='bg-teal-500 text-white border rounded-md hover:bg-teal-800 md:px-8 sm:py-3 w-full md:w-auto'> <Link to={"/ticketsOpen"}>Transfer Ticket</Link></button>
 
  <button className='bg-teal-500 text-white border rounded-md hover:bg-teal-800 md:px-8 sm:py-3 w-full md:w-auto'> <Link to={"/newTicket"}>New Ticket</Link> </button>

  </div>
</div>




<div className='grid grid-cols-1 md:grid-cols-12 xl:gap-0 md:gap-[85px]'>
{/* Bar */}
<div className='bg-white  mt-3 rounded-lg  md:col-span-6 min-w-[377px] w-full md:w-[500px] xl:w-[606px]'>
<div className=' border border-gray-200 mt-3 mx-3'>
<Bar 
data={{
labels: TicketChart.map((data) => data.label),
datasets: [
  {
    
    data: TicketChart.map((data) => data.value),
    backgroundColor: (context) => {
      const chart = context.chart;
      const { ctx, chartArea } = chart;
      if(!chartArea){
        return null
      }
      return getGradient(chart);
    },
  
  },
],
}}
/>
</div>
</div>


  {/* Doughnut */}
<div className=' bg-white mt-3 rounded-lg md:col-span-6 min-w-[377px] w-full xl:w-[500px] flex lg:block'>

<div className='grid-cols-1 md:grid-cols-12 lg:flex '>
<div className='border border-gray-200 mt-2  ms-1 p-3 '>
  <h2 className='ps-3 font-bold'>Total Tickets: </h2>
  <h2 className='text-center text-3xl font-bold'>800</h2>
</div>


<div className='border border-gray-200 mt-2 ms-1 p-6 '>
  <h2 className='ps-3 font-bold'>Total Tickets: </h2>
  <h2 className='text-center text-3xl font-bold'>800</h2>
</div>

<div className='border border-gray-200 mt-2 ms-1 p-6'>
  <h2 className='ps-3 font-bold'>Total Tickets: </h2>
  <h2 className='text-center text-3xl font-bold'>800</h2>
</div>


</div>

<div className='border border-gray-200  mb-2 mt-1 mx-auto mt w-56'>
<Doughnut 
data={{
labels: TicketsDonought.map((data) => data.label),
datasets: [
  {
    
    data: TicketsDonought.map((data) => data.value),
    backgroundColor: [
      "rgba(208, 208, 208, 1)",
      "rgba(121, 102, 167, 1)",
      "rgba(0, 160, 153, 1)",
      "rgba(180, 50, 50, 1)",
    ],
    borderColor: [
    "rgba(208, 208, 208, 1)",
      "rgba(121, 102, 167, 1)",
      "rgba(0, 160, 153, 1)",
      "rgba(180, 50, 50, 1)",
    ],
  },
],
}}
/>
</div>
</div>

</div>




{/* Table */}
<div className="bg-white p-4 rounded-lg shadow-lg mt-4 w-full min-w-96 md:w-[935px] lg:w-full xl:w-[1133px]  overflow-x-auto">
      <div className="w-full overflow-x-auto">
        <table className="min-w-max w-full border border-gray-200 text-xs sm:text-sm table-fixed">
          {/* 🔹 Table Header (Fixed Column Widths) */}
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="p-3 w-10"></th> {/* Checkbox Column */}
              <th className="p-3 w-24">Ticket ID</th>
              <th className="p-3 w-16">Level</th>
              <th className="p-3 w-24">Team</th>
              <th className="p-3 w-24">Type</th>
              <th className="p-3 w-32">Team Leader</th>
              <th className="p-3 w-32">Member</th>
              <th className="p-3 w-28">Status</th>
              <th className="p-3 w-32">Date/Time</th>
            </tr>
          </thead>

          {/* 🔹 Table Body (Matches Header Width) */}
          <tbody>
            {tickets.map((ticket, index) => (
              <tr key={index} className="border-t">
                <td className="p-3 text-center w-10">
                  <input type="checkbox" className="w-4 h-4 text-red-500 accent-red-500" />
                </td>
                <td className="p-3 text-blue-500 font-medium w-24">{ticket.id}</td>
                <td className="p-3 text-center w-16">{ticket.level}</td>
                <td className="p-3 text-center w-24">{ticket.team}</td>
                <td className="p-3 text-center w-24">{ticket.type}</td>
                <td className="p-3 text-center w-32">{ticket.teamLeader}</td>
                <td className="p-3 text-center w-32">{ticket.member}</td>
                <td className="p-3 text-center text-yellow-600 font-semibold w-28">{ticket.status}</td>
                <td className="p-3 text-center w-32">
                  <p>{ticket.date}</p>
                  <p className="text-xs text-gray-500">{ticket.time}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>



</div>
  </>
}
