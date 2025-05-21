import React from 'react';

const companies = [
  {
    id: 1,
    name: 'Stripe',
    description:
      'Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe’s software tools...',
    logo: '/images/Company_Logo.png',
    tags: ['Business'],
    jobs: 7,
  },
  {
    id: 2,
    name: 'Truebill',
    description:
      'Take control of your money. Truebill develops a mobile app that helps consumers take control of their financial...',
    logo: '/images/Company_Logo.png',
    tags: ['Business'],
    jobs: 7,
  },
  {
    id: 3,
    name: 'Square',
    description:
      'Square builds common business tools in unconventional ways so more people can start, run, and grow their businesses.',
    logo: '/images/Company_Logo.png',
    tags: ['Business', 'Blockchain'],
    jobs: 7,
  },
  {
    id: 4,
    name: 'Accure',
    description:
      'Coinbase is a digital currency wallet and platform where merchants and consumers can transact with new digital currencies.',
    logo: '/images/Company_Logo.png',
    tags: ['Business', 'Blockchain'],
    jobs: 7,
  },
  {
    id: 5,
    name: 'Quill Agency',
    description:
      'Robinhood is lowering barriers, removing fees, and providing greater access to financial information.',
    logo: '/images/Company_Logo.png',
    tags: ['Business'],
    jobs: 7,
  },
  {
    id: 6,
    name: 'Kraken Solutions',
    description:
      'Based in Hyderabad, Kraken is the world’s largest global bitcoin exchange in euro volume and liquidity.',
    logo: '/images/Company_Logo.png',
    tags: ['Business', 'Blockchain'],
    jobs: 7,
  },
];

const tagColors = {
  Business: 'text-green-600 border border-green-300 bg-green-50',
  Blockchain: 'text-yellow-600 border border-yellow-300 bg-yellow-50',
};

const AllCompanies = () => {
  return (
    <section className="py-10 px-4 md:px-8 w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">All Companies</h2>
        <div className="text-sm text-gray-500">Showing 73 results</div>
      </div>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {companies.map((company) => (
          <div key={company.id} className="bg-white p-5 border border-gray-100 rounded-lg shadow-sm relative">
            {/* Job count */}
            <span className="absolute top-4 right-4 text-xs text-indigo-600 bg-indigo-50 rounded px-2 py-1 font-semibold">
              {company.jobs} Jobs
            </span>

            {/* Logo */}
            <img src={company.logo} alt={company.name} className="w-10 h-10 mb-3" />

            {/* Name */}
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{company.name}</h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-3 line-clamp-3">{company.description}</p>

            {/* Tags */}
            <div className="flex gap-2 flex-wrap">
              {company.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs px-3 py-1 rounded-full font-medium ${tagColors[tag]}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10">
        <ul className="flex items-center gap-1 text-sm">
          <li>
            <button className="px-2 py-1 text-gray-500 hover:text-gray-800">{'<'}</button>
          </li>
          {[1, 2, 3, 4, 5].map((page) => (
            <li key={page}>
              <button
                className={`px-3 py-1 rounded ${
                  page === 1 ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            </li>
          ))}
          <li>
            <span className="px-2">...</span>
          </li>
          <li>
            <button className="px-2 py-1 text-gray-500 hover:text-gray-800">{'>'}</button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AllCompanies;
