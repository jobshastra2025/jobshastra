import Image from "next/image";
import Link from "next/link";
import ThemeController from "./ThemeController";


export default function Header2() {
  return (
    <>
      <header className="hidden lg:w-full lg:flex lg:flex-col lg:justify-start lg:border lg:border-b-2 lg:border-[#C8C8CC]">
        <div className="w-full h-8" />
        <div className="w-full flex flex-row justify-center px-8">
          <div className="w-[50%] flex flex-row justify-between items-center">
            <div>
              <Link href={"/"}>
                <Image
                  className="py-4"
                  src={"/images/logo.png"}
                  alt="logo"
                  width={200}
                  height={100}
                />
              </Link>
            </div>
            <div className="inline-flex flex-row gap-x-[60px] font-semibold justify-between items-center">
              <Link className=" text-black" href={"/"}>
                Find Jobs
              </Link>
              <Link className=" text-black" href={"/"}>
                For Talent
              </Link>
            </div>
          </div>
          <div className="w-[50%] gap-x-5 flex flex-row justify-end items-center">
            <ThemeController/>
            <Link href={"/jobseeker/login"} className="text-[#4A42A3] font-semibold">
              Login
            </Link>
            <Link
              href={"/jobseeker/signup"}
              className="bg-[#4A42A3]  font-semibold hover:bg-[#4A42AF] rounded-[30px]  text-white py-[10px] px-[30px] hover:ease-out hover:duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
