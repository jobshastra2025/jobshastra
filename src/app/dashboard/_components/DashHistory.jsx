import React from 'react'
import Link from 'next/link'

function DashHistory() {
  return (
    <div className='"px-4 sm:px-6 lg:px-8"'>
      <h2 className='font-bold text-[20px] mt-[20px] py-[24px] px-[24px] border-[1px] border-[#CCCCF5] mx-6 sm:mx-0 '>Recent Applications History</h2>
      <div className='py-[24px] px-[24px] sm:border-[1px] border-[#CCCCF5] '>

      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between py-6 px-6 border border-[#CCCCF5] sm:border-0  rounded-lg'>
        {/* Image and Title */}
        <div className='flex flex-col sm:flex-row items-center gap-4 mb-4 sm:mb-0'>
          <img className='w-10 h-10' src='/images/dashhistory_icon.png' alt='Dashboard Icon' />
          <div>
            <h4 className='font-bold text-base sm:text-lg'>Social Media Assistant</h4>
            <div className='flex flex-wrap gap-2 text-sm sm:text-base text-gray-700'>
              <p>Nomad</p>
              <p>Paris</p>
              <p>France</p>
              <p>Full-Time</p>
            </div>
          </div>
        </div>

        {/* Date and Button */}
        <div className='flex flex-col sm:flex-row sm:items-center sm:gap-8 mb-4 sm:mb-0'>
          <div className='text-center sm:text-left'>
            <h4 className='font-semibold text-sm sm:text-base'>Date Applied</h4>
            <p className='text-sm sm:text-base'>24 July 2021</p>
          </div>
          <div className='mt-2 sm:mt-0 flex justify-center sm:justify-start'>
            <button className='text-xs sm:text-sm text-[#FFB836] py-1.5 px-3 border border-[#FFB836] rounded-xl'>
              In Review
            </button>
          </div>
        </div>

        {/* 3 Dots */}
        <div className='flex justify-center sm:justify-end'>
          <p className='text-2xl sm:text-3xl font-bold'>. . .</p>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between py-6 px-6 border border-[#CCCCF5] sm:border-0 my-4 sm:my-0 rounded-lg'>
        {/* Image and Title */}
        <div className='flex flex-col sm:flex-row items-center gap-4 mb-4 sm:mb-0'>
          <img className='w-10 h-10' src='/images/dashhistory_icon.png' alt='Dashboard Icon' />
          <div>
            <h4 className='font-bold text-base sm:text-lg'>Social Media Assistant</h4>
            <div className='flex flex-wrap gap-2 text-sm sm:text-base text-gray-700'>
              <p>Nomad</p>
              <p>Paris</p>
              <p>France</p>
              <p>Full-Time</p>
            </div>
          </div>
        </div>

        {/* Date and Button */}
        <div className='flex flex-col sm:flex-row sm:items-center sm:gap-8 mb-4 sm:mb-0'>
          <div className='text-center sm:text-left'>
            <h4 className='font-semibold text-sm sm:text-base'>Date Applied</h4>
            <p className='text-sm sm:text-base'>24 July 2021</p>
          </div>
          <div className='mt-2 sm:mt-0 flex justify-center sm:justify-start'>
            <button className='text-xs sm:text-sm text-[#FFB836] py-1.5 px-3 border border-[#FFB836] rounded-xl'>
              In Review
            </button>
          </div>
        </div>

        {/* 3 Dots */}
        <div className='flex justify-center sm:justify-end'>
          <p className='text-2xl sm:text-3xl font-bold'>. . .</p>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between py-6 px-6 border border-[#CCCCF5] sm:border-0  rounded-lg'>
        {/* Image and Title */}
        <div className='flex flex-col sm:flex-row items-center gap-4 mb-4 sm:mb-0'>
          <img className='w-10 h-10' src='/images/dashhistory_icon.png' alt='Dashboard Icon' />
          <div>
            <h4 className='font-bold text-base sm:text-lg'>Social Media Assistant</h4>
            <div className='flex flex-wrap gap-2 text-sm sm:text-base text-gray-700'>
              <p>Nomad</p>
              <p>Paris</p>
              <p>France</p>
              <p>Full-Time</p>
            </div>
          </div>
        </div>

        {/* Date and Button */}
        <div className='flex flex-col sm:flex-row sm:items-center sm:gap-8 mb-4 sm:mb-0'>
          <div className='text-center sm:text-left'>
            <h4 className='font-semibold text-sm sm:text-base'>Date Applied</h4>
            <p className='text-sm sm:text-base'>24 July 2021</p>
          </div>
          <div className='mt-2 sm:mt-0 flex justify-center sm:justify-start'>
            <button className='text-xs sm:text-sm text-[#FFB836] py-1.5 px-3 border border-[#FFB836] rounded-xl'>
              In Review
            </button>
          </div>
        </div>

        {/* 3 Dots */}
        <div className='flex justify-center sm:justify-end'>
          <p className='text-2xl sm:text-3xl font-bold'>. . .</p>
        </div>
      </div>       
      </div>
      <div className='flex justify-center items-center py-[24px]'>
        <Link href="/" className='text-[#4640DE] text-[16px] font-bold hover:underline'>View all applications history</Link>
      </div>
    </div>
  )
}

export default DashHistory
