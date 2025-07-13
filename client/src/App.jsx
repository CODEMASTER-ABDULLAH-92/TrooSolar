import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './Pages/Auth'
import Otp from './Pages/Otp'
import Home from './Pages/Home'
import HomePage from './Pages/HomePage'
import ProductDetails from './Pages/ProductDetails'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/homePage' element={<HomePage/>}/>
        <Route path='/verification' element={<Otp/>}/>
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/homePage/product/:id" element={<ProductDetails />} />

      </Routes>
    </div>
  )
}

export default App
