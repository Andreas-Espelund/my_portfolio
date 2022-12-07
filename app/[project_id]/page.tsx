import React from 'react'
import { Fab } from '../components'
import Link from 'next/link'
import Image from 'next/image'
import LargeBtn from '../components/LargeBtn'
import { getProjectById } from '../../pages/api/projectData'
import Technologies from '../components/Technologies'
import TypeChip from '../components/TypeChip'


export async function getStaticProps({ params }) {
  // Pass post data to the page via props
  const project = getProjectById(params.project_id)
  return { props: { project }
}

export default function page({params}) {

  return (
    <div className="relative h-screen flex flex-col items-center w-full lg:w-1/2 m-auto lg:p-4 gap-10">
        <div className="relative min-h-1/2 w-full">
          <Image src={project.src} fill className="object-cover lg:rounded-2xl shadow-lg" alt={''}/>
          <div className="absolute top-0 left-0 hidden lg:flex  lg:translate-y-10 lg:-translate-x-12">
            <Fab image="/arrow_left.svg" href="/" visible={undefined} position={undefined}/>
          </div>
          <div className='absolute top-0 right-0 p-4'>
            <TypeChip type={project.type} size="large"/>
          </div>
        </div>
      
        
      <div className="w-full flex flex-col gap-6 p-4 lg:p-0">
        <Technologies small={false} items={project.tech}/>
        <div className="flex flex-wrap gap-4 justify-between items-end ">
          <h1 className="text-5xl lg:text-6xl text-primary font-semibold">{project.name}</h1>
          <div className="flex gap-4">

            <LargeBtn url={project.github_url} img="/github.png" textSm='Available on' textLg='GitHub' style=''/>

            {project.page_url?
              <LargeBtn url={project.page_url} img='/link.svg' textSm='Visit' textLg='Page' style='secondary'/> : <></>
            }
        </div>
        </div>
        <div className='bg-violet-200 h-2 rounded-full'>

        </div>
        <h2 className='text-2xl lg:text-4xl font-semibold text-primary'>What i learned</h2>
        <ul className='list-disc list-inside w-full font-semibold text-lg '>
          {project.lessons.map((t)=><li>{t}</li>)}
        </ul>
        <h2 className='text-2xl lg:text-4xl font-semibold text-primary'>Details</h2>
        
        <div className='flex flex-col gap-4 pb-14'>
            {project.description.map((d)=> <p className="text-lg">{d}</p>)}
        </div>
      
      </div>
      
      <div className="fixed top-0 left-0 flex lg:hidden">
        <Fab image="/arrow_left.svg" href="/" visible={undefined} position={undefined}/>
      </div>
      
    </div>
  )
}
