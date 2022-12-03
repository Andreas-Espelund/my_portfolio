
import React from 'react'
export default function Navbar() {

  const scrollTo = (id: string) => {
    document.getElementById(id).scrollIntoView()
  }

  return (
    <div id="navbar" className="flex gap-4 w-fit justify-end items-center p-6 text-lg font-semibold bg-secondary shadow-lg text-bold rounded-full fixed top-0 right-0 m-4">
        <button className="hover:text-primary hover:-translate-y-0.5 transition-all" onClick={() => scrollTo("projects") }>Projects</button>
        <button className="hover:text-primary hover:-translate-y-0.5 transition-all" onClick={() => scrollTo("about") }>About</button>
        <button className="hover:text-primary hover:-translate-y-0.5 transition-all" onClick={() => scrollTo("contact") }>Contact</button>
    </div>
  )
}
