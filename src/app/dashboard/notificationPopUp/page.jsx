import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const NotificationPopup = () => {
  return (
    <div className="w-full max-w-md p-4 bg-white rounded-xl shadow-xl border border-gray-100 space-y-4 absolute left-1/2 sm:left-[55%] md:left-[60%] lg:left-[63%] xl:left-[65%] -translate-x-1/2">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2">
        <h2 className="text-lg font-semibold text-gray-800">Notifications</h2>
        <button className="text-sm text-indigo-600 hover:underline">
          Mark all as read
        </button>
      </div>

      {/* Notification Item 1 */}
      <div className="flex items-start gap-3">
        <img
          src="/images/profile_img.png"
          alt="Ram Charan"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p>
            <span className="font-semibold">Ram Charan</span> invited you to
            interview with Nomad
          </p>
          <span className="inline-block mt-1 px-2 py-0.5 text-xs border border-yellow-500 text-yellow-500 rounded-full">
            New
          </span>
          <p className="text-xs text-gray-400 mt-1">12 mins ago</p>
        </div>
      </div>

      {/* Notification Item 2 */}
      <div className="flex items-start gap-3 border-t pt-4">
        <img
          src="/images/profile_img.png"
          alt="Ramesh"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p>
            <span className="font-semibold">Ramesh</span> from Udacity updated your job application status
          </p>
          <span className="inline-block mt-1 px-2 py-0.5 text-xs border border-green-500 text-green-600 rounded-full">
            Shortlisted
          </span>
          <p className="text-xs text-gray-400 mt-1">3 days ago</p>
        </div>
      </div>

      {/* Notification Item 3 */}
      <div className="flex items-start gap-3 border-t pt-4">
        <img
          src="/images/profile_img.png"
          alt="Ramya"
          className="w-10 h-10 rounded-full"
        />
        <div className="w-full">
          <p>
            <span className="font-semibold">Ramya</span> from Digital Ocean sent you an interview invitation
          </p>
          <div className="mt-3 bg-gray-50 p-3 rounded-lg border-l-4 border-indigo-600">
            <h4 className="font-semibold text-indigo-800">Interview – Sai Charan</h4>
            <p className="text-sm text-gray-500 mb-2">UX Designer Role</p>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Calendar size={16} />
              <span>Mon, 20 May 2025</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700 mt-1">
              <Clock size={16} />
              <span>12 PM – 12:30 PM</span>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <img
                src="/images/profile_img.png"
                alt="Sai Charan"
                className="w-6 h-6 rounded-full"
              />
              <div>
                <p className="text-sm font-medium">Sai Charan</p>
                <p className="text-xs text-gray-500">sai@email.com</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-2">14 July 2021 · 3:26 PM</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;
