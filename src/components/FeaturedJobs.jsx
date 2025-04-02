import { FaArrowRight } from "react-icons/fa6";
export default function FeaturedJobs(){
    return (<>
    <section className="container mx-auto ">
        <div className="flex flex-row justify-between items-center">
        <div className="px-10 lg:px-24"><h1 className="text-[#4A42A3] font-bold">Featured Jobs</h1></div>
        <div className="px-10 lg:px-24 flex flex-row items-center justify-center space-x-4"><h1 className="text-[#4A42A3] font-bold">Show All Jobs</h1><FaArrowRight color="#4A42A3" size={16}/></div>
        </div>
        <div className="flex flex-col justify-center items-center">
            <div className="">

            </div>
        </div>
    </section>
    </>);
}