import React from 'react'

const Footer = () => {
  return (
    <div className='footer container  bg-sage'>
        <div className='container-section-1 d-flex'>
            <div>
            <img src='Logofooter(1).png'/>
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
        </div>
        </div>
        <div className='container-section-2 d-flex'>
            <div>@2025</div>
            <div><img src='/Social.png'/></div>
        </div>
        
    </div>
  )
}

export default Footer