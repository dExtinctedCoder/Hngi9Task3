import React, { useContext, createRef } from 'react'
import { NavLink } from 'react-router-dom'
import { ModalContext } from '../../App.jsx'
import HeadLogo from '../../assets/media/Group.png'
import './nav.css'

const Nav = () => {

  const {modalState, setModalState} = useContext(ModalContext)
  const {menuState, setMenuState} = useContext(ModalContext)


  const menuRef =  createRef()

  const showModal = () => {
    setModalState({
      ...modalState,
      isModalOpen: true,
      setBodyPosition: true,
    })
  }

  const toggleMenu = () => {
    menuRef.current.classList.toggle("open")
    setMenuState(!menuState)
  }


  return (
    <header>
      <div className="header__control">
        <div><img src={HeadLogo} alt="" /></div>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/place">Place to stay</NavLink></li>
            <li><NavLink>NFTs</NavLink></li>
            <li><NavLink>Community</NavLink></li>
          </ul>
        </nav>
        <button onClick={() => showModal()} >Connect wallet</button>
      </div>
      <div onClick={e => toggleMenu()}>
        <div ref={menuRef} className={menuState ? "menu open" : "menu"}></div>
      </div>
    </header>
  )
}

export default Nav