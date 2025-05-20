"use client";
import { useState } from "react";

const filterData = [
  {
    title: "Type of Employment",
    options: ["Full-time", "Part-Time", "Remote", "Internship", "Contract"],
    counts: [3, 5, 2, 24, 3],
  },
  {
    title: "Categories",
    options: [
      "Design",
      "Sales",
      "Marketing",
      "Business",
      "Human Resource",
      "Finance",
      "Engineering",
      "Technology",
    ],
    counts: [24, 3, 3, 3, 6, 4, 4, 5],
  },
  {
    title: "Job Level",
    options: [
      "Entry Level",
      "Mid Level",
      "Senior Level",
      "Director",
      "VP or Above",
    ],
    counts: [57, 3, 5, 12, 8],
  },
  {
    title: "Salary Range",
    options: [
      "$700 - $1000",
      "$1000 - $1500",
      "$1500 - $2000",
      "$3000 or above",
    ],
    counts: [4, 6, 10, 4],
  },
];

export default function JobFilters() {
  const [selectedFilters, setSelectedFilters] = useState({});

  const toggleOption = (section, option) => {
    setSelectedFilters((prev) => {
      const key = `${section}-${option}`;
      const updated = { ...prev };
      if (updated[key]) {
        delete updated[key];
      } else {
        updated[key] = true;
      }
      return updated;
    });

    // for the Progress bar
  };

  
  

  return (
    <div className="w-full lg:max-w-xs px-4 py-6  bg-white rounded-xl shadow-md">
      {filterData.map((filterSection, idx) => (
        <div key={idx}>
          <h3 className="text-sm font-semibold text-gray-800 mb-2">
            {filterSection.title}
          </h3>
          <div className="space-y-2">
            {filterSection.options.map((option, optIdx) => {
              const key = `${filterSection.title}-${option}`;
              const isChecked = selectedFilters[key];
              return (
                <label
                  key={optIdx}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={isChecked || false}
                    onChange={() =>
                      toggleOption(filterSection.title, option)
                    }
                    className="accent-indigo-600 w-4 h-4"
                  />
                  <span className="text-sm text-gray-700">
                    {option} ({filterSection.counts[optIdx]})
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
