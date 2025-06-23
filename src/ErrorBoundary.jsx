import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state={
            hasError:false
        }
    }

    static getDerivedStateFromError(){
        console.log("getDerivedStateFromError is executed when we get error while rendering");
        return {hasError:true}
    }
    
    componentDidCatch(error,info){
        console.log("componentDidCatch is called");
        console.log(error);
        console.log(info);
        
    }
  render() {
    if(this.state.hasError){
        return <h1>Student not in Besant</h1>
    }
    return this.props.children;
  }
}
