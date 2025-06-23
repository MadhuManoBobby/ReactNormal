import React, { Component } from 'react'
import { ChildComponent } from './ChildComponent';

export default class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            message: "Message From Parent Component"
        }
        // this.message = this.message.bind(this)
    }
    message =() => {
        alert(this.state.message)
    }
  render() {
    return (
      <div>
        <ChildComponent message={this.message}/>
      </div>
    )
  }
}
