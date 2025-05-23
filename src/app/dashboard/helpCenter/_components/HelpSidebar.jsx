import React from 'react';
import { Search } from 'lucide-react';

const HelpSidebar = () => {
  return (
    <div className="w-full max-w-xs px-4 py-6 space-y-6">
      {/* Search Box */}
      <div>
        <label className="block text-sm text-gray-500 mb-2">
          Type your question or search keyword
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      {/* Menu Links */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-indigo-600">Getting Started</h3>
        <hr className="border-gray-200" />
        <ul className="text-sm space-y-3 text-gray-700">
          <li className="hover:text-indigo-600 cursor-pointer">My Profile</li>
          <li className="hover:text-indigo-600 cursor-pointer">Applying for a job</li>
          <li className="hover:text-indigo-600 cursor-pointer">Job Search Tips</li>
          <li className="hover:text-indigo-600 cursor-pointer">Job Alerts</li>
        </ul>
      </div>

      {/* Support Box */}
      <div className="bg-indigo-600 rounded-lg p-4 text-white">
        <h4 className="text-sm font-semibold">Didn't find what you were looking for?</h4>
        <p className="text-sm mt-1 mb-4">Contact our customer service</p>
        <button className="bg-white text-indigo-600 font-semibold text-sm px-4 py-2 rounded-md hover:bg-indigo-100 transition">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default HelpSidebar;
