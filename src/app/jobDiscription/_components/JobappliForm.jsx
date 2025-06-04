import React from 'react'
import Image from 'next/image';
import { MdAttachFile} from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import Link from 'next/link';

function JobappliForm() {
  return (
    <div className='w-full max-w-[600px] mx-auto bg-white shadow-lg rounded-lg p-5 md:p-8'>
        {/* Optional backdrop suggestion: fixed overflow-auto inset-0 bg-opacity-30 backdrop-blur-sm */}
        <RxCross1 className='ml-auto font-extrabold cursor-pointer' size={20} />
        
        <div className='space-y-4'>
            <h2 className='text-xl md:text-2xl font-bold'>Social Media Assistant</h2>
            
            <div>
            <h3 className='text-lg md:text-xl font-bold'>Submit your application</h3>
            <p className='text-[#515B6F] text-xs mt-2'>The following is required and will only be shared with Nomad</p>
            </div>

            <form className='space-y-5'>
            <div>
                <label htmlFor='full_name' className='block text-sm font-semibold'>Full Name *</label>
                <input
                className='border-2 w-full px-4 py-2 mt-2 rounded-lg text-sm'
                type='text'
                id='full_name'
                name='full_name'
                placeholder='Enter your Full Name'
                required
                />
            </div>

            <div>
                <label htmlFor='email' className='block text-sm font-semibold'>Email address *</label>
                <input
                className='border-2 w-full px-4 py-2 mt-2 rounded-lg text-sm'
                type='email'
                id='email'
                name='email'
                placeholder='Enter your Email address'
                required
                />
            </div>

            <div>
                <label htmlFor='phone' className='block text-sm font-semibold'>Phone number *</label>
                <input
                className='border-2 w-full px-4 py-2 mt-2 rounded-lg text-sm'
                type='tel'
                id='phone'
                name='phone'
                placeholder='Enter your Phone number'
                required
                />
            </div>

            <div>
                <label htmlFor='job_title' className='block text-sm font-semibold'>Current or previous job title</label>
                <input
                className='border-2 w-full px-4 py-2 mt-2 rounded-lg text-sm'
                type='text'
                id='job_title'
                name='job_title'
                placeholder='What’s your current or previous job title?'
                />
            </div>

            <div className='space-y-3'>
                <h3 className='text-lg font-bold'>LINKS</h3>

                <div>
                <label htmlFor='linkedIn' className='block text-sm font-semibold'>LinkedIn URL</label>
                <input
                    className='border-2 w-full px-4 py-2 mt-2 rounded-lg text-sm'
                    type='url'
                    id='linkedIn'
                    name='linkedIn'
                    placeholder='Link to your LinkedIn URL'
                />
                </div>

                <div>
                <label htmlFor='portfolio' className='block text-sm font-semibold'>Portfolio URL</label>
                <input
                    className='border-2 w-full px-4 py-2 mt-2 rounded-lg text-sm'
                    type='url'
                    id='portfolio'
                    name='portfolio'
                    placeholder='Link to your portfolio URL'
                />
                </div>

                <div>
                <label htmlFor='additionalInfo' className='block text-sm font-semibold'>Additional information</label>
                <textarea 
                    className='border-2 w-full px-4 py-2 mt-2 rounded-lg text-sm'
                    name='additionalInfo' 
                    id='additionalInfo'
                    placeholder='Add a cover letter or anything else you want to share'
                    rows={4}
                />
                </div>

                <div className='flex flex-col sm:flex-row justify-between text-xs text-[#515B6F]'>
                <p>Maximum 500 characters</p>
                <p>0 / 500</p>
                </div>

                <div className='space-y-2 flex flex-col sm:flex-row sm:items-center sm:justify-between'>
                    <div className=''>
                        <h3 className='font-bold text-lg'>Attach your resume</h3>
                    </div>
                    <div className='flex items-center gap-3 border-2 border-dashed border-[#4640DE] rounded-lg p-3'>
                        <label htmlFor='file' className='text-[#4640DE] cursor-pointer hover:underline text-xs flex items-center gap-1'>
                        <MdAttachFile className='text-xl' />
                        <span>Select File</span>
                        <input type='file' id='file' className='hidden' />
                        </label>
                        <h3 className='font-semibold text-sm sm:text-base'>Attach Resume/CV</h3>
                    </div>
                </div>

                <button
                type='submit'
                className='w-full text-white bg-[#4A42A3] hover:bg-[#3b3690] rounded-full mt-2 text-sm px-4 py-2 transition'
                >
                Submit Application
                </button>

                <div className='mt-4 text-xs text-center text-[#515B6F]'>
                <p>
                    By sending the request you confirm that you accept our
                    <Link href='/' className='text-[#4640DE] mx-1 underline'>Terms of Service</Link>
                    and
                    <Link href='/' className='text-[#4640DE] mx-1 underline'>Privacy Policy</Link>
                </p>
                </div>
            </div>
            </form>
        </div>
    </div>

  )
}

export default JobappliForm
