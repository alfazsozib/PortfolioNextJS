import React, { useState } from 'react'
import Link from 'next/link'
import { RxCross1 } from 'react-icons/rx'
import { BiMenuAltLeft } from 'react-icons/bi'
function MobileNav() {

  const [css, setCss] = useState("top-[-500px]")
  const [menuPrev,setMenuPrev] = useState(true)
  return (
        <div id='mobile-nav-sec' className='pb-12 '>   
        {menuPrev? <div className=' lg:hidden z-10 md:hidden cursor-pointer absolute right-0 py-4'><BiMenuAltLeft onClick={()=>{setMenuPrev(false),setCss('top-[0]')}} size={50}/></div>:<div className='lg:hidden z-10 md:hidden cursor-pointer absolute right-0 p-4'><RxCross1 color='white' onClick={()=>{setMenuPrev(true),setCss('top-[-500px]')}} size={50}/></div> } 


          <div className={`mobile--nav--main absolute ${css} transition-all ease-in duration-500 w-[100%] opacity-80  h-96 bg-purple-700`}>
            <div className='pt-16'>
              <ul className="text-center flex flex-col  ease-out duration-1000 gap-4 text-[rgb(255,255,255)] text-xl font-semibold leading-[2rem]">
                <li onClick={()=>{setMenuPrev(true), setCss('top-[-500px]')}} className="hover:text-[#ffffffcd]"><Link href={"#about"}>ABOUT</Link></li>
                <li onClick={()=>{setMenuPrev(true), setCss('top-[-500px]')}} className="hover:text-[#ffffffcd]"><Link href={"#experience"}>EXPERIENCE</Link></li>
                <li onClick={()=>{setMenuPrev(true), setCss('top-[-500px]')}} className="hover:text-[#ffffffcd]"><Link href={"#education"}>EDUCATION</Link></li>
                <li onClick={()=>{setMenuPrev(true), setCss('top-[-500px]')}} className="hover:text-[#ffffffcd]"><Link href="#skill">SKILL</Link></li>
                <li onClick={()=>{setMenuPrev(true), setCss('top-[-500px]')}} className="hover:text-[#ffffffcd]"><Link href="#project">PROJECTS</Link></li>
                <li onClick={()=>{setMenuPrev(true), setCss('top-[-500px]')}} className="hover:text-[#ffffffcd]"><Link href="#interest">INTEREST</Link></li>
              </ul>
            </div>
          </div>
        </div>

  )
}

export default MobileNav
