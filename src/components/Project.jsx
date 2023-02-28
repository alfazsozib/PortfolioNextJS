import React from 'react'
import profile from "./Profile.jpg"
import Image from 'next/image'
import projects from "./projectsData"

function Project() {
  return (
    <div id='project' className='h-[100%] max-w-[1644px] mx-auto pt-12'>
      <h1 className='text-[40px] pb-4 text-[#121111e8] font-saira font-bold'>PROJECTS</h1>
      <div className='grid grid-cols-3'>
      {projects.map((data,index)=>
      
      <div className='box w-[400px] ' key={index}>
        <div className='content w-[300px] h-[330px] p-2 pb-4 border-2 border-gray-400 rounded-lg hover:border-[#0ebd91]'  >
            <Image className='object-cover w-[300px] h-[200px] rounded-lg' src={data.image}/>
            <div>
            <h1 className='pt-2'>{data.name}</h1>
            <h2 className='py-2'>{data.description}</h2>
            <button className='bg-[#1b9173] hover:bg-[#0fac85] w-[100%] rounded-lg py-2 text-teal-50 text-center'><a href={data.projLink} target="_blank" >PREVIEW</a></button>
            </div>
        </div>
        
      </div>
      
      )}
      </div>
    </div>
  )
}

export default Project
