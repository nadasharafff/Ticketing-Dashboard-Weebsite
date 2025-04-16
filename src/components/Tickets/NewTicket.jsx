import React from 'react'
import Number from "../../assets/Number.svg"
import teamMember from "../../assets/team member.svg"
import attachIcon from "../../assets/attchIcon.svg"
import galleryIcon from "../../assets/galleryIcon.svg"
import deleteIcon from "../../assets/deleteIcon.svg"

export default function NewTicket() {
  return <>

  <div className="container w-[1220px]">

    <div className='mt-5 sm:ps-32 md:ps-24 lg:ps-2 sm:m-5'>
    <h1 className='font-bold'> New Tickets</h1>
    <h4 className='text-gray-600'>Welcome to #1 ticket management platform in Egypt.</h4>
   </div>

   <div className='flex'>
    <div>
        <h3 className='border rounded-2xl border-purple-800 w-8 p-1 ms-12 bg-purple-800 text-white text-center'>1</h3>
        <h5 className='text-xs text-gray-600 ms-2'>Auteur / Affectation</h5>
        <div className='h-[503px] bg-purple-800 w-[2px] ms-16'></div>
    </div>

    <div className='bg-white w-[924px] h-[496px] mt-14 rounded-lg ms-4'>
      <h2 className='font-bold m-5 text-xl'>Auteur</h2>
      <div className='flex'>
        <h3 className='text-gray-600 ms-5'> Organisation </h3>
        <select name="" id="" className='w-[400px] h-[36px] rounded-lg ms-4'>
            <option value="CBP" selected>CBP</option>
            <option value="buc">BUC</option>
            <option value="fue"> FUE</option>
            <option value="acu">ACU</option>
            <option value="Guc">GUC</option>
            <option value="bue">BUE</option>
        </select>
      </div>

    <div className='flex'>

    <div className='flex'>
             <input type="checkbox" className=' ms-8 mt-3  checked:bg-red-700' />
             <label htmlFor="statut" className='block text-gray-500 mt-2 ms-2'> Creer en mon nom </label>

      </div>

      <div className='flex'>
             <input type="checkbox" className=' ms-8 mt-3 checked:bg-red-700' />
             <label htmlFor="statut" className='block text-gray-500 mt-2 ms-2'> Creer au nom de </label>

      </div>

    </div>

        <div className='flex'>
          <div className='w-[450px] h-[223px] ms-5 border rounded-xl mt-4 border-gray-400'>
          <input type="text" className="form-control w-full mx-auto  rounded-xl border-gray-400" id="searchTerm" placeholder="search" oninput="search()"/> 
        
          <div className='flex hover:border hover:bg-gray-300'>
            <img src={teamMember} alt="profile pic" className='mt-3 w-[38] ms-3'/>
            <div className='mt-3 ms-2 text-sm'>
            <h3>CBP Adhesions</h3>
            <p className='text-gray-600'>Equipe Produit Adhesions - ADE</p>
            </div>
          </div>


          <div className='flex hover:border hover:bg-gray-300'>
            <img src={teamMember} alt="profile pic" className='mt-3 w-[38] ms-3'/>
            <div className='mt-3 ms-2 text-sm'>
            <h3>CBP Adhesions</h3>
            <p className='text-gray-600'>Equipe Produit Adhesions - ADE</p>
            </div>
          </div>


          <div className='flex hover:border hover:bg-gray-300'>
            <img src={teamMember} alt="profile pic" className='mt-3 w-[38] ms-3'/>
            <div className='mt-3 ms-2 text-sm'>
            <h3>CBP Adhesions</h3>
            <p className='text-gray-600'>Equipe Produit Adhesions - ADE</p>
            </div>
          </div>
          </div>


          <div v className='w-[450px] h-[223px] border rounded-xl mt-4 border-gray-400 ms-2 me-1'>
            <div className='flex'>
              <div className='w-32 '>
              <img src={teamMember} alt="profile pic " className='w-[90px] mt-11 ms-6' />
              <h2 className='text-sm text-center mt-2 ms-2'>CBP Adhessions</h2>
              </div>
              <div className='h-[223px] w-[0.5px] bg-gray-400 mx-2'></div>
              <div>
                <div className='flex mt-5'>
                  <h4 className='text-gray-600 text-sm'> Fonction</h4>
                  <h4 className='text-sm ms-[75px]'>Equipe Produit Adhesions</h4>
                </div>

                
                <div className='flex mt-2'>
                  <h4 className='text-gray-600 text-sm'> Departement</h4>
                  <h4 className='text-sm ms-11'>ADE</h4>
                </div>

                <div className='flex mt-2'>
                  <h4 className='text-gray-600 text-sm'> Site geographique</h4>
                  <h4 className='text-sm ms-3'>ADE</h4>
                </div>

                <div className='flex mt-2'>
                  <h4 className='text-gray-600 text-sm'> Telephone fixe</h4>
                  <h4 className='text-sm ms-9'>0272681444</h4>
                </div>

                <div className='flex mt-2'>
                  <h4 className='text-gray-600 text-sm'> Telephone mobile </h4>
                  <h4 className='text-sm ms-4'> 0272681444 </h4>
                </div>

                <div className='flex mt-2'>
                  <h4 className='text-gray-600 text-sm'> Email</h4>
                  <h4 className='text-xs ms-[100px] text-blue-500 underline'>EquipProduitAdhesions@cbp-group.com</h4>
                </div>


              </div>
            </div>
          </div>
        </div>

        <h2 className='font-bold ms-5 mt-3 text-xl'>Affectation</h2>
      <div className='flex'>
        <h3 className='text-gray-600 ms-5 mt-1'> Equipe </h3>
        <select name="" id="" className='w-[400px] h-[36px] rounded-lg ms-10'>
            <option value=" PAGEILOT" selected> PAGEILOT </option>
            <option value="buc">BUC</option>
            <option value="fue"> FUE</option>
            <option value="acu">ACU</option>
            <option value="Guc">GUC</option>
            <option value="bue">BUE</option>
        </select>
      </div>  
      <div className='flex mt-2'>

      <div className='flex'>
            <input type="checkbox" className=' ms-8 mt-3  checked:bg-red-700' />
            <label htmlFor="statut" className='block text-gray-500 mt-2 ms-2'> Assigner la ticket a </label>

       </div>

       <div className='flex'>
            <input type="checkbox" className=' ms-8 mt-3 checked:bg-red-700' />
            <label htmlFor="statut" className='block text-gray-500 mt-2 ms-2'> M`affecter la ticket </label>

        </div>

       <div className='flex'>
            <input type="checkbox" className=' ms-8 mt-3 checked:bg-red-700' />
            <label htmlFor="statut" className='block text-gray-500 mt-2 ms-2'> Ne pas affecter la ticket </label>

        </div>

</div>


    </div>

    

    
   </div>


 {/* second table */}
   <div className='flex'>
   <div>
        <h3 className='border rounded-2xl border-purple-800 w-8 p-1 ms-12 bg-purple-800 text-white text-center'>2</h3>
        <h5 className='text-xs text-gray-600 ms-2'>Catelogue de modeles</h5>
        <div className='h-[499px] bg-purple-800 w-[2px] ms-16 mt-1'></div>
    </div>


    <div className='bg-white w-[924px] h-[496px] mt-14 rounded-lg '>
      <h2 className='font-bold mt-5 ms-5'> Catalogue de  models </h2>



      <div className='w-[909px] h-[425px] mx-3 border rounded-xl mt-2 border-gray-400'>
          <input type="text" className="form-control w-full mx-auto  border-gray-400" id="searchTerm" placeholder="search" oninput="search()"/> 

          <div className='flex' >
            <div className='w-[222px]'>
            <select name="" id="" className='h-[36px] w-full '>
            <option value=" Incident" selected> Incident   </option>
            <option value="buc">BUC</option>
            <option value="fue"> FUE</option>
          
            </select>
            <h3 className='text-blue-500 mt-4 ms-5'> Tous les modeles </h3>
            <h3 className='text-gray-500 mt-2 ms-5'>No category</h3>
            </div>
            <div className='w-[0.5px] h-[383px] bg-gray-400'></div>


            <div>
            <div className='flex hover:border hover:bg-gray-300 mt-12 '>
            <img src={teamMember} alt="profile pic" className=' w-[38] '/>
            <div className='mt-3 ms-2 text-sm'>
            <h3> INCIDENT Adhesions</h3>
            <p className='text-gray-600 text-xs'> A utiliser par la pilotage pour tous incodent sur des elements </p>
            </div>
          </div>


          <div className='flex hover:border hover:bg-gray-300'>
            <img src={teamMember} alt="profile pic" className='mt-3 w-[38] '/>
            <div className='mt-3 ms-2 text-sm'>
            <h3> INCIDENT Adhesions</h3>
            <p className='text-gray-600 text-xs'> A utiliser par la pilotage pour tous incodent sur des elements </p>
            </div>
          </div>


          <div className='flex hover:border hover:bg-gray-300'>
            <img src={teamMember} alt="profile pic" className='mt-3 w-[38] '/>
            <div className='mt-3 ms-2 text-sm'>
            <h3> INCIDENT Adhesions</h3>
            <p className='text-gray-600 text-xs'> A utiliser par la pilotage pour tous incodent sur des elements </p>
            </div>
          </div>

          
          <div className='flex hover:border hover:bg-gray-300'>
            <img src={teamMember} alt="profile pic" className='mt-3 w-[38] '/>
            <div className='mt-3 ms-2 text-sm'>
            <h3> INCIDENT Adhesions</h3>
            <p className='text-gray-600 text-xs'> A utiliser par la pilotage pour tous incodent sur des elements </p>
            </div>
          </div>

          <div className='flex hover:border hover:bg-gray-300'>
            <img src={teamMember} alt="profile pic" className='mt-3 w-[38] '/>
            <div className='mt-3 ms-2 text-sm'>
            <h3> INCIDENT Adhesions</h3>
            <p className='text-gray-600 text-xs'> A utiliser par la pilotage pour tous incodent sur des elements </p>
            </div>
          </div>

            </div>
          </div>
         

          </div>


          



    </div>
    
   </div>
 

          {/* Third table */}
   <div className='flex'>
   <div>
     <h3 className='border rounded-2xl border-purple-800 w-8 p-1 ms-12 bg-purple-800 text-white text-center'>3</h3>
     <h5 className='text-xs text-gray-600 ms-2'> Qualification de ticket</h5>
   </div>
   <div className='bg-white w-[924px]  mt-14 rounded-lg '>
      <h2 className='font-bold mt-5 ms-5'> Incident </h2>



      <div className='flex'>
        <div className='w-[601px] h-[421px] border border-gray-400 ms-5 rounded-lg mt-2'>
         <div className='flex'>
         <h3 className='text-gray-500 ms-3 mt-3 me-3 text-center'>Title:</h3>
         <textarea name="text" id="text"  className='w-full h-12 border-white pt-3'> CBP - probleme de machine</textarea>
         </div>
         <div className='w-[601px] h-[1px] bg-gray-400'></div>
         <div className='flex'>
          <h2 className='ms-3 mt-3 text-gray-500'>Descrption:</h2>
          <textarea name="textt" id="textt" className='w-full h-60 mt-10 border-white font-bold'> Bonjour, </textarea>
         </div>
         
         <div className='flex ms-[470px] mt-12'>
          <img src={attachIcon} alt="icon" className='m-3'/>
          <img src={galleryIcon} alt="icon" className='m-3' />
          <img src={deleteIcon} alt="icon" className='m-3' />
         </div>
        </div>
        <div>
      <div className='w-[288px] border rounded-lg me-3 m-2 border-gray-400'>
        <h3 className='m-1 font-bold'>Creation</h3>
        <div className='w-[287px] h-[1px] bg-gray-400'></div>
        <div className="flex">
            <img src={teamMember} alt="profile pic" className='w-[50px] mt-3 ms-7' />
            <div className='ms-2'>
              <h5 className='mt-2'> SORUAL SUPPORT </h5>
              <p className='text-gray-500'> 2022-11-29 13:22 </p>
              <p className='text-gray-500'> SUPPORT SORUAL <span className='text-xs'>-siege-</span> Rodez</p>
            </div>
          </div>
      </div>

      <div className='w-[288px] border rounded-lg me-3 m-2 border-gray-400'>
        <h2 className='font-bold m-1'>SLA</h2>
        <div className='w-[287px] h-[1px] bg-gray-400'></div>
        <div className='flex mt-4 mb-4'>
          <h4 className='text-gray-500 ms-2'>Date limite</h4>
          <h4 className='text-blue-500 ms-8'>2022-12-01 17:22</h4>
        </div>
      </div>


      <div className='w-[288px] border rounded-lg me-3 m-2 border-gray-400'>
      <h2 className='font-bold m-1'>Proprietes</h2>
      <div className='w-[287px] h-[1px] bg-gray-400'></div>

      <h4 className='text-gray-500 ms-2 mt-2'> Enviroment </h4>

      <select name="" id="" className='h-[20px] w-[266px] ms-4 mt-1  rounded-2xl'>
            <option value=" " selected> </option>
            <option value=" Incident"> Incident</option>
            <option value="buc">BUC</option>
            <option value="fue"> FUE</option>
          
            </select>



      <h4 className='text-gray-500 ms-2 mt-1'> Priorite </h4>

      <select name="" id="" className='h-[20px] w-[266px] ms-4  rounded-2xl'>
            <option value=" " selected> </option>
            <option value=" Incident"> Incident</option>
            <option value="buc">BUC</option>
            <option value="fue"> FUE</option>
          
            </select>



      <h4 className='text-gray-500 ms-2 mt-1'> Application </h4>

      <select name="" id="" className='h-[20px] w-[266px] ms-4 rounded-2xl'>
            <option value=" " selected> </option>
            <option value=" Incident"> Incident</option>
            <option value="buc">BUC</option>
            <option value="fue"> FUE</option>
          
            </select>



      <h4 className='text-gray-500 ms-2 mt-1'> Category </h4>

      <select name="" id="" className='h-[20px] w-[266px] ms-4 rounded-2xl'>
            <option value=" " selected> </option>
            <option value=" Incident"> Incident</option>
            <option value="buc">BUC</option>
            <option value="fue"> FUE</option>
          
            </select>



      <h4 className='text-gray-500 ms-2 mt-1'> Category </h4>

      <select name="" id="" className='h-[20px] w-[266px] ms-4   rounded-2xl'>
            <option value=" " selected> </option>
            <option value=" Incident"> Incident</option>
            <option value="buc">BUC</option>
            <option value="fue"> FUE</option>
          
            </select>






      </div>
     </div>

      </div>

      
   </div>



    

   </div>

        <div className='mt-7 ms-[633px] mb-6'>
        <button className='bg-gray-600 text-white border rounded-md hover:bg-gray-800 px-5 py-2  w-40 me-5'> Cancel </button>

        <button to={"/newTicket"} className='bg-blue-500 text-white border rounded-md hover:bg-blue-800 px-5 py-2 w-40 ms-5'>Create </button>

        </div>
  </div>
  
  </>
}
