import React, { Component } from 'react'
import ChildComponentA2 from './ChildComponentA2'

export default class ChildComponentA1 extends Component {
  render() {
    return (
      <div>
        <ChildComponentA2/>
      </div>
    )
  }
}
