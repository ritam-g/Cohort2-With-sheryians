import React, { useState } from 'react'

function App() {
  const [userName, setuserName] = useState("")
  const [email, setemail] = useState("")
  const [age, setage] = useState("")
  function handleSubmit(e) {
    e.preventDefault();
    // Handle form submission logic here
    console.log(userName, email, age);
  }
  return (
    <main className='w-full h-screen bg-gray-700 flex items-center justify-center'>
      <form onSubmit={handleSubmit}
        className='q-60 h-70 bg-gray-600 flex flex-col gap-4 p-4 rounded-lg'>
        <label htmlFor="name"></label>
        <input onChange={(e) => setuserName(e.target.value)}
          type="text" id='name' placeholder='Enter your name' value={userName} />
        <label htmlFor="email"></label>
        <input onChange={(e) => setemail(e.target.value)}
          type="email" id='email' placeholder='Enter your email' value={email} />
        <label htmlFor="age"></label>
        <input onChange={(e) => setage(e.target.value)}
          type="number" id='age' placeholder='Enter your age' value={age} />
        <button className='bg-blue-500 text-white rounded-4xl active:scale-90' type='submit' >Submit</button>
      </form>
    </main>
  )
}

export default App
