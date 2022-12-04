'use client'
import './globals.css'
import { Contact, Projects, Navbar, Fab } from './components'
import { useState, useEffect } from 'react'
export default function Home() {
 
  const socials = [
    {
      id : "linkedin",
      title : 'linkedIn',
      src : '/linkedin.png',
      url : 'https://www.linkedin.com/in/andreas-espelund/',
      alt : 'linkedin logo'
    },
    {
      id : "github",
      title : 'GitHub',
      src : '/github.png',
      url : 'https://github.com/Andreas-Espelund',
      alt : 'github logo'
    },
    {
      id : "mail",
      title : 'Mail',
      src : '/mail.svg',
      url : 'mailto:andreasesraf@gmail.com',
      alt : 'mail icon'
    },
    {
      id : "phone",
      title : 'Phone',
      src : '/phone.svg',
      url : 'tel:004799125338',
      alt : 'phone icon'
    },
  ]

  
  return (
    <div className="relative min-h-screen snap-x snap-proximity scroll-smooth">
      <section id="projects" className="bg_pattern1">
        <div className="flex flex-col w-full lg:w-fit gap-10 opacity-100 my-20">
          <h1 className="text-4xl lg:text-6xl text-primary font-semibold">🧑‍💻 Recent projects</h1>
          <Projects/>
        </div>
      </section>

      <section id="about" className="bg_pattern2">
        <div className="flex flex-col w-full lg:w-1/2 gap-10">
          <h1 className="text-4xl lg:text-6xl text-primary font-semibold">👋 Hello!</h1>
          <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ex in magna aliquet ullamcorper vitae ac dolor. Etiam ac bibendum nisi. Aliquam ac eleifend lectus. Nunc viverra ex leo, vitae lacinia magna malesuada vitae. Cras et gravida metus. Sed ut neque libero. Fusce metus sapien, consequat in augue ut, mollis gravida mauris. Maecenas et sollicitudin diam. Vivamus arcu velit, pellentesque at nisl at, luctus dignissim augue. Donec luctus libero hendrerit, dignissim mi eget, vestibulum odio. Cras cursus mattis commodo. Morbi fermentum massa eu metus interdum maximus.
          </p>
        </div>
      </section>

      <section id="contact" className="bg_pattern3">
      <div className="flex flex-col w-fit gap-10">
        <h1 className="text-4xl lg:text-6xl text-primary font-semibold">🚀 Get in touch</h1>
        <div className="flex flex-wrap gap-10 lg:gap-24 bg-primary w-fit p-4 lg:p-10 m-auto rounded-2xl shadow-lg">
          {socials.map((e) => <Contact contact={e}/>)}
        </div>
      </div>
      
      </section>
      <Navbar/>
    </div>
  )
}
