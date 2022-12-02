import React from 'react'
import Fab from '../Fab'
import Link from 'next/link'
import Image from 'next/image'
import { getIcon } from '../../pages/api/devIcons'
import { getProjectById } from '../../pages/api/projectData'
export default function page({params}) {
  
  const project = getProjectById(params.project_id)

  return (
    <div className="h-screen flex flex-col items-center w-full lg:w-1/2 m-auto p-10 gap-10">
        <div className="relative h-1/2 w-full">
          <Image src={project.src} fill className="object-cover rounded-2xl shadow-lg"/>
          <div className="absolute top-0 left-0 translate-y-10 -translate-x-12 flex">
            <Fab image="/arrow_left.svg" href="/"/>
          </div>
        </div>
      
      <div className="flex gap-4 h-20 w-full">
        {project.tech.map((t) =>
          <div className="text-transparent text-center hover:scale-105 hover:text-primary transition-all font-semibold">
            <Image src={getIcon(t)} width={64} height={64} className="h-full"/>
            <p className="fixed w-max">{t}</p>
          </div>
          )}
      </div>
      <div className="w-full flex flex-col gap-6">
        <div className="flex flex-wrap gap-4 justify-between items-end ">
          <h1 className="text-4xl lg:text-6xl text-primary font-semibold">{project.name}</h1>
          <div className="flex gap-4">

            <Link href={project.github_url} target="_blank" className="flex text-md p-4 gap-2 rounded-2xl bg-black text-white hover:scale-105 hover:shadow-xl transition-all shadow-lg">
              <Image src="/github.png" width={48} height={48} className="object-contain brightness-0 invert " alt="github logo"/>
              <div className="text-center">
                <p>Available on</p>
                <p className="text-2xl font-bold ">GitHub</p>
              </div>
            </Link>    
            {project.page_url?
            <Link target="_blank" href={project.page_url} className="flex text-md p-4 gap-2 rounded-2xl bg-secondary text-black hover:scale-105 hover:shadow-xl transition-all shadow-lg">
              <div className="relative flex items-center gap-2">
                <Image src="/link.svg" alt="link icon" width={48} height={48}/>
                <div className="text-center">
                  <p>Visit</p>
                  <p className="text-2xl font-bold ">Page</p>
                </div>
              </div>
            </Link> :<></>
            }
        </div>
        </div>
        <p className="text-lg">{project.description}</p>
      </div>
      
    </div>
  )
}
