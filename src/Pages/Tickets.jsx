import React from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'

const Tickets = () => {
  return (
     <div className="w-full mt-14  lg:px-6 px-2   ">
      <div className='grid grid-cols-2  w-full mt-6 lg:mt-10 items-center h-fit'> 
        <div> 
          <h1 className='font-semibold text-2xl'> Tickets </h1>
        </div>

        <div className='flex justify-end  h-fit items-center  space-x-5'>
           <img className='h-5' src='./images/search.png' alt='notifications' />
          <img className='h-6' src='./images/notify.png' alt='notifications' />
          <img className='h-6' src='./images/vertical.png' alt='' />
          <h1 className='hidden lg:block font-semibold'> Jones Ferdinand </h1>
          <img className=' h-6 lg:h-8' src='./images/man.png' alt=''/>
        </div>
      </div>


<section class="py-1 bg-blueGray-50">
<div class="w-full  mb-12 xl:mb-0  mx-auto mt-8 lg:mt-20">
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex  justify-between  items-center mb-10 mt-6">
        <div class="relative w-full px-2 max-w-full  ">
          <h3 class="font-semibold text-lg text-blueGray-700"> All tickets</h3>
        </div>
        <div class="relative w-full space-x-10 px-4 max-w-full flex flex-1 text-right">
          <h1> Sort </h1>
          <h1> Filter </h1>
        </div>
      </div>
    </div>

    <div class="block w-full overflow-x-auto">
      <table class="items-center bg-transparent w-full border-collapse ">
        <thead>
          <tr >
            <th class=" bg-blueGray-50 text-[#C5C7CD] align-middle border border-solid border-blueGray-100 py-3 text-sm  border-l-0 border-r-0 border-t-0 whitespace-nowrap font-semibold text-left px-6 ">
                          Ticket details
                        </th>
          <th class=" bg-blueGray-50 text-[#C5C7CD] align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 border-t-0 whitespace-nowrap font-semibold text-left  px-6 sm:px-0">
                          Customer name
                        </th>
           <th class=" bg-blueGray-50 text-[#C5C7CD] align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 border-t-0 whitespace-nowrap font-semibold text-left px-6 sm:px-0">
                          Date
                        </th>
          <th class=" bg-blueGray-50 text-[#C5C7CD] align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 border-t-0 whitespace-nowrap font-semibold text-left px-6 sm:px-0">
                          Piority
                        </th>

                        <th class=" bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 border-t-0 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          
                        </th>

                        
          </tr>
        </thead>

        <tbody className=' h-[6rem] '>
          <tr className='hover:bg-[#F7F8FC] hover:cursor-pointer' >
            <th class="  whitespace-nowrap px-6 w-fit">
              <div className='flex items-center space-x-5'>
                  <img className='h-10' src='./images/man.png' alt=''/>

                  <div className='flex flex-col items-center'> 
                    <h1> Header for profile </h1>
                    <p className='font-normal text-[#C5C7CD]'> Updated 1 day ago </p>
                  </div>
              </div>
            </th>

            <td class="whitespace-nowrap px-6 sm:px-0">
              <div> 
                <h1 className='font-semibold'> Tom Cruise</h1>
                <p className='text-[#C5C7CD]'> on 24.05.2019 </p>
              </div>
            </td>
            <td class="whitespace-nowrap px-6 sm:px-0">
              <div> 
                <h1 className='font-semibold  flex-wrap'> May 26, 2019</h1>
                <p className='text-[#C5C7CD]'> 6:30 PM </p>
              </div>
            </td>
            <td class="whitespace-nowrap px-6 sm:px-0">
              <h1 className='px-2 bg-red-600 w-fit text-white rounded-full text-sm'> HIGH </h1>
            </td>

            <td class="whitespace-nowrap px-6 sm:px-0">
              <BsThreeDotsVertical/>
            </td>
          </tr>
         
        </tbody>

      </table>
    </div>
  </div>
</div>

</section>

      
    </div>
  )
}

export default Tickets