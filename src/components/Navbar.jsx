import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { navData } from '../data/navData'
import { MdOutlineAccountCircle } from "react-icons/md";
import { FiPower } from "react-icons/fi";
import { CiMenuKebab } from "react-icons/ci";
import Sidebar from './Sidebar';
import { RxCross2 } from "react-icons/rx";
import PlatterItems from './PlatterItems';

const Navbar = () => {
    const [navLinks,setNavLinks]=useState('orders');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

  return (
    <div className='flex justify-between items-center p-4 px-6 shadow-[0px_3px_5px_#5000A2] fixed w-full bg-white top-0 '>
        <div className='flex items-center gap-2'>
            <img src={logo} alt="" className='w-[60px] h-[60px] max-sm:w-[45px] max-sm:h-[45px]'/>
            <p className='text-primary-200 font-medium text-2xl max-sm:text-lg max-lg:text-xl'>
                Craft My Plate
            </p>
        </div>

        <ul className='hidden md:flex items-center gap-2'>
            {
                navData.map((data)=>(
                    <li
                        key={data.id}
                        className={`text-primary-200 font-medium text-xl cursor-pointer px-3 py-1 max-lg:text-lg
                        ${
                            navLinks==data.value 
                            && "border border-primary-200 rounded-md shadow-[2px_2px_8px_#EEDEFF]"
                        }`}
                        onClick={()=>setNavLinks(data.value)}
                    >
                        {data.name}
                    </li>
                ))
            }
        </ul>

        <div className='hidden md:flex gap-8 max-lg:gap-2 items-center'>
            <div className='flex items-center gap-2 font-medium text-primary-200 text-xl max-lg:text-lg'>
                <MdOutlineAccountCircle size={30}/>
                <p>Prathu</p>
            </div>
            <FiPower size={40} color='#5000A2'/>
        </div>

        <div className='md:hidden block'>
            <CiMenuKebab size={30} color='#5000A2' onClick={toggleSidebar}/>
        </div>


        {/* Sidebar for PlatterItems (visible on small screens when menu icon clicked) */}
        <div
            className={`fixed top-0 left-0 h-full w-fit bg-white shadow-lg transition-transform duration-300 overflow-y-scroll
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
            <div className='flex justify-end p-4 pr-8'>
                <RxCross2
                        size={30}
                        color='#5000A2'
                        onClick={toggleSidebar}
                        className='cursor-pointer'
                />
            </div>
            <PlatterItems className="pl-8 pr-8 relative z-10" />
        </div>


        {/* Bottom Navigation for Small Screens */}
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-md md:hidden flex justify-evenly py-3 -z-10">
            {navData.map((data) => (
                <div
                    key={data.id}
                    className={`text-primary-200 text-center cursor-pointer
                    ${
                        navLinks === data.value &&
                        'border-t-4 border-primary-200 bg-primary-100'
                    }`}
                    onClick={() => setNavLinks(data.value)}
                >
                    <img src={data.icon} alt=""  width={35}/>
                </div>
            ))}
            <MdOutlineAccountCircle size={40} color='#5000a2'/>
        </div>
    </div>
  )
}

export default Navbar