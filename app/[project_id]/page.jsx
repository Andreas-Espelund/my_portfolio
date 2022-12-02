import React from 'react'
import Fab from '../Fab'
import Link from 'next/link'
import Image from 'next/image'
import { getIcon } from '../../pages/api/devIcons'
import { getProjectById } from '../../pages/api/projectData'
export default function page({params}) {
  
  const project = getProjectById(params.project_id)

  return (
    <div className="h-screen flex flex-col items-center lg:w-1/2 m-auto p-10 gap-10">
      <Fab position="tl" image="/arrow_left.svg" href="/"/>
      <img src={project.src} className="w-full h-1/2 object-cover rounded-2xl shadow-lg"/>
      <div className="flex gap-4 h-40 w-full">
        {project.tech.map((t) =>
          <div className="text-transparent text-center hover:scale-105 hover:text-primary transition-all font-semibold">
            <img src={getIcon(t)} fill className="h-full"/>
            <p className="fixed w-max">{t}</p>
          </div>
          )}
      </div>

      <div className="h-full border-2 w-full flex flex-col gap-4 border-red-500">
        <div className="flex flex-wrap gap-4 justify-between items-center">
          <h1 className="text-4xl lg:text-6xl text-primary font-semibold">{project.name}</h1>
          <Link href={project.url} target="_blank" className="flex text-md p-4 gap-2 rounded-2xl bg-black text-white hover:scale-105 transition-all shadow-lg">
            <img src="/github.png" width="48" className="object-contain brightness-0 invert "/>
            <div className="text-center">
              <p>Available on</p>
              <p className="text-2xl font-bold ">GitHub</p>
            </div>
            
          </Link>
        </div>
        
        <p className="text-lg">{project.description}</p>
      </div>
      
    </div>
  )
}
