import React, { Component } from 'react'
//Event Binding
//Normal Binding => this.message.bind(this)
//Arrow type => () => this.message()
//Constructor => this.message = this.message.bind(this)

//Write the method as arrow function => this.message
export default class EventBinding extends Component {
    constructor(props) {
        super(props);
        this.state={
            message:"Practice Makes Man Perfect...!!!"
        }
        this.message = this.message.bind(this)
    }
    message(){
        this.setState({
            message:"Smoking is injuriuos to Health... Smoking Kills...!!!"
        })
    }

    message1 = () => {
        this.setState({
            message:"Smoking is injuriuos to Health... Smoking Kills...!!!"
        })
    }
  render() {
     const{message} = this.state
    return (
      <div>
        <h1>{message}</h1>
        <button onClick={this.message.bind(this)}>Change Message - Normal</button>
        <button onClick={() => this.message()}>Change Message - Arrow</button>
        <button onClick={this.message}>Change Message - Constructor</button>
        <button onClick={this.message1}>Change Message - Arrow Function</button>
      </div>
    )
  }
}
