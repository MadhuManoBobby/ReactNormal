import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';
import { UpdatedComponent } from './Router/UpdatedComponent';

class ClassHome extends Component {
    constructor(props) {
        super(props);
        //  navigate = useNavigate();
       this.navProduct = this.navProduct.bind(this)
       this.navAbout = this.navAbout.bind(this)
       this.navContact = this.navContact.bind(this)
    }

     navProduct(){
        this.props.navigate("/product")
    }
     navAbout(){
        this.props.navigate("/about")
    }
     navContact(){
        this.props.navigate("/contact")
    }
    
  render() {
    return (
      <div>
        <h1>Inside the Home Component</h1>
        <button onClick={this.navProduct}>Product</button>
        <button onClick={this.navAbout}>About Us</button>
        <button onClick={this.navContact}>Contact Us</button>
      </div>
    )
  }
}

export default UpdatedComponent(ClassHome)