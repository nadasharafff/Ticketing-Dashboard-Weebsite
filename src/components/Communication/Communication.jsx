import React from 'react';
import Style from './Communication.module.css';
import { useState } from 'react';
import { useEffect } from 'react';
import filter from '../../assets/filter.svg';
import { FaArrowLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 


export default function Communication() {


  // State to manage modal visibility and selected item
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Track current index for pagination
  const [isActivityClicked, setIsActivityClicked] = useState(false); // Track if Activity is clicked

  // Dummy data to be repeated 11 times
  const data = Array.from({ length: 11 }, (_, index) => ({
    id: index + 1,
    title: `AS400 Message "Enregistrement non ajouté"`, // Updated title
    subtitle: 'D.FI PILOTAE', // Additional subtitle
    status: 'Unread',
    validity: {
      start: '29/12/2009',
      end: 'until further notice',
    },
    activity: 'Activity',
    organization: 'D-FI',
    team: 'Pilotage',
    description:
      'The end of the year is upon us. As you relax and reflect on the past year, take a moment to catch up on the end of this year is upon us. As you relax and reflect on the past year, take a moment to catch up on the end of this year is upon us, take a moment to catch up on the end of the year is upon us.',
  }));

  // Function to open the modal and set the selected item
  const openModal = (item, index) => {
    setSelectedItem(item);
    setCurrentIndex(index); // Set the current index
    setIsModalOpen(true);
    setIsActivityClicked(false); // Reset Activity click state when modal opens
  };

  // Function to close the modal and reset states
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
    setCurrentIndex(0); // Reset the current index
    setIsActivityClicked(false); // Reset Activity click state
  };

  // Function to handle delete action
  const handleDelete = () => {
    console.log('Item deleted:', selectedItem);
    closeModal(); // Close the modal after deletion
  };

  // Function to handle pagination (next item)
  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setSelectedItem(data[nextIndex]); // Update selected item
    }
  };

  // Function to handle pagination (previous item)
  const handlePrevious = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      setSelectedItem(data[prevIndex]); // Update selected item
    }
  };

  // Function to handle Activity click
  const handleActivityClick = () => {
    setIsActivityClicked(true); // Set Activity view to true
  };

  // Function to handle Properties click
  const handlePropertiesClick = () => {
    setIsActivityClicked(false); // Set Activity view to false (show Properties view)
  };

  return <>
      <div className="container mt-4">
       <div className='block'>
        <h1 className='font-bold'>Communication</h1>
        <h4 className='text-gray-600'>Welcome to #1 ticket management platform in Egypt</h4>
       </div>

       {/* table */}

       <div className="pt-4 flex justify-center rounded-lg w-fit sm:w-screen  lg:w-[1222px]">
      <div className="w-full overflow-x-auto pe-6">
        {/* header section */}
      <div className="flex items-center bg-white px-2 py-3 border border-gray-300 rounded-t-lg">
          {/* List with Organization and other data */}
          <div className=" text-gray-500 text-sm border ">
            <select name="" id="" className='border-none outline-none'>
              <option value=""> Organization </option>
              <option value=""> Organization </option>
              <option value=""> Organization </option>
            </select>
          </div>

          {/* Filter Icon */}
          {/* <div className="ml-4 text-gray-500">
            <FaFilter className="inline-block" /> 
          </div> */}

          {/* Add a Filter Text */}
          <div className="flex-1 text-gray-500 text-sm border py-[10px] px-3 flex">
            <img src={filter} alt="icon" />
            <h2 className='px-3'> Add a filter </h2>
          </div>
        </div>


          {/* table */}
          <table className="min-w-full bg-white border border-gray-300 max-w-2xl mx-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b border-gray-300"></th>
              <th className="py-2 px-4 border-b border-gray-300 text-left text-gray-500">Title</th>
              <th className="py-2 px-4 border-b border-gray-300 lg:table-cell hidden w-16"></th>
              <th className="py-2 px-4 border-b border-gray-300 text-right text-gray-500">Status</th>
              <th className="py-2 px-4 border-b border-gray-300 text-right text-gray-500">
                <div className="flex flex-col items-end">
                  <span>Validity</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                {/* Checkbox */}
                <td className="py-2 px-4 border-b border-gray-300">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-red-500"
                    onChange={(e) => {
                      console.log(`Checkbox for row ${item.id} is ${e.target.checked ? 'checked' : 'unchecked'}`);
                    }}
                  />
                </td>

                {/* Title and Subtitle */}
                <td
                  className="py-2 px-4 border-b border-gray-300 text-left cursor-pointer"
                  onClick={() => openModal(item)} // Open modal on click
                >
                  <div className="text-blue-600 hover:underline">{item.title}</div>
                  <div className="text-gray-500 text-sm">{item.subtitle}</div>
                </td>

                {/* Reduced Space (hidden on small screens) */}
                <td className="py-2 px-4 border-b border-gray-300 lg:table-cell hidden w-16"></td>

                {/* Status */}
                <td className="py-2 px-4 border-b border-gray-300 text-right text-red-600">{item.status}</td>

                {/* Validity */}
                <td className="py-2 px-4 border-b border-gray-300 text-right">
                  <div className="flex flex-col items-end">
                    <span className="text-gray-500">start: <span className="text-gray-600">{item.validity.start}</span></span>
                    <span className="text-gray-500">end: <span className="text-gray-600">{item.validity.end}</span></span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>


     
               {/* Modal */}
               {isModalOpen && (
  <div
    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    onClick={closeModal} // Close modal when clicking outside
  >
    <div
      className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-2xl"
      onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
    >
      {/* Modal Header */}
      <div className="flex justify-between items-center mb-4">
        {/* Left Arrow */}
        <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
          <FaArrowLeft className="w-6 h-6" />
        </button>

        {/* Delete Button */}
        <button
          onClick={handleDelete}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Delete
        </button>
      </div>

      {/* Title and Pagination */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Title:</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevious}
            className="text-gray-500 hover:text-gray-700"
            disabled={currentIndex === 0} // Disable if on the first item
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-gray-600">
            {currentIndex + 1} of {data.length}
          </span>
          <button
            onClick={handleNext}
            className="text-gray-500 hover:text-gray-700"
            disabled={currentIndex === data.length - 1} // Disable if on the last item
          >
            <FaChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Title Content */}
      <p className="text-gray-600 mb-4">{selectedItem?.title}</p>

      {/* Horizontal Line */}
      <hr className="border-t border-gray-300" />

      {/* Properties / Activity Toggle */}
      <div className="flex">
        <h3
          className={`text-lg font-semibold mb-2 ${!isActivityClicked ? 'text-blue-500 underline' : 'text-black no-underline'}`}
          onClick={handlePropertiesClick} // Switch to Properties view
          style={{ cursor: 'pointer' }}
        >
          Properties:
        </h3>
        <h3
          className={`text-lg font-semibold mb-2 ms-2 ${isActivityClicked ? 'text-blue-500 underline' : 'text-black no-underline'}`}
          onClick={handleActivityClick} // Switch to Activity view
          style={{ cursor: 'pointer' }}
        >
          Activity:
        </h3>
      </div>
      <hr className="border-t border-gray-300" />

      {/* Conditional Rendering for Properties or Activity View */}
      {isActivityClicked ? (
        // Activity View
        <>
          <p className="text-gray-600 mb-2">Organization: D-FI</p>
          <p className="text-gray-600 mb-4">Team: {selectedItem?.team}</p>

          {/* Last Update */}
          <div className="mt-4">
            <p className="text-gray-600">
              <span className="font-semibold">Last Update:</span> CHARLIE GUILLIO 2014-03-05
            </p>
          </div>
          <hr className="border-t border-gray-300" />

          {/* Event Table */}
          <div className="mt-4">
            <table className="w-full max-w-md mx-auto"> {/* Reduced width */}
              <thead>
                <tr className="text-gray-600 text-sm"> {/* Reduced font size */}
                  <th className="text-left border-b border-gray-300 pb-1 px-2">Event</th> {/* Reduced padding */}
                  <th className="text-left border-b border-gray-300 pb-1 px-2">Date</th> {/* Reduced padding */}
                  <th className="text-left border-b border-gray-300 pb-1 px-2">User</th> {/* Reduced padding */}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 9 }).map((_, index) => (
                  <tr key={index} className="text-sm"> {/* Reduced font size */}
                    <td className="text-blue-500 border-b border-gray-300 py-1 px-2">Rasha Ismail</td> {/* Reduced padding */}
                    <td className="text-gray-600 border-b border-gray-300 py-1 px-2">2014-03-05</td> {/* Reduced padding */}
                    <td className="text-gray-600 border-b border-gray-300 py-1 px-2">Rasha Ismail</td> {/* Reduced padding */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        // Properties View
        <>
          <p className="text-gray-600 mb-2">Organization: {selectedItem?.organization}</p>
          <p className="text-gray-600 mb-4">Team: {selectedItem?.team}</p>

          {/* Description */}
          <h3 className="text-lg font-semibold mb-2">Description:</h3>
          <div className="border border-gray-300 p-4 rounded-lg">
            <p className="text-gray-600">{selectedItem?.description}</p>
          </div>

          {/* Validity */}
          <div className="mt-4">
            <p className="text-gray-600">
              <span className="font-semibold">Validity - Start:</span> {selectedItem?.validity.start}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Validity - End:</span> {selectedItem?.validity.end}
            </p>
          </div>
        </>
      )}
    </div>
  </div>
)}
      </div>
    </div>
      </div>
  </>
}
