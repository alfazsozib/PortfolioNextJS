import About from "@/components/About"
import Experience from "@/components/Experience"
import Sidebar from "../components/Sidebar"

export default function Home() {
  return (
    <div className="flex">
        <Sidebar />
        <div className="bg-[#f8f9fa] pl-80 w-[100%] h-[100%]">
          <About />
          <hr className="h-1 bg-slate-300 mr-4" />
          <Experience />
        </div>
        
    </div>
  )
}
