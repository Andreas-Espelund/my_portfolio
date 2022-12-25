'use client'
import './globals.css'
import { Contact, Projects, Navbar, Fab } from './components'
import { useEffect } from 'react'
import Image from 'next/image'
import get_socials from '../pages/api/contacts'
export default function Home() {
 
  const socials = get_socials()
  
  return (
    <div className="relative min-h-screen">
      <section id="projects" className="bg_pattern1">
        <div className="flex flex-col w-full lg:w-fit gap-10 opacity-100 my-24 lg:mt-0">
          <h1 className="text-4xl lg:text-6xl text-primary font-semibold">🧑‍💻 Recent projects</h1>
          <Projects/>
        </div>
      </section>

      <section id="about" className="bg_pattern2">
        <div className="flex flex-col w-full lg:w-1/2 gap-10 mt-24 lg:mt-40">
          <h1 className="text-4xl lg:text-6xl text-primary font-semibold">👋 Hello there!</h1>
          <p className="text-xl lg:text-2xl">
            My name is Andreas Espelund, and I am a computer science student currently pursuing a Bachelor's degree in Computer Science at UiO. I have a strong passion for technology and computer programming, and I am always looking for ways to expand my knowledge and skills in the field. In my current studies, I am focusing on learning new skills, and I am eager to apply my knowledge and expertise to real-world problems.
          </p>
          <p className='text-xl lg:text-2xl'>
            In the future, I hope to work as a software developer, where I can use my technical skills to create innovative solutions for a variety of industries. In my free time, I enjoy staying up-to-date on the latest advancements in technology and how i can use them to improve my skills.
          </p>
        </div>
      </section>

      <section id="contact" className="bg_pattern3">
      <div className="flex flex-col w-full gap-10 lg:w-fit">
        <h1 className="text-4xl lg:text-6xl text-primary font-semibold">🚀 Get in touch</h1>
        <div className="w-full bg-primary lg:w-fit p-10 m-auto rounded-2xl shadow-lg">
          <div className='flex flex-col lg:flex-row gap-10 lg:gap-20  w-fit m-auto'>
            {socials.map((e) => <Contact key={e.id} contact={e}/>)}
          </div>
        </div>
      </div>
      
      </section>
      <Navbar id='navbar'/>
    </div>
  )
}
