import img from "./Profile.jpg"
import Image from 'next/image'
import Link from "next/link"

function Sidebar() {
    return (
      // bg-[#bd5d38]
      <div className="w-[21%] fixed h-[100vh] bg-[#1b9173]">
        <div className="mx-auto flex flex-col justify-center items-center pt-[6rem] gap-8">
          <Image className="rounded-full border-[8px] w-[170px] h-[170px] object-cover  border-[#20ad8a]" src={img} alt="Alfaz" />
          <ul className="text-center flex flex-col gap-2 text-[rgba(255,255,255,0.57)] text-2xl font-semibold leading-[2.5rem]">
            <li className="hover:text-[#ffffffcd]"><Link href={"#about"}>ABOUT</Link></li>
            <li className="hover:text-[#ffffffcd]"><Link href={"#experience"}>EXPERIENCE</Link></li>
            <li className="hover:text-[#ffffffcd]"><a href="">EDUCATION</a></li>
            <li className="hover:text-[#ffffffcd]"><a href="">SKILL</a></li>
            <li className="hover:text-[#ffffffcd]"><a href="">INTEREST</a></li>
          </ul>
        </div>
      </div>
    )
  }
  
  export default Sidebar
  