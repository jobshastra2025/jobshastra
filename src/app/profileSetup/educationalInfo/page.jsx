// Note: Educational Information Page
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { createClient } from "@/utils/supabase/client";

const educationalInfoPage = () => {
  const router = useRouter();
  const supabase = createClient();

  const [degree, setDegree] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [grade, setGrade] = useState("");
  const [certification, setCertification] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [formerror, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !degree ||
      !collegeName ||
      !startYear ||
      !endYear ||
      !grade ||
      !certification ||
      !specialization
    ) {
      setFormError("Please fill in all fields");
      return;
    }

    // Get current authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError) {
      setFormError("Unable to get user info");
      console.error(userError);
      return;
    }
    // if(error) throw new Error(error.message);

    const { data, error } = await supabase
      .from("profile")
      .update({
        degree,
        collegeName,
        startYear,
        endYear,
        grade,
        certification,
        specialization,
      })
      .eq("user_id", user.id); // Make sure to filter the row

    if (error) {
      setFormError(error.message);
      return;
    }

    router.push("/profileSetup/additionalInfo");

    // Optionally, you can redirect or show a success message here
    if (data) {
      console.log(data);
      setFormError(null);
      // redirect ('/');
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        console.error("Error getting user:", userError);
        return;
      }

      const { data, error } = await supabase
        .from("profile")
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (error) {
        console.error("Error fetching profile:", error);
      }
      if (
        !data?.full_name ||
        !data?.email ||
        !data?.phone ||
        !data?.gender ||
        !data?.dob ||
        !data?.location ||
        !data?.linkedin 
      ) {
        router.push("/profileSetup"); // 🔁 Redirect user back to education form
        return;
      }
      if (
        !data?.jobTitle ||
        !data?.experience ||
        !data?.companyName ||
        !data?.portfolioLink ||
        !data?.skills ||
        !data?.resume ||
        !data?.industryType ||
        !data?.duration ||
        !data?.noticePeriod ||
        !data?.annualSalary
      ) {
        router.push("/profileSetup/professionalInfo"); // 🔁 Redirect user back to education form
        return;
      }
      setDegree(data.degree || "");
      setCollegeName(data.collegeName || "");
      setStartYear(data.startYear || "");
      setEndYear(data.endYear || "");
      setGrade(data.grade || "");
      setCertification(data.certification || "");
      setSpecialization(data.specialization || "");
    };

    fetchProfile();
  }, []);

  return (
    <div className="max-w-screen-xl pb-20   mx-auto ">
      <div className=" pt-10">
        <div className=" pl-[50px]">
          <div className="py-3">
            <h4 className="text-[#202430] text-left pb-2 text-sm font-semibold">
              Educational Details
            </h4>
            <p className="text-[#515B6F] text-left text-xs">
              Enter your Educational details to get back by the Employers!
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="sm:flex gap-10 w-[max-content]">
              <div className="form-group">
                <label htmlFor="degree" className="flex text-md font-semibold">
                  Degree*
                </label>
                <input
                  className="border-2 text-md border-solid w-full px-5 py-2 my-3 rounded-lg"
                  type="text"
                  id="degree"
                  name="degree"
                  placeholder="Enter your Degree"
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="specialization" className="flex text-md font-semibold">
                  Specialization *
                </label>
                <input
                  className="border-2 text-md border-solid md:w-full px-5 py-2 my-3 rounded-lg"
                  type="text"
                  id="specialization"
                  name="specialization"
                  placeholder="Specialization"
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="sm:flex gap-10 w-[max-content]">
              {/* <div className="form-group">
                  <label
                    htmlFor="univercityName"
                    className="flex font-semibold"
                  >
                    Univercity Name *
                  </label>
                  <input
                    className="border-2 border-solid w-full px-5 py-2 my-3 rounded-lg"
                    type="text"
                    id="univercityName"
                    name="univercityName"
                    placeholder="Enter your Univercity Name"
                    value={univercityName}
                    onChange={(e) => setUnivercityName(e.target.value)}
                    required
                  />
                </div> */}
              <div className="form-group">
                <label htmlFor="collegeName" className="flex text-md font-semibold">
                  College Name *
                </label>
                <input
                  className="border-2 text-md border-solid w-full px-5 py-2 my-3 rounded-lg"
                  type="text"
                  id="collegeName"
                  name="collegeName"
                  placeholder="collegename"
                  value={collegeName}
                  onChange={(e) => setCollegeName(e.target.value)}
                  required
                />
              </div>
            </div>
            {/* new */}
            <div className="sm:flex gap-10 w-[max-content]">
              <div className="form-group">
                <label htmlFor="startYear" className="flex text-md font-semibold">
                  Start Year*
                </label>
                <input
                  className="border-2 text-md border-solid md:w-full px-5 py-2 my-3 rounded-lg"
                  type="date"
                  id="startYear"
                  name="startYear"
                  placeholder="Start Year"
                  value={startYear}
                  onChange={(e) => setStartYear(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="endYear" className="flex text-md font-semibold">
                  End Year *
                </label>
                <input
                  className="border-2 text-md border-solid md:w-full px-5 py-2 my-3 rounded-lg"
                  type="date"
                  id="endYear"
                  name="endYear"
                  placeholder="End Year"
                  value={endYear}
                  onChange={(e) => setEndYear(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex gap-10 w-[max-content]">
              <div className="form-group">
                <label htmlFor="grade" className="flex text-md font-semibold">
                  Grade or CGPA*
                </label>
                <input
                  className="border-2 text-md border-solid w-full px-5 py-2 my-3 rounded-lg"
                  type="number"
                  id="grade"
                  name="grade"
                  placeholder="Enter Grade or CGPA*"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="certification" className="flex text-md font-semibold">
                Certification *
              </label>
              <input
                className="border-2 text-md md:w-full px-5 py-2 my-3 rounded-lg"
                type="text"
                id="certification"
                name="certification"
                placeholder="Enter your Certification"
                value={certification}
                onChange={(e) => setCertification(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn text-white bg-[#4A42A3] hover:bg-[#4A42A3] rounded-full text-sm px-4 py-2"
            >
              Save and Next
            </button>
            {formerror && <div className="text-red-500 mt-2">{formerror}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default educationalInfoPage;
