import React, { useState } from 'react'

export const Clock = () => {
    let time = new Date().toLocaleTimeString()
    const[atPresent, refresh] = useState(time)

    const getTime =() => {
      time = new Date().toLocaleTimeString()
      refresh(time)
    }
  return (

    <div>
        <h1>Time: {atPresent}</h1>
        <button onClick={getTime}>Get Present Time</button>
    </div>
  )
}
