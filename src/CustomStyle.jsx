import React, { Component } from 'react'
import './CustomStyle.css'

export default class CustomStyle extends Component {
    abc={
        color:'white',
        background:'blue'
    }
  render() {
    return (
      <div>
        <h1 className='head' style={this.abc}>Hello World</h1>
      </div>
    )
  }
}
