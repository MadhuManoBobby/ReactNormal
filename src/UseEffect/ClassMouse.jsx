import React, { Component } from 'react'

export default class ClassMouse extends Component {
    constructor(props) {
        super(props);
        this.state={
            x:0,
            y:0
        }
    }

    logMousePosition = (e) => {
        this.setState({x:e.clientX, y:e.clientY})
    }
    componentDidMount(){
        console.log("Mouse Move");
        window.addEventListener('mousemove', this.logMousePosition)
        
    }
    componentWillUnmount(){
      console.log("Component unmounted from the UI");
      window.removeEventListener('mousemove',this.logMousePosition)
    }
  render() {
    const {x,y} = this.state
    return (
      <div>
        <h1>X:{x} || Y:{y}</h1>
      </div>
    )
  }
}
