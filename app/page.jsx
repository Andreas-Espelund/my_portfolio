'use client'
import { Contact, Navbar, CompanyBadge, Header, CardView, Blob } from '../components'
import Link from 'next/link'
import { motion } from 'framer-motion'
import get_socials from '../pages/api/contacts'
import Image from 'next/image'
import { projects } from '../pages/api/projectData'
import headshot from '../public/headshot.jpg'
export default function Home() { 
  const socials = get_socials()
  
  return (
    <div className="relative min-h-screen overflow-hidden">
      
      <section className='bg_pattern1 min-h-screen relative bg-neutral w-full grid place-content-center'>
      <div className='absolute w-full h-screen flex items-center justify-center'>
        <div className='flex flex-col p-4 gap-4 z-50'>
          <p className='font-black text-[7rem] text-primary font-serif'> Hello, </p>
          <p className='text-2xl font-[courier]'> my name is Andreas. </p>
          <div className='flex md:text-2xl font-[courier]'>
            <p>  scroll to explore my stuff</p>
            <motion.p
              
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{repeat:Infinity, repeatType:'reverse', duration:0.1, repeatDelay:0.9}}
              >_</motion.p>
          </div>
        </div>
        
      </div>
      <Blob/>
      
      <motion.h1 
        initial={{y:-60, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{type:'tween', duration:1}}
        className='text-[3rem] md:text-[4.5rem] font-black font-serif absolute top-6 left-6 text-primary'>
        andreas espelund.
      </motion.h1>
      </section>
      
      <section id="projects" className="min-h-screen bg-neutral p-4 flex items-center justify-center">
        <div className="flex flex-col w-full lg:w-fit gap-10 my-10">
          <Header title="Recent projects" emoji='🧑‍💻'/>
          <div className='flex gap-14 md:gap-10 flex-col md:flex-row'>
            {projects.map(e =>
              <CardView project={e}/>  
              )}
            </div>
        </div>
      </section>

      <section id="about" className="bg_pattern2">
        <div className="grid md:grid-cols-2 p-4 md:w-1/2 mt-48 gap-10">

          <div className='md:col-span-2'>
            <Header title="Hello there!" emoji="👋" animate="wave"/>
          </div>
          
          
          <p className="text-xl my-auto">
            My name is Andreas Espelund, and I am a computer science student currently pursuing a Bachelor's degree in Computer Science at UiO. I have a strong passion for technology and computer programming, and I am always looking for ways to expand my knowledge and skills in the field. In my current studies, I am focusing on learning new skills, and I am eager to apply my knowledge and expertise to real-world problems.
          </p>
          <motion.div
            className='relative w-full  aspect-square rounded-full overflow-hidden row-span-2 m-auto'
            initial={{opacity:0, x:50}}
            whileInView={{opacity:1, x:0}}
            transition={{type:'tween', duration:1}}
            viewport={{once:true}}
          >
            <Image src={headshot} fill/>
          </motion.div>
        
          <p className="text-xl">
            In the future, I hope to work as a software developer, where I can use my technical skills to create innovative solutions for a variety of industries. In my free time, I enjoy staying up-to-date on the latest advancements in technology and how i can use them to improve my skills.
          </p>

        </div>
      </section>

      <section id='experience' className='min-h-screen bg-neutral grid place-content-center gap-10 hidden'>
      <Header title="Experience" emoji="👷‍♂️" animate="none"/>
      <div className='flex h-fit gap-14'>

        <CompanyBadge 
          photo={"https://images.squarespace-cdn.com/content/v1/61f912a340bb9179557e55a4/af3d9cd7-2004-4102-b934-b592e7c3f630/IMG_20230121_161541_1.jpg?format=500w"} 
          title={'Selger'}
          color={'#E86209'}
          description={'Retail sales from 2016 to 2019, department manager from 2019 to 2020'}
          logo={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Power_logo.svg/1024px-Power_logo.svg.png"}
          />
        <CompanyBadge 
          photo={"https://images.squarespace-cdn.com/content/v1/61f912a340bb9179557e55a4/af3d9cd7-2004-4102-b934-b592e7c3f630/IMG_20230121_161541_1.jpg?format=500w"} 
          title={'Selger'}
          color={'#10165B'}
          description={'Retail sales from 2016 to 2019, department manager from 2019 to 2020'}
          logo={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Elkjop_logo_blue.png/320px-Elkjop_logo_blue.png"}
          />
        <CompanyBadge 
          photo={"https://images.squarespace-cdn.com/content/v1/61f912a340bb9179557e55a4/af3d9cd7-2004-4102-b934-b592e7c3f630/IMG_20230121_161541_1.jpg?format=500w"} 
          title={'Oppgaveretter'}
          color={'#ED1C24'}
          description={'Oppgaveretter i faget IN2040 (funksjonell programmering)'}
          logo={"https://www.uio.no/for-ansatte/enhetssider/los/ea/aktuelt-saker/2022/bilder-2022/logo-signatur.png"}
          />
        

        <CompanyBadge 
          photo={"https://pluginicons.craft-cdn.com/vippsJKLAhw4xAQ4PNYEXHQmyrgJM0XmBqr7FEt4T.svg?1550848953"} 
          title={'Developer intern'}
          color={'#ED1C24'}
          description={'Developer intern, summer 2023'}
          logo={"https://vipps.no/documents/26/vipps_logo_rgb.png"}
          />
        </div>
        

      </section>

      <section id="contact" className="bg-primary p-24 grid place-content-center">
      <div className="flex flex-col w-full gap-10 lg:w-fit">
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-20 w-fit m-auto'>
          {socials.map((e) => <Contact key={e.id} contact={e}/>)}
        </div>

      </div>
      </section>
      <Navbar id={1}/>
    </div>
  )
}
