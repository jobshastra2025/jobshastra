"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";

const JobSeekerEmployerButton = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className={`flex flex-row text-nowrap items-center justify-center gap-x-2`}>
      <Link
       prefetch={true}
        className={`text-[#4A42A3] font-semibold rounded-full px-4 py-1.5 ${
          pathname === ("/jobseeker/login" || "/jobseeker/signup")
            ? "bg-[#E9EBFD]"
            : "bg-white"
        }`}
        href={"/jobseeker/login"}
      >
        Job Seeker
      </Link>
      <Link prefetch={true}
        className={`text-[#4A42A3] font-semibold rounded-full px-4 py-1.5 ${
          pathname === ("/recruiter/login" || "/recruiter/signup")
            ? "bg-[#E9EBFD]"
            : "bg-white"
        }`}
        href={"/recruiter/login"}
      >
        Employer
      </Link>
    </div>
  );
};

export default memo(JobSeekerEmployerButton);
