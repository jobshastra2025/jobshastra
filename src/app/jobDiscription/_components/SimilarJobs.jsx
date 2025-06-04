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
  },
  {
    id: 2,
    title: 'Social Media Assistant',
    company: 'Netlify',
    location: 'Hyderabd',
    logo: '/images/Company_Logo.png',
    tags: ['Full-Time', 'Marketing', 'Design'],
  },
  {
    id: 3,
    title: 'Brand Designer',
    company: 'Dropbox',
    location: 'banglore',
    logo: '/images/Company_Logo.png',
    tags: ['Full-Time', 'Marketing', 'Design'],
  },
  {
    id: 4,
    title: 'Brand Designer',
    company: 'Maze',
    location: 'mumbai',
    logo: '/images/Company_Logo.png',
    tags: ['Full-Time', 'Marketing', 'Design'],
  },
  {
    id: 5,
    title: 'Interactive Developer',
    company: 'Terraform',
    location: 'chennai',
    logo: '/images/Company_Logo.png',
    tags: ['Full-Time', 'Marketing', 'Design'],
  },
  {
    id: 6,
    title: 'Interactive Developer',
    company: 'Udacity',
    location: 'Pune',
    logo: '/images/Company_Logo.png',
    tags: ['Full-Time', 'Marketing', 'Design'],
  },
  {
    id: 7,
    title: 'HR Manager',
    company: 'Packer',
    location: 'Banglore',
    logo: '/images/Company_Logo.png',
    tags: ['Full-Time', 'Marketing', 'Design'],
  },
  {
    id: 8,
    title: 'HR Manager',
    company: 'Webflow',
    location: 'Pune',
    logo: '/images/Company_Logo.png',
    tags: ['Full-Time', 'Marketing', 'Design'],
  },
]

const tagStyles = {
  'Full-Time': 'bg-green-100 text-green-600',
  Marketing: 'bg-yellow-100 text-yellow-600',
  Design: 'bg-purple-100 text-purple-700 border border-purple-500',
}

const SimilarJobs = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Similar Jobs</h2>
          <Link href="#" className="text-purple-600 font-medium hover:underline flex items-center gap-1">Show all jobs <span>→</span></Link>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-5 rounded shadow-sm border border-gray-100 flex items-start gap-4"
            >
              <div className=''>
                <img
                  src={job.logo}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
                <p className="text-sm text-gray-500">{job.company} • {job.location}</p>
                <div className="flex flex-wrap gap-2 mt-3">
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default SimilarJobs;
