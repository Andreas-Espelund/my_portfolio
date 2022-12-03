import React from 'react'
import { getIcon } from '../../pages/api/devIcons'
import Image from 'next/image'
export default function Technologies({items, small}) {
    const size =  small ?  24 : 64 

    return (
    <div className="flex gap-4 w-full">
        {items.map((t: string) =>
          <div className="relative w-8 h-8 lg:w-14 lg:h-14">
              <Image src={getIcon(t)} fill alt={''}/>
          </div>
          
          )}
      </div>
  )
}
