import React from 'react';
import SideBar1 from '../_components/SideBar1';  
import DashHeader from '../_components/DashHeader';
import AboutMeSection from './_components/AboutMeSection';
import ExperienceSection from './_components/ExperienceSection';
import EducationSection from './_components/EducationSection';
import SkillsSection from './_components/SkillsSection';
import ContactAndSocial from './_components/ContactAndSocial';

function page() {
  return (
    <div className='flex min-h-screen gap-4'>
        <div className='md:bg-[#E9EBFD]'><SideBar1/></div>
        <div className='md:w-full'>
            <DashHeader headertext="My Profile"/> 
           <div className='sm:flex min-h-screen gap-4 mt-4'>
                <div>
                    <AboutMeSection/>
                    <ExperienceSection/>
                    <EducationSection/>
                    <SkillsSection/>
                </div>
                <div>
                    <ContactAndSocial/>
                </div>
           </div>
        </div>
       
        
    </div>
  )
}

export default page
