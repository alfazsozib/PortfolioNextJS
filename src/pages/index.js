import About from "@/components/About"
import Education from "@/components/Education"
import Experience from "@/components/Experience"
import Interest from "@/components/Interest"
import Project from "@/components/Project"
import Skill from "@/components/Skill"
import Sidebar from "../components/Sidebar"

export default function Home() {
  return (
    <div className="flex">
        <Sidebar />
        <div className="bg-[#f9fafa] w-[100%] h-[100%]">
          <About />
          <hr className="h-1 bg-slate-300 mr-4" />
          <Experience />
          <hr className="h-1 bg-slate-300 mr-4" />
          <Education />
          <hr className="h-1 bg-slate-300 mr-4" />
          <Skill />
          <hr className="h-1 mt-12 bg-slate-300 mr-4" />
          <Project />
          <hr className="h-1 bg-slate-300 mr-4 my-12" />
          <Interest />
          {/* <Skill /> */}
         

        </div>
        
    </div>
  )
}
