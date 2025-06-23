import React, { Component } from 'react'

export function ClickEventFunction() {

    function message(){
        alert("Function Component Clicked")
    }
  return (
    <div>
        <button onClick={message}>Click Event - Function Component</button>
    </div>
  )
}


export default class ClickEventClass extends Component {
    message(){
        alert("Class Component Clicked")
    }
  render() {
    return (
      <div>
        <button onClick={this.message}>Click Event - Class Component</button>
      </div>
    )
  }
}
