import React from "react";
export default function Header({title, emoji}){

    return (
        <div className="flex gap-2">
            {emoji? <h1 className="text-4xl lg:text-6xl font-semibold">{emoji}</h1> : <h1/>}
            <h1 className="text-4xl lg:text-6xl font-semibold text-primary"> {title}</h1>
        </div>
    )
}