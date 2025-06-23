import React, { Component } from 'react'
import HigherOrderComponent from './HigherOrderComponent';
class HoverComponent extends Component {
    
  render() {
    const {name,count,increment} = this.props
    return (
      <div>
        <h1>{name} Click Count : {count}</h1>
        <h1 onMouseOver={increment} id='head'>Increment</h1> 
      </div>
    )
  }
}

export default HigherOrderComponent(HoverComponent)