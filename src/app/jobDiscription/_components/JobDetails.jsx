import React from 'react'

export async function getStaticProps() {
  // Simulating an API call with a delay (you can replace this with an actual API fetch)
  const fetchJobData = async () => {
    // Example: Fetching job data from an external API
    // Replace the URL with your actual API endpoint
    const response = await fetch('https://api.example.com/job/123'); // Example URL
    const data = await response.json(); // Assuming the API responds with JSON
    return data;
  };

  try {
    // Fetch job data from API (replace with your actual data fetching logic)
    const jobData = await fetchJobData();

    return {
      props: { jobData } // Pass the fetched job data to the page component
    };
  } catch (error) {
    console.error('Error fetching job data:', error);

    // In case of an error, return default data
    return {
      props: {
        jobData: {
          description: "No job details available.",
          responsibilities: [],
          whoYouAre: [],
          niceToHaves: [],
          about: {
            applied: 0,
            capacity: 0,
            applyBefore: "N/A",
            postedOn: "N/A",
            type: "N/A",
            salary: "N/A"
          },
          categories: [],
          requiredSkills: []
        }
      }
    };
  }
}

const JobDetails = ({ jobData = {} }) => {
  const {
    description = 'Stripe is looking for Social Media Marketing expert to help manage our online networks. You will be responsible for monitoring our social media channels, creating content, finding effective ways to engage the community and incentivize others to engage on our channels.',
    responsibilities = ["Community engagement to ensure that is supported and actively represented online",
            "Focus on social media content development and publication",
            "Marketing and strategy support",
            "Stay on top of trends on social media platforms, and suggest content ideas to the team",
            "Engage with online communities",],
    whoYouAre = ["You get energy from people and building the ideal work environment",
            "You have a sense for beautiful spaces and office experiences",
            "You are a confident office manager, ready for added responsibilities",
            "You're detail-oriented and creative",
            "You're a growth marketer and know how to run campaigns",],
    niceToHaves = ["Fluent in English",
            "Project management skills",
            "Copy editing skills",],
    about = {
      applied: 5,
      capacity: 10,
      applyBefore: "2023-12-31",
      postedOn: "2023-11-01",
      type: "Full-time",
      salary: "$60,000 - $80,000",
    },
    categories = ["Marketing", "Social Media", "Community Management"],
    requiredSkills = ["Project Management", "Social Media Marketing", "Content Creation", "Community Engagement"],
  } = jobData;

  const progress = about.applied && about.capacity ? (about.applied / about.capacity) * 100 : 0;

  return (
    <div className="sm:flex gap-8 max-w-6xl mx-auto px-4 pb-8">
      <div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          <p className="mb-8 text-gray-700">{description}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Responsibilities</h3>
          <ul className="mb-8 list-disc list-inside text-gray-700">
            {responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Who You Are</h3>
          <ul className="mb-8 list-disc list-inside text-gray-700">
            {whoYouAre.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Nice-To-Haves</h3>
          <ul className="mb-8 list-disc list-inside text-gray-700">
            {niceToHaves.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

     

      <div className="w-full">
        <div>
          <h3 className="text-xl font-semibold mb-4">About this role</h3>
          <div className="mb-4">
            <div className="text-sm text-gray-700 mb-1">{about.applied} applied of {about.capacity} capacity</div>
            <div className="w-full bg-gray-200 h-2 rounded">
              <div className="bg-green-400 h-2 rounded" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
          <div className="text-gray-700 space-y-2 text-sm">
            <p className='pt-4'><strong>Apply Before:</strong> {about.applyBefore}</p>
            <p className='pt-4'><strong>Job Posted On:</strong> {about.postedOn}</p>
            <p className='pt-4'><strong>Job Type:</strong> {about.type}</p>
            <p className='pt-4'><strong>Salary:</strong> {about.salary}</p>
          </div>
        </div>

        <div className='my-8'>
          <h3 className="text-xl font-semibold mb-4">Categories</h3>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat, idx) => (
              <span key={idx} className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">{cat}</span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Required Skills</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
            {requiredSkills.map((skill, idx) => (
              <span key={idx} className="px-3 w-max py-1 rounded text-sm bg-purple-100 text-purple-800">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetails;
