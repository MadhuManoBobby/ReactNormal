import react, { Component } from "react";

export default class StudentClassData extends Component{
    
    render(){
        return (
            <div>
            <h3>Hi {this.props.empName} you are assigned to {this.props.dept} Team</h3>
           
            </div>
        )
       
    }
}

