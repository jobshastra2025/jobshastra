import { memo } from "react";
import LoginBody from "./LoginBody";
import ImageBody from "../../_components/ImageBody";

const JobSeekerLoginBody = () => {
  return (
    <div className="flex flex-col items-center w-full justify-between lg:items-start lg:flex-row lg:gap-x-20 xl:gap-x-40">
      <ImageBody/>
      <LoginBody/>
    </div>
  );
};

export default memo(JobSeekerLoginBody);
