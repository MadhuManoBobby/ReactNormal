import React, { Component } from 'react'

export default class LifeCycleUpdate extends Component {
    constructor(props) {
        super(props);
        this.state={
          favColor:"Green Version 10"
        }
        this.changeColor = this.changeColor.bind(this)
        console.log("Constructor gets executed before all other methods");
        
      }

      changeColor(){
        setTimeout(() => this.setState({
            favColor:"Orange Version 10.1"
        }),5000) 
        setTimeout(() => this.setState({
            favColor:"Red Version 10.1"
        }),8000) 
        setTimeout(() => this.setState({
            favColor:"Yellow Version 10.1"
        }),11000) 
        
      }

      changeColor1 =() => {
       setTimeout(()=> this.setState({
        favColor:"Golden Version 10.1"
        }),3000) 

        setTimeout(()=> this.setState({
            favColor:"Silver Version 10.1"
            }),5000) 

        setTimeout(()=> this.setState({
                favColor:"Bronze Version 10.1"
                }),8000)
      }


      getSnapshotBeforeUpdate(preprops,preState){
        console.log("getSnapshotBeforeUpdate is executed after Updation");
        document.getElementById("before").innerHTML="Favourite Color After Updation Older Version: " + preState.favColor
      }
      
      componentDidUpdate(){
        console.log("componentDidUpdate is executed after Updation");
        document.getElementById("after").innerHTML="Favourite Color After Updation Newer Version: " + this.state.favColor
        
      }
      render() {
        console.log("Render executes");
        
        return (
          <div>
            <h1>Favouite Color Present Version: {this.state.favColor}</h1>
            <h1 id='before'></h1>
            <h1 id='after'></h1>
            <button onClick={this.changeColor}>Change Color</button>
            <button onClick={this.changeColor1}>Change Color1</button>
          </div>
        )
      }
}


// static getDerivedStateFromProps(props,state){
//     console.log("getDerivedStateFromProps is executed after constructor and before render");
//     return {favColor:props.color};
//   }

// shouldComponentUpdate(){
//     console.log("shouldComponentUpdate is executed after clicking the button and before getting into the method defintion to get permission");
//     return false;
//   }