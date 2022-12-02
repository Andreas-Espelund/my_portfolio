import React from 'react'
import { getAllProjects } from '../pages/api/projectData'
import CardView from './CardView'
export default function Projects() {

    const projects = getAllProjects()


  return (
    <div className="flex gap-10 h-80 flex-wrap">
        {projects.map((e) => <CardView project={e}/>)}
    </div>
  )
}
