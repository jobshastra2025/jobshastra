import React from 'react';
import SideBar1 from '../../_components/SideBar1';
import TopBar from '../_components/TopBar';
import DashHeader from '../../_components/DashHeader';
import LoginEmailUpdate from './_components/LoginEmailUpdate';
import LoginPasswordUpdate from './_components/LoginPasswordUpdate';

function page() {
  return (
    <div className='flex min-h-screen gap-4'>
      <div className='md:bg-[#E9EBFD]'><SideBar1/></div>
      <div className='md:w-full px-6 sm:px-0'>
        <DashHeader headertext="Settings"/>
        <TopBar/>
        <LoginEmailUpdate/>
        <LoginPasswordUpdate/>
      </div>
    </div>
  )
}

export default page
