import React from 'react'
import { getIcon } from '../pages/api/devIcons'
import Image from 'next/image'
export default function Technologies({items}) {

    return (
        <div className={`flex gap-1 flex-wrap pt-4`}>
            {items.map((t: string) =>
            <div key={t} className="relative w-16 h-16 flex flex-col items-center text-transparent font-semibold lg:hover:text-inherit transition-all">
                <Image src={getIcon(t)} fill alt={t} className="p-2 lg:hover:bg-white/20 rounded-lg transition-all backdrop-blur duration-300"/>
                <p className="mt-16 text-center">{t}</p>
            </div>
            )}
        </div>
  )
}
