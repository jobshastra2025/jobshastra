import { memo } from "react";
const ImageBody = () => {
  return (
    <div>
      <img
        src="../images/jobseeker.png"
        alt="jobseeker"
        // className="w-[205px]   sm:w-[280px] md:w-[355px] lg:w-[430px] xl:w-[505px]  aspect-auto"
        className="hidden lg:flex lg:w-[430px] xl:w-[505px]  aspect-auto"
      />
    </div>
  );
};

export default memo(ImageBody);
