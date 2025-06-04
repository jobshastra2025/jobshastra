
// new code 
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { redirect, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase'; // Adjust the import path as necessary
import { createClient } from '@/utils/supabase/client'

const CompanyDeatils = () => {
  const router = useRouter();
  const supabase = createClient()
  
  const [company_name, setCompany_name] = useState("");
  const [industry, setIndustry] = useState("");
  const [company_size, setCompany_size] = useState("");
  const [location, setLocation] = useState(""); 
  const [companyurl, setCompanyurl] = useState("");
  const [formerror, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!company_name || !industry || !company_size || !location || !companyurl ) {
      setFormError("Please fill in all fields");
      return;
    }

  
    // Get current authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
  
    if (userError || !user) {
      setFormError("Unable to get user info");
      console.error(userError);
      router.push('/jobseeker/login'); // Redirect to login if user is not authenticated
      return;
    }
    // if(error) throw new Error(error.message);

    const { data, error } = await supabase
      .from("profile")
      .insert([
        {
          user_id: user.id,  // Assuming your table has a `user_id` column
          company_name,
          industry,
          company_size,
          location,
          companyurl,
        },
      ]);
  
    if (error) {
      setFormError(error.message);
      return;
    }

    router.push('/profileSetup/professionalInfo');
    
    // Optionally, you can redirect or show a success message here
    if (data) {
      console.log(data);
      setFormError(null);
      // redirect ('/');
    }
  };

  return (
    <div className='lg:max-w-screen-xl pb-20 m-[30px] lg:m-[0px] lg:mx-auto '>
      <div className='grid grid-cols-1 lg:grid-cols-2 lg:pt-10'>
        <div className='pb-10'>
          <div className='pt-[20px] lg:pt-[40px]'>
            <h4 className='text-[#202430] text-left pb-2 text-sm font-semibold'>Profile Photo</h4>
            <p className='text-[#515B6F] text-left text-xs'>This image will be shown publicly as your profile picture, helping recruiters recognize you!</p>
          </div>
          <div className='px-[70px] pt-7'>
            <div className="flex justify-center items-center">
                <Image className='w-50' src='/images/profile_img.png' width={100} height={100} alt='Profile Upload' />
            </div>
            <div className='border-dashed border-2 border-[#4640DE]   py-[60px] mt-10'>
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

        <div className='lg:border-l-[2px] lg:pl-[50px]'>
          <div className='py-3'>
            <h4 className='text-[#202430] text-left pb-2 text-sm font-semibold'>Company Information</h4>
            <p className='text-[#515B6F] text-left text-xs'>Enter your Company Information to get back by the Employers!</p>
          </div>

          
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='company_name' className='flex text-md font-semibold'>Full Name *</label>
                <input
                  className='border-2 text-md border-solid w-full px-5 py-2 my-3 rounded-lg'
                  type='text'
                  id='company_name'
                  name='company_name'
                  placeholder='Enter your Comapany Name'
                  value={company_name}
                  onChange={(e) => setCompany_name(e.target.value)}
                  required
                />
              </div>

              <div className='md:flex gap-8 xl:gap-10 w-[max-content]'>
                <div className='form-group'>
                  <label htmlFor='company_size' className='flex text-md font-semibold'>Company Size *</label>
                  <input
                    className='border-2 text-md border-solid w-[80%] xl:w-full px-5 py-2 my-3 rounded-lg'
                    type='number'
                    id='company_size'
                    name='company_size'
                    placeholder='+91 8888888888'
                    value={company_size}
                    onChange={(e) => setCompany_size(e.target.value)}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='industry' className='flex text-md font-semibold'>Industry *</label>
                  <input
                    className='border-2 text-md border-solid w-[80%] xl:w-full  px-5 py-2 my-3 rounded-lg'
                    type='text'
                    id='industry'
                    name='industry'
                    placeholder='example@gmail.com'
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className='form-group'>
                <label htmlFor='location' className='flex text-md font-semibold'>Location *</label>
                <input className='border-2 text-md w-full px-5 py-2 my-3 rounded-lg' 
                type='text' 
                id='location' 
                name='location' 
                placeholder='Enter your location' 
                value={location} 
                onChange={(e) => setLocation(e.target.value)} required 
                />
              </div>
              <div className='form-group'>
                <label htmlFor='companyurl' className='flex text-md font-semibold'>Company Profile Link *</label>
                <input className='border-2 text-md w-full px-5 py-2 my-3 rounded-lg' 
                type='companyurl'
                id='companyurl' 
                name='companyurl' 
                placeholder='Enter companyurl Profile Link' 
                value={companyurl} 
                onChange={(e) => setCompanyurl(e.target.value)}
                />
              </div>

              <div className='flex justify-center lg:justify-end'>
                <button type='submit' className='btn text-white bg-[#4A42A3] hover:bg-[#4A42A3] rounded-full text-sm px-4 py-2'>Save and Next</button>
              </div>
              {formerror && <div className="text-red-500 mt-2">{formerror}</div>}
              
            </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyDeatils;
