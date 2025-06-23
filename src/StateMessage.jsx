import React, { Component } from 'react'

export default class StateMessage extends Component {
    constructor(props) {
        super(props);
        this.state={
            message:"Bye Bye Java script...!!!"
        }
    }

    message(){
        this.setState({
            message:"Welcome to ReactJs...!!!"
        },() =>console.log("Call Back function: ",this.state.message))
        console.log(this.state.message);
        
    }
    
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.message()}>Change Message</button>
      </div>
    )
  }
}
