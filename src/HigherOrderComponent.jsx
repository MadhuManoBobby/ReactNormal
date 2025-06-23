import React, { Component } from 'react'

export default function HigherOrderComponent(OldComponent) {
    class NewComponent extends Component{
        constructor(props) {
            super(props);
            this.state={
                count: 0
            }
            this.increment = this.increment.bind(this)
        }
        increment(){
            this.setState({
                count:this.state.count+1
            })
        }
        render(){
            return <OldComponent name= "HOC Component" count={this.state.count} increment={this.increment}/>
        }
    }
  return NewComponent;
}
