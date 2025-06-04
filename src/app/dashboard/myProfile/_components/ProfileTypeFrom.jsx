"use client";
import React, { useState } from 'react';

const ProfileTypeFrom = () => {
  const [accountType, setAccountType] = useState('jobseeker');

  return (
    <section className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200 mx-auto w-full mt-6 ">
        <div className='sm:flex gap-20'>
            <div>
                <h2 className="text-lg font-semibold text-gray-700 mb-1">Account Type</h2>
                <p className="text-sm text-gray-500 mb-5">You can update your account type</p>
            </div>

            <div className="space-y-4">
                {/* Job Seeker Option */}
                <label
                htmlFor="jobseeker"
                className={`flex items-start p-4 border rounded-md cursor-pointer ${
                    accountType === 'jobseeker'
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-300'
                }`}
                >
                <input
                    type="radio"
                    id="jobseeker"
                    name="accountType"
                    value="jobseeker"
                    checked={accountType === 'jobseeker'}
                    onChange={(e) => setAccountType(e.target.value)}
                    className="mt-1 mr-4 accent-indigo-600"
                />
                <div>
                    <p className="text-sm font-medium text-gray-700">Job Seeker</p>
                    <p className="text-sm text-gray-500">Looking for a job</p>
                </div>
                </label>

                {/* Employer Option */}
                <label
                htmlFor="employer"
                className={`flex items-start p-4 border rounded-md cursor-pointer ${
                    accountType === 'employer'
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-300'
                }`}
                >
                <input
                    type="radio"
                    id="employer"
                    name="accountType"
                    value="employer"
                    checked={accountType === 'employer'}
                    onChange={(e) => setAccountType(e.target.value)}
                    className="mt-1 mr-4 accent-indigo-600"
                />
                <div>
                    <p className="text-sm font-medium text-gray-700">Employer</p>
                    <p className="text-sm text-gray-500">Hiring, sourcing candidates, or posting a jobs</p>
                </div>
                </label>
                
            </div>
      </div>
        <div className='flex justify-end mt-3'>
            <button className='p-4 bg-[#4640DE] '>Save Profile</button>
        </div>
    </section>
  );
};

export default ProfileTypeFrom;
