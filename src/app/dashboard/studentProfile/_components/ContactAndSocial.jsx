"use client";
import React, { useEffect, useState } from 'react';
import { Pencil } from 'lucide-react';
import { Mail, Phone, Languages, Globe, Instagram, Twitter } from 'lucide-react';

const ContactAndSocial = () => {
  const [details, setDetails] = useState({});
  const [socials, setSocials] = useState([]);

  const contactData = {
    email: 'sai@email.com',
    phone: '+91 8888888888',
    languages: ['English', 'Telugu']
  };

  const socialLinksData = [
    { platform: 'Instagram', url: 'https://instagram.com/saiexample', icon: <Instagram size={16} /> },
    { platform: 'Twitter', url: 'https://twitter.com/sai', icon: <Twitter size={16} /> },
    { platform: 'Portfolio / Website', url: 'https://www.saicharan.com', icon: <Globe size={16} /> }
  ];

  useEffect(() => {
    // Simulate data fetch
    setDetails(contactData);
    setSocials(socialLinksData);
  }, []);

  return (
    <div className="max-w-md w-full mx-auto space-y-6">
      {/* Additional Details */}
      <div className="bg-white border rounded-lg p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-md font-semibold text-gray-800">Additional Details</h3>
          <button className="p-2 border rounded-md text-indigo-600 hover:bg-indigo-50">
            <Pencil size={16} />
          </button>
        </div>

        <div className="space-y-4 text-sm text-gray-700">
          <div className="flex items-start gap-2">
            <Mail size={16} className="mt-1 text-gray-500" />
            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p>{details.email}</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Phone size={16} className="mt-1 text-gray-500" />
            <div>
              <p className="text-xs text-gray-500">Phone</p>
              <p>{details.phone}</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Languages size={16} className="mt-1 text-gray-500" />
            <div>
              <p className="text-xs text-gray-500">Languages</p>
              <p>{details.languages?.join(', ')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-white border rounded-lg p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-md font-semibold text-gray-800">Social Links</h3>
          <button className="p-2 border rounded-md text-indigo-600 hover:bg-indigo-50">
            <Pencil size={16} />
          </button>
        </div>

        <div className="space-y-4 text-sm text-gray-700">
          {socials.map((item, idx) => (
            <div className="flex items-center gap-2" key={idx}>
              {item.icon}
              <div>
                <p className="text-xs text-gray-500">{item.platform}</p>
                <a
                  href={item.url}
                  className="text-indigo-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.url.replace(/^https?:\/\//, '')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactAndSocial;
