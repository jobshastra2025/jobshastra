import React from 'react';
import Link from 'next/link'
import { MdOutlineMessage } from "react-icons/md";
import { RiHomeLine } from "react-icons/ri";
import { FaRegFileAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { IoHelpCircleOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

// components/Sidebar.tsx
export default function Sidebar() {
    return (
      <aside className="w-full h-full bg-[#E9EBFD] text-white flex flex-col p-4">
        <nav className="space-y-4">
          <div className="space-y-2">
            <div className='text-[#7C8493] p-1 cursor-pointer'>
                <RxHamburgerMenu />
            </div>
            <Link  href="#" className="flex items-center space-x-2 text-[#7C8493] focus:bg-[#CCCCF5] focus:text-[#5A48FA] p-1 rounded-md  hover:text-[#636a76]">
                <RiHomeLine />
                <span>Dashboard</span>
            </Link >
  
            <Link  href="#" className="flex items-center space-x-2 text-[#7C8493] focus:bg-[#CCCCF5] focus:text-[#5A48FA] hover:text-[#636a76] p-1 rounded-md ">
              {/* <div className="flex items-center space-x-2"> */}
                <MdOutlineMessage />
                <span>Messages</span>
              {/* </div> */}
              {/* <span className="bg-[#5A48FA] text-white text-xs px-2 py-0.5 rounded-full">1</span> */}
            </Link >
  
            <Link  href="#" className="flex items-center space-x-2 text-[#7C8493] focus:bg-[#CCCCF5] focus:text-[#5A48FA] hover:text-[#636a76] p-1 rounded-md ">
                <FaRegFileAlt />
                <span>My Applications</span>
            </Link >
  
            <Link  href="#" className="flex items-center space-x-2 text-[#7C8493] focus:bg-[#CCCCF5] focus:text-[#5A48FA] hover:text-[#636a76] p-1 rounded-md ">
                <FaSearch />
                <span>Find Jobs</span>
            </Link >
  
            <Link  href="#" className="flex items-center space-x-2 text-[#7C8493] focus:bg-[#CCCCF5] focus:text-[#5A48FA] hover:text-[#636a76] p-1 rounded-md ">
                <HiOutlineBuildingOffice2 />
                <span>Browse Companies</span>
            </Link >
  
            <Link  href="#" className="flex items-center space-x-2 text-[#7C8493] focus:bg-[#CCCCF5] focus:text-[#5A48FA] hover:text-[#636a76] p-1 rounded-md ">
                <CgProfile />
                <span>My Public Profile</span>
            </Link >
          </div>
  
          <hr className="border-gray-600 my-4" />
  
          <div className="space-y-2 text-sm text-gray-500 uppercase tracking-wider">
            <span className="pl-2">Settings</span>
  
            <Link  href="#" className="flex items-center space-x-2 text-[#7C8493] focus:bg-[#CCCCF5] focus:text-[#5A48FA] hover:text-[#636a76] p-1 rounded-md ">
                <IoSettingsOutline />
                <span>Settings</span>
            </Link >
  
            <Link  href="#" className="flex items-center space-x-2 text-[#7C8493] focus:bg-[#CCCCF5] focus:text-[#5A48FA] hover:text-[#636a76] p-1 rounded-md ">
                <IoHelpCircleOutline />
                <span>Help Center</span>
            </Link >
          </div>
        </nav>
      </aside>
    );
  }
  