import Link from "next/link";
import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
export default function Header1() {
  return (
    <>
      <header className="xl:hidden w-full bg-[#FAFAFF] border-b-2 border-[#C8C8CC] flex flex-row justify-between items-center">
        <div>
        <Link href={"/"}>
                <Image
                  className="py-4"
                  src={"/images/logo.png"}
                  alt="logo"
                  width={139}
                  height={19}
                />
              </Link>
        </div>
        <div>
            <Link className="rounded-md border-2" href={"/"}>
              <IoMdMenu color="#C8C8CC" size={30}/>
            </Link>
        </div>
      </header>
    </>
  );
}
