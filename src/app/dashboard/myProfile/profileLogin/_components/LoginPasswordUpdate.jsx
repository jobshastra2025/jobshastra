"use client";
import React, { useState } from 'react';

const LoginPasswordUpdate = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🔐 Add password change logic here
    alert('Password changed (mock)');
  };

  return (
    <section className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200 mx-auto w-full mt-6">
      <div className='sm:flex gap-20'>
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-1">New Password</h2>
          <p className="text-sm text-gray-500 mb-4">Manage your password to make sure it is safe</p>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Old Password
              </label>
              <input
                type="password"
                id="oldPassword"
                placeholder="Enter your old password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
                minLength={8}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <p className="text-xs text-gray-500 mt-1">Minimum 8 characters</p>
            </div>

            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                placeholder="Enter your new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                minLength={8}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <p className="text-xs text-gray-500 mt-1">Minimum 8 characters</p>
            </div>

            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-indigo-700 transition"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
      <div className='flex justify-end mt-4'>
        <button className='text-sm text-[#FF6550] font-bold'>Delete Account?</button>
      </div>
    </section>
  );
};

export default LoginPasswordUpdate;
