import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Fab({visible, position, image, href}) {
    const btn_vis = "fixed m-4 p-4 bg-secondary rounded-full shadow-xl transition-all"
    const btn_hid = "fixed m-4 p-4 bg-secondary rounded-full shadow-xl transition-all opacity-0"
    const placement = {
      "tl" : " top-0 left-0",
      "tr" : " top-0 right-0",
      "bl" : " bottom-0 left-0",
      "br" : " bottom-0 right-0"
    }
    const cls = btn_vis + placement[position]??" bottom-0 right-0"
  return (
    <Link legacyBehavior href={href}>
        <a className={visible? btn_hid : cls} >
            <Image src={image} width="32" height="32" alt="fab icon"/>
        </a>
    </Link>
  )
}
