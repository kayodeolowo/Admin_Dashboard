import React, { useState } from 'react';
import {
  MdOutlineDashboard,
  MdAccountCircle,
  MdAnalytics,
  MdOutlineSettings,
  MdLogout,
} from 'react-icons/md';
import {
  BsChevronDown,
  BsChatLeftText,
  BsCalendarCheck,
  BsFiles,
  BsServer,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Menus = [
  { title: 'Overview', src: 'Chart_fill', icon: <MdOutlineDashboard />, link: '/' },
  { title: 'Tickets',  src: 'Chat', icon: <BsChatLeftText />, link: '/tickets'  },
  { title: 'Ideas', src: 'User',  icon: <MdAccountCircle /> },
  { title: 'Contacts ', src: 'Calendar', icon: <BsCalendarCheck /> },
  { title: 'Agents', src: 'Chart', icon: <MdAnalytics /> },
  { title: 'Articles', src: 'Folder',  icon: <BsFiles /> },
  { title: 'Setting', src: 'Setting',gap: true, border:true, icon: <MdOutlineSettings /> },
  { title: 'Subscription', src: 'Logout', icon: <MdLogout /> },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
    <div className=" h-screen flex items-end justify-end ">
      <button
        className="fixed lg:hidden z-90 bottom-10 right-8 bg-teal-800 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-red-500  text-4xl hover:bg-teal-800   duration-300"
        onClick={toggleSidebar}
      >
        <span className="text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            
          </svg>
        </span>
      </button>

      <div
        className={` ${
          open ? 'w-48 px-2 ' : 'w-0 hidden lg:block'
        } lg:w-[16rem] bg-[#363740] h-screen   relative duration-500`}
      >
        <div className="  mt-3">
         
        </div>
        <ul className="pt-6">
         <div className='lg:px-10 flex items-center mb-14 space-x-3'> 
            <img src='./images/logo.png' alt='' />
             <h1 className='text-[#A4A6B3] font-semibold'> Dashboard Kit  </h1>
          </div>
          {Menus.map((Menu, index) => (
            <>
            <div   key={Menu.index} > 
              <Link to={Menu.link}  key={index}  >
                <li
                 key={index}
                  className={`flex  rounded-md p-2 lg:px-10 cursor-pointer hover:bg-teal-400 text-white text-sm items-center mt-6 gap-x-4 
                ${Menu.gap ? 'mt-9' : 'mt-2'}  `}
                >
                  {Menu.icon ? Menu.icon : <MdOutlineDashboard />}
                  <span className="flex-1">{Menu.title}</span>
                  
                </li>
              </Link>
            </div>
              
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
