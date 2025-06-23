import React, { Component } from 'react'

export default class LifeCycleMount extends Component {
    constructor(props) {
      super(props);
      this.state={
        favColor:"Green"
      }
      console.log("Constructor gets executed before all other methods");
      
    }
    // static getDerivedStateFromProps(props,state){
    //   console.log("getDerivedStateFromProps is executed after constructor and before render");
    //   return {favColor:props.color};
    // }

    componentDidMount(){
      console.log("componentDidMount is executed after render, when we do any modifications render happens again");
      setTimeout(() => this.setState({
        favColor:"purple"
      }),3000) 
      
    }
  render() {
    console.log("Render executes");
    
    return (
      <div>
        <h1>Favouite Color: {this.state.favColor}</h1>
      </div>
    )
  }
}
