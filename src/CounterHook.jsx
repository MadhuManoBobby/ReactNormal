import React, { useState } from 'react'

export default function CounterHook() {
    const[count, getCount] = useState(0)

//    const increment = () => {
//         getCount(count+1)
//     }

    // function decrement(){
    //     getCount(count-1)
    // }
  return (
    <div>
        <h1>Hook Count: {count}</h1>
        <button onClick={() => getCount(count+1)}>Hook - Increment</button>
        <button onClick={() => getCount(count-1)}>Hook - Decrement</button>
    </div>
  )
}


