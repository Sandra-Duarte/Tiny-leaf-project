
import React, {useState, useEffect} from "react";
import "./Slider.css"
import Bar from "../../../../images/Bar.png"
import Noah from "../../../../images/Noah.png"
import Millan from "../../../../images/Millas.png"
import Tea from "../../../../images/Tea.png"

const Slider = () => {
    const [active, setActive] = useState(0);

    // For holding the play button State
    const [autoplay, setAutoplay] = useState(0);
    const slides = [
        {
          eachSlide: `url(${Tea})`,
        },
        {
        //   eachSlide: 'url(https://unsplash.it/1900/1024/?image=291)',
        eachSlide: `url(${Bar})`,
        },
        {
        //   eachSlide: 'url(https://unsplash.it/1900/1024/?image=786)',
        eachSlide: `url(${Noah})`,
        },
        {
        //   eachSlide: 'url(https://unsplash.it/1900/1024/?image=768)',
        eachSlide: `url(${Millan})`,
        },
       
    ];
    const max = slides.length;

    const intervalBetweenSlides = () => autoplay && setActive(active === max - 1 ? 0 : active + 1)

    useEffect(() => {
        const interval = setInterval( () => intervalBetweenSlides(), 3000);
        return () => clearInterval(interval);
    });
    // For toggling Play Button
    const toggleAutoPlay = () => setAutoplay(!autoplay)

    //0 => 1  0,1,2 => 4
    // On Clicking the next Button
    const nextOne = () => active < max - 1 && setActive(active + 1)

    // On Clicking Prev Button
    const prevOne = () => active > 0 && setActive(active - 1)

    //Checking if active
    const isActive = value => active === value && 'active'

    //Styling of Slider/Slides
    const setSliderStyles = () => {
        const transition = active * - 100;
        
        return {
          width: ( slides.length * 100 ) + 'vw',
          transform: 'translateX(' + transition + 'vw)'
        }
    }


    return (
        <section className='slider'>
            <div 
                className='wrapper' 
                style={ setSliderStyles() }>
                { slides.map((item, index) => (
            <div 
                className='each-slide' 
                key={ index } 
                style={{ backgroundImage: item.eachSlide }}>
            </div> 
            )) }
            </div>
            <>
            <button 
                type='button'
                className='arrows prev' 
                onClick={ () => prevOne() } >
                <svg fill='#FFFFFF' width='50' height='50' viewBox='0 0 24 24'>
                    <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'/>
                    <path d='M0 0h24v24H0z' fill='none'/>
                </svg>
            </button>
            <button 
                type='button'
                className='arrows next' 
                onClick={ () => nextOne() } > 
                <svg fill='#FFFFFF' height='50' viewBox='0 0 24 24' width='50'>
                    <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/>
                    <path d='M0 0h24v24H0z' fill='none'/>
                </svg>
            </button>
            </>
            <ul className='dots-container'>
                { slides.map((silde, index) => ( // check index
                <li 
                    className={ isActive(index) + ' dots' }   
                    key={ index }>
                        <button onClick={ () => setActive(index) }>
                            <span>&#9679;</span>
                        </button>
                </li> 
                ))         
                }
            </ul>
            <button 
                type='button'
                className='toggle-play' 
                onClick={ toggleAutoPlay }> 
                { autoplay
        ? (
            <svg fill='#FFFFFF' height='24' viewBox='0 0 24 24' width='24'>
                <path d='M0 0h24v24H0z' fill='none'/>
                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z'/>
            </svg> 
        )
        : (
            <svg fill='#FFFFFF' height='24' viewBox='0 0 24 24' width='24'>
                    <path d='M0 0h24v24H0z' fill='none'/>
                    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z'/>
            </svg>
        ) }
            </button>
        </section>
    );
};

export default Slider