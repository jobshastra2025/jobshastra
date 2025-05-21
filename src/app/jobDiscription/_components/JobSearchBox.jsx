"use client";

// components/SearchBar.js
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FiMapPin } from 'react-icons/fi';

export default function SearchBar() {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('Hyderabad');

  const handleSearch = () => {
    console.log('Searching for:', keyword, 'in', location);
    // Implement your search logic or navigation
  };

  return (
    <div className="w-full mx-auto px-4 py-4">
      <div className="flex flex-col sm:flex-row bg-white shadow-md rounded-xl overflow-hidden py-3 px-2 mt-5 border border-[#D6DDEB]">
        {/* Keyword Search */}
        <div className="flex items-center flex-1 px-4 py-2 border-b sm:border-b-0 sm:border-r">
          <FiSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Job title or keyword"
            className="w-full outline-none text-sm border-b border-[#D6DDEB] pb-2 focus:border-indigo-500"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>

        {/* Location Search */}
        <div className="flex items-center flex-1 px-4 py-2 border-b sm:border-b-0 sm:border-r">
          <FiMapPin className="text-gray-400 mr-2" />
          <input
            type="text"
            className="w-full outline-none text-sm border-b border-[#D6DDEB] pb-2 focus:border-indigo-500"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-indigo-600 text-white px-6 py-3 text-sm font-medium hover:bg-indigo-700 transition"
        >
          Search
        </button>
      </div>
      <div className='mt-4'>
        <p className='text-sm'>Popular : UI Designer, UX Researcher, Android, Admin</p>
      </div>
    </div>
  );
}
