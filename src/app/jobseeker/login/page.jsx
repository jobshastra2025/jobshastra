<<<<<<< HEAD
import JobSeekerEmployerButton from "@/components/JobSeekerEmployerButton";
import JobSeekerLoginBody from "../_components/JobSeekerLoginBody";
=======
import JobSeekerEmployerButton from '@/components/JobSeekerEmployerButton';
import JobSeekerLoginBody from './components/JobSeekerLoginBody';

>>>>>>> vivek

export default function JobSeekerLoginPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full gap-2">
        <JobSeekerEmployerButton />
        <JobSeekerLoginBody />
      </div>
    </>
  );
}
