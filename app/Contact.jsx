import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Contact({contact}) {
  return (
    <div id={contact.id} className="hover:scale-105 transition-all">
      <Link className="text-lg font-semibold text-center" href={contact.url} target="_blank">
            <div className="flex flex-col gap-4 justify-center items-center ">
                <Image src={contact.src} height="128" width="128" alt={contact.alt}/>
                <h2>{contact.title}</h2>
            </div>
        </Link>
    </div>
  )
}
