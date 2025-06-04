import React from 'react';
import TopBar from './_components/TopBar';
import ProfileInfo from './_components/ProfileInfo';
import ProfileDetailsForm from './_components/ProfileDetailsForm';
import ProfileTypeFrom from './_components/ProfileTypeFrom';
import SideBar1 from '../_components/SideBar1';
import DashHeader from '../_components/DashHeader';




function page() {
  return (
    <div className='flex min-h-screen gap-4'>
       <div className='md:bg-[#E9EBFD]'><SideBar1/></div>
      <div className='md:w-full px-6 sm:px-0'>
        <DashHeader headertext="Settings"/>
         <TopBar/>
        <ProfileInfo/>
        <ProfileDetailsForm/>
        <ProfileTypeFrom/>
      </div>
    </div>
  )
}

export default page
