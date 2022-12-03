import React from 'react'
import { getIcon } from '../../pages/api/devIcons'
import Image from 'next/image'
export default function Technologies({items, small}) {
    const size =  small ?  24 : 64 

    return (
    <div className="flex gap-4  w-full">
        {items.sort().map((t: string) =>
          <div className="text-transparent flex flex-col items-center hover:scale-105 hover:text-primary transition-all font-semibold">
            <Image src={getIcon(t)} width={size} height={size} className="h-full" alt={''}/>
            <p hidden={small} className="w-14">{t}</p>
          </div>
          )}
      </div>
  )
}
