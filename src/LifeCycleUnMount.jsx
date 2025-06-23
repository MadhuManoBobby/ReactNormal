import React, { Component } from 'react'

export default class LifeCycleUnMount extends Component {
    constructor(props) {
        super(props);
        this.state={
            display:true
        }
        this.removeHeader = this.removeHeader.bind(this)
    }
    
    removeHeader(){
        this.setState({
            display:false
        })
    }
  render() {
    let header;
    if(this.state.display){
        header = <HeaderComponent/>
    }
    return (
      <div>
        <h1>{header}</h1>
        <button onClick={this.removeHeader}>Remove Header Component</button>
      </div>
    )
  }
}


export class HeaderComponent extends Component {
    componentWillUnmount(){
        console.log("Header Component removed from UI");
        
    }
  render() {
    return (
      <div>
        <p>Welcome to Header Component UnMount</p>
      </div>
    )
  }
}
