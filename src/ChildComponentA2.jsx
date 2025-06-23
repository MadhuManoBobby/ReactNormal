import React, { Component } from 'react'
import { Consumer } from './Context'

export default class ChildComponentA2 extends Component {
  render() {
    return (
      <>
      <Consumer>{
        value => <h1>Welcome to {value} from Child Component</h1>
        }</Consumer>
        
      </>
    )
  }
}
