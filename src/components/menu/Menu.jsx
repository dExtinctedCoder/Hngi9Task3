import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ModalContext } from '../../App'
import './menu.css'

const body = document.querySelector("body")

const Menu = () => {

  const {menuState, setMenuState} = useContext(ModalContext)

  if (menuState) {
    body.style.position = 'fixed'
  } else {
    body.style.position = 'static'
  }

  const closeMenu = () => {
    setMenuState(false)
  }

  return (
    <>
        <aside id="menuBar" style={{ transform: menuState ? "translateY(0)" : "translateY(-100vh)" }}>
          <div className="menu__control">
            <nav>
              <ul>
                <li><NavLink onClick={() => closeMenu()} to="/">Home</NavLink></li>
                <li><NavLink onClick={() => closeMenu()} to="/place">Place To Stay</NavLink></li>
                <li><NavLink onClick={() => closeMenu()}>Nfts</NavLink></li>
                <li><NavLink onClick={() => closeMenu()}>Community</NavLink></li>
              </ul>
            </nav>
          </div>
        </aside>
    </>
  )
}

export default Menu