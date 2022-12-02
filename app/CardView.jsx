import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function CardView({project}) {
  return (
    <div id={project.id} className="flex flex-col gap-4 bg-white rounded-2xl min-w- h-full overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl hover:cursor-pointer transition-all">
        <Link href={project.id} className="h-full">
          <div className="relative h-2/3">
          <Image src={project.src} fill className="shadow-sm object-cover" alt={project.alt}/>
          </div>
          <div className="p-4 flex flex-col gap-4">
              <h2 className="text-xl font-semibold">{project.name}</h2>
              <p className="overflow-hidden">{project.description.slice(0,45)+" ..."}</p>
          </div>
        </Link>
    </div>
  )
}
