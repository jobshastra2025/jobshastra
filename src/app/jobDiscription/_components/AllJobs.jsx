import React from 'react';
import Link from 'next/link';

const jobs = [
  {
    id: 1,
    title: 'Social Media Assistant',
    company: 'Nomad',
    location: 'Hyderabad',
    logo: '/images/Company_Logo.png',
    tags: ['Full-Time', 'Marketing', 'Design'],
    applied: 5,
    capacity: 10,
  },
  {
    id: 2,
    title: 'Social Media Assistant',
    company: 'Netlify',
    location: 'Hyderabd',
    logo: '/images/Company_Logo.png',
    tags: ['Full-Time', 'Marketing', 'Design'],
    applied: 7,
    capacity: 10,
  },
  {
    id: 3,
    title: 'Brand Designer',
    company: 'Dropbox',
    location: 'banglore',
    logo: '/images/Company_Logo.png',
    tags: ['Full-Time', 'Marketing', 'Design'],
    applied: 2,
    capacity: 10,
  },
  {
    id: 4,
    title: 'Brand Designer',
    company: 'Maze',
    location: 'mumbai',
    logo: '/images/Company_Logo.png',
    tags: ['Full-Time', 'Marketing', 'Design'],
    applied: 10,
    capacity: 10,
  },
  {
    id: 5,
    title: 'Interactive Developer',
    company: 'Terraform',
    location: 'chennai',
    logo: '/images/Company_Logo.png',
    tags: ['Full-Time', 'Marketing', 'Design'],
    applied: 6,
    capacity: 10,
  },
  {
    id: 6,
    title: 'Interactive Developer',
    company: 'Udacity',
    location: 'Pune',
    logo: '/images/Company_Logo.png',
    tags: ['Full-Time', 'Marketing', 'Design'],
    applied: 3,
    capacity: 10,
  },
  {
    id: 7,
    title: 'HR Manager',
    company: 'Packer',
    location: 'Banglore',
    logo: '/images/Company_Logo.png',
    tags: ['Full-Time', 'Marketing', 'Design'],
    applied: 9,
    capacity: 10,
  },
  {
    id: 8,
    title: 'HR Manager',
    company: 'Webflow',
    location: 'Pune',
    logo: '/images/Company_Logo.png',
    tags: ['Full-Time', 'Marketing', 'Design'],
    applied: 4,
    capacity: 10,
  },
];

const tagStyles = {
  'Full-Time': 'bg-green-100 text-green-600',
  Marketing: 'bg-yellow-100 text-yellow-600',
  Design: 'bg-purple-100 text-purple-700 border border-purple-500',
};

const AllJobs = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-8 w-full">
      <div className="w-full mx-auto">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-3">
          <h2 className="text-2xl font-bold text-gray-800">All Jobs</h2>
          <Link
            href="#"
            className="text-purple-600 font-medium hover:underline flex items-center gap-1 text-sm"
          >
            Show all jobs <span>→</span>
          </Link>
        </div>

        <div className="space-y-4">
          {jobs.map((job) => {
            const percentage = (job.applied / job.capacity) * 100;

            return (
              <div
                key={job.id}
                className="bg-white p-4 sm:p-5 rounded shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-4 sm:gap-10 justify-between"
              >
                {/* Left content */}
                <div className="flex flex-col sm:flex-row gap-3 sm:items-start">
                  <div className="flex-shrink-0">
                    <img src={job.logo} className="w-12 h-12 object-contain" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">{job.title}</h3>
                    <p className="text-sm text-gray-500">{job.company} • {job.location}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs px-3 py-1 rounded-full font-medium ${tagStyles[tag]}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right content (Apply + Progress) */}
                <div className="w-full sm:w-40 flex flex-col md:justify-between">
                  <button className="w-full py-2 bg-[#4640DE] text-white text-sm rounded-md">
                    Apply
                  </button>

                  {/* 🔽 Progress bar START */}
                  <div className="mt-2">
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-400 transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      <span className="font-semibold text-indigo-600">{job.applied}</span> applied of{' '}
                      <span className="font-semibold">{job.capacity}</span> capacity
                    </p>
                  </div>
                  {/* 🔼 Progress bar END */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AllJobs;
