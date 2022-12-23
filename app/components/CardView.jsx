import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Technologies from './Technologies'
import TypeChip from './TypeChip'
export default function CardView({project}) {
  return (
    <div id={project.id} className="flex flex-col gap-4 bg-white rounded-2xl w-full lg:w-96 overflow-hidden shadow-lg lg:hover:scale-105 hover:shadow-2xl hover:cursor-pointer transition-all">
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
