'use client'
import './globals.css'
import { Contact, Projects, Navbar, Fab, Header } from './components'
import { useEffect } from 'react'
import Image from 'next/image'
import get_socials from '../pages/api/contacts'
export default function Home() {
 
  const socials = get_socials()
  
  return (
    <div className="relative min-h-screen">
      <section className='h-screen snap-start overflow-hidden relative'>
        
        <div className='background'>
          <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
          <div className="h-screen grid place-content-center absolute">
            <div className="text_wrapper">
              <h1 className="text-[2rem] lg:text-[8.2rem] text-neutral">Welcome!</h1>
              <h1 className="text-[1.1rem] mt-6 text-neutral">My name is Andreas Espelund and i am an aspiring developer;</h1>
              <div className='text-[1rem] lg:text-[2.12rem] flex flex-wrap gap-2 mt-8 items-center  text-neutral'>
                <h1>Scroll to explore my projects</h1>
                <h1 className="cursor">_</h1>
              </div>
            </div>
                
          </div>
        </div>
      </section>
      
      <section id="projects" className="bg_pattern1">
        <div className="flex flex-col w-full lg:w-fit gap-10 opacity-100 my-24 lg:mt-0">
            <Header title="Recent projects" emoji='🧑‍💻'/>
          <Projects/>
        </div>
      </section>

      <section id="about" className="bg_pattern2">
        <div className="flex flex-col w-full lg:w-1/2 gap-10 mt-24 lg:mt-40">
          <Header title="Hello there!" emoji="👋"/>
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
        <Header title="Get in touch" emoji="🚀"/>
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
