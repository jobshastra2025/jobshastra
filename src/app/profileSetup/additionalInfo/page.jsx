// Note: Additional Information Page
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { createClient } from "@/utils/supabase/client";

const additionalInfoPage = () => {
  const router = useRouter();
  const supabase = createClient();

  const [language, setLanguage] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [achivement, SetAchivement] = useState("");
  const [reference, setReference] = useState("");
  const [workLocation, setWorkLocation] = useState("");
  const [preferedSalary, setPreferedSalary] = useState("");
  const [formerror, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !language ||
      !hobbies ||
      !achivement ||
      !reference ||
      !workLocation ||
      !preferedSalary
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
        language,
        hobbies,
        achivement,
        reference,
        workLocation,
        preferedSalary,
      })
      .eq("user_id", user.id); // Make sure to filter the row

    if (error) {
      setFormError(error.message);
      return;
    }

    router.push("/");

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
      if (
        !data?.degree ||
        !data?.collegeName ||
        !data?.startYear ||
        !data?.endYear ||
        !data?.grade ||
        !data?.certification ||
        !data?.specialization
      ) {
        router.push("/profileSetup/educationalInfo"); // 🔁 Redirect user back to education form
        return;
      }

      // ✅ Set fields if user already has additional info
      setLanguage(data.language || "");
      setHobbies(data.hobbies || "");
      SetAchivement(data.achivement || "");
      setReference(data.reference || "");
      setWorkLocation(data.workLocation || "");
      setPreferedSalary(data.preferedSalary || "");
    };

    fetchProfile();
  }, []);

  return (
    <div className="max-w-screen-xl pb-20   mx-auto ">
      <div className=" pt-10">
        <div className=" pl-[50px]">
          <div className="py-3">
            <h4 className="text-[#202430] text-left pb-2 text-sm font-semibold">
              Additional Details
            </h4>
            <p className="text-[#515B6F] text-left text-xs">
              Enter your Additional details to get back by the Employers!
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="hobbies" className="flex text-md font-semibold">
                Hobbies*
              </label>
              <input
                className="border-2 text-md border-solid w-full px-5 py-2 my-3 rounded-lg"
                type="text"
                id="hobbies"
                name="hobbies"
                placeholder="Enter your Hobbies"
                value={hobbies}
                onChange={(e) => setHobbies(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="achivement" className="flex text-md font-semibold">
                Achivements *
              </label>
              <input
                className="border-2 text-md border-solid w-full px-5 py-2 my-3 rounded-lg"
                type="text"
                id="achivement"
                name="achivement"
                placeholder=" Enter Your Achivement"
                value={achivement}
                onChange={(e) => SetAchivement(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="language" className="flex text-md font-semibold">
                Language Known*
              </label>
              <input
                className="border-2 text-md border-solid w-full px-5 py-2 my-3 rounded-lg"
                type="text"
                id="language"
                name="language"
                placeholder="Language Known"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="reference" className="flex text-md font-semibold">
                Reference*
              </label>
              <input
                className="border-2 border-solid text-md w-full px-5 py-2 my-3 rounded-lg"
                type="text"
                id="reference"
                name="reference"
                placeholder="Reference"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                required
              />
            </div>

            <div className="sm:flex gap-10 w-[max-content]">
              <div className="form-group">
                <label htmlFor="workLocation" className="flex text-md font-semibold">
                  Prefered Work Location *
                </label>
                <input
                  className="border-2 text-md border-solid w-full px-5 py-2 my-3 rounded-lg"
                  type="location"
                  id="workLocation"
                  name="workLocation"
                  placeholder="Prefered Work Location"
                  value={workLocation}
                  onChange={(e) => setWorkLocation(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="preferedSalary" className="flex text-md font-semibold">
                  Prefered Salary *
                </label>
                <input
                  className="border-2 border-solid text-md w-full px-5 py-2 my-3 rounded-lg"
                  type="number"
                  id="preferedSalary"
                  name="preferedSalary"
                  placeholder="Prefered Salary"
                  value={preferedSalary}
                  onChange={(e) => setPreferedSalary(e.target.value)}
                  required
                />
              </div>
            </div>
            {/* new */}
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

export default additionalInfoPage;
