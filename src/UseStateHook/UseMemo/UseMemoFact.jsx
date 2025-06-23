import React, { useMemo, useState } from 'react'

//5! => 5*4*3*2*1
export const UseMemoFact = () => {
    const [count, setCount] = useState(0)
    const[number,setNumber] = useState()


    const factorialOf = (n) => {
        console.log("Inside the factorial Function");
       
        let result = 1
        if(n<=0){
            return result;
        }else{
            for(let i=n;i>=1;i--){
                result*=i;
            }
            return result;
        }
    }

    const factorial = useMemo(() => factorialOf(number),[number])
  return (
    <div>
        <button onClick={() => setCount(pre => pre+1)}>Increment</button>
        <h1>{count}</h1>

        <br /><br />

        <input type="text" value={number} onChange={e => setNumber(e.target.value)} placeholder='Enter any Number'/>
        <h1>Factorial Of the given Number: {factorial}</h1>
    </div>
  )
}
