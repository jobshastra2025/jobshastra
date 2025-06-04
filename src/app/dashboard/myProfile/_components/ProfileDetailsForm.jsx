

import React from 'react';

const ProfileDetailsForm = () => {
  return (
    <section className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200  mx-auto w-full sm:flex gap-40">
      <h2 className="text-lg font-semibold text-gray-700 mb-6">Personal Details</h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Full Name */}
        <div className="flex flex-col">
          <label htmlFor="fullName" className="text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Vivek Bhombade"
            className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+91 8888888888"
            className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="vivek.example@gmail.com"
            className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Date of Birth */}
        <div className="flex flex-col">
          <label htmlFor="dob" className="text-sm font-medium text-gray-700 mb-1">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <input
            id="dob"
            type="date"
            className="border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Gender */}
        <div className="flex flex-col">
          <label htmlFor="gender" className="text-sm font-medium text-gray-700 mb-1">
            Gender <span className="text-red-500">*</span>
          </label>
          <select
            id="gender"
            className="border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
      </form>
    </section>
  );
};

export default ProfileDetailsForm;
