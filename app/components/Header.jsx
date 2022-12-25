import React from "react";
export default function Header({title, emoji}){

    return (
        <div className="flex gap-2">
            {emoji? <h1 className="text-4xl lg:text-6xl font-semibold">{emoji}</h1> : <h1/>}
            <h1 className="text-4xl lg:text-6xl font-semibold text-transparent bg-clip-text bg-clip-text bg-gradient-to-r from-primary to-[#2d6dad]"> Recent projects</h1>
        </div>
    )
}