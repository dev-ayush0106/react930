import React from 'react'
import { Link, useNavigate } from 'react-router'

const Navbar = () => {
    let navigate=useNavigate();
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
      <h2>Redux</h2>
      <Link to="/products/:id/cart"><h2>My Bag</h2></Link>
    </div>
  )
}

export default Navbar
