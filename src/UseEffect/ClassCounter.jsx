import { logDOM } from '@testing-library/react';
import React, { Component } from 'react'

export default class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count:0,
            names:''
        }
    }
    
    componentDidMount(){
        console.log("componentDidMount is called");
        
        document.title=`Count ${this.state.count} times`
    }

    componentDidUpdate(preProps,preState){
        if(preState.count != this.state.count){
        console.log("componentDidUpdate is called");
        document.title=`Count ${this.state.count} times`
        }
    }
  render() {
    return (
      <div>
        <input type="text" value={this.state.names} onChange={e=>this.setState({names:e.target.value})}/>
        <button onClick={() => this.setState({count:this.state.count+1})}>Count {this.state.count} times</button>
      </div>
    )
  }
}
