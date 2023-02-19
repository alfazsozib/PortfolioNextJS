import React from 'react'
import { experiences } from './ExpData'

function Education() {
    console.log(experiences)
    return (
        <div id='experience' className='h-[100%] max-w-[1644px] pt-12'>
            <h1 className='text-[40px] pb-4 text-[#121111e8] font-saira font-bold'>EXPERIENCE</h1>
            {experiences.map((data,index)=>
            <>
            <div className='experience-text--box flex justify-between mr-4'>
                <h1 className='text-[22px] text-titleFont font-bold font-saira'>{data.title}</h1>
                <p className='text-primaryText font-semibold text-sm'>{data.date}</p>
            </div>
            <div className='company'>
                <h1 className='text-grayText font-semibold'>{data.company}</h1>
                <p className='py-4 pb-12 font-serif text-grayText w-3/4'>{data.details}</p>
            </div>
            </>
            )}
            
        </div>
    )
}

export default Experience
