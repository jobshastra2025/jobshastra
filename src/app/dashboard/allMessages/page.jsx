import React from 'react';
import SideBar1 from '../_components/SideBar1';  
import DashHeader from '../_components/DashHeader';


function page() {
  return (
    <div className='flex min-h-screen gap-4'>
        <div className='md:bg-[#E9EBFD]'><SideBar1/></div>
        <div className='md:w-full'>
            <DashHeader headertext="Messages"/>           
        </div>
       
        
    </div>
  )
}

export default page
