import FeaturedJobs from "@/components/FeaturedJobs";
import MainLayout from "@/components/MainLayout";
import Ribbon from "@/components/Ribbon";
import Testimonials from "@/components/Testimonials";
import React from "react";
import Hiring from "./_components/Hiring";
import MainBody from "@/components/MainBody";

export default function HomePage() {
  return (
    <>
      <MainBody>
       <Hiring/>
      </MainBody>
      <Ribbon/>
      <FeaturedJobs />
      <Testimonials />
    </>
  );
}
