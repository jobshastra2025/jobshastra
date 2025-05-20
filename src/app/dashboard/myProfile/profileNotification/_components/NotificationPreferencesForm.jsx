"use client";
import React, { useState } from 'react';

const NotificationPreferencesForm = () => {
  const [preferences, setPreferences] = useState({
    applications: true,
    jobs: false,
    recommendations: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setPreferences((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🔔 Submit preferences logic here
    alert('Notification preferences updated (mock)');
  };

  return (
    <section className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-200 mx-auto w-full mt-6">
      <div className='sm:flex gap-20'>
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-1">Notifications</h2>
          <p className="text-sm text-gray-500 mb-4">Customize your preferred notification settings</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Applications */}
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              name="applications"
              checked={preferences.applications}
              onChange={handleChange}
              className="mt-1 h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <div>
              <label htmlFor="applications" className="font-medium text-gray-800">
                Applications
              </label>
              <p className="text-sm text-gray-500">
                These are notifications for jobs that you have applied to
              </p>
            </div>
          </div>

          {/* Jobs */}
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              name="jobs"
              checked={preferences.jobs}
              onChange={handleChange}
              className="mt-1 h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <div>
              <label htmlFor="jobs" className="font-medium text-gray-800">
                Jobs
              </label>
              <p className="text-sm text-gray-500">
                These are notifications for job openings that suit your profile
              </p>
            </div>
          </div>

          {/* Recommendations */}
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              name="recommendations"
              checked={preferences.recommendations}
              onChange={handleChange}
              className="mt-1 h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <div>
              <label htmlFor="recommendations" className="font-medium text-gray-800">
                Recommendations
              </label>
              <p className="text-sm text-gray-500">
                These are notifications for personalized recommendations from our recruiters
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-indigo-700 transition mt-4"
          >
            Update Email
          </button>
        </form>
      </div>
    </section>
  );
};

export default NotificationPreferencesForm;
