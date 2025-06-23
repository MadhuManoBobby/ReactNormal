import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function About() {
    const navigate = useNavigate();

    function navProduct(){
        navigate("/product")
    }
    function navHome(){
        navigate("/")
    }
    function navContact(){
        navigate("/contact")
    }
  return (
    <div>
        <h1>Inside the About Component</h1>
        <button onClick={navProduct}>Product</button>
        <button onClick={navHome}>Home</button>
        <button onClick={navContact}>Contact Us</button>
    </div>
  )
}

{/* <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/contact">Contact Us</Link> */}