"use client";
import React, { useEffect, useState } from 'react';
import { Plus, Pencil } from 'lucide-react';

const ExperienceSection = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  // Static local array to simulate dynamic fetch
  const experienceData = [
    {
      id: 1,
      title: "Inspiring Wave",
      company: "Inspiring Wave",
      type: "Full-Time",
      duration: "May 2023 – Present (2y 1m)",
      location: "Hyderabad, India",
      description:
        "Developed digital marketing strategies, activation plans, proposals, contests and promotions for client initiatives",
      logo: "/images/Company_Logo.png",
    },
    {
      id: 2,
      title: "Google UX Certification",
      company: "Google",
      type: "Full-Time",
      duration: "Jun 2022 – May 2023",
      location: "Hyderabad, India",
      description:
        "Developed digital marketing strategies, activation plans, proposals, contests and promotions for client initiatives",
      logo: "/images/Company_Logo.png",
    },
  ];

  useEffect(() => {
    // Simulate fetching
    setTimeout(() => {
      setExperiences(experienceData);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white border rounded-lg p-6 shadow-sm mt-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Experiences</h2>
        <button className="p-2 border rounded-md text-indigo-600 hover:bg-indigo-50">
          <Plus size={16} />
        </button>
      </div>

      {loading ? (
        <p className="text-sm text-gray-500">Loading...</p>
      ) : (
        <>
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className={`flex flex-col md:flex-row gap-4 pb-6 mt-4 ${
                idx !== experiences.length - 1 ? "border-b" : ""
              }`}
            >
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-12 h-12 rounded-full object-contain"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start ">
                  <div>
                    <h3 className="font-semibold text-gray-800">{exp.title}</h3>
                    <p className="text-sm text-gray-600">
                      {exp.company} • {exp.type} • {exp.duration}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">{exp.location}</p>
                  </div>
                  <button className="p-1.5 border rounded-md text-indigo-600 hover:bg-indigo-50">
                    <Pencil size={14} />
                  </button>
                </div>
                <p className="text-sm text-gray-700 mt-2">{exp.description}</p>
              </div>
            </div>
          ))}

          <div className="text-center mt-4">
            <button className="text-indigo-600 text-sm font-medium hover:underline">
              Show 3 more experiences
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ExperienceSection;
