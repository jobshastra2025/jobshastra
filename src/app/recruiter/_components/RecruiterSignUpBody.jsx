import { memo } from "react";
import ImageBody from "../_components/ImageBody";
import SignUpBody from "../_components/SignUpBody";

const RecruiterSignUpBody = () => {
  return (
    <div className="flex flex-col items-center w-full justify-between lg:flex-row lg:gap-x-20 xl:gap-x-40">
      <ImageBody />
      <SignUpBody />
    </div>
  );
};

export default memo(RecruiterSignUpBody);
