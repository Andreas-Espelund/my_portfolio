'use client'
import './globals.css'
import { Contact, Projects, Navbar, Fab } from './components'
import { useEffect } from 'react'
import get_socials from '../pages/api/contacts'
export default function Home() {
 
  const socials = get_socials()

  
  return (
    <div className="relative min-h-screen">
      <section id="projects" className="bg_pattern1">
        <div className="flex flex-col w-full lg:w-fit gap-10 opacity-100 mt-24 lg:mt-0">
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
      <div className="flex flex-col w-full gap-10 lg:w-fit mt-24 lg:mt-0">
        <h1 className="text-4xl lg:text-6xl text-primary font-semibold">🚀 Get in touch</h1>
        <div className="w-full bg-primary lg:w-fit p-10 m-auto rounded-2xl shadow-lg">
          <div className='flex flex-col lg:flex-row gap-10 lg:gap-20  w-fit m-auto'>
            {socials.map((e) => <Contact contact={e}/>)}
          </div>
        </div>
      </div>
      
      </section>
      <Navbar id='navbar'/>
    </div>
  )
}
