import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className='h-screen w-screen bg-gray-800 text-white'>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  )
}

export default App
