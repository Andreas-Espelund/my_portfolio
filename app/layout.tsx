
'use client'
import './globals.css'
import { Navbar } from '../components'
import { AnimateSharedLayout } from 'framer-motion'
export default function RootLayout({ children }) {
  return (
    <AnimateSharedLayout>

    <html lang="en" className="scroll-smooth">
      <head/>  
      <body id="body" className="min-h-screen w-full flex flex-col justify-start bg-neutral ">
        {children}
      </body>
    </html>
    </AnimateSharedLayout>
  )
}
