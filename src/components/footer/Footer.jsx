import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { BsTwitter, BsChevronDown } from 'react-icons/bs'
import Logo from '../../assets/media/Group.svg'

const Footer = () => {

  const [listState, setListState] = useState([
    {first: false, second: false, third: false}
  ])

  const toggleList = e => {
    setListState({
      ...listState,
      [e.target.id]: !listState[e.target.id]
    })
  }

  return (
    <footer>
      <div className="footer_control">
        <div className="footer__left">
          <div className="footer__logo"><Link to="/"><img src={Logo} alt="" /></Link></div>
          <div className="socials">
            <FaFacebookF />
            <FaInstagram />
            <BsTwitter />
          </div>
        </div>
        <div className="footer__right">
          <ul>
            <h5 id='first' onClick={e => toggleList(e)} >Community <BsChevronDown style={{transform: listState.first ? "rotate(180deg)" : "rotate(0deg)"}} /></h5>
            {
              listState.first && <>
                <li>NFTs</li>
                <li>Tokens</li>
                <li>Landlords</li>
                <li>Discord</li>
              </>
            }
          </ul>
          <ul>
            <h5 id='second' onClick={e => toggleList(e)} >Places <BsChevronDown style={{transform: listState.second ? "rotate(180deg)" : "rotate(0deg)"}} /></h5>
            {
              listState.second && <>
                <li>Castle</li>
                <li>Farms</li>
                <li>Beach</li>
                <li>Learn more</li>
              </>
            }
          </ul>
          <ul>
            <h5 id='third' onClick={e => toggleList(e)} >About us <BsChevronDown style={{transform: listState.third ? "rotate(180deg)" : "rotate(0deg)"}}  /></h5>
            {
              listState.third && <>
                <li>Roadmap</li>
                <li>Creators</li>
                <li>Career</li>
                <li>Contact us</li>
              </>
            }
          </ul>
        </div>
      </div>
      <div className="copyright">&copy; 2022 Metabnb</div>
    </footer>
  )
}

export default Footer