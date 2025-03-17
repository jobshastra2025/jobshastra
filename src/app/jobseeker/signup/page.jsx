import JobSeekerEmployerButton from "@/components/JobSeekerEmployerButton";
import JobSeekerSignUpBody from "../_components/JobSeekerSignUpBody";

export default function SignUp(){
    return (
      <>
       <div className="flex flex-col items-center justify-start w-full gap-2">
            <JobSeekerEmployerButton />
            <JobSeekerSignUpBody/>
          </div>
      </>
    );
}