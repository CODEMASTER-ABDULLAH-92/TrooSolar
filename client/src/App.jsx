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
import CreditScore from './Pages/CreditScore'
import InverterLoadCalculator from './Pages/InverterLoadCalculator'
import UploadDocement from './Pages/UploadDocement'
import LoanDashBoard from './Pages/LoanDashBoard'
import Tools from './Pages/Tools'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/register" element={<Auth />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/inverterLoadCalculator" element={<InverterLoadCalculator />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product/:category' element={<SpecificProduct/>}/>
        <Route path='/homePage' element={<HomePage/>}/>
        <Route path='/verification' element={<Otp/>}/>
        <Route path="/creditscore" element={<CreditScore />} />
        <Route path="/loan" element={<LoanPage />} />
        
        
        <Route path="/tools" element={<Tools />} />



        <Route path="/loanDetails/loanDashboard" element={<LoanDashBoard />} />


        <Route path="/uploadDocument" element={<UploadDocement />} />
        <Route path="/uploadDetails" element={<UploadDocement />} />
        <Route path="/loanDetails" element={<UploadDocement />} />
        
        
        <Route path="/loanCalculate" element={<LoanCalculation />} />
        <Route path="/linkAccount" element={<LinkAccount />} />
        <Route path="/homePage/product/:id" element={<ProductDetails />} />

      </Routes>
    </div>
  )
}

export default App
