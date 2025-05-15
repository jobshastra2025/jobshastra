import React from 'react';
import FindJobIcon from './_components/FindJobIcon';
import JobSearchBox from "../_components/JobSearchBox";
import JobFilters from './_components/JobFilters';
import AllJobs from '../_components/AllJobs';

function page() {
  return (
    <div>
        <FindJobIcon/>
        <JobSearchBox/>
        <div className='flex flex-col sm:flex-row gap-6'>
            <JobFilters/>
            <AllJobs/>
        </div>
    </div>
  )
}

export default page
