import React from 'react'

export default function TypeChip({ type, size }: { type:string, size:string }) {
        
  const textSize = size === "large" ? " text-xl px-6 py-2 " : " px-4 "
    const background = "bg-primary "

    return (
    <p className={`${background}  text-neutral grid content-center rounded-full text-center font-semibold ${textSize}`}>
        {type.toLowerCase()}
    </p>
  )
}
