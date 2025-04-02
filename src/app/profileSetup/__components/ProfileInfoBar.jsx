"use client";
import Link from "next/link";

export default function ProfileInfoBar() {
    return(
        <div className="lg:max-w-screen-xl m-[30px] lg:m-[0px] lg:mx-auto">
            <div className='flex justify-between pb-2 border-b-[2px]'>

            <Link href="#" className='text-[#000000] focus:border-b-[2px] focus:border-[#000] font-semibold text-[10px] md:text-sm'>Personal Information</Link>
            <Link href="#" className='text-[#000000] focus:border-b-[2px] focus:border-[#000] font-semibold text-[10px] md:text-sm'>Professional Information</Link>    
            <Link href="#" className='text-[#000000] focus:border-b-[2px] focus:border-[#000] font-semibold text-[10px] md:text-sm'>Educational Information</Link>
            <Link href="#" className='text-[#000000] focus:border-b-[2px] focus:border-[#000] font-semibold text-[10px] md:text-sm'>Additional Information</Link>
                
            </div>

            <div className='py-3 border-b-[1px]'>
                <h4 className='text-[#202430] text-left pb-2 text-sm font-semibold'>Basic Information</h4>
                <p className='text-[#515B6F] text-left text-xs'>This is your personal information that you can update anytime.</p>
            </div>
        </div>
    )
}