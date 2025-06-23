import React, { useEffect, useRef } from 'react'

export const FocusInput = () => {
    const inputRef = useRef(null)//current:

    useEffect(() => {
        console.log(inputRef);
        console.log(inputRef.current);
        inputRef.current.focus()
    })
  return (
    <div>
        <input type="text" ref={inputRef}/>
    </div>
  )
}
