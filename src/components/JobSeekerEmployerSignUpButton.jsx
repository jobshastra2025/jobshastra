"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";

const JobSeekerEmployerSignUpButton = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className={`flex flex-row text-nowrap items-center justify-center gap-x-2`}>
      <Link
       prefetch={true}
        className={`text-[#4A42A3] font-semibold rounded-full px-4 py-1.5 ${
          pathname === ("/jobseeker/signup" || "/jobseeker/login")
            ? "bg-[#E9EBFD]"
            : "bg-white"
        }`}
        href={"/jobseeker/signup"}
      >
        Job Seeker
      </Link>
      <Link prefetch={true}
        className={`text-[#4A42A3] font-semibold rounded-full px-4 py-1.5 ${
          pathname === ("/recruiter/signup" || "/recruiter/login")
            ? "bg-[#E9EBFD]"
            : "bg-white"
        }`}
        href={"/recruiter/signup"}
      >
        Employer
      </Link>
    </div>
  );
};

export default memo(JobSeekerEmployerSignUpButton);
