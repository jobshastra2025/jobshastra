import RecruiterSignUpBody from "../_components/RecruiterSignUpBody";
import JobSeekerEmployerSignUpButton from "@/components/JobSeekerEmployerSignUpButton";

export default function RecruiterSignUpPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full gap-2">
        <JobSeekerEmployerSignUpButton />
        <RecruiterSignUpBody />
      </div>
    </>
  );
}
