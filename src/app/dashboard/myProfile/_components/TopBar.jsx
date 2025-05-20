import React from 'react';
import Link from 'next/link';

function TopBar() {
  return (
    <div className=''>
      <div className='flex gap-3 sm:gap-6 mt-4 md:mt-6 border-b-2 border-[#D6DDEB] mb-6'>
        <Link href="#" className='text-[#7C8493] text-sm font-bold focus:text-[#25324B] pb-2 focus:border-b-2 border-[#4640DE]'>My Profile</Link>
        <Link href="#" className='text-[#7C8493] text-sm font-bold focus:text-[#25324B] pb-2 focus:border-b-2 border-[#4640DE]'>Login Details</Link>
        <Link href="#" className='text-[#7C8493] text-sm font-bold focus:text-[#25324B] pb-2 focus:border-b-2 border-[#4640DE]'>Notifications</Link>
      </div>
      <div className='pb-4 border-b border-[#E4E4E7]'>
        <h3 className='font-bold text-sm mb-3'>Basic Information</h3>
        <p className='text-sm'>This is your personal information that you can update anytime.</p>
      </div>
    </div>
  )
}

export default TopBar;
 