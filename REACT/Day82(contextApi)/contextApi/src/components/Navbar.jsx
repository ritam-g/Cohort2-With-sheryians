import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='h-[4rem] bg-pink-300 w-[100%]  flex gap-2  items-center justify-between p-5 text-2xl'>
        <NavLink to='/'>home</NavLink>
        <NavLink to='/about'>about</NavLink>
        <NavLink to='/contact'>contact</NavLink>
        <NavLink to='/login'>login</NavLink>
        <NavLink to='/profile'>profile</NavLink>
      
    </div>
  )
}

export default Navbar
