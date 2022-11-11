import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../src/pages/home'
import PlaceToStay from '../src/pages/place_to_stay'

function App() {

  return (
    <div className="page__control">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place" element={<PlaceToStay />} />
      </Routes>
    </div>
  )
}

export default App
