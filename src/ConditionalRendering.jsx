import React, { Component } from 'react'

export default class ConditionalRendering extends Component {
    constructor(props) {
        super(props);
        this.state={
            isLoggedIn:true,
            name:"Pinky"
        }
    }
    
  render() {
    // return (this.state.isLoggedIn)? <h1>Welcome to {this.state.name}...!!!</h1>:<h1>Welcomt to Ghost...!!!</h1>;

    return (this.state.isLoggedIn) && <h1>Welcome to {this.state.name}...!!!</h1>
    }

    
}


// if(this.state.isLoggedIn){ //false
//     return <h1>Welcome to {this.state.name}...!!!</h1>
// }else{
//     return <h1>Welcomt to Ghost...!!!</h1>
//     }


// let message;
// if(this.state.isLoggedIn){
//     message= <h1>Welcome to {this.state.name}...!!!</h1>
// }else{
//     message= <h1>Welcomt to Ghost...!!!</h1>
// }
// return message;