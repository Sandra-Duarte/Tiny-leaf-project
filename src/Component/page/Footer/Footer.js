import React from 'react'
import Logofooter from "../../../images/Logofooter.png"
import "./Footer.css"




const Footer = () => {
  return (
    <div className="footer_container">
        <div className="container_section_1">
            < div className='footer-logo-container'>
            <img src={Logofooter} alt= "logo footer"/>
            
        </div>
        <div className='inner_container_section_1'>
        <div className='footer-div'>
            <h1>Opening hours</h1>
            <p>Mon - Sat 11am - 12pm</p>
            <p>Sun 11am - 11pm</p>
        </div>
        <div>
            <h1>Address</h1>
            <p>24 Brew Lane</p>
            <p>BR3 WL Cuptown</p>
        </div>
        <div>
            <h1>Contact</h1>
            <p>+44 201 998 7562</p>
            <p>hello@yellowmountain.com</p>
             <div className='social-midia mt-2-5 text-center'><img src='/Social.png' alt= "fecebook-intagran"/></div>
        </div>
        </div>
        </div>
        
        <div className='footer-text mt-1'>
          <span className=' footer-date text-white'>&#169; 2025</span>
            </div>
    </div>
  )
}

export default Footer