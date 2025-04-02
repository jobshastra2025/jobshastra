// Note: Educational Information Page
"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { supabase } from '@/lib/supabase'; 

const educationalInfoPage = () => {
  const router = useRouter();

 const [degree, setDegree] = useState("");
  const [univercityName, setUnivercityName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState(""); 
  const [grade, setGrade] = useState("");
  const [certification, setCertification] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [formerror, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!degree || !univercityName || !collegeName || !startYear || !endYear || !grade || !certification || !specialization) {
      setFormError("Please fill in all fields");
      return;
    }
    
    const { data, error } = await supabase
    .from("educationalinfo")
    .insert([{ degree, univercityName, collegeName, startYear, endYear, grade, certification, specialization }])
    
    if (error) {
      setFormError(error.message);
      return;
    }
    if (data) {
      console.log(data);
      setFormError(null);
      router.push('/');
        
    }
  
  };

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
              <div className="flex gap-10 w-[max-content]">
                <div className="form-group">
                  <label htmlFor="degree" className="flex font-semibold">
                    Degree*
                  </label>
                  <input
                    className="border-2 border-solid w-full px-5 py-2 my-3 rounded-lg"
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
                  <label
                    htmlFor="specialization"
                    className="flex font-semibold"
                  >
                    Specialization *
                  </label>
                  <input
                    className="border-2 border-solid w-full px-5 py-2 my-3 rounded-lg"
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

              <div className="flex gap-10 w-[max-content]">
                <div className="form-group">
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
                </div>
                <div className="form-group">
                  <label
                    htmlFor="collegeName"
                    className="flex font-semibold"
                  >
                    College Name *
                  </label>
                  <input
                    className="border-2 border-solid w-full px-5 py-2 my-3 rounded-lg"
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
              <div className="flex gap-10 w-[max-content]">
                <div className="form-group">
                  <label htmlFor="startYear" className="flex font-semibold">
                    Start Year*
                  </label>
                  <input
                    className="border-2 border-solid w-full px-5 py-2 my-3 rounded-lg"
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
                  <label htmlFor="endYear" className="flex font-semibold">
                  End Year *
                  </label>
                  <input
                    className="border-2 border-solid w-full px-5 py-2 my-3 rounded-lg"
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
                  <label htmlFor="grade" className="flex font-semibold">
                    Grade or CGPA*
                  </label>
                  <input
                    className="border-2 border-solid w-full px-5 py-2 my-3 rounded-lg"
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
                <label htmlFor="certification" className="flex font-semibold">
                Certification *
                </label>
                <input
                  className="border-2 w-full px-5 py-2 my-3 rounded-lg"
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
