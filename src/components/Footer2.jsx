import Image from "next/image";
import Link from "next/link";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SocialIcon from "./SocialIcon";
import { nanoid } from "nanoid";

export default function Footer2() {
  const SOCIAL_ICONS = [
    { icon: TiSocialFacebook },
    { icon: FaInstagram },
    { icon: FiDribbble },
    { icon: FaLinkedinIn },
    { icon: FaXTwitter },
  ];
  return (
    <>
      <footer className="bg-[#4A42A3] py-8 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="mb-6 md:mb-0">
              <Image
                src={"/images/logowhite.png"}
                alt=""
                width={152}
                height={20}
              />
              <span className="text-[#D6DDEB] text-sm block mt-2">
                Great platform for the job seeker that passionate about
                startups. Find your dream job easier.
              </span>
            </div>
            <div className="flex flex-wrap gap-6 md:gap-12">
              <div className="w-full sm:w-1/2 md:w-auto">
                <h1 className="text-white font-bold">About</h1>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link
                      className="text-sm text-[#D6DDEB] hover:cursor-pointer"
                      href="/"
                    >
                      Companies
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm text-[#D6DDEB] hover:cursor-pointer"
                      href="/"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm text-[#D6DDEB] hover:cursor-pointer"
                      href="/"
                    >
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm text-[#D6DDEB] hover:cursor-pointer"
                      href="/"
                    >
                      Advice
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm text-[#D6DDEB] hover:cursor-pointer"
                      href="/"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full sm:w-1/2 md:w-auto">
                <h1 className="font-bold text-white">Resources</h1>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link
                      className="text-sm text-[#D6DDEB] hover:cursor-pointer"
                      href="/"
                    >
                      Help Docs
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm text-[#D6DDEB] hover:cursor-pointer"
                      href="/"
                    >
                      Guide
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm text-[#D6DDEB] hover:cursor-pointer"
                      href="/"
                    >
                      Updates
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm text-[#D6DDEB] hover:cursor-pointer"
                      href="/"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-white font-bold">Get job notifications</h3>
            <span className="text-[#D6DDEB] text-sm block mt-2">
              The latest job news, articles, sent to your inbox weekly.
            </span>
            <div className="mt-4 flex flex-col sm:flex-row">
              <input
                className="bg-white focus:outline-none text-black text-sm px-3 py-2 placeholder:text-black flex-1"
                type="email"
                placeholder="Email Address"
              />
              <button
                className="bg-white text-black text-sm px-3 py-2 font-bold mt-2 sm:mt-0 sm:ml-2"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
          <div className="border-t-2 mt-10 pt-6 border-[#5C55AC] flex flex-col md:flex-row md:justify-between text-center md:text-left">
            <h5 className="text-[#A4A0D1]">
              2024 &copy; JobShastra. All rights reserved.
            </h5>
            <div className="flex justify-center md:justify-start mt-4 md:mt-0 gap-4">
              {SOCIAL_ICONS.map((option) => (
                <SocialIcon key={nanoid()}>
                  <option.icon color="white" size={18} />
                </SocialIcon>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
