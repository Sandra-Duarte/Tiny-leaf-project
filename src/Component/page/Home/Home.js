import React from 'react'
import Aniketh from "../../../images/Aniketh.png"
import Klara from "../../../images/Klara.png"
import Debby from "../../../images/Debby.png"
import Tea from "../../../images/Tea.png"
import Bar from "../../../images/Bar.png"
import Noah from "../../../images/Noah.png"
import Millan from "../../../images/Millas.png"
import "./Home.css"

const Home = () => {
  return (
    <div>
      <div className='hero-img-container'>
    {/* <img className='hero-img' src={Hero} /> */}
    <h1>A flavour for all seasons</h1>
      </div>

      <div className='section-container '>
        <div className='section-column1'>
        <div  className='section-container-text'>
          <h2 >Our Blends</h2>
          <p className='mr-2 blends-description'>We make our very own Tiny Leaf Blends right here in the tea house, offering new flavours according to and make sure the hands that laboured for our flavoursome cups werw rewarded fairly.</p> </div>
          <div className='section-column2'>
          <img src={Aniketh}/>
        </div>
        
        <div>
          <div className='biscuit-horizontal-line my-4'>
          </div>
          <div>
          <h1 className='text-biscuit'>Hand -picked and sustainable</h1>
          </div>
          </div>
        </div>
       
      </div>
   
       
        <section className='grid-container '>
          <div className='wise-leaf-right-section'></div>
          <div className='container-klara'>
            <img src={Klara} className="wise-left-img"/>
        </div>
          <div className='text-box'>
          <h2> Wise Leaf evenings</h2>
          <p>Bringing together those with curious minds, speakers and observers alike, our Wise Leaf events are a melting pot to share, reflect and contemplate.</p>
          </div>
          <div className='container-debby'>
            <img src={Debby} className="debby-img"/>
          </div>
 
         
   
          </section>

           
      <div className='background-img '>
        {/*<img  className='img-background hero-img' src={Background}/>*/}
        <div className='absolute-container'>
        <h2 className='my-2'>Make a reservation</h2>
        <p className='mx-2'>For anything from a catchup with a long lost friend to a book club gathering ... we're always ready to put the kettle on.</p>
        
  <button className=' my-2 bg-white text-sage border-sage button'>Reserve a table</button>

        
        </div>
        
       
      </div>
      <div className='portfolio' >
      <h4 >Gallery</h4>
     <div 
     className='portfolio-container'> 
     
      <img src={Tea}/>
      <img src={Bar}/>
      <img src={Noah}/>
      <img src={Millan}/>
      
      </div> 
      </div>

    </div>
  )
}

export default Home