import React from 'react'

export const ChildComponent = (props) => {
  return (
    <div>
        <button onClick={props.message}>Message - Parent Component</button>
    </div>
  )
}
