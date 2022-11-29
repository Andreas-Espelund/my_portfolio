'use client'
import './globals.css'
import Navbar from './Navbar'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function RootLayout({ children }) {

  const [visible, setVisible] = useState(false)
  const btn_vis = "fixed bottom-0 right-0 m-4 p-4 bg-secondary rounded-full shadow-xl transition-all"
  const btn_hid = "fixed bottom-0 right-0 m-4 p-4 bg-secondary rounded-full shadow-xl transition-all opacity-0"
  window.addEventListener("scroll", () => {setVisible(window.scrollY<=2)})

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
        <a id="goToTop" className={visible? btn_hid : btn_vis} href="#body">
          <Image src="/arrow_up.svg" width="32" height="32" alt="arrow icon"/>
        </a>
      </body>
    </html>
  )
}
