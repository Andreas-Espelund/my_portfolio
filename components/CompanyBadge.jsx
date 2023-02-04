import React from 'react'
import Image from 'next/image'
export default function CompanyBadge({photo, logo, title, description, color}) {
  return (
    <div className="flex flex-col gap-4 w-[300px] items-center border bg-primary rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-all">
      <div className='rounded-full m-4 h-4 w-[25%] bg-white'/>
    
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-1/2 text-white">
  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z" clipRule="evenodd" />
</svg>



      <div className='bg-white w-full p-4 flex-1 flex flex-col gap-4'>
        <h4 className='text-xl font-bold text-primary'>{title}</h4>
        <p>{description}</p>
        <div className='w-1/2 h-16 aspect-auto relative mt-auto'>
            <Image className='object-contain' src={logo} fill alt="logo" />
        </div>
      </div>
  </div>
  )
}
