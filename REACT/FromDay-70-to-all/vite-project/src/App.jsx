import { useState } from "react";
import React, { useEffect } from 'react'

function App() {
  const [name, setname] = useState('');
  useEffect(function () {
    console.log("use Effect is running ");
    
  },[name])//! this is dependecy it alway in array and variable will be pass on this [] array blcik 
  return (
    <div className='app bg-blue-700 w-full h-screen'>
      <input type="text"
       
       onChange={e=>setname(e.target.value)}
       value={name}
        className="text-white p-2 bg-pink-400" placeholder="enter your name" />
      
    </div>
  )
}

export default App
