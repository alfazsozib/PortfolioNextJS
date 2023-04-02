import About from "@/components/About"
import Education from "@/components/Education"
import Experience from "@/components/Experience"
import Interest from "@/components/Interest"
import Project from "@/components/Project"
import Skill from "@/components/Skill"
import Sidebar from "../components/Sidebar"

export default function Home() {
  return (
    <div className="flex max-md:flex-none">
        <Sidebar />
        <div className="bg-[#f9fafa]  w-[100%] h-[100%]">
          <About />
          <hr className="h-1 bg-slate-300 mr-4 max-sm:mr-0" />
          <Experience />
          <hr className="h-1 bg-slate-300 mr-4 max-sm:mr-0" />
          <Education />
          <hr className="h-1 bg-slate-300 mr-4 max-sm:mr-0" />
          <Skill />
          <hr className="h-1 mt-12 bg-slate-300 mr-4 max-sm:mr-0" />
          <Project />
          <hr className="h-1 bg-slate-300 my-12 mr-4 max-sm:mr-0" />
          <Interest />

         

        </div>
        
    </div>
  )
}
