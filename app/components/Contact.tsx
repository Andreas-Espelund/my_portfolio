import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
type contactProps = {
    id : string,
    title : string,
    src : string,
    url : string,
    alt : string,
}
  
export default function Contact({contact}: { contact : contactProps}) {
  return (
    <div id={contact.id} className="hover:scale-105 transition-all">
      <Link className="text-2xl  font-semibold text-center flex lg:flex-col justify-between items-center gap-10 lg:gap-4 text-white" href={contact.url} target="_blank">
            <div className="relative w-20 h-20 ">
                <Image src={contact.src} fill alt={contact.alt} className="brightness-0 invert"/>
            </div>
            <h2>{contact.title}</h2>
        </Link>
    </div>
  )
}
