import React from 'react';
import { ThumbsUp, ThumbsDown, MoreHorizontal } from 'lucide-react';

const faqs = [
  {
    title: 'What is My Applications?',
    content:
      'My Applications is a way for you to track jobs as you move through the application process. Depending on the job you applied to, you may also receive notifications indicating that an application has been actioned by an employer.',
  },
  {
    title: 'How to access my applications history',
    content:
      'To access applications history, go to your My Applications page on your dashboard profile. You must be signed in to your JobShastra account to view this page.',
  },
  {
    title: 'Not seeing jobs you applied in your my application list?',
    content:
      'Please note that we are unable to track materials submitted for jobs you apply to via an employer’s site. As a result, these applications are not recorded in the My Applications section of your JobShastra account. We suggest keeping a personal record of all positions you have applied to externally.',
  },
];

const FAQSupportList = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <div className="mb-6">
        <span className="text-sm text-gray-400 mr-2">Sort by:</span>
        <button className="text-indigo-600 font-medium focus:outline-none hover:underline">
          Most relevant
        </button>
      </div>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 shadow-sm rounded-lg p-6 mb-6"
        >
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-gray-800">{faq.title}</h3>
            <button className="text-gray-500 hover:text-gray-700">
              <MoreHorizontal size={20} />
            </button>
          </div>

          <p className="text-sm text-gray-600 mt-2">{faq.content}</p>

          <hr className="my-4 border-gray-200" />

          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-500">Was this article helpful?</span>
            <button className="flex items-center px-3 py-1.5 border border-indigo-500 rounded-md text-indigo-600 hover:bg-indigo-50 text-sm">
              <ThumbsUp size={16} className="mr-1" /> Yes
            </button>
            <button className="flex items-center px-3 py-1.5 border border-indigo-500 rounded-md text-indigo-600 hover:bg-indigo-50 text-sm">
              <ThumbsDown size={16} className="mr-1" /> No
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQSupportList;
