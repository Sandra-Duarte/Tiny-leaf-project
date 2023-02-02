import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import logo from "../../../images/Ellipse 4.png"
import Menu from "../../../images/Menu.png"
import Close from "../../../images/Close.png"


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  return (
<nav className="navbar">
  <div className='logo-container d-flex'>
    <div className='d-flex'>
    <div className="navbar-image-container">
    <img src={logo} alt= "logo"/></div>
    <div className='navbar-heading-container'>
   <h4>Tiny Leaf Tea house</h4>
   </div>
   </div>
   <div className='hamburger-menu' onClick={() => setIsOpen(!isOpen)}>
    {
      isOpen ? (<img src={Close} alt= "close-tag"/>) :  (<img src={Menu}  alt= "meno-tag"/>)
    }
    
   </div>
  </div>
<div className={`list-items ${isOpen ? "show-items": ""} `}>
<Link to="/" onClick={() => setIsOpen(false)} className='nav-link'>Home</Link>
<Link to="/menu" onClick={() => setIsOpen(false)} className='nav-link'>Menu</Link>
<Link to="/reservations" onClick={() => setIsOpen(false)} className='nav-link'>Reservations</Link>
</div>

    </nav>
  )
}

export default Navbar