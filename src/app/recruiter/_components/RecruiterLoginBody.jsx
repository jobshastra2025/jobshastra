import { memo } from "react";
import ImageBody from "../_components/ImageBody";
import LoginBody from "../_components/LoginBody";

const RecruiterLoginBody=()=>{
  return (
    <div className="flex flex-col items-center w-full justify-between lg:items-start lg:flex-row lg:gap-x-20 xl:gap-x-40">
      <ImageBody/>
      <LoginBody/>
    </div>
  );
}

export default memo(RecruiterLoginBody);