import React, { useReducer, useState } from 'react'


export const CounterReducer = () => {
    // const[count,setCount] = useState(0)

    
const counter = (state,action) => {
    switch(action.type){
        case "INCREMENT":
            return {count:state.count+1};
        case "DECREMENT":
            return {count:state.count-1};
        case "RESET":
            return {count:0}
        default:
            throw Error("Invalid Action")
            break;
    }
}

   const[state,dispatch]  = useReducer(counter,{count:0})

  return (
    <div>
        <h1>Count: {state.count}</h1>
         <button onClick={() => dispatch({type:"INCREMENT"})}>Increment</button>
         <button onClick={() => dispatch({type:"DECREMENT"})}>Decrement</button>
         <button onClick={() => dispatch({type:"RESET"})}>Reset</button>
    </div>
  )
}
