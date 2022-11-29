
import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
    <div id="navbar" className="flex gap-4 w-fit justify-end items-center p-6 text-lg font-semibold bg-secondary shadow-lg text-bold rounded-full fixed top-0 right-0 m-4">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
    </div>
  )
}
