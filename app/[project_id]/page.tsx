import React from 'react'
import Image from 'next/image'
import { getProjectById } from '../../pages/api/projectData'
import { Fab, LargeBtn, Technologies, TypeChip } from '../components'

export default function page({params}) {
  const project = getProjectById(params.project_id)

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      const r =  parseInt(result[1], 16)
      const g = parseInt(result[2], 16)
      const b = parseInt(result[3], 16)
      return `rgba(${r},${g},${b},0.3)`
    }
    return '#e5e5f7'
  } 
  
  return (
    <div className="relative w-full lg:p-4 bg-white" style={{color:project.color, backgroundColor:hexToRgb(project.color)}}>
        <div className='lg:w-1/2 flex flex-col gap-4 m-auto'>
          <div className="relative min-h-halfscreen w-full">
            <Image src={project.src} fill className="object-cover lg:rounded-2xl shadow-lg" alt={''}/>
            <div className="absolute top-0 left-0 hidden lg:flex  lg:translate-y-10 lg:-translate-x-12">
              <Fab image="/arrow_left.svg" href="/" position={undefined} color={project.color}/>
            </div>
            <div className='absolute top-0 right-0 p-4'>
              <TypeChip type={project.type} size="large"/>
            </div>
          </div>
        
        <Technologies items={project.tech}/>
        <div className="flex flex-col gap-4 p-4 lg:shadow-lg  mt-10 lg:rounded-2xl lg:backdrop-blur lg:bg-white/50 mb-20">
          <div className="flex flex-col lg:flex-row gap-4 h-min justify-between lg:items-end">
            <h1 className="text-5xl lg:text-6xl font-semibold">{project.name}</h1>
            <div className="flex gap-4 flex-wrap">
              <LargeBtn url={project.github_url} img="/github.png" textSm='Available on' textLg='GitHub' style=''/>
              {project.page_url?
                <LargeBtn url={project.page_url} img='/link.svg' textSm='Visit' textLg='Page' style='secondary'/> : <></>
              }
            </div>
          </div>
          
          <div className='h-2 rounded-full opacity-20' style={{backgroundColor: project.color}}/>
          <h2 className='text-2xl lg:text-4xl font-semibold '>What i learned</h2>
          <ul className='list-disc list-inside w-full font-semibold text-xl text-black'>
            {project.lessons.map((t)=><li key={t}>{t}</li>)}
          </ul>
          <h2 className='text-2xl lg:text-4xl font-semibold '>About</h2>            
          <div className='flex flex-col gap-4 text-xl text-black'>
            {project.description.map((d)=> <p key={d}>{d}</p>)}
          </div>        
        </div>
        
        <div className="fixed top-0 left-0 flex lg:hidden">
          <Fab image="/arrow_left.svg" href="/" position={undefined} color={project.color}/>
        </div>
      </div>
      
    </div>
  )
}
