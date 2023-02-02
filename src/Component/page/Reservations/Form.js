import React from 'react'
import Formp from "../../../images/Formp.png"
import "./Form.css"
import Formpp from "../../../images/Formpp.png"


const Form = () => {
  return (
    <div className='Form-grid-container'>
      <div className='logo-form'>
       <img src={Formp} alt= "logo"/>
      </div>
    <div className='reservation-form-container'>
      <div className='mb-1'>
        <h1>Book a table</h1>
          <p>We take bookings for groups to 6. We get busy on weekends so best to book early to avoid disappointment!</p>
      </div>
      {/* First Row */}

      <div className='d-grid three-col-grid my-1 grid-gap-1 text-sage '>
      <div>
        <label className='d-block text-sage '>Date</label>
        <input type="date text-sage" className='form-input'  />
      </div>
      <div>
      <label className='d-block text-sage'>Time</label>
        <input className='form-input text-sage' type="time" id="appt" name="appt"
       min="09:00" max="18:00" required />
      </div>
      <div>
      <label className='d-block '>Group Size</label>
        <input className='form-input' type="text" />
      </div>
      </div>
      {/* Second Row */}
      <div className='d-grid two-col-grid my-1 grid-gap-1 text-sage'>
        <div>
        <label className='d-block'>Name</label>
        <input className='form-input' type="text" id="name" name="name" required
       minlength="4" maxlength="8" size="10" />
        </div>
        <div className='text-sage'>
        <label className='d-block'>Contact Number</label>
        <input className='form-input' type="tel" id="phone" name="phone"
       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
       required/> 
        </div>
      </div>
      {/* Third Row */}
      <div className='my-1 text-sage'>
    <label className='d-block'>Comments/requests</label>
    <textarea className='form-input' rows={5}type="text" id="text" text="text"></textarea>
    <input type="checkbox" id="checkBox" name="checkBox" value="Box"/>
  <label for="checkBox text-dark"> By requesting this booking, I am accepting Tiny Leaf’s Terms and Conditions.</label>
      </div>
      {/* Reserve Button */}
      <div className='d-flex justify-content-center'>
      <button className='reserve-btn bg-sage text-white border-sage'>Reserve</button>
      </div>
 
    </div>
    <div className='Form-logo'>
<img src={Formpp} alt= "logo"/>
      </div>
    
    </div>
  )
}

export default Form