import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import qMark from "../../assets/qMark.svg"
import eyeIcon from "../../assets/eyeIcon.svg"
import chatIcon from "../../assets/chatIcon.svg"
import plusIcon from "../../assets/plusIcon.svg"
import reqIcon from "../../assets/reqIcon.svg"
import teamMember from '../../assets/team member.svg';
import { Button, Modal } from 'flowbite-react'



export default function TicketsOpen() {

  const [openModal, setOpenModal] = useState(false);

    
  return <>
  <div className="container xl:w-[1220px] mt-5 sm:ps-32 md:ps-24 lg:ps-2 sm:m-5">


    
       
    <div className='md:flex justify-between '>

<div className="  md:block  ">
<h1 className='font-bold'>Tickets / Demand 12349</h1>
<h4 className='text-gray-600'>Welcome to #1 ticket management platform in Egypt</h4>  
</div>

<div className='flex w-fit items-center justify-center'>
<Link  onClick={() => setOpenModal(true)} className='bg-teal-500 text-white border rounded-md hover:bg-teal-800 px-8 sm:py-3'>Transfer Ticket </Link>
<Modal show={openModal} onClose={() => setOpenModal(false)}>
        {/* <Modal.Header>Terms of Service</Modal.Header> */}
        <Modal.Body>
          <div className="container">
            
          <div className='flex'>
        <h3 className='font-bold ms-5'> Ticket ID </h3>
        <input type="text" className='w-[400px] h-[36px] rounded-lg ms-8'/>
      </div>
      <div className='flex mt-6'>
        <h3 className='font-bold ms-5'> Level </h3>
        <select name="" id="" className='w-[400px] h-[36px] rounded-lg ms-14'>
            <option value="" selected></option>
            <option value="1">1</option>
            <option value="2"> 2</option>
            <option value="3">3</option>
        </select>
      </div>
      <div className='flex mt-6'>
        <h3 className='font-bold ms-5'> Team </h3>
        <select name="" id="" className='w-[400px] h-[36px] rounded-lg ms-14'>
            <option value="" selected></option>
            <option value="1">1</option>
            <option value="2"> 2</option>
            <option value="3">3</option>
        </select>
      </div>
      <div className='flex mt-6'>
        <h3 className='font-bold ms-5'> Member </h3>
        <select name="" id="" className='w-[400px] h-[36px] rounded-lg ms-9'>
            <option value="" selected></option>
            <option value="1">1</option>
            <option value="2"> 2</option>
            <option value="3">3</option>
        </select>
      </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className='bg-gray-600 md:ms-44 md:me-28 px-8' onClick={() => setOpenModal(false)}>Cancel</Button>
          <Button className='bg-blue-500 px-8'onClick={() => setOpenModal(false)}> Send </Button>
        </Modal.Footer>
      </Modal>



<Link to={"/newTicket"} className='bg-teal-500 text-white border rounded-md hover:bg-teal-800 px-8 sm:py-3'>New Ticket </Link>

</div>

   </div>

   <div className='md:flex'>

    <div>
        <div className='bg-white w-96 sm:w-[610px] rounded-lg mt-3 flex'>
           <div>
        <img className=' w-48 mt-4 ms-5' src={qMark} alt="" />

           </div>

           <div className='pt-3 ps-5 ms-5 mt-4 mb-4 me-5'>
           <h2 className='font-bold text-lg '>Demanad restauration Dossier de I`IFS</h2>
           <h4 className='text-gray-600 underline text-lg'>Description</h4>

           <h4 className='text-gray-600 text-lg pt-3 pb-3'>Bonjour,</h4>
           <p className='text-gray-600'>The end of the year is upon us. As you relax and reflect on the past year, take a moment to catch up on The end of the year is upon us.
            As you relax and reflect on the past year, take a moment to catch up on the end of the year is upon us. As yoy relax  and reflect 
            on the past year, take a moment to catch up on the end of the year is upon us.
           </p>

           <p className='pt-5 text-gray-600'>As yoy relax  and reflect 
           on the past year, take a moment to catch up on the end of the year is upon us.</p>
           </div>
        </div>

        <div className='bg-white w-96 sm:w-[610px] rounded-lg mt-2'>
        <button className='bg-blue-700 text-white border rounded-md hover:bg-blue-900 px-3 sm:py-2 mt-3 ms-52 sm:ms-[444px]'>ADD EXCHANGE</button>

        <div className='flex'>
        <img className=' w-10 mt-4 ms-5' src={reqIcon} alt="icon" />

        <h4 className='border rounded-lg mt-4 p-2 ms-7 w-[490px] border-gray-300 text-gray-700'>Rasha - Transfer - Public - 19-11-2022</h4>
        </div>


        
        <div className='flex mt-3'>
        <img className=' w-10 mt-4 ms-5' src={chatIcon} alt="icon" />

        <h4 className='border rounded-lg mt-4 p-2 ms-7 w-[490px] border-gray-300 text-gray-700'>Rasha - Portal exchange - Public - 19-11-2022 </h4>
        </div>


        
        <div className='flex mb-3 mt-3'>
        <img className=' w-10 mt-4 ms-5' src={eyeIcon} alt="icon" />

        <h4 className='border rounded-lg mt-4 p-2 ms-7 w-[490px] border-gray-300 text-gray-700'>Rasha -  Prise encompte - Public - 19-11-2022 </h4>
        </div>


        
        <div className='flex pb-3'>
        <img className=' w-10 mt-4 ms-5' src={plusIcon} alt="icon" />

        <h4 className='border rounded-lg mt-4 p-2 ms-7  w-[490px] border-gray-300 text-gray-700'> SORUAL SUPPORT - Creation (Portal) - Public - 19-11-2022 </h4>
        </div>


        

        </div>
    </div>





       <div>
        
        <div className='bg-white rounded-lg mt-3 p-5 w-[400px] md:ms-8  '>
            <h3 className='text-xl font-bold mb-3'> Creation</h3>
            <hr />
            <div className='flex'> 
            < img className='pe-3 mt-3 ms-5 w-16' src={teamMember} alt="team member" />
            
                <div>
                <h4 className='font-bold'>SORUAL SUPPORT</h4>
              <h6 className='text-gray-500'> 22022-11-29 13:22</h6>
              <h6 className='text-gray-500'>SUPPORT SORUAL <span className='text-xs'> -siege-</span> Rodez</h6>
                </div>
            </div>            
            
        </div>


        <div className='bg-white w-[400px] rounded-lg p-5 mt-3 md:ms-8'>
            <h2 className='font-bold text-xl mb-3'>SLA / OLA</h2>
            <hr />

            <div className='flex justify-between text-xl mt-3'>
            <h5 className='text-gray-500'>Acquittement</h5>
            <h5 className='text-blue-500'> 2022-11-29  13:22</h5>
            </div>

            <div className='flex justify-between text-xl mt-3'>
            <h5 className='text-gray-500'>Date Limite</h5>
            <h5 className='text-blue-500'> 2022-12-29  17:22</h5>
            </div>

            <div className='flex justify-between text-xl mt-3 mb-3'>
            <h5 className='text-gray-500'> Minteur SLA</h5>
            <h5 className='text-gray-500'> Actif </h5>
            </div>

            <div className='flex justify-between text-xl mb-1'>
            <h5 className='text-gray-500'>Minteur OLA</h5>
            <h5 className='text-gray-500'> Inactif </h5>
            </div>


        </div>


      <div className='bg-white w-[400px] rounded-lg p-5 md:ms-8 mt-3'>

        <div className='flex'>
        <h2 className='font-bold text-xl mb-3'> Traitement </h2>
        <button className='bg-blue-700 text-white border rounded-md hover:bg-blue-900 px-3 mb-1 ms-24'>Sauvegarder</button>
            
            </div>            
            <hr />

            <div className='flex'> 
            < img className='pe-3 mt-3 ms-5 w-12' src={teamMember} alt="team member" />
            
                <div className='mt-3'>
                <h4 className='text-sm'>Rasha</h4>
                <h6 className='text-gray-500 text-sm'> AS400</h6>

                </div>
            </div>  
            <h4 className='text-gray-500 ms-2 mt-1'> Application </h4>

              <select name="" id="" className='h-[20px] w-[322px] ms-4 rounded-2xl'>
                <option value=" " selected> </option>
                <option value=" Incident"> Incident</option>
                <option value="buc">BUC</option>
                <option value="fue"> FUE</option>
    
              </select>

             

             <h6 className='text-gray-500 mt-3'> Progression </h6>
             <div className="h-1 bg-neutral-200 dark:bg-neutral-600 w-[336px] ms-1">
               <div className="h-1 bg-blue-500 w-[45%]"></div>
           </div>
        </div>

        <div className='bg-white w-[400px] rounded-lg p-5 mt-3 md:ms-8'> 
        <div className='flex'>
        <h2 className='font-bold text-xl mb-3'> Proprieties </h2>
        <button className='bg-blue-700 text-white border rounded-md hover:bg-blue-900 px-3 mb-1 ms-24'>Sauvegarder</button>
            </div>  
            <hr />  
            <h4 className='text-gray-500 ms-2 mt-1'> Enviroment </h4>

            <select name="" id="" className='h-[20px] w-[322px] ms-4  rounded-2xl'>
            <option value=" " selected> </option>
            <option value=" Incident"> Incident</option>
            <option value="buc">BUC</option>
            <option value="fue"> FUE</option>
          
            </select>



      <h4 className='text-gray-500 ms-2 mt-1'> Application </h4>

      <select name="" id="" className='h-[20px] w-[322px] ms-4 rounded-2xl'>
            <option value=" " selected> </option>
            <option value=" Incident"> Incident</option>
            <option value="buc">BUC</option>
            <option value="fue"> FUE</option>
          
            </select>



      <h4 className='text-gray-500 ms-2 mt-1'> Category </h4>

      <select name="" id="" className='h-[20px] w-[322px] ms-4 rounded-2xl'>
            <option value=" " selected> </option>
            <option value=" Incident"> Incident</option>
            <option value="buc">BUC</option>
            <option value="fue"> FUE</option>
          
            </select>



      <h4 className='text-gray-500 ms-2 mt-1'> Category </h4>

      <select name="" id="" className='h-[20px] w-[322px] ms-4   rounded-2xl'>
            <option value=" " selected> </option>
            <option value=" Incident"> Incident</option>
            <option value="buc">BUC</option>
            <option value="fue"> FUE</option>
          
            </select>





        </div>
        </div>    
   </div>

   
  </div>
  
  
  
  
  </>



}
