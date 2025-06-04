import { memo } from "react";
import SignUpBody from "./SignUpBody";
import ImageBody from "../../_components/ImageBody";

const JobSeekerSignUpBody = () => {
   return (
      <div className="flex flex-col items-center w-full justify-between lg:flex-row lg:gap-x-20 xl:gap-x-40">
        <ImageBody/>
        <SignUpBody/>
      </div>
    );

};


export default memo(JobSeekerSignUpBody); 