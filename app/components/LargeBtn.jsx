import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function LargeBtn({img,url, textSm, textLg, style}) {

    let color = ''
    let img_color = ''
    switch (style) {
        case 'secondary':
            color = 'bg-secondary text-black'
            img_color = 'brightness-1'
            break;
        case 'primary':
            color = 'bg-primary text-white'
            img_color = 'brightness-0 invert'
            break;
        
            default:
            color = 'bg-black text-white'
            img_color = 'brightness-0 invert'
    }
  return (
    <Link href={url} target="_blank" className={`flex flex-1 lg:flex-auto items-center justify-center text-md p-4 gap-2 rounded-2xl ${color} hover:scale-105 hover:shadow-xl transition-all shadow-lg`}>
        <div className='relative w-8 h-8 lg:w-14 lg:h-14'>
            <Image src={img} fill className={`object-contain  ${img_color}`} alt="github logo"/>

        </div>
        <div className="text-center w-fit">
            <p className='hidden lg:block'>{textSm}</p>
            <p className="text-2xl font-bold ">{textLg}</p>
        </div>
    </Link> 
  )
}
