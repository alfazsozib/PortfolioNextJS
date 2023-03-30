import React from 'react'
import profile from "./Profile.jpg"
import Image from 'next/image'
import projects from "./projectsData"

function Project() {
  return (
    <div id='project' className=' h-[100%]  max-w-[1644px] mx-auto pt-12 max-md:p-12 max-sm:p-10 pl-80'>
      <h1 className='text-[40px] pb-4 text-[#121111e8] font-saira font-bold'>PROJECTS</h1>
      <div className='grid grid-cols-2 gap-4 max-md:pr-4 md:grid sm-custom:grid-cols-2 max-md:grid max-md:grid-cols-1 '>
      {projects.map((data,index)=>
      <div className='box w-[400px] ' key={index}>
        <div className='content w-[450px] md:w-[420px] sm-custom:w-[300px] max-md:w-[350px] max-sm:w-[300px] h-[330px] p-2 pb-4 border-2 border-[#5800FF] rounded-lg hover:border-[#5800FF]'  >
            <Image className='object-cover w-[450px] max-md:w-[350px] h-[200px] rounded-lg' src={data.image} alt={''} />
            <div>
            <h1 className='pt-2 font-saira font-medium text-xl text-titleFont'>{data.name}</h1>
            <h2 className='py-2'>{data.description}</h2>
            <button className='bg-[#5800FF] hover:bg-[#5d1dd3] w-[100%] rounded-lg py-2 text-teal-50 text-center'><a href={data.projLink} rel="noreferrer" >PREVIEW</a></button>
            </div>
        </div>
      </div>
      
      )}
      </div>
    </div>
  )
}

export default Project
