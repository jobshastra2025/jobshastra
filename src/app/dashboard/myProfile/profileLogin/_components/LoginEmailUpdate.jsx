"use client";
import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react'; // Ensure you have lucide-react installed

const LoginEmailUpdate = () => {
  const [newEmail, setNewEmail] = useState('');
  const currentEmail = 'sai.example@email.com';
  const isVerified = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🔒 Add API or logic to update email here
    alert(`Email update requested: ${newEmail}`);
  };

  return (
    <section className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200 mx-auto w-full mt-6">
        <div className='sm:flex gap-20'>
            <div>
                <h2 className="text-lg font-semibold text-gray-700 mb-1">Update Email</h2>
                <p className="text-sm text-gray-500 mb-4">Update your email address to make sure it is safe</p>
            </div>
            <div>
                <div className="mb-6">
                    <p className="text-sm text-gray-800 flex items-center gap-2">
                    <span className="font-medium">{currentEmail}</span>
                    {isVerified && <CheckCircle size={16} className="text-green-500" />}
                    </p>
                    {isVerified && <p className="text-sm text-gray-500">Your email address is verified.</p>}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Update Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your new email"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    </div>

                    <button
                    type="submit"
                    className="bg-indigo-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-indigo-700 transition"
                    >
                    Update Email
                    </button>
                </form>
            </div>
      </div>
    </section>
  );
};

export default LoginEmailUpdate;
