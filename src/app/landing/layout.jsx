import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import MainLayout from "@/components/MainLayout";
import MainBody from "@/components/MainBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "JobShastra",
  description: "Generated by create next app",
};

export default function LandingLayout({ children }) {
  return (
  <>
    <MainLayout>
    
  {children}
    
  </MainLayout></>
  );
}
