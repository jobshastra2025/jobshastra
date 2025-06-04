import React from 'react';
import SideBar1 from '../_components/SideBar1';  
import DashHeader from '../_components/DashHeader';
import JobSearchBox from '@/app/jobDiscription/_components/JobSearchBox';
import BrouseFilter from './_components/BrouseFilter';
import AllCompanies from './_components/AllCompanies';

function page() {
  return (
    <div className='flex min-h-screen gap-4'>
        <div className='md:bg-[#E9EBFD]'><SideBar1/></div>
        <div className='md:w-full'>
            <DashHeader headertext="Browse Companies"/>
            <div className='sm:w-full'><JobSearchBox/></div>
            <div className='flex flex-col md:flex-row gap-4'>
              <div><BrouseFilter/></div>
              <div><AllCompanies/></div>
            </div>
            
            
        </div>
       
        
    </div>
  )
}

export default page
