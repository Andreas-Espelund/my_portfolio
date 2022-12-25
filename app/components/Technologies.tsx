import React from 'react'
import { getIcon } from '../../pages/api/devIcons'
import Image from 'next/image'
export default function Technologies({items, small, bg}) {
    const cls =  small ?  'relative w-8 h-8' : 'relative w-16 h-16 flex flex-col items-center '
    const txt = small ? 'hidden' : 'mt-16 lg:mt-20'
    return (
        <div className={`flex gap-1 flex-wrap   ${bg? "p-2 rounded-2xl backdrop-blur shadow-lg" : ""} `}>
            {items.map((t: string) =>
            <div key={t} className={`${cls} text-transparent w-fit font-semibold lg:hover:text-inherit transition-all `}>
                <Image src={getIcon(t)} fill alt={t} className="p-2 lg:hover:bg-white/20 rounded-lg transition-all backdrop-blur duration-300"/>
                <p className={txt}>{t}</p>
            </div>
            )}
        </div>
  )
}
