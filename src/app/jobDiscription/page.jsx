import React from 'react'
import JobappliForm from './_components/JobappliForm'
import JobDetails from './_components/JobDetails'
import PerksAndBenefits from './_components/PerksAndBenefits'
import SimilarJobs from './_components/SimilarJobs'
import CompanyProfile from './_components/CompanyProfile'

function page() {
  return (
    <div>
      <JobDetails/>
      <PerksAndBenefits/>
      <CompanyProfile/>
      <SimilarJobs/>
     
    </div>
  )
}

export default page
