'use client'
import React from "react";
import { motion } from "framer-motion";
export default function Header({title, emoji, animate, color}){

    const wave = {
        initial: {rotate:-7, transformOrigin:'80% 80%'},
        whileInView: {rotate: 7},
        transition: {duration:1, repeat:Infinity, repeatType:"reverse"},
        exit: {}
    }

    const launch = {
        initial: { },
        whileInView: {rotate: -360, transformOrigin:'-300% -400%'},
        transition: { duration:2, delay:1.2 },
        exit: {}
        
    }
    let animation
    switch (animate) {
        case 'wave' : 
            animation = wave
            break
        case 'launch':
            animation = launch
            break

        default : animation = null
    }


    return (
        <div className="flex gap-2">
            {emoji? <motion.h1 id='emoji' initial={animation?.initial} exit={animation?.exit} whileInView={animation?.whileInView} viewport={{once:animate=="launch"}} transition={animation?.transition} className="text-4xl lg:text-6xl font-semibold">{emoji}</motion.h1> : <h1/>}
            <h1 className="text-4xl lg:text-6xl font-semibold text-primary" style={{color:color}}> {title}</h1>
        </div>
    )
}