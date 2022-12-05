import React from 'react'
import { getIcon } from '../../pages/api/devIcons'
import Image from 'next/image'
export default function Technologies({items, small}) {
    const cls =  small ?  'relative w-8 h-8' : 'relative w-8 h-8 lg:w-14 lg:h-14 flex flex-col items-center '
    const txt = small ? 'hidden' : 'mt-14'
    return (
    <div className="flex gap-4 w-full">
        {items.map((t: string) =>
        <div className={`${cls} text-transparent font-semibold hover:text-primary transition-all`}>
            <Image src={getIcon(t)} fill alt={''}/>
            <p className={txt}>{t}</p>
        </div>
        )}
      </div>
  )
}
