// Note: Professional Information Page
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase'; 

const professionalInfoPage = () => {
  const router = useRouter();
  const [jobTitle, setJobTitle] = useState("");
  const [experience, setExperience] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [portfolioLink, setPortfolioLink] = useState("");
  const [skills, setSkills] = useState(""); 
  const [resume, setResume] = useState("");
  const [industryType, setIndustryType] = useState("");
  const [duration, setDuration] = useState("");
 
  const [noticePeriod, setNoticePeriod] = useState("");
  const [annualSalary, setAnnualSalary] = useState("");
  const [formerror, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!jobTitle || !experience || !companyName || !portfolioLink || !skills || !resume || !industryType || !duration  || !noticePeriod || !annualSalary) {
      setFormError("Please fill in all fields");
      return;
    }
    
    const { data, error } = await supabase
    .from("professionalinfo")
    .insert([{ jobTitle, experience, companyName, portfolioLink, skills, resume, industryType, duration, noticePeriod, annualSalary }])
    
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
    <div className='max-w-screen-xl pb-20   mx-auto '>
      <div className=' pt-10'>
        <div className=' pl-[50px]'>
          <div className='py-3'>
            <h4 className='text-[#202430] text-left pb-2 text-sm font-semibold'>Professional Details</h4>
            <p className='text-[#515B6F] text-left text-xs'>Enter your Professional details to get back by the Employers!</p>
          </div>

          
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='jobTitle' className='flex font-semibold'>Job Title *</label>
                <input
                  className='border-2 border-solid w-full px-5 py-2 my-3 rounded-lg'
                  type='text'
                  id='jobTitle'
                  name='jobTitle'
                  placeholder='Enter your Job Title'
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  required
                />
              </div>

              <div className='flex gap-10 w-[max-content]'>
                <div className='form-group'>
                  <label htmlFor='experience' className='flex font-semibold'>Experience *</label>
                  <input
                    className='border-2 border-solid w-full px-5 py-2 my-3 rounded-lg'
                    type='text'
                    id='experience'
                    name='experience'
                    placeholder='Enter your Experience'
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='companyName' className='flex font-semibold'>Company Name *</label>
                  <input
                    className='border-2 border-solid w-full px-5 py-2 my-3 rounded-lg'
                    type='text'
                    id='companyName'
                    name='companyName'
                    placeholder='Enter your Company Name'
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                  />
                </div>
              </div>
              {/* new */}
              <div className='flex gap-10 w-[max-content]'>
                <div className='form-group'>
                  <label htmlFor='industryType' className='flex font-semibold'>Industry Type*</label>
                  <input
                    className='border-2 border-solid w-full px-5 py-2 my-3 rounded-lg'
                    type='text'
                    id='industryType'
                    name='industryType'
                    placeholder='Industry Type'
                    value={industryType}
                    onChange={(e) => setIndustryType(e.target.value)}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='duration' className='flex font-semibold'>Duration *</label>
                  <input
                    className='border-2 border-solid w-full px-5 py-2 my-3 rounded-lg'
                    type='number'
                    id='duration'
                    name='duration'
                    placeholder='Duration'
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className='flex gap-10 w-[max-content]'>
                <div className='form-group'>
                  <label htmlFor='annualSalary' className='flex font-semibold'>Annual Salary *</label>
                  <input
                    className='border-2 border-solid w-full px-5 py-2 my-3 rounded-lg'
                    type='number'
                    id='annualSalary'
                    name='annualSalary'
                    placeholder='Enter your Salary'
                    value={annualSalary}
                    onChange={(e) => setAnnualSalary(e.target.value)}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='noticePeriod' className='flex font-semibold'>Notice period *</label>
                  <input
                    className='border-2 border-solid w-full px-5 py-2 my-3 rounded-lg'
                    type='number'
                    id='noticePeriod'
                    name='noticePeriod'
                    placeholder='Notice Period In Days'
                    value={noticePeriod}
                    onChange={(e) => setNoticePeriod(e.target.value)}
                    required
                  />
                </div>
              </div>
              {/* new */}
              <div className='flex gap-10 w-[max-content]'>
                <div className='form-group'>
                  <label htmlFor='resume' className='flex font-semibold'>Your Resume*</label>
                  <input
                    className='border-2 border-solid w-full px-5 py-2 my-3 rounded-lg'
                    type='url'
                    id='resume'
                    name='resume'
                    placeholder=' Your Resume Link'
                    value={resume}
                    onChange={(e) => setResume(e.target.value)}
                    required
                  />
                </div>
                
              </div>
              
              <div className='form-group'>
                <label htmlFor='skills' className='flex font-semibold'>skills *</label>
                <input className='border-2 w-full px-5 py-2 my-3 rounded-lg' 
                type='text' 
                id='skills' 
                name='skills' 
                placeholder='Enter your Skills' 
                value={skills} 
                onChange={(e) => setSkills(e.target.value)} required 
                />
              </div>
              <div className='form-group'>
                <label htmlFor='portfolioLink' className='flex font-semibold'>Portfolio Link *</label>
                <input className='border-2 w-full px-5 py-2 my-3 rounded-lg' 
                type='url' 
                id='portfolioLink' 
                name='portfolioLink' 
                placeholder='Enter your portfolio Link' 
                value={portfolioLink} 
                onChange={(e) => setPortfolioLink(e.target.value)}  required 
                />
              </div>

              <button type='submit' className='btn text-white bg-[#4A42A3] hover:bg-[#4A42A3] rounded-full text-sm px-4 py-2'>Save and Next</button>
                {formerror && <div className="text-red-500 mt-2">{formerror}</div>}
            </form>
         
        </div>
      </div>
    </div>
  );
};

export default professionalInfoPage;
