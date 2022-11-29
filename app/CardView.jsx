import React from 'react'

export default function CardView({project}) {
  return (
    <div id={project.id} className="flex flex-col gap-2 bg-white rounded-2xl max-w-sm overflow-hidden shadow-lg border border-zinc-400 hover:scale-105 hover:shadow-2xl hover:cursor-pointer transition-all">
        <img src={project.url} layout="fill" className="shadow-sm"/>
        <div className="p-4 flex flex-col gap-4">
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p>{project.description}</p>
        </div>
    </div>
  )
}
