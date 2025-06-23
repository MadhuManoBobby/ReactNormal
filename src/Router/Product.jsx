import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Product() {

    const navigate = useNavigate();

    function navHome(){
        navigate("/")
    }
    function navAbout(){
        navigate("/about")
    }
    function navContact(){
        navigate("/contact")
    }
  return (
    <div>
        <h1>Inside the Product Component</h1>
        <button onClick={navHome}>Home</button>
        <button onClick={navAbout}>About Us</button>
        <button onClick={navContact}>Contact Us</button>
    </div>
  )
}

{/* <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="contact">Contact Us</Link> */}