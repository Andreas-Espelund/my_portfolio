import React from 'react'
import Image from 'next/image'
export default function CardView({project}) {
  return (
    <div id={project.id} className="flex flex-col gap-2 bg-white lg:min-w-1/4 rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl hover:cursor-pointer transition-all">
        <img src={project.url} layout="fill" className="shadow-sm h-64 object-cover" alt={project.alt}/>
        <div className="p-4 flex flex-col gap-4">
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p>{project.description}</p>
        </div>
    </div>
  )
}
