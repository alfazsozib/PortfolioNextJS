import React from 'react'
import Link from 'next/link'

function MobileNav() {
  return (
    <div id='mobile-nav-sec'>
        <div className='mobile--nav--main ease-in duration-300 absolute opacity-80 w-[100%] h-80 bg-purple-700'>
            <div className='pt-16'>
            <ul className="text-center flex flex-col gap-1 text-[rgba(255,255,255,0.8)] text-xl font-semibold leading-[2rem]">
            <li className="hover:text-[#ffffffcd]"><Link href={"#about"}>ABOUT</Link></li>
            <li className="hover:text-[#ffffffcd]"><Link href={"#experience"}>EXPERIENCE</Link></li>
            <li className="hover:text-[#ffffffcd]"><Link href={"#education"}>EDUCATION</Link></li>
            <li className="hover:text-[#ffffffcd]"><Link href="#skill">SKILL</Link></li>
            <li className="hover:text-[#ffffffcd]"><Link href="#project">PROJECTS</Link></li>
            <li className="hover:text-[#ffffffcd]"><Link href="#interest">INTEREST</Link></li>
          </ul>
            </div>

        </div>
    </div>
  )
}

export default MobileNav
