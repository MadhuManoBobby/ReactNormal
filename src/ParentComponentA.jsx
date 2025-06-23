import React, { Component } from 'react'
import ChildComponentA1 from './ChildComponentA1'

export default class ParentComponentA extends Component {
  render() {
    return (
      <div>
        <ChildComponentA1/>
      </div>
    )
  }
}
