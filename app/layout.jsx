'use client'
import './globals.css'
import Navbar from './Navbar'
import { useState, useEffect } from 'react'
import Fab from './Fab'

export default function RootLayout({ children }) {

  const [visible, setVisible] = useState(false)

  useEffect(function onFirstMount() {
    window.addEventListener("scroll", () => {setVisible(window.scrollY<=2)})
  }, []);


  return (
    <html lang="en" className="scroll-smooth">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body id="body" className="min-h-screen w-full flex flex-col justify-start bg-zinc-200">
        <Navbar/>
        <div>
          {children}
        </div>
        <Fab visible={visible}/>
      </body>
    </html>
  )
}
