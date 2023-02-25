import React from 'react'

const Tickets = () => {
  return (
     <div className="w-full  lg:px-10 px-2  bg-[#F7F8FC] ">
      <div className='grid grid-cols-2  w-full mt-6 lg:mt-10 items-center h-fit'> 
        <div> 
          <h1 className='font-bold'> Tickets </h1>
        </div>

        <div className='flex justify-end  h-fit items-center  space-x-5'>
           <img className='h-5' src='./images/search.png' alt='notifications' />
          <img className='h-6' src='./images/notify.png' alt='notifications' />
          <img className='h-6' src='./images/vertical.png' alt='' />
          <h1 className='hidden lg:block font-semibold'> Jones Ferdinand </h1>
          <img className=' h-6 lg:h-8' src='./images/man.png' alt=''/>
        </div>
      </div>


      
    </div>
  )
}

export default Tickets