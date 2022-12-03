import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Fab({visible, position, image, href}) {
    const btn_vis = " m-4 p-4 bg-secondary rounded-full w-fit drop-shadow-xl hover:drop-shadow-2xl hover:-translate-y-1 transition-all "
    const btn_hid = btn_vis+" opacity-0"
    const placement = {
      "tl" : " fixed top-0 left-0",
      "tr" : " fixed top-0 right-0",
      "bl" : " fixed bottom-0 left-0",
      "br" : " fixed bottom-0 right-0"
    }
    const cls = btn_vis + placement[position]??" static"
  return (
    <Link legacyBehavior href={href}>
        <a className={visible? btn_hid : cls} >
            <Image src={image} width="32" height="32" alt="fab icon"/>
        </a>
    </Link>
  )
}
