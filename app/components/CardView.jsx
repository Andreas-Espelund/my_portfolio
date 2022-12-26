import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TypeChip from './TypeChip'
export default function CardView({project}) {

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      const r =  parseInt(result[1], 16)
      const g = parseInt(result[2], 16)
      const b = parseInt(result[3], 16)
      return `rgba(${r},${g},${b},0.1)`
    }
    return '#e5e5f7'
  }
  
  return (
    <div id={project.id} className="flex flex-col gap-4 bg-white hover:bg-white/60 rounded-2xl w-full lg:w-96 overflow-hidden shadow-lg lg:hover:scale-105 hover:shadow-2xl hover:cursor-pointer transition-all duration-500">
        <Link href={project.id} className="h-full">
          <div className="relative h-60">
            <Image src={project.src} fill className=" object-cover" alt={project.alt}/>
          </div>
          <div className="p-4 flex flex-col gap-4">
            <div className='flex gap-4 items-center'>
              <h2 className="text-3xl font-semibold">{project.name}</h2>
              <TypeChip type={project.type}/>
            </div>
            <h2 className="text-xl font-semibold">{project.oneliner}</h2>
          </div>
        </Link>
    </div>
  )
}
