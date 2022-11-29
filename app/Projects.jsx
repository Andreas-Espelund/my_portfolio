import React from 'react'
import CardView from './CardView'
export default function Projects() {

    const projects = [
        {
            id : 0,
            name: "Utepils",
            description: "Lorem ipsum masse bs som ingen bryr seg om egt...",
            url: "/utepils.png",
            alt : "project screenshot"
        },
        {
            id : 1,
            name: "Jackbow Website",
            description: "Lorem ipsum masse bs som ingen bryr seg om egt...",
            url: "/jackbow.jpg",
            alt : "project screenshot"
        },
        {
            id : 2,
            name: "Munchees - Web app",
            description: "Lorem ipsum masse bs som ingen bryr seg om egt...",
            url: "/munchees.png",
            alt : "project screenshot"
        },
    ]


  return (
    <div className="flex gap-10 flex-wrap">
        {projects.map((e) => <CardView project={e}/>)}
    </div>
  )
}
