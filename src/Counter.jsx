import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state={
            count:0 //1
        }
    }
    
    increment(){
        this.setState(prestate => ({
          count:prestate.count+1//5
        }),() =>console.log("Call Back function: ",this.state.count) )

        // this.setState({
        //     count:this.state.count+1
        // },() =>console.log("Call Back function: ",this.state.count))
        
    }
    increment5(){
      for(let i=0;i<7;i++){
        this.increment();
      }
    }
  render() {
    const {count} = this.state
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.increment5()}>Increment5</button>
      </div>
    )
  }
}
