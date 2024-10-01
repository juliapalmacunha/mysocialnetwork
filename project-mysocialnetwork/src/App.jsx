import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
//pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'




function App() {


  return (
    <div className='App'>

      <BrowserRouter>

        
        
          <div className='box-rotas'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
            </Routes>
          </div>
      

        

      </BrowserRouter>

    </div>
  )
}

export default App
