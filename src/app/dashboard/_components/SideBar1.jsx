"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MdOutlineMessage } from "react-icons/md";
import { RiHomeLine } from "react-icons/ri";
import { FaRegFileAlt, FaSearch } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline, IoHelpCircleOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

function SideBar1() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems = [
    { text: "Dashboard", icon: <RiHomeLine /> },
    { text: "Messages", icon: <MdOutlineMessage /> },
    { text: "My Applications", icon: <FaRegFileAlt /> },
    { text: "Find Jobs", icon: <FaSearch /> },
    { text: "Browse Companies", icon: <HiOutlineBuildingOffice2 /> },
    { text: "My Public Profile", icon: <CgProfile /> },
    { text: "Settings", icon: <IoSettingsOutline /> },
    { text: "Help Center", icon: <IoHelpCircleOutline /> },
  ];

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => {
          if (window.innerWidth < 768) setIsMobileOpen(true);
          else setIsOpen((prev) => !prev);
        }}
        className="md:mt-2 px-3 sm:left-10 z-50 text-xl text-[#7C8493]"
      >
        <RxHamburgerMenu />
      </button>

      {/* Desktop Sidebar */}
      <motion.div
        initial={{ width: 60 }}
        animate={{ width: isOpen ? 250 : 60 }}
        transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
        className="hidden md:flex h-screen text-[#7C8493] bg-[#E9EBFD] p-5"
      >
        <div className="flex flex-col gap-4 mt-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href="#"
              className="flex items-center space-x-2 text-[#7C8493] focus:bg-[#CCCCF5] focus:text-[#5A48FA] hover:text-[#636a76] p-1 rounded-md"
            >
              <span>{item.icon}</span>
              <span className={`${isOpen ? 'block' : 'hidden'}`}>{item.text}</span>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Mobile Full-Screen Sidebar */}
      {isMobileOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-0 z-50 bg-[#E9EBFD] text-[#7C8493] p-5 flex flex-col md:hidden"
        >
          <button
            onClick={() => setIsMobileOpen(false)}
            className="self-end text-2xl mb-4"
          >
            ✕
          </button>
          <div className="flex flex-col gap-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href="#"
                className="flex items-center space-x-2 text-[#7C8493] focus:bg-[#CCCCF5] focus:text-[#5A48FA] hover:text-[#636a76] p-1 rounded-md"
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}

export default SideBar1;
