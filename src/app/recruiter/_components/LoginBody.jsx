import { handleRecruiterLogin } from "@/actions/recruiter";
import Link from "next/link";
import { memo } from "react";

const LoginBody = () => {
  return (
    <div className="flex flex-col items-center justify-start  min-w-[350px] w-[70%] lg:w-[40%] my-11 gap-y-4">
      
      <div className="w-full flex flex-row justify-center items-center ">
        <button className="btn w-full text-[16px] font-bold  bg-white hover:bg-white py-3  rounded-full text-[#4A42A3] border-[#CCCCF5] ">
          <img
            className="w-[20px] h-[20px] rounded-full"
            src="../images/google.png"
          />
          Login with Google
        </button>
      </div>
      <div className="w-full flex flex-row justify-center items-center">
        <span className="w-full text-center text-[#202430]  before:text-black before:content-['mayank ']">
          Or Login with email
        </span>
      </div>
      
        <form
          className="flex flex-col items-center justify-between w-full gap-y-4"
          action={handleRecruiterLogin}
        >
          <label className="w-full block gap-y-2">  
            <span className="text-black text-[16px] font-[600] after:ml-0.5 after:text-red-500 after:content-['*'] ...">
             Company Email Address
            </span>
            <input
              type="email"
              name="email"
              className="rounded-full focus:outline-none bg-white border-[1px] border-[#D6DDEB] px-4 py-3 w-full placeholder:text-[#ABADB7] placeholder:text-[16px] placeholder:font-[400]" 
              placeholder="Enter Email Address"
            />
          </label>
          <label className="w-full block gap-y-2">
            <span className="text-black text-[16px] font-[600] after:ml-0.5 after:text-red-500 after:content-['*'] ...">
              Password
            </span>
            <input
              type="password"
              name="password"
              className="rounded-full focus:outline-none bg-white border-[1px] border-[#D6DDEB] px-4 py-3 w-full placeholder:text-[#ABADB7] placeholder:text-[16px] placeholder:font-[400]"
              placeholder="Enter Password"
            />
          </label>
          <label className="flex flex-row items-center justify-between w-full"><div><input className="mr-2" type="checkbox"/><span className="text-[#4A42A3] font-normal text-[16px]">Remember Me</span></div><Link className="text-[#4A42A3] font-normal text-[16px] underline underline-[0.5px]" href={"/"}>Forgot Password?</Link></label>
          <button className="btn btn-block py-3 text-white rounded-full bg-[#4A42A3] hover:bg-[#5A53A9]">
            Login
          </button>
        </form>
        <div className="flex flex-row items-center justify-start w-full mt-20">
          <span className="text-[#202430] font-normal text-[16px]">Don't have an account?</span>&nbsp;<Link className="text-[#4A42A3] font-normal text-[16px]" href={"/jobseeker/signup"}>Sign Up</Link>
        </div>
        
    </div>
  );
};

export default memo(LoginBody);
