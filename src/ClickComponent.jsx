import React, { Component } from 'react'
import HigherOrderComponent from './HigherOrderComponent';
class ClickComponent extends Component {
    
  render() {
    const{name,count,increment} = this.props
    return (
      <div>
        <h1>{name} Click Count : {count}</h1>
        <button onClick={increment}>Increment</button>
      </div>
    )
  }
}

export default HigherOrderComponent(ClickComponent)