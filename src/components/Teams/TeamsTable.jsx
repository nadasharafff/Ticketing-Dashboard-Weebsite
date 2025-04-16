import React, { useState } from 'react'

export default function TeamsTable() {
  const tickets = Array(5).fill({
    name: "Rasha",
    level: "2",
    team: "AS400",
    type: "Team Leader",
    numTickets: "15",
    TotalSla: "1440",
    DelayedSla: "250",
    date: "11/12/2022",
    time: "1:24 AM"
  });

  const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
  return <>

<div className="bg-white p-4 rounded-lg shadow-lg mt-4 w-full min-w-96 md:w-[1010px] lg:w-full xl:w-[1133px]  overflow-x-auto">
<div className="flex justify-between  mb-4">
     <span className="font-semibold text-lg">Teams</span>
     <div className="sm:flex items-center gap-2 sm:ms-5">
       <span className="text-xs sm:text-sm">From</span>
 
       <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} className="border p-1 sm:p-2 rounded text-xs sm:text-sm"/>
       <span className="text-xs sm:text-sm">To</span>
 
       <input type="date" value={toDate}  onChange={(e) => setToDate(e.target.value)} className="border p-1 sm:p-2 rounded text-xs sm:text-sm" />
     </div>
   </div>
      <div className="w-full overflow-x-auto">
        <table className="min-w-max w-full border border-gray-200 text-xs sm:text-sm table-fixed">
          {/* 🔹 Table Header (Fixed Column Widths) */}
          <thead className="bg-gray-200 text-gray-500">
            <tr>
              <th className="p-3 w-10"></th> {/* Checkbox Column */}
              <th className="p-3 w-24">Name</th>
              <th className="p-3 w-16">Level</th>
              <th className="p-3 w-24">Team</th>
              <th className="p-3 w-24">Type</th>
              <th className="p-3 w-32">num tickets</th>
              <th className="p-3 w-32">Total SLA</th>
              <th className="p-3 w-28">Delayed SLA</th>
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
                <td className="p-3 text-blue-500 font-medium w-24">{ticket.name}</td>
                <td className="p-3 text-center w-16">{ticket.level}</td>
                <td className="p-3 text-center w-24">{ticket.team}</td>
                <td className="p-3 text-center w-24">{ticket.type}</td>
                <td className="p-3 text-center w-32">{ticket.numTickets}</td>
                <td className="p-3 text-center w-32">{ticket.TotalSla}</td>
                <td className="p-3 text-center text-yellow-600 font-semibold w-28">{ticket.DelayedSla}</td>
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

  </>
}
