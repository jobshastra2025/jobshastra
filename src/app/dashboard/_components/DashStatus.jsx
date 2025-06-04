import React from 'react'
import Link from 'next/link'

function DashStatus() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Header Row */}
      <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center bg-white gap-4 mb-6'>
        <div>
          <h3 className='font-bold text-xl sm:text-2xl lg:text-3xl'>Good morning, Vivek!</h3>
          <p className='text-sm sm:text-base text-gray-700'>
            Here is what’s happening with your job search applications from July 19 - July 25.
          </p>
        </div>
        <div className="w-full sm:w-auto">
          <input
            className='border-2 w-full sm:w-auto px-4 py-2 rounded-lg'
            type='date'
            name='dob'
          />
        </div>
      </div>

      {/* Stats Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6'>
        {/* Total Applied + Interviewed */}
        <div>
        <div className='flex flex-col items-center mx-auto w-fit md:w-full sm:block py-6 px-6 border border-[#CCCCF5] rounded-lg mb-6'>
          <h4 className='text-lg font-bold text-[#25324B]'>Total Jobs Applied</h4>
          <h3 className='text-5xl sm:text-6xl font-bold text-[#25324B]'>45</h3>
        </div>

          <div className=' flex flex-col items-center mx-auto w-fit md:w-full sm:block py-6 px-6 border border-[#CCCCF5] rounded-lg'>
            <h4 className='text-lg font-bold text-[#25324B]'>Interviewed</h4>
            <h3 className='text-5xl sm:text-6xl font-bold text-[#25324B]'>18</h3>
          </div>
        </div>

        {/* Circular Chart */}
        <div className='flex flex-col items-center mx-auto w-fit md:w-full sm:block py-6 px-3 sm:px-6 border border-[#CCCCF5] rounded-lg'>
          <h4 className='text-lg font-bold text-[#25324B] mb-4'>Jobs Applied Status</h4>
          <div className='sm:flex  md:flex-row md:justify-between items-center gap-6'>
            {/* Circular Progress */}
            <div className="relative w-[100px] sm:w-[120px] md:w-[152px] mb-4 sm:mb-0 h-[100px] sm:h-[120px] md:h-[152px]">
              <div className="absolute inset-0 rounded-full bg-[conic-gradient(#4b4ce9_0deg_90deg,#e7e8fc_90deg_360deg)]"></div>
              <div className="absolute inset-[16%] bg-white rounded-full"></div>
            </div>

            {/* Labels */}
            <div className='flex flex-col gap-4'>
              <div className='flex items-center gap-4'>
                <div className='w-5 h-5 bg-[#4640DE] rounded-sm'></div>
                <div>
                  <p className='text-base sm:text-lg font-bold text-[#25324B]'>60%</p>
                  <p className='text-sm text-gray-700'>Unsuitable</p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <div className='w-5 h-5 bg-[#E9EBFD] rounded-sm'></div>
                <div>
                  <p className='text-base sm:text-lg font-bold text-[#25324B]'>40%</p>
                  <p className='text-sm text-gray-700'>Interviewed</p>
                </div>
              </div>
            </div>
          </div>
          <Link href="/" className='text-[#4640DE] text-sm sm:text-base font-semibold inline-block mt-6 hover:underline'>
            View All Applications
          </Link>
        </div>

        {/* Upcoming Interviews */}
        <div className='flex flex-col items-center mx-auto w-fit md:w-full sm:block py-6 px-6 border border-[#CCCCF5] rounded-lg'>
          <h4 className='text-lg font-bold text-[#25324B]'>Upcoming Interviews</h4>
          <div className='flex gap-2 items-center py-4 px-4 border-y border-[#CCCCF5] mt-6'>
            <p className='font-bold text-base sm:text-lg'>Today,</p>
            <p className='text-base sm:text-lg'>26 November</p>
          </div>
          <div className='mt-4 space-y-2'>
            <p className='text-sm sm:text-base'>10:00 AM</p>
            <p className='text-sm sm:text-base'>10:30 AM</p>
            <p className='text-sm sm:text-base'>11:00 AM</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashStatus
