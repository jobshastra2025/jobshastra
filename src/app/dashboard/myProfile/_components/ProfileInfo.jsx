import React from 'react';
import Image from 'next/image';

function ProfileInfo() {
  return (
    <div className=''>
      <div className='pb-4 border-b border-[#E4E4E7]'>
        <h3 className='font-bold text-sm mb-3'>Basic Information</h3>
        <p className='text-sm'>This is your personal information that you can update anytime.</p>
      </div>
      <div className='sm:flex gap-20 py-8 border-b border-[#E4E4E7]'>
         <div className='md:w-[300px]'>
            <h3 className='font-bold text-sm mb-3'>Profile Photo</h3>
            <p className='text-sm'>This image will be shown publicly as your profile picture, it will help recruiters recognize you!</p>
        </div>
        <div className='sm:flex gap-6 '>
            <div className="flex justify-center items-center mb-3 sm:mb-0">
                <Image className='w-50' src='/images/profile_img.png' width={100} height={100} alt='Profile Upload' />
            </div>
            <div className='border-dashed border-2 border-[#4640DE] py-[40px] px-[50px]'>
                <div className="flex justify-center items-center">
                    <Image className='w-10' src='/images/upload_logo.png' width={40} height={40} alt='Upload Icon' />
                </div>
                    
                <div className='flex justify-center items-center gap-1'>
                    <input type='file' id='file' className='hidden' />
                    <label htmlFor='file' className='text-[#4640DE] cursor-pointer hover:underline text-center text-xs'>Click to replace</label>
                    <p className='text-[#515B6F] text-center text-xs'>or drag and drop</p>
                </div>
                      
                <p className='text-[#515B6F] text-center text-xs'>SVG, PNG, JPG, or GIF (max. 400x400px)</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;
