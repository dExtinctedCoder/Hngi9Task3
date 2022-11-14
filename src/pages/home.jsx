import React from 'react'
import './home.css'
import Nav from '../components/nav/Nav'
import Hero from '../components/hero/Hero'
import Footer from '../components/footer/Footer'
import MbToken from '../assets/media/Group 59537.svg'
import MetaMask from '../assets/media/Group 4040.svg'
import OpenSea from '../assets/media/Frame 4041.svg'
import Button from '../components/button/Button'
import Frame from '../assets/media/Frame 59546.png'
import Nfts from '../components/nfts/Nfts'

const home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <div className="ecosystem">
        <div><img src={MbToken} /></div>
        <div><img src={MetaMask} /></div>
        <div><img src={OpenSea} /></div>
      </div>
      <main>
        <h3>Inspiration for your next adventure</h3>
        <Nfts minItemsNo={0} maxItemsNo={8}/>
      </main>
      <section className="community">
        <div className="community-left">
          <h3>Metabnb NFTs</h3>
          <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
          <button>Learn more</button>
        </div>
        <div className="community-right">
          <img src={Frame} alt="" />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default home