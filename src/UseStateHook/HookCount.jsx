import React, { useState } from 'react'

export const HookCount = () => {

    const [count, setCount] = useState(0)

    const incrementBy5 = ()=>{
        for(let i=0;i<5;i++){
            setCount(pre => pre+1)
        }
    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(pre => pre+1)}>Increment</button>
        <button onClick={() => setCount(pre => pre-1)}>Decrement</button>
        <button onClick={incrementBy5}>IncrementBy5</button>
        <button onClick={()=>{
        for(let i=0;i<5;i++){
            setCount(pre => pre-1)
        }
    }}>DecrementBy5</button>
    </div>
  )
}
