import React from 'react'
import { educations } from './EduData'

function Education() {
    return (
        <div id='education' className='max-sm:p-10 h-[100%] max-w-[1644px] pt-12 max-md:p-12 pl-80'>
            <h1 className='text-[40px] pb-4 text-[#121111e8] font-saira font-bold'>EDUCATION</h1>
            {educations.map((data,index)=>
            <>
            <div className='experience-text--box flex-none lg:flex  justify-between mr-4'>
                <h1 className='text-[22px] max-md:text-[20px] max-sm:text-[25px] text-titleFont font-bold font-saira'>{data.school}</h1>
                <p className='text-[#5800FF]  font-semibold max-md:text-[12px] max-sm:text-[16px]'>{data.date}</p>
            </div>
            <div className='company'>
                <h1 className='text-grayText font-saira font-medium text-xl'>{data.degree}</h1>
                <p className='py-4 font-serif text-grayText w-3/4 max-sm:w-full'>{data.course}</p>
                <p className='py-4 pb-12 font-openSans text-grayText w-3/4'>{data.cgpa}</p>
            </div>
            </>
            )}
            
        </div>
    )
}

export default Education;
