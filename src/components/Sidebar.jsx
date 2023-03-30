import img from "./Pro.jpg"
import Image from 'next/image'
import Link from "next/link"

function Sidebar() {
    return (
      // bg-[#bd5d38]
      <div className="w-[22%] fixed h-[100vh] max-md:hidden bg-[#5800FF]">
        <div className="mx-auto flex flex-col justify-center items-center pt-[6rem] gap-8">
          <Image className="rounded-full border-[8px] w-[170px] h-[170px] object-cover  border-[#36107d]" src={img} alt="Alfaz" />
          <ul className="text-center flex flex-col gap-2 text-[rgba(255,255,255,0.57)] text-xl font-semibold leading-[2rem]">
            <li className="hover:text-[#ffffffcd]"><Link href={"#about"}>ABOUT</Link></li>
            <li className="hover:text-[#ffffffcd]"><Link href={"#experience"}>EXPERIENCE</Link></li>
            <li className="hover:text-[#ffffffcd]"><Link href={"#education"}>EDUCATION</Link></li>
            <li className="hover:text-[#ffffffcd]"><Link href="#skill">SKILL</Link></li>
            <li className="hover:text-[#ffffffcd]"><Link href="#project">PROJECTS</Link></li>
            <li className="hover:text-[#ffffffcd]"><Link href="#interest">INTEREST</Link></li>
          </ul>
        </div>
      </div>
    )
  }
  
  export default Sidebar
  