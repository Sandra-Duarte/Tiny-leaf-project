import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='hero-img-container'>
    <img className='hero-img' src="/Hero.png" />
      </div>

      <div className='section-container d-flex'>
        <div className='section-column1  b-grid'>
          <h2>Our Blends</h2>
          <p>We make our very own Tiny Leaf Blends right here in the tea house, offering new flavours according to and make sure the hands that laboured for our flavoursome cups werw rewarded fairly</p>
          <hr/>
          <h1>Hand -picked and sustainable</h1>
        </div>
        <div className='section-column2'>
          <img src='/Aniketh.png'/>
        </div>
      </div>

    </div>
  )
}

export default Home