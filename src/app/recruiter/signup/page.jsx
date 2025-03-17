import RecruiterSignUpBody from "../_components/RecruiterSignUpBody";
import JobSeekerEmployerButton from "@/components/JobSeekerEmployerButton";

export default function RecruiterSignUpPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full gap-2">
        <JobSeekerEmployerButton />
        <RecruiterSignUpBody />
      </div>
    </>
  );
}
