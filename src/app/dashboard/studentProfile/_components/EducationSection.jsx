"use client";
import React, { useEffect, useState } from 'react';
import { Plus, Pencil } from 'lucide-react';

const EducationSection = () => {
  const [educations, setEducations] = useState([]);
  const [loading, setLoading] = useState(true);

  const educationData = [
    {
      id: 1,
      institute: "GCET",
      degree: "Undergraduate degree, CSE.",
      years: "2018 – 2022",
      description:
        "As an Applied Psychologist in the field of Consumer and Society, I am specialized in creating business opportunities by observing, analysing, researching and changing behaviour.",
      logo: "/images/Company_Logo.png",
    },
    {
      id: 2,
      institute: "Example",
      degree: "Diploma, in CME",
      years: "20016 – 2019",
      description:
        "Developed skills in mechanical engineering and practical lab work focused on technical drawing, fabrication, and measurements.",
      logo: "/images/Company_Logo.png",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setEducations(educationData);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white border rounded-lg p-6 shadow-sm mt-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Educations</h2>
        <button className="p-2 border rounded-md text-indigo-600 hover:bg-indigo-50">
          <Plus size={16} />
        </button>
      </div>

      {loading ? (
        <p className="text-sm text-gray-500">Loading...</p>
      ) : (
        <>
          {educations.map((edu, idx) => (
            <div
              key={edu.id}
              className={`flex flex-col md:flex-row gap-4 pb-6 ${
                idx !== educations.length - 1 ? "border-b" : ""
              }`}
            >
              <img
                src={edu.logo}
                alt={edu.institute}
                className="w-12 h-12 rounded-full object-contain"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-800">{edu.institute}</h3>
                    <p className="text-sm text-gray-600">{edu.degree}</p>
                    <p className="text-sm text-gray-500 mt-1">{edu.years}</p>
                  </div>
                  <button className="p-1.5 border rounded-md text-indigo-600 hover:bg-indigo-50">
                    <Pencil size={14} />
                  </button>
                </div>
                <p className="text-sm text-gray-700 mt-2">{edu.description}</p>
              </div>
            </div>
          ))}

          <div className="text-center mt-4">
            <button className="text-indigo-600 text-sm font-medium hover:underline">
              Show 2 more educations
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default EducationSection;
