import React, { useContext } from 'react'
import { MdClose } from 'react-icons/md'
import { BsChevronRight } from 'react-icons/bs'
import ReactDOM from 'react-dom'
import { ModalContext } from '../../App.jsx'
import IMG66 from '../../assets/media/image 66.png'
import IMG69 from '../../assets/media/image 69.png'
import './modal.css'


const body = document.querySelector("body")

const Modal = () => {

  const {modalState, setModalState} = useContext(ModalContext)
  
  
  if (modalState.setBodyPosition) {
    body.style.position = 'fixed'
  } else {
    body.style.position = 'static'
  }

  const handleModal = () => {
    setModalState({
      ...modalState,
      isModalOpen: false,
      setBodyPosition: false,
    })
  }
  
  const closeModal = e => {
    const aside = document.querySelector("aside")
    if (!aside.contains(e.target)) {
      setModalState({
        ...modalState,
        isModalOpen: false,
        setBodyPosition: false,
      })
    }
  }


  return ReactDOM.createPortal(
    <>
      {
        modalState.isModalOpen ? 
        <div  onClick={e => closeModal(e)} className="modal-box">
          <aside id="aside">
            <div>
              <h4>Connect Wallet</h4>
              <span id="close-modal"  onClick={() => handleModal()}><MdClose /></span>
            </div>
            <div>
              <p>Choose your preferred wallet:</p>
              <div className="wallet">
                <div><img src={IMG66}/></div>
                <b>Metamask</b>
                <span><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.38381 8.00009C9.38381 8.26892 9.28117 8.53771 9.07631 8.74267L2.62657 15.1923C2.21628 15.6026 1.55108 15.6026 1.14096 15.1923C0.730845 14.7822 0.730845 14.1172 1.14096 13.7068L6.84805 8.00009L1.14116 2.2933C0.731043 1.88301 0.731043 1.21801 1.14116 0.807924C1.55128 0.397442 2.21648 0.397442 2.62677 0.807924L9.07651 7.2575C9.2814 7.46256 9.38381 7.73135 9.38381 8.00009Z" fill="#959DA6"/>
</svg>
</span>
              </div>
              <div className="wallet">
                <div><img src={IMG69}/></div>
                <b>WalletConnect</b>
                <span><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.38381 8.00009C9.38381 8.26892 9.28117 8.53771 9.07631 8.74267L2.62657 15.1923C2.21628 15.6026 1.55108 15.6026 1.14096 15.1923C0.730845 14.7822 0.730845 14.1172 1.14096 13.7068L6.84805 8.00009L1.14116 2.2933C0.731043 1.88301 0.731043 1.21801 1.14116 0.807924C1.55128 0.397442 2.21648 0.397442 2.62677 0.807924L9.07651 7.2575C9.2814 7.46256 9.38381 7.73135 9.38381 8.00009Z" fill="#959DA6"/>
</svg>
</span>
              </div>
            </div>
          </aside>
        </div> : null
      }
    </>, document.getElementById("modal")
  )
}

export default Modal