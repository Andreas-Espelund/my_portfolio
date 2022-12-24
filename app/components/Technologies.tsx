import React from 'react'
import { getIcon } from '../../pages/api/devIcons'
import Image from 'next/image'
export default function Technologies({items, small}) {
    const cls =  small ?  'relative w-8 h-8' : 'relative w-8 h-8 lg:w-14 lg:h-14 flex flex-col items-center '
    const txt = small ? 'hidden' : 'mt-14'
    return (
    <div className="w-full grid grid-flow-col place-content-start gap-1 lg:gap-6">
        {items.map((t: string) =>
        <div className={`${cls} text-transparent w-fit font-semibold hover:text-inherit transition-all`}>
            <Image src={getIcon(t)} fill alt={''}/>
            <p className={txt}>{t}</p>
        </div>
        )}
      </div>
  )
}
