import React, { useEffect, useState } from 'react'

export const HookMouse = () => {
    let[x,setX] = useState(0)
    let[y,setY] = useState(0)

    const logMousePosition = e => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("Use Effect Mouse Move");
        window.addEventListener('mousemove', logMousePosition)

        return () => {
          console.log("Component unmounted from the UI");
          window.removeEventListener('mousemove',logMousePosition)
        }
    },[])
  return (
    <div>
        <h1>X:{x} || Y:{y}</h1>
    </div>
  )
}
