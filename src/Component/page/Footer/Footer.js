import React from 'react'
import Logofooter from "../../../images/Logofooter.png"
import "./Footer.css"




const Footer = () => {
  return (
    <div className="footer_container">
        <div className="container_section_1">
            < div className='footer-logo-container'>
            <img src={Logofooter}/>
            
        </div>
        <div className='inner_container_section_1'>
        <div className='footer-div'>
            <h3>Opening hours</h3>
            <p>Mon - Sat 11am - 12pm</p>
            <p>Sun 11am - 11pm</p>
        </div>
        <div>
            <h3>Address</h3>
            <p>24 Brew Lane</p>
            <p>BR3 WL Cuptown</p>
        </div>
        <div>
            <h3>Contact</h3>
            <p>+44 201 998 7562</p>
            <p>hello@yellowmountain.com</p>
             <div className='mt-2-5 text-center'><img src='/Social.png'/></div>
        </div>
        </div>
        </div>
        
        <div className='footer-text mt-1'>
          <span className='text-white'>&#169; 2025</span>
            </div>
    </div>
  )
}

export default Footer