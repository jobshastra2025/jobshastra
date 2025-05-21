import React from 'react';
import SideBar1 from '../_components/SideBar1'; 
import DashHeader from '../_components/DashHeader';
import FAQSupportList from './_components/FAQSupportList';
import HelpSidebar from './_components/HelpSidebar';

function page() {
  return (
    <div className='flex min-h-screen gap-4'>
      
      <div className='md:bg-[#E9EBFD]'><SideBar1/></div>
      <div className='overflow-x-scroll md:w-full'>
        <DashHeader headertext="Help Center"/>
        <div className='sm:flex'>
            <HelpSidebar/>
            <FAQSupportList/>
            
        </div>
      </div>
    </div>
  )
}

export default page
