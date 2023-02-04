import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Phone, Mail, GitHub, LinkedIn} from './Icons'
type contactProps = {
    id : string,
    title : string,
    src : string,
    url : string,
    alt : string,
}
  
export default function Contact({contact}: { contact : contactProps}) {
  
  const getIcon = () => {
    switch (contact.title) {
      case "Phone": return <Phone/>
      
      case "Mail": return <Mail/>
      
      case "GitHub": return <GitHub/>
    
      case "linkedIn": return <LinkedIn/>
      
      default: break;
    }
  }
  
  return (
    <div id={contact.id} className="hover:scale-105 transition-all duration-500 text-white hover:text-secondary">
      <Link className="text-2xl  font-semibold text-center flex lg:flex-col  items-center gap-10 lg:gap-4 text-inherit" href={contact.url} target="_blank">
            {getIcon()}
            {contact.title}
        </Link>
    </div>
  )
}
