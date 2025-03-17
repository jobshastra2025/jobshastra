import JobSeekerEmployerButton from "@/components/JobSeekerEmployerButton";
import RecruiterLoginBody from "../_components/RecruiterLoginBody";

export default function RecruiterLoginPage(){
     return (
        <>
          <div className="flex flex-col items-center justify-start gap-2">
            <JobSeekerEmployerButton/>
            <RecruiterLoginBody/>
          </div>
        </>
      );
}