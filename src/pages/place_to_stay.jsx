import React from 'react'
import Nav from '../components/nav/Nav'
import Nfts from '../components/nfts/Nfts'
import Footer from '../components/footer/Footer'
import './placeToStay.css'

const place_to_stay = () => {
  return (
    <>
      <Nav />
      <div className="filter-box">
        <ul>
          <li>Resturant</li>
          <li>Cottage</li>
          <li>Castle</li>
          <li>fantast city</li>
          <li>Beach</li>
          <li>Carbins</li>
          <li>Off-grid</li>
          <li>Farm</li>
        </ul>
        <div>
          <span>Location</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.9999 5L10.9999 5" stroke="#333333" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" c="round"/>
<path d="M6.99985 5H1.99985" stroke="#333333" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.9999 12H16.9999" stroke="#333333" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.9999 12H1.99985" stroke="#333333" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.9999 19H10.9999" stroke="#333333" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.99985 19H1.99985" stroke="#333333" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.9999 21V17" stroke="#333333" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.9999 7V3" stroke="#333333" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.0001 14V10" stroke="#333333" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

        </div>
      </div>
      <main>
        <Nfts minItemsNo={0} maxItemsNo={16}/>
      </main>
      <Footer />
    </>
  )
}

export default place_to_stay