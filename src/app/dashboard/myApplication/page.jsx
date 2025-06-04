import React from 'react';
import StuApplicationsHistory from './_components/StuApplicationsHistory';
import SideBar1 from '../_components/SideBar1';  
import DashHeader from '../_components/DashHeader';

function page() {
  return (
    <div className='flex min-h-screen gap-4'>
        <div className='md:bg-[#E9EBFD]'><SideBar1/></div>
        <div className='overflow-x-scroll md:w-full'>
            <DashHeader headertext="My Applications"/>
            <StuApplicationsHistory/>
        </div>
       
        
    </div>
  )
}

export default page
