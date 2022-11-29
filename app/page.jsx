import './globals.css'
import Image from "next/image"
import CardView from "./CardView"
import Link from "next/link"
import Contact from './Contact'
export default function Home() {
  
  const project = {id : 1, name: "Utepils", description: "Lorem ipsum masse bs som ingen bryr seg om egt...", url: "https://images.unsplash.com/photo-1664575196412-ed801e8333a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80"}

  const projects = [project,project,project]

  const socials = [
    {
      id : 0,
      title : 'linkedIn',
      src : '/linkedin.png',
      url : 'https://www.linkedin.com/in/andreas-espelund/'
    },
    {
      id : 1,
      title : 'GitHub',
      src : '/github.png',
      url : 'https://github.com/Andreas-Espelund'
    },
    {
      id : 2,
      title : 'Mail',
      src : '/mail.svg',
      url : 'mailto:andreasesraf@gmail.com'
    },
    {
      id : 3,
      title : 'Phone',
      src : '/phone.svg',
      url : 'tel:004799125338'
    },
  ]

  return (
    <div>
      <section id="projects" className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-cyan-300 to-blue-300" className="bg_pattern1">
        <div className="flex flex-col w-fit gap-10 opacity-100">
          <h1 className="text-5xl font-semibold">Projects</h1>
          <div className="flex gap-10 w-fit flex-wrap m-auto">
            {projects.map((e) => <CardView project={e}/>)}
          </div>
        </div>
      
      </section>

      <section id="about" className="w-full h-screen flex justify-center items-center  bg-gradient-to-b from-blue-300 to-fuchsia-300" className="bg_pattern2">
        <div className="flex flex-col w-fit gap-10">
          <h1 className="text-5xl font-semibold">About</h1>
        </div>
      </section>

      <section id="contact" className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-fuchsia-300 to-pink-300" className="bg_pattern3">
      <div className="flex flex-col w-fit gap-10">
        <h1 className="text-5xl font-semibold">Contact</h1>
        <div className="flex gap-24 bg-white w-fit p-10 m-auto rounded-2xl shadow-lg">
          {socials.map((e) => <Contact contact={e}/>)}
        </div>
      </div>
      
      </section>

    </div>
  )
}
