import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router'
const Navbar = () => {
  return (
    <div className='header'>
        <div className="logo">
            <h1>LOGO</h1>
        </div>
        <div className="nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
