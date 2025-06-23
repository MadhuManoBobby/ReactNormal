import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {

    const navigate = useNavigate();

    function navProduct(){
        navigate("/product")
    }
    function navAbout(){
        navigate("/about")
    }
    function navContact(){
        navigate("/contact")
    }
  return (
    <div>
        <h1>Inside the Home Component</h1>
        <button onClick={navProduct}>Product</button>
        <button onClick={navAbout}>About Us</button>
        <button onClick={navContact}>Contact Us</button>
    </div>
  )
}

{/* <Link to="/product">Product</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link> */}