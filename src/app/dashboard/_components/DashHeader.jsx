"use client"
import React from 'react'
import Link from 'next/link'
import Image from "next/image";

function DashHeader({headertext}) {
  return (
    <div className=' sm:flex gap-4 items-center'>
      {/* new */}
        {/* <div>
          <Link href={"/"}>
                  <Image
                    className="p-3 mt-2 sm:mt-4"
                    src={"/images/logo.png"}
                    alt="logo"
                    width={200}
                    height={100}
                  />
          </Link>
               
        </div> */}


      <div className='w-full sm:flex justify-between items-center bg-white border-b-2 border-[#D6DDEB] px-4 sm:px-6 lg:px-8 xl:px-[32px] py-4 sm:py-6 lg:py-8'>
        <div>
          <h2 className='text-2xl sm:text-3xl lg:text-[32px] font-bold leading-tight mb-2 sm:mb-0'>
            {headertext}
          </h2>
        </div>
        <div className='flex items-center gap-4 sm:gap-6 lg:gap-8'>
          <Link href="/" className='text-primary text-sm sm:text-base font-bold px-3 py-2 sm:px-4 sm:py-2 border border-[#CCCCF5] rounded-md hover:bg-[#f5f5ff]'>
            Back to homepage
          </Link>
          <img
            className='w-8 sm:w-10'
            src='/images/dashboard_Icon.png'
            width={40}
            height={40}
            alt='Dashboard Icon'
          />
        </div>
      </div>
    </div>
  )
}

export default DashHeader

