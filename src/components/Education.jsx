import React from 'react'
import { educations } from './EduData'

function Education() {
    return (
        <div id='education' className='h-[100%] max-w-[1644px] pt-12 pl-80'>
            <h1 className='text-[40px] pb-4 text-[#121111e8] font-saira font-bold'>EDUCATION</h1>
            {educations.map((data,index)=>
            <>
            <div className='experience-text--box flex justify-between mr-4'>
                <h1 className='text-[22px] text-titleFont font-bold font-saira'>{data.school}</h1>
                <p className='text-[#5800FF] font-semibold text-sm'>{data.date}</p>
            </div>
            <div className='company'>
                <h1 className='text-grayText font-semibold'>{data.degree}</h1>
                <p className='py-4 font-serif text-grayText w-3/4'>{data.course}</p>
                <p className='py-4 pb-12 font-serif text-grayText w-3/4'>{data.cgpa}</p>
            </div>
            </>
            )}
            
        </div>
    )
}

export default Education;
