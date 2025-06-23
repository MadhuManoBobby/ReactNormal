import React, { useEffect, useState } from 'react'

export const HookEffectCounter = () => {
    let [count,setCount] = useState(0)
    let [names,setNames] = useState('')

    useEffect(() => {
        console.log("Use Effect => Class componentDidMount, componentDidUpdate");
        document.title=`Count ${count} times`
    },[count])
  return (
    <div>
        <input type="text" value={names} onChange={e => setNames(e.target.value)} />
        <button onClick={() => setCount(count+1)}>Count {count} times</button>
    </div>
  )
}
