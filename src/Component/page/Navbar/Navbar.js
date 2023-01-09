import React from 'react'
import { Link } from 'react-router-dom'
import "../../../App.css"

const Navbar = () => {
  return (
<nav className='navbar bg-sage d-flex justify-space-between align-items-center'>
  <div className='logo-container'>
    <img src="/Small.png"/>
    <img src="/text.png" />
  </div>
<div>
<Link to="/" className='nav-link'>Home</Link>
<Link to="/menu" className='nav-link'>Menu</Link>
<Link to="/reservations" className='nav-link'>Reservations</Link>
</div>

    </nav>
  )
}

export default Navbar