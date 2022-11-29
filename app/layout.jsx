'use client'
import './globals.css'
import Navbar from './Navbar'
import { useState } from 'react'
import Image from 'next/image'
export default function RootLayout({ children }) {

  const [visible, setVisible] = useState(false)
  const btn_vis = "fixed bottom-2 right-2 p-4 bg-zinc-900 rounded-full shadow-xl transition-all"
  const btn_hid = "fixed bottom-2 right-2 p-4 bg-zinc-900 rounded-full shadow-xl transition-all opacity-0"
  window.addEventListener("scroll", function(){
    setVisible(window.scrollY!=0)
      //user is at the top of the page; no need to show the back to top but
  });


  return (
    <html lang="en" className="scroll-smooth">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="min-h-screen w-full flex flex-col justify-start bg-zinc-200">
        <Navbar/>
        <div>
          {children}
        </div>
        <a id="goToTop" className={visible? btn_vis : btn_hid} href="#navbar">
          <Image src="/arrow_up.svg" width="32" height="32"/>
        </a>
      </body>
    </html>
  )
}
