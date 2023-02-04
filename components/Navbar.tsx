import React from 'react'
export default function Navbar({id}) {
  return (
    <nav className="hidden md:flex gap-4 justify-between items-center p-6 text-lg font-semibold text-black bg-secondary shadow-lg text-bold w-fit rounded-full fixed top-4 right-4">
        <a key="hom" className='hover:scale-110 transition-all' href="/#body">Home</a>
        <a key="pro" className='hover:scale-110 transition-all' href="/#projects">Projects</a>
        <a key="abo" className='hover:scale-110 transition-all' href="/#about">About</a>
        <a key="con" className='hover:scale-110 transition-all' href="/#contact">Contact</a>
    </nav>
  )
}
