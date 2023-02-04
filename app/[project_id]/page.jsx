'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getProjectById } from '../../pages/api/projectData'
import { Fab, Technologies } from '../../components'
import GithubLink from '../../components/GithubLink'
import { motion } from 'framer-motion'
export default function page({params}) {
  
  const project = getProjectById(params['project_id'])
  const [visible, setVisible] = useState(false)

  return (
    <div className="relative w-full lg:p-4 bg-neutral">
        <div className='lg:w-1/2 flex flex-col gap-4 m-auto'>
          <motion.div className="relative min-h-halfscreen w-full" layoutId={project.id} animate={{opacity:1}} onAnimationComplete={()=>setVisible(true)}>
            <Image src={project.src} fill className="object-cover lg:rounded-2xl shadow-lg" alt={''}/>
            <div className="absolute top-0 left-0  flex  lg:translate-y-10 lg:-translate-x-12">
              <Fab image="/arrow_left.svg" href="/#projects" position={undefined} color={project.color}/>
            </div>
          
          </motion.div>
        
        {visible &&
        <Technologies items={project.tech}/>
        }
        
        {visible &&
        <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1}}
          className="flex flex-col gap-4 p-4 md:p-10 md:shadow-lg  mt-10 md:rounded-2xl md:backdrop-blur md:bg-white/50 mb-20">
          <div className="flex flex-col lg:flex-row gap-4 h-min justify-between lg:items-end">
            <h1 className="text-5xl lg:text-6xl font-semibold" style={{color:project.color}}>{project.name}</h1>
            <div className="grid gap-4 grid-cols-2">
              
              {project.page_url?
              <Link 
              href={project.page_url}
              target="_blank"
              className="hover:scale-105 hover:shadow-lg transition-all p-2 bg-black flex justify-center items-center text-white rounded-xl border font-semibold"
              style={{backgroundColor:project.color}}>
                Go to page
              </Link>
              : <div/> }
              <GithubLink text={"GitHub"} href={project.github_url}/>

            </div>
          </div>
          
          <div className='h-1 rounded-full' style={{backgroundColor: project.color}}/>
          <h2 className='text-2xl lg:text-4xl font-semibold '>What i learned</h2>
          <ul className='list-disc list-inside w-full font-semibold text-xl text-black'>
            {project.lessons.map((t)=><li key={t}>{t}</li>)}
          </ul>
          <h2 className='text-2xl lg:text-4xl font-semibold '>About</h2>            
          <div className='flex flex-col gap-4 text-xl text-black'>
            {project.description.map((d)=> <p key={d}>{d}</p>)}
          </div>        
        </motion.div>
        }
      </div>
    </div>
  )
}