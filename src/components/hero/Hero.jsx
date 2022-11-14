import React from 'react'
import './hero.css'
import IMG3 from '../../assets/media/image 3.png'
import IMG4 from '../../assets/media/image 4.png'
import IMG5 from '../../assets/media/image 5.png'
import IMG6 from '../../assets/media/image 6.png'

const Hero = () => {
  return (
    <div className='hero__section'>
      <div className="hero__left">
        <h2>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h2>
        <h5>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</h5>
        <form className='hero__form'>
          <input type="text" name="search" id="search" placeholder="Search for location" />
          <input type="submit" value="Search" />
        </form>
      </div>
      <div className="hero__right">
        <div className="img__control">
          <img src={IMG3} />
          </div>
        <div className="img__control">
          <img src={IMG4} />
          </div>
        <div className="img__control">
          <img src={IMG5} />
          </div>
        <div className="img__control">
          <img src={IMG6} />
          </div>
      </div>
    </div>
  )
}

export default Hero