import React, { useEffect, useRef } from 'react'

export const StyleElement = () => {
    const colorParagraph = useRef(null)
    const colors = ['pink','red','blue','green','yellow','orange','purple','violet','tomato']
    const customObject = {current:"Inside the custom"}
    useEffect(() => {
        console.log(colorParagraph);
        console.log(colorParagraph.current);
    })
    const StyleParagraph = () => {
        
        const randomColor = Math.floor(Math.random() * colors.length);
        colorParagraph.current.style.color = colors[randomColor];
        console.log(colors[randomColor], randomColor);
    }
  return (
    <div>
        <button onClick={StyleParagraph}>Click Here</button>
        <p ref={colorParagraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, necessitatibus?</p>
        <br />
    </div>
  )
}
