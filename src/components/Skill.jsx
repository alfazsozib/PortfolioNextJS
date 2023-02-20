import React from 'react'
import { SiTailwindcss, SiHiveBlockchain ,SiReact, SiNodedotjs,SiCplusplus, SiNextdotjs, SiMongodb, SiHtml5, SiPython, SiWeb3Dotjs, SiEthereum } from "react-icons/si"

function Skill() {
            
    return (
        <div id='experience' className='h-[100%] max-w-[1644px] pt-12'>

            <h1 className='text-[40px] pb-4 text-[#121111e8] font-saira font-bold'>SKILL</h1>
            <div className='experience-text--box flex justify-between mr-4'>
                <h1 className='text-[22px] text-titleFont font-bold font-saira'>PROGRAMMING LANGUAGES</h1>
                <p className='text-primaryText font-semibold text-sm'>20 Jul 2023</p>
            </div>

            <div className='text--box flex gap-8 py-12'>
                <SiHtml5 size={55} className="text-gray-800"/>
                <SiTailwindcss size={55} className="text-gray-800"/>
                <SiReact size={55} className="text-gray-800"/>
                <SiPython size={55} className="text-gray-800"/>
                <SiCplusplus size={55} className="text-gray-800"/>
                <SiNextdotjs size={55} className="text-gray-800"/>
                <SiNodedotjs size={55} className="text-gray-800"/>
                <SiMongodb size={55} className="text-gray-800"/>
                <SiWeb3Dotjs size={55} className="text-gray-800"/>
                <SiHiveBlockchain size={55} className="text-gray-800"/>
            </div>         
        </div>
    )
}

export default Skill;