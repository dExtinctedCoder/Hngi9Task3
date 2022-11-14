import { createContext, useState } from 'react'
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../src/pages/home'
import Modal from '../src/components/modal/Modal'
import Menu from '../src/components/menu/Menu'
import PlaceToStay from '../src/pages/place_to_stay'

export const ModalContext = createContext()

// const initState = 

function App() {

  const [modalState, setModalState] = useState({
    isModalOpen: false,
    setBodyPosition: false
  })
  const [menuState, setMenuState] = useState(false)
  
  return (
    <ModalContext.Provider value={{modalState, setModalState, menuState, setMenuState}}>
      <div className="page__control">
        <Modal />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="place" element={<PlaceToStay />} />
        </Routes>
      </div>
    </ModalContext.Provider>
  )
}

export default App
