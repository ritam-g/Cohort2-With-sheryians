import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router'
import Courses from './components/Courses'


function App() {
  return (
    <>
      <BrowserRouter>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/course/newCouse">newCourse</Link></p>
        <Link to="/course">courses</Link>
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />

          <Route path='/course' element={<Courses />} />
          <Route path='/course/newCouse' element={<h1>newCouse</h1>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
