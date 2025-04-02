
// new code 
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase'; // Adjust the import path as necessary


const ProfileDetails = () => {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState(""); 
  const [linkedin, setLinkedin] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [formerror, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !phoneNo || !gender || !location || !linkedin || !birthDate) {
      setFormError("Please fill in all fields");
      return;
    }
    
    const { data, error } = await supabase
    .from("personalinfo")
    .insert([{ fullName, email, phoneNo, gender, birthDate, location, linkedin }])
    
    if (error) {
      setFormError(error.message);
      return;
    }
    if (data) {
      console.log(data);
      setFormError(null);
      router.push('/');
        
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
            <h4 className='text-[#202430] text-left pb-2 text-sm font-semibold'>Personal Details</h4>
            <p className='text-[#515B6F] text-left text-xs'>Enter your personal details to get back by the Employers!</p>
          </div>

          
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='fullName' className='flex font-semibold'>Full Name *</label>
                <input
                  className='border-2 border-solid w-full px-5 py-2 my-3 rounded-lg'
                  type='text'
                  id='fullName'
                  name='fullName'
                  placeholder='Enter your Name'
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              <div className='md:flex gap-8 xl:gap-10 w-[max-content]'>
                <div className='form-group'>
                  <label htmlFor='phoneNo' className='flex font-semibold'>Phone phoneNo *</label>
                  <input
                    className='border-2 border-solid w-[80%] xl:w-full px-5 py-2 my-3 rounded-lg'
                    type='tel'
                    id='phoneNo'
                    name='phoneNo'
                    placeholder='+91 8888888888'
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='email' className='flex font-semibold'>Email *</label>
                  <input
                    className='border-2 border-solid w-[80%] xl:w-full  px-5 py-2 my-3 rounded-lg'
                    type='email'
                    id='email'
                    name='email'
                    placeholder='example@gmail.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              
              <div className='md:flex gap-10 xl:gap-20 w-[max-content]'>
                <div className='form-group'>
                  <label className='flex font-semibold'>birthDate of Birth</label>
                  <input
                    className='border-2 w-full px-5 py-2 my-3 rounded-lg'
                    type='date'
                    name='birthDate'
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label className='flex font-semibold'>Gender</label>
                  <select
                    name='gender'
                    className='border-2 w-full px-5 py-2 my-3 rounded-lg'
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value=''>Select your gender</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                  </select>
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='location' className='flex font-semibold'>Location *</label>
                <input className='border-2 w-full px-5 py-2 my-3 rounded-lg' 
                type='text' 
                id='location' 
                name='location' 
                placeholder='Enter your location' 
                value={location} 
                onChange={(e) => setLocation(e.target.value)} required 
                />
              </div>
              <div className='form-group'>
                <label htmlFor='linkedin' className='flex font-semibold'>LinkedIn Profile Link *</label>
                <input className='border-2 w-full px-5 py-2 my-3 rounded-lg' 
                type='linkedin'
                id='linkedin' 
                name='linkedin' 
                placeholder='Enter LinkedIn Profile Link' 
                value={linkedin} 
                onChange={(e) => setLinkedin(e.target.value)}
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

export default ProfileDetails;
