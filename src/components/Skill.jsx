import React from 'react'
import { SiTailwindcss,SiWordpress, SiHiveBlockchain ,SiReact, SiNodedotjs,SiCplusplus, SiNextdotjs, SiMongodb, SiHtml5, SiPython, SiWeb3Dotjs, SiEthereum } from "react-icons/si"
import { RxDot } from "react-icons/rx"

function Skill() {   
    return (
        <div id='skill' className='h-[100%] max-w-[1644px] pt-12'>
            <h1 className='text-[40px] pb-4 text-[#121111e8] font-saira font-bold'>SKILL</h1>
            <div className='experience-text--box flex justify-between mr-4'>
                <h1 className='text-[22px] text-titleFont font-bold font-saira'>PROGRAMMING LANGUAGE AND TOOLS</h1>
            </div>
            <div className='text--box flex gap-8 py-12'>
                <SiHtml5 size={55} className="text-gray-600"/>
                <SiTailwindcss size={55} className="text-gray-600"/>
                <SiReact size={55} className="text-gray-600"/>
                <SiPython size={55} className="text-gray-600"/>
                <SiCplusplus size={55} className="text-gray-600"/>
                <SiNextdotjs size={55} className="text-gray-600"/>
                <SiNodedotjs size={55} className="text-gray-600"/>
                <SiMongodb size={55} className="text-gray-600"/>
                <SiWordpress size={55} className="text-gray-600"/>
                <SiWeb3Dotjs size={55} className="text-gray-600"/>
                <SiHiveBlockchain size={55} className="text-gray-600"/>
            </div>         
            <div>
                <h1 className='text-grayText text-xl font-semibold py-4'>WORKFLOW</h1>
                <div className='pl-6'>
                    <div>
                        <p className='text-grayText flex items-center text-[17px]'> <RxDot /> Responsive Design For All Screen</p>
                        <p className='text-grayText flex items-center text-[17px]'> <RxDot /> Single And Multiple Pages</p>
                        <p className='text-grayText flex items-center text-[17px]'> <RxDot /> Web3 Development (BACKEND)</p>
                        <p className='text-grayText flex items-center text-[17px]'> <RxDot /> Wallet Integration</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Skill;