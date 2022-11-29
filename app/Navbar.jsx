
import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
    <div id="navbar" className="flex gap-4 w-full justify-end items-center p-6 text-lg font-semibold bg-primary text-neutral">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
    </div>
  )
}
