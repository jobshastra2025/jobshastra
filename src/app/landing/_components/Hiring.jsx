/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Hiring() {
  return (
    <div className=" relative md:flex flex-row justify-center items-center">
      <div className="xl:w-[40%] flex flex-col items-start justify-start gap-y-2">
        <div>
          {" "}
          <p className="text-[25px] p-4 lg:p-0 lg:text-[36px]">
            <strong className="text-black">
              Hiring and Finding a Job made simple with{" "}
            </strong>
          </p>
          <p className="text-[36px]">
            <strong className="text-[#4A42A3] p-5 lg:p-0">Job Shastra</strong>
          </p>
        </div>
        <p className="text-[20px] p-4 lg:p-0">
          With Job Shastra, let your interview speak for itself get hired faster
          with verified profiles and recorded interviews.
        </p>
        <div className="flex flex-row w-[100%] lg:ml-0 justify-center xl:justify-start items-center gap-x-[10px]">
          <Link
            href={"/"}
            className="bg-[#4A42A3] text-nowrap font-[500] px-[20px] lg:px-[40px] py-[10px] rounded-[30px] text-white"
          >
            Find Your Job
          </Link>
          <Link
            href={"/"}
            className="border-[#4A42A3] text-nowrap px-[20px] lg:px-[40px] py-[10px] font-[500]  border-[2px] text-[#4A42A3] rounded-[30px] "
          >
            Find Top Talent
          </Link>
        </div>
      </div>
      <div className="xl:w-[60%] relative flex flex-col justify-end items-center">
        <img width={515} height={396} src="./images/friends.png" className="md:max-w-[max-content]"/>
        <SearchBar />
      </div>
    </div>
  );
}
