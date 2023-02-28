import About from "@/components/About"
import Education from "@/components/Education"
import Experience from "@/components/Experience"
import Project from "@/components/Project"
import Skill from "@/components/Skill"
import Sidebar from "../components/Sidebar"

export default function Home() {
  return (
    <div className="flex">
        <Sidebar />
        <div className="bg-[#f8f9fa] pl-80 w-[100%] h-[100%]">
          <About />
          <hr className="h-1 bg-slate-300 mr-4" />
          <Experience />
          <hr className="h-1 bg-slate-300 mr-4" />
          <Education />
          <hr className="h-1 bg-slate-300 mr-4" />
          <Skill />
          <hr className="h-1 bg-slate-300 mr-4" />
          <Project />
          <hr className="h-1 bg-slate-300 mr-4" />
          {/* <Skill /> */}
         

        </div>
        
    </div>
  )
}
