import React, { useState } from 'react'
import ClassMouse from './ClassMouse'
import { HookMouse } from './HookMouse'

export const MouseContainer = () => {
    const [display,setDisplay] = useState(true)
  return (
    <div>
        <button onClick={()=> setDisplay(!display)}>Remove Hook Mouse</button>
        {display && <HookMouse/>}
    </div>
  )
}
