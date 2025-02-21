import Link from "next/link";

export default function SocialIcon({children}){
    return (<>
    <div className="rounded-full p-3 border-none bg-[#5C55AC]">
    <Link href={"/"}> {children}</Link>
    </div>
    </>);
}