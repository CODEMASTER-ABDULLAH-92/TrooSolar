import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Otp from './Pages/Otp'
import Home from './Pages/Home'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/verification' element={<Otp/>}/>
      </Routes>
    </div>
  )
}

export default App
