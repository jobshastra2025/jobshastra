"use client";
import React, { useState } from 'react';

const industries = [
  'Advertising (43)',
  'Business Service (4)',
  'Blockchain (5)',
  'Cloud (15)',
  'Consumer Tech (5)',
  'Education (34)',
  'Fintech (45)',
  'Gaming (33)',
  'Food & Beverage (5)',
  'Healthcare (3)',
  'Hostinng (5)',
  'Media (4)',
];

const companySizes = [
  '1–50 (25)',
  '51–150 (67)',
  '151–250 (45)',
  '251–500 (4)',
  '501–1000 (43)',
  '1000 – above (23)',
];

const BrouseFilter = () => {
  const [selectedIndustry, setSelectedIndustry] = useState([]);
  const [selectedSize, setSelectedSize] = useState(['251–500 (4)']); // Example: one selected

  const toggleSelection = (item, setSelected, selected) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  return (
    <aside className="w-full sm:w-64 px-4 py-6 text-sm text-[#0A0A14] font-medium">
      {/* Industry Filter */}
      <div className="mb-6">
        <h3 className="text-xs uppercase text-gray-500 mb-4 tracking-wider">Industry</h3>
        <div className="flex flex-col gap-3">
          {industries.map((industry) => (
            <label
              key={industry}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedIndustry.includes(industry)}
                onChange={() =>
                  toggleSelection(industry, setSelectedIndustry, selectedIndustry)
                }
                className="form-checkbox accent-purple-600 w-4 h-4"
              />
              <span className="text-[#0A0A14]">{industry}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Company Size Filter */}
      <div>
        <h3 className="text-xs uppercase text-gray-500 mb-4 tracking-wider">Company Size</h3>
        <div className="flex flex-col gap-3">
          {companySizes.map((size) => (
            <label
              key={size}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedSize.includes(size)}
                onChange={() => toggleSelection(size, setSelectedSize, selectedSize)}
                className="form-checkbox accent-purple-600 w-4 h-4"
              />
              <span className="text-[#0A0A14]">{size}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default BrouseFilter;
