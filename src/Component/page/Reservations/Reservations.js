import React from 'react'
import "../../../App.css"
import Form from './Form'
import "./Reservations.css"



const Reservations = () => {
  return (
    <div>
      <div className='Hero-reservations-container'>
      <h1 className='text-white'>Reservation</h1> 
      </div>
      {/* Form Div */}
      <div className='mx-4 my-4'>
       <div>

       <Form/>
       </div>

      </div>
    <div className='Tea-cup-container'>
      <div className='tea-cup-container-content'>
<h1>No storms in our tea cups</h1>
<p>We make our blends with love and care, so you can taste aromas from across the globe right here in our tea house</p>
<div className='d-flex justify-content-center'>
  <button className='bg-white text-sage border-sage button'>See what's on the Menu</button>
</div>
</div>
    </div>
    </div>
  )
}

export default Reservations