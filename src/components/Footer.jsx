import Image from "next/image";
import Link from "next/link";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SocialIcon from "./SocialIcon";
import { nanoid } from "nanoid";

export default function Footer() {
  const SOCIAL_ICONS = [
    { icon: TiSocialFacebook },
    { icon: FaInstagram },
    { icon: FiDribbble },
    { icon: FaLinkedinIn },
    { icon: FaXTwitter },
  ];
  return (
    <>
      <footer className="bg-[#4A42A3] mt-10">
        <div className="container mx-auto gap-y-5 py-8">
          <div className="mx-20  gap-x-16 flex-col flex lg:flex-row  justify-between items-start">
            <div className="flex flex-col justify-between items-start gap-y-6">
              <Image
                src={"/images/logowhite.png"}
                alt=""
                width={152}
                height={20}
              />
              <span className="text-[#D6DDEB] text-sm">
                Great platform for the job seeker that passionate about
                startups. Find your dream job easier.
              </span>
            </div>
            <div className="flex flex-col gap-y-10 md:flex-row md:gap-x-10 justify-between items-start ">
              <div className="flex flex-row justify-between items-start gap-x-10">
                <div className="flex flex-col justify-between items-start gap-y-4">
                  <h1 className="text-white font-bold">About</h1>
                  <ul className=" gap-y-6 justify-between flex flex-col items-start text-nowrap">
                    <li>
                      <Link
                        className="text-sm text-[#D6DDEB] hover:cursor-pointer"
                        href={"/"}
                      >
                        Companies
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-sm text-[#D6DDEB] hover:cursor-pointer"
                        href={"/"}
                      >
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-sm text-[#D6DDEB] hover:cursor-pointer"
                        href={"/"}
                      >
                        Terms
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-sm text-[#D6DDEB] hover:cursor-pointer"
                        href={"/"}
                      >
                        Advice
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-sm text-[#D6DDEB] hover:cursor-pointer"
                        href={"/"}
                      >
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-between items-start gap-y-4">
                  <h1 className="font-bold text-white ">Resources</h1>
                  <ul className="gap-y-6 justify-between flex flex-col text-nowrap items-start">
                    <li>
                      <Link
                        className="text-sm text-[#D6DDEB] hover:cursor-pointer"
                        href={"/"}
                      >
                        Help Docs
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-sm text-[#D6DDEB] hover:cursor-pointer"
                        href={"/"}
                      >
                        Guide
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-sm text-[#D6DDEB] hover:cursor-pointer"
                        href={"/"}
                      >
                        Updates
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-sm text-[#D6DDEB] hover:cursor-pointer"
                        href={"/"}
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-start justify-between gap-y-4">
                <div>
                  <h3 className="text-[16px]  text-white font-bold">
                    Get job notifications
                  </h3>
                </div>
                <div>
                  <span className="text-[14px] text-[#D6DDEB]">
                    The latest job news, articles, sent to your inbox weekly.
                  </span>
                </div>
                <div className="sm:flex flex-row justify-between items-center gap-x-2">
                  <input
                    className="bg-white mb-4 sm:mb-0  focus:outline-none text-black text-[14px] px-3 py-2 placeholder:text-black"
                    type="email"
                    placeholder="Email Address"
                  />
                  <button
                    className="bg-white text-black text-[14px] px-3 py-2 font-bold flex w-max mx-auto"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-20 border-t-2 mt-10 pt-10 border-[#5C55AC] flex flex-col md:flex-row gap-y-4 md:gap-y-0 justify-between items-center">
            <div className="">
              <h5 className="text-[#A4A0D1]">
                2024 &copy; JobShastra. All rights reserved.
              </h5>
            </div>
            <div className="flex flex-row justify-end items-center gap-x-6">
              {SOCIAL_ICONS.map((option) => {
                return (
                  <SocialIcon key={nanoid()}>
                    <option.icon color="white" size={18} />
                  </SocialIcon>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
