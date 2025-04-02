"use client";
import { useRouter } from 'next/navigation';

export default function ProfileStatusBar() {
    const router = useRouter();
    return(
        <div className="lg:max-w-screen-xl m-[30px] lg:m-[0px] lg:mx-auto">
            <div className='flex justify-between border-b-[3px] pb-2 mb-10'>
                <h3 className='text-[#4A42A3] font-semibold'>Complete profile Information</h3>
                <button onClick={() => router.push('/dashboard')} className='text-[#4640DE] text-sm'>Skip and Fill Later</button>
            </div>
        </div>
    )
}