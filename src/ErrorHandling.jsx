import React from 'react'

export default function Besant(props) {
        if(props.name==="Pinky"){
            throw new Error("Pinky is not in Besant");
        }
        const {name,id} = props
  return <h1>{name} : {id}</h1>
}
