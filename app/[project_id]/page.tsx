import React from 'react'
import { Fab } from '../components'
import Link from 'next/link'
import Image from 'next/image'
import { getIcon } from '../../pages/api/devIcons'
import { getProjectById } from '../../pages/api/projectData'
import Technologies from '../components/Technologies'
import TypeChip from '../components/TypeChip'
export default function page({params}) {
  
  const project = getProjectById(params.project_id)

  return (
    <div className="h-screen flex flex-col items-center w-full lg:w-1/2 m-auto lg:p-4 gap-10">
        <div className="relative min-h-1/2 w-full">
          <Image src={project.src} fill className="object-cover lg:rounded-2xl shadow-lg" alt={''}/>
          <div className="absolute top-0 left-0  lg:translate-y-10 lg:-translate-x-12 flex">
            <Fab image="/arrow_left.svg" href="/" visible={undefined} position={undefined}/>
          </div>
          <div className='absolute top-0 right-0 p-4'>
            <TypeChip type={project.type} size="large"/>
          </div>
        </div>
      
        
      <div className="w-full flex flex-col gap-6 p-4 lg:p-0">
        <Technologies small={false} items={project.tech}/>
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
        <div className='bg-violet-200 h-2 rounded-full'>

        </div>
        <h2 className='text-2xl lg:text-4xl font-semibold text-primary'>What i learned</h2>
        <ul className='px-12 list-disc font-semibold text-lg text-primary'>
          {project.lessons.map((t)=><li><p className='text-black pb-2'>{t}</p></li>)}
        </ul>
        <h2 className='text-2xl lg:text-4xl font-semibold text-primary'>Details</h2>
        <p className="text-lg pb-14">{project.description}</p>
      </div>
      
    </div>
  )
}
