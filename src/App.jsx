
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Peliculas from './components/Peliculas'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-[#0D0C0F]'>

      <BrowserRouter>
        <div className='relative'>
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/peliculas' element={<Peliculas />} />
        </Routes>
      </BrowserRouter>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
