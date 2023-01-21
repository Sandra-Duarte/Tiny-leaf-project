import React from 'react'
import "./Menu.css"




const Meno = () => {
  return (
    <div>
      <div className='hero-menu-container'>
        <h1>Menu</h1>
       </div>
       <div>
        <div className='menu-text-container mx-4 my-4'>
          <h2>Loose leaf teas</h2>
          <h4>Darjeeling</h4>
          <div className='menu-price'>
          <p>  A refined and ligh tea from the region the Tibetans call "coutry of storms" after the the thick mist that rests on the plantations</p>
          <p>£4.50</p>
          </div>
          
          <h4>Blue Earl Grey</h4>
          <div className='menu-price'>
          <p> A delicate blend of blueberry and sunflower petals petals with Earl Grey aromas </p>
          <p>£4.50</p>
          </div>
          <h4>Organic Mango and Papaya</h4>
          <div className='menu-price'>
          <p>A mix of Indian Black tea Ceylan, Assam and Chinese Green tea, alon with driend mango and papaya for a sweet exotic flavour</p>
          <p>£5</p>
          </div>
          <h4>White Magic</h4>
          <div className='menu-price'>
          <p>White tea sprinkled with rose buttons and marigold, whith aromas of passion fruit, peach and apricot</p>
          <p>£5</p>
          </div>
          <h4>Wise Flower</h4>
          <div className='menu-price'>
          <p>An unusual blend of rose, Sencha Green tea, dates and gooseberry petals. Refreshing and seasonal.</p>
          <p>£5</p>
          </div>
          <h4>Night at the Palace</h4>
          <div className='menu-price'>
          <p>Earl Grey aromas, kiwi, yellow peach, orange blossom and violet make this one of our most exquisite blends</p>
          <p>£5.50</p>
          </div>
        </div>
        <div className='special-outer-container mx-4'>
        <div className='special-container border-biscuit '>
        <h1>Special this week...</h1>
        <div className='my-4 mx-2'>
        <h4>Sticky Almond</h4>
       <div className="menu-price">
        <p>Organic Sencha Green tea from China, mixed with apple, cinnamon, ginger and vanilla</p>
        <p>£5.50</p>
          </div>
        
        <h4>Green Sun</h4>
        <div className="menu-price">
        <p>Blood orange and orange bark make this a fruity and delightfully sour tea</p>
        <p>£5.50</p>
          </div>
        <h4>Christmas Special </h4>
        <div className="menu-price">
        <p>Organic Assam Black tea with cinnamon, caradamon and pineapple </p>
        <p>£6</p>
          </div>
          </div>
        </div>
        </div>
        <div className='reservation-img'>
        <div className='d-grid'>
        <h2 className='my-2'>Shall we put your name in the tea pot?</h2>
        <p className='mx-2'>For anything from a catchup with a long lost friend to a book club gathering ... we're always ready to put the kettle on.</p>s
        
  <button className=' my-2 bg-white text-sage border-sage button'>Reserve a table</button>

        
        </div> 
        </div>
       </div>
    </div>
  )
}

export default Meno