import React from 'react'
import {
  FaStethoscope,
  FaUmbrellaBeach,
  FaVideo,
  FaMountain,
  FaCoffee,
  FaBus,
  FaHandsHelping
} from 'react-icons/fa'

const perks = [
  {
    icon: <FaStethoscope className="text-purple-600 text-3xl" />,
    title: 'Full Healthcare',
    desc: 'We believe in thriving communities and that starts with our team being happy and healthy.',
  },
  {
    icon: <FaUmbrellaBeach className="text-purple-600 text-3xl" />,
    title: 'Unlimited Vacation',
    desc: 'We believe you should have a flexible schedule that makes space for family, wellness, and fun.',
  },
  {
    icon: <FaVideo className="text-purple-600 text-3xl" />,
    title: 'Skill Development',
    desc: "We believe in always learning and leveling up our skills. Whether it's a conference or online course.",
  },
  {
    icon: <FaMountain className="text-purple-600 text-3xl" />,
    title: 'Team Summits',
    desc: 'Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter.',
  },
  {
    icon: <FaCoffee className="text-purple-600 text-3xl" />,
    title: 'Remote Working',
    desc: 'You know how you perform your best. Work from home, coffee shop or anywhere when you feel like it.',
  },
  {
    icon: <FaBus className="text-purple-600 text-3xl" />,
    title: 'Commuter Benefits',
    desc: 'We’re grateful for all the time and energy each team member puts into getting to work every day.',
  },
  {
    icon: <FaHandsHelping className="text-purple-600 text-3xl" />,
    title: 'We give back.',
    desc: 'We anonymously match any donation our employees make (up to Rs 600) so they can support organizations they care about most—times two.',
  },
]

const PerksAndBenefits = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 ">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Perks & Benefits</h2>
      <p className="text-gray-600 mb-10">This job comes with several perks and benefits</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {perks.map((perk, idx) => (
          <div key={idx} className="flex flex-col space-y-2">
            <div className='flex justify-center md:block'>{perk.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 flex justify-center md:block">{perk.title}</h3>
            <p className="text-gray-600 text-sm flex justify-center md:block">{perk.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PerksAndBenefits;
