import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai'

const Home = () => {
  return (
     <div className="w-full mt-0 lg:mt-14  lg:px-6 px-2   ">
      <div className='grid grid-cols-2 px-2 w-full mt-2 lg:mt-10 items-center h-fit'> 
        <div> 
          <h1 className='font-semibold text-2xl'> Overview </h1>
        </div>

        <div className='flex justify-end  h-fit items-center  space-x-5'>
           <img className='h-5' src='./images/search.png' alt='notifications' />
          <img className='h-6' src='./images/notify.png' alt='notifications' />
          <img className='h-6' src='./images/vertical.png' alt='' />
          <h1 className='hidden lg:block font-semibold'> Jones Ferdinand </h1>
          <img className=' h-8' src='./images/man.png' alt=''/>
        </div>
      </div>


      
    </div>
  );
};

export default Home;
