"use client";
import React, { useEffect, useState } from 'react';
import { Plus, Pencil } from 'lucide-react';

const SkillsSection = () => {
  const [skills, setSkills] = useState([]);

  const skillData = [
    "Communication",
    "Analytics",
    "Creative Thinking",
    "Content Planning",
    "User Flows"
  ];

  useEffect(() => {
    // Simulate async fetch
    setTimeout(() => {
      setSkills(skillData);
    }, 200);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white border rounded-lg p-6 shadow-sm mt-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Skills</h2>
        <div className="flex gap-2">
          <button className="p-2 border rounded-md text-indigo-600 hover:bg-indigo-50">
            <Plus size={16} />
          </button>
          <button className="p-2 border rounded-md text-indigo-600 hover:bg-indigo-50">
            <Pencil size={16} />
          </button>
        </div>
      </div>

      {/* Skills List */}
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-sm bg-indigo-50 text-indigo-600 font-medium rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
