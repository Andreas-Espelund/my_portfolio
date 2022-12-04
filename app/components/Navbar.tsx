import React from 'react'

export default function Navbar() {
  return (
    <div id="navbar" className="flex gap-4 w-full justify-between items-center p-6 text-lg font-semibold text-white lg:text-black bg-primary lg:bg-secondary shadow-lg text-bold lg:w-fit lg:rounded-full fixed top-0 right-0 lg:m-4 ">
        <a className='hover:-translate-y-0.5 transition-all' href="#projects">Projects</a>
        <a className='hover:-translate-y-0.5 transition-all' href="#about">About</a>
        <a className='hover:-translate-y-0.5 transition-all' href="#contact">Contact</a>
    </div>
  )
}