import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Fab({visible}) {
    const btn_vis = "fixed bottom-0 right-0 m-4 p-4 bg-secondary rounded-full shadow-xl transition-all"
    const btn_hid = "fixed bottom-0 right-0 m-4 p-4 bg-secondary rounded-full shadow-xl transition-all opacity-0"

  return (
    <Link legacyBehavior id="goToTop" href="#body">
        <a className={visible? btn_hid : btn_vis} >
            <Image src="/arrow_up.svg" width="32" height="32" alt="arrow icon"/>
        </a>
    </Link>
  )
}
