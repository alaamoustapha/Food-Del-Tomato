import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Cart from './pages/Cart/Cart'

const App = () => {
  const [showlogin,setshowlogin]=useState(false);
  return (
    <>
    <div className='app'>
      {showlogin? <LoginPopup setshowlogin={setshowlogin} /> : <></>}
      <Navbar setshowlogin={setshowlogin}/>
      <Routes>
        <Route path='/' element={< Home/>} /> 
        <Route path='/cart' element={<Cart/>} /> 
        <Route path='/order' element={< PlaceOrder/>} /> 

      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App