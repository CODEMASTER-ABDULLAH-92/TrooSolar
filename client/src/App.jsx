import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './Pages/Auth'
import Otp from './Pages/Otp'
import Home from './Pages/Home'
import HomePage from './Pages/HomePage'
import ProductDetails from './Pages/ProductDetails'
import Cart from './Pages/Cart'
import LoanPage from './Pages/LoanPage'
import LinkAccount from './Pages/LinkAccount'
import LoanCalculation from './Pages/LoanCalCulation'
import SpecificProduct from './Pages/SpecificProduct'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product/:category' element={<SpecificProduct/>}/>
        <Route path='/homePage' element={<HomePage/>}/>
        <Route path='/verification' element={<Otp/>}/>
        <Route path="/login" element={<Auth />} />
        <Route path="/loan" element={<LoanPage />} />
        <Route path="/loanCalculate" element={<LoanCalculation />} />
        <Route path="/linkAccount" element={<LinkAccount />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/homePage/product/:id" element={<ProductDetails />} />

      </Routes>
    </div>
  )
}

export default App
