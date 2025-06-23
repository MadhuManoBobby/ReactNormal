import { getErrorPath } from 'ajv/dist/compile/util'
import React from 'react'

const Greet = () => {
    let time = new Date(2024,27,12,22).getHours()

    let greetMessage=""
    let customStyle={
        color:""
    }

    if(time<=12){
        greetMessage='Good Morning'
        customStyle.color="green"
    }else if(time<=16){
        greetMessage="Good AfterNoon"
        customStyle.color="red"
    }else if(time<=21){
        greetMessage="Good Evening"
        customStyle.color="purple"
    }else{
        greetMessage="Good Night"
        customStyle.color="orange"
    }
  return (
    
    <div>
        <h1 style={customStyle}>{greetMessage}</h1>
    </div>
  )
}



export default Greet;