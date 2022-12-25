import React from 'react'

export default function Navbar({id}) {
  return (
    <div id={id} className="flex gap-4 w-full justify-between items-center p-6 text-lg font-semibold text-neutral lg:text-black bg-primary lg:bg-secondary shadow-lg text-bold lg:w-fit lg:rounded-full fixed top-0 right-0 lg:m-4 ">
        <a key="pro" className='hover:-translate-y-0.5 transition-all' href="#body">Projects</a>
        <a key="abo" className='hover:-translate-y-0.5 transition-all' href="#about">About</a>
        <a key="con" className='hover:-translate-y-0.5 transition-all' href="#contact">Contact</a>
    </div>
  )
}
