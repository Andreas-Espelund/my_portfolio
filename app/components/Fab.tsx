import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Fab({position, image, href, color}) {
    const placement = {
      "tl" : " fixed top-0 left-0",
      "tr" : " fixed top-0 right-0",
      "bl" : " fixed bottom-0 left-0",
      "br" : " fixed bottom-0 right-0"
    }
    console.log(color)
  return (
    <Link legacyBehavior href={href}>
        <a className={`m-4 p-4 bg-secondary  rounded-full w-fit drop-shadow-xl hover:drop-shadow-2xl hover:-translate-y-1 transition-all`}>
            <Image src={image} width="32" height="32" alt="arrow icon"/>
        </a>
    </Link>
  )
}
