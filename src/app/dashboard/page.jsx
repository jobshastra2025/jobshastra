import React from 'react'
import DashHeader from './_components/DashHeader'
import DashStatus from './_components/DashStatus'
import DashHistory from './_components/DashHistory'
import SideBar1 from './_components/SideBar1'


function page() {
  return (
    <div className='flex min-h-screen '>
        <div className='md:bg-[#E9EBFD]'>
          <SideBar1/>
        </div>
        <div className="w-full p-4">
          <DashHeader headertext="Dashboard"/>
          <DashStatus/>
          <DashHistory/>
        </div>
        
    </div>
    
  )
}

export default page
