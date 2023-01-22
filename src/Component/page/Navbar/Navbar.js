import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import logo from "../../../images/Ellipse 4.png"


const Navbar = () => {
  return (
<nav className="navbar">
  <div className='logo-container d-flex'>
    <div>
    <img src={logo}/></div>
    <div>
   <h4>Tiny Leaf Tea house</h4>
   </div>
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