"use client";
import React, { useEffect, useState } from 'react';
import { Pencil } from 'lucide-react';

const AboutMeSection = () => {
  const [aboutData, setAboutData] = useState({
    introduction: '',
    experience: '',
  });
  const [loading, setLoading] = useState(true);

  // Simulated static data (as an array)
  const staticAboutArray = [
    {
      introduction:
        "I’m a product designer + fBrand designer currently working remotely at IW from beautiful Hyderabad, India. I’m passionate about designing digital products that have a positive impact on the world.",
      experience:
        "For 2 years, I’ve specialised in interface, experience & interaction design as well as working in user research and product strategy for product agencies, big tech companies & start-ups.",
    },
  ];

  // Simulate fetching from local array
  useEffect(() => {
    setTimeout(() => {
      const data = staticAboutArray[0];
      setAboutData(data);
      setLoading(false);
    }, 800); // simulate delay
  }, []);

  return (
    <div className=" flex justify-center items-start  md:p-8">
      <div className="w-full max-w-4xl bg-white border rounded-lg p-6 shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-lg font-semibold text-gray-800">About Me</h2>
          <button className="p-2 border rounded-md text-indigo-600 hover:bg-indigo-50">
            <Pencil size={16} />
          </button>
        </div>
        {loading ? (
          <p className="text-sm text-gray-500">Loading...</p>
        ) : (
          <div className="space-y-4">
            <p className="text-sm text-gray-700">{aboutData.introduction}</p>
            <p className="text-sm text-gray-700">{aboutData.experience}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutMeSection;
