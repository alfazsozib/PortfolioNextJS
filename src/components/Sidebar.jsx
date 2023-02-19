import img from "./Profile.jpg"
import Image from 'next/image'

function Sidebar() {
    return (
      <div className="max-w-[1644px] h-[100vh] w-[20%] bg-[#bd5d38]">
        <div className="mx-auto flex flex-col justify-center gap-8 items-center w-40 h-40">
          <Image className="rounded-full object-center border-8 mt-80 border-[#ca7d60]" src={img} alt="" />
          <ul className="text-center flex flex-col gap-2 text-[#9f9b9a] font-Glock">
            <li><a href="">ABOUT</a></li>
            <li><a href="">EXPERIENCE</a></li>
            <li><a href="">EDUCATION</a></li>
            <li><a href="">SKILL</a></li>
            <li><a href="">INTEREST</a></li>
          </ul>
        </div>
      </div>
    )
  }
  
  export default Sidebar
  