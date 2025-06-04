import JobSeekerEmployerSignUpButton from "@/components/JobSeekerEmployerSignUpButton";
import JobSeekerSignUpBody from "./components/JobSeekerSignUpBody";

export default function SignUp(){
    return (
      <>
       <div className="flex flex-col items-center justify-start w-full gap-2">
            <JobSeekerEmployerSignUpButton />
            <JobSeekerSignUpBody/>
          </div>
      </>
    );
}