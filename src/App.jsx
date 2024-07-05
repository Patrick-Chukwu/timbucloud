import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Checkout from './pages/Checkout'

const App = () => {
  return (
    <div className='text-foreground'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/checkout' element={<Checkout/>} />

      </Routes>
    </div>
  )
}

export default App