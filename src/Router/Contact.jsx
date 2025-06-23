import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Contact() {
    const navigate = useNavigate();

    function navProduct(){
        navigate("/product")
    }
    function navAbout(){
        navigate("/about")
    }
    function navHome(){
        navigate("/")
    }
  return (
    <div>
        <h1>Inside the Contact Component</h1>
        <button onClick={navHome}>Home</button>
        <button onClick={navAbout}>About Us</button>
        <button onClick={navProduct}>Product</button>
        
    </div>
  )
}

{/* <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/Product">Product</Link> */}