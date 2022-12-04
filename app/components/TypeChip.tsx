import React from 'react'

export default function TypeChip({ type, size }: { type:string, size:string }) {
        
  const textSize = size === "large" ? " text-xl px-4 py-2 " : ""
  let background = "bg-primary "
  
  switch (type) {
    case "android":
      background = "bg-android "
      break;
    case "web":
      background = "bg-web "
      break;
    default:
      break;
  }
  return (
    <div className={`${background} w-fit text-white rounded-full shadow-lg px-2 block text-center font-semibold ${textSize}`}>
        {type}
    </div>
  )
}
