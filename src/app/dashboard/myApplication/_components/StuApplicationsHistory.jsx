"use client";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const applications = [
  {
    logo: '/images/Company_Logo.png',
    company: "Nomad",
    role: "Social Media Assistant",
    date: "24 July 2024",
    status: "In Review",
    statusColor: "border-orange-400 text-orange-500",
  },
  {
    logo: '/images/Company_Logo.png',
    company: "Udacity",
    role: "Social Media Assistant",
    date: "20 July 2024",
    status: "Shortlisted",
    statusColor: "border-green-300 text-green-400",
  },
  {
    logo: '/images/Company_Logo.png',
    company: "Packer",
    role: "Social Media Assistant",
    date: "16 July 2024",
    status: "Offered",
    statusColor: "border-indigo-400 text-indigo-500",
  },
  {
    logo: '/images/Company_Logo.png',
    company: "Divvy",
    role: "Social Media Assistant",
    date: "14 July 2024",
    status: "Interviewing",
    statusColor: "border-orange-400 text-orange-500",
  },
  {
    logo: '/images/Company_Logo.png',
    company: "DigitalOcean",
    role: "Social Media Assistant",
    date: "10 July 2024",
    status: "Unsuitable",
    statusColor: "border-red-400 text-red-500",
  },
];

export default function StuApplicationsHistory() {
  return (
    <div className="p-4 sm:p-6 space-y-6 font-sans max-w-7xl mx-auto">
      <h1 className="text-xl sm:text-2xl font-bold">Applications History</h1>

      <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <input
          type="text"
          placeholder="Search"
          className="w-full sm:w-1/3 border border-gray-300 rounded px-3 py-2"
        />
        <button className="w-full sm:w-auto border border-gray-300 rounded px-4 py-2">
          Filter
        </button>
      </div>

      <div className="overflow-x-auto bg-white shadow-md rounded-md">
        <table className="min-w-full text-left border-separate border-spacing-y-2">
          <thead className="bg-gray-50">
            <tr className="text-gray-500 text-sm sm:text-base">
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Company Name</th>
              <th className="px-4 py-2">Roles</th>
              <th className="px-4 py-2">Date Applied</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr
                key={index}
                className="bg-white rounded-md shadow-sm text-sm sm:text-base"
              >
                <td className="px-4 py-2 align-middle">{index + 1}</td>

                <div className="flex gap-3 px-4 py-2 font-medium align-middle w-max">
                  <div className="flex-shrink-0">
                    <img src={app.logo} className="w-12 h-12 object-contain" />
                  </div>
                  <h3 className="flex items-center justify-center">{app.company}</h3>
                  {/* <td className="px-4 py-2 font-medium align-middle">
                  {app.company}
                  </td> */}
                </div>
                

              {/* new for the logo */}
              

                <td className="px-4 py-2 align-middle">{app.role}</td>
                <td className="px-4 py-2 align-middle">{app.date}</td>
                <td className="px-4 py-2 align-middle">
                  <span
                    className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium border ${app.statusColor}`}
                  >
                    {app.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap justify-center items-center space-x-1 sm:space-x-2 pt-4">
        <button className="p-2 border rounded hover:bg-gray-100">
          <ChevronLeft className="h-4 w-4" />
        </button>
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            className={`px-3 py-1 text-sm rounded ${
              num === 1
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {num}
          </button>
        ))}
        <span className="px-2 text-gray-500">...</span>
        <button className="p-2 border rounded hover:bg-gray-100">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
