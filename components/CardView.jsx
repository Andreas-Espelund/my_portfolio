import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TypeChip from './TypeChip'
import { motion } from 'framer-motion'
export default function CardView({project}) {

  return (
  <motion.div
    className=" w-full md:w-[400px]  bg-white rounded-xl shadow-md md:hover:shadow-xl md:hover:scale-105 transition-all"
    initial={{opacity:0, x:'-10px'}}
    whileInView={{opacity:1, x:0}}
    exit={{opacity:0}}
    
  >

    <Link href={project.id}>
      <motion.div className='w-full h-[25vh] relative' layoutId={project.id}>
        <Image src={project.src} alt={project.alt} fill className='object-cover rounded-t-xl'/>
      </motion.div>
      <div className='p-4 text-lg flex flex-col gap-4'>
        <div className='flex gap-4'>
          <h1 className='text-2xl font-bold'>{project.name}</h1>
          <TypeChip type={project.type}/>
        </div>
        
        <p className='col-span-3'>{project.oneliner}</p>
      </div>
    </Link>
  </motion.div>
  )
}
