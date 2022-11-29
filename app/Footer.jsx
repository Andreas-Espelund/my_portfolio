
import React from 'react'
import Link from 'next/link'
export default function Footer() {
  return (
    <div className="flex gap-4 justify-center items-center p-4 text-lg bg-zinc-400 mt-auto">
            <Link href="https://github.com/Andreas-Espelund">GitHub</Link>
            <Link href="https://www.linkedin.com/in/andreas-espelund/">linkedIn</Link>
            <Link href="mailto:andreasesraf@gmail.com">andreasesraf@gmail.com</Link>
            <Link href="tel:99125338">991 25 338</Link> 
    </div>
  )
}
