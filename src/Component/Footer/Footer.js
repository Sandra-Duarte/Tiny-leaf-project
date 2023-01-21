import React from 'react'
import Logofooter from "../../images/Logofooter.png"


const Footer = () => {
  return (
    <div className='footer-container  bg-sage'>
        <div className='container-section-1 d-flex'>
            <div>
            <img src={Logofooter}/>
            <div className='text-center mt-1'>
                <span className='text-white'>&#169; 2025</span>
            </div>
        </div>
        <div>
            <h2>Opening hours</h2>
            <p>Mon - Sat 11am - 12pm</p>
            <p>Sun 11am - 11pm</p>
        </div>
        <div>
            <h2>Address</h2>
            <p>24 Brew Lane</p>
            <p>BR3 WL Cuptown</p>
        </div>
        <div>
            <h2>Contact</h2>
            <p>+44 201 998 7562</p>
            <p>hello@yellowmountain.com</p>
             <div className='mt-2-5 text-center'><img src='/Social.png'/></div>
        </div>
        </div>
        <div className='container-section-2 d-flex'>
            
           
        </div>
        
    </div>
  )
}

export default Footer