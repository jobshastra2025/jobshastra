import React from 'react';


const CompanyProfile = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 mt-10 p-6 md:p-10 bg-white rounded-xl shadow-sm items-start">
      {/* Left: Company Info */}
      <div className="flex-1">
        <div className="flex  gap-4 items-start sm:items-center">
          {/* Logo */}
          <img
            src="/images/Company_Logo.png"
            alt="Company Logo"
            className="w-14 h-14 rounded"
          />

          {/* Title and Link */}
          <div>
            <h2 className="text-xl font-bold text-gray-900">Stripe</h2>
            <a
              href="#"
              className="text-sm text-indigo-600 font-medium hover:underline flex items-center gap-1"
            >
              Read more about Stripe →
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-4 leading-relaxed">
          Stripe is a technology company that builds economic infrastructure for the internet.
          Businesses of every size—from new startups to public companies—use our software to
          accept payments and manage their businesses online.
        </p>
      </div>

      {/* Right: Company Images */}
      <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
        {/* Large image */}
        <img
          src="/images/Company_img.png"
          alt="Company Team"
          className="rounded-lg w-full sm:w-60 object-cover"
        />

        {/* Two stacked smaller images */}
        <div className="flex flex-col gap-4 w-full sm:w-auto items-center sm:items-start">
          <img
            src="/images/CompanyLeft_img.png"
            alt="Workspace"
            className="rounded-lg w-full sm:w-32 object-cover"
          />
          <img
            src="/images/CompanyLeft2_img.png"
            alt="Meeting"
            className="rounded-lg w-full sm:w-32 object-cover"
          />
        </div>
      </div>

    </div>

  )
}

export default CompanyProfile;
