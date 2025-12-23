import React from 'react'
import Button from './components/Button'
import ConditionalRandaring from './components/ConditionalRandaring'

function App(props) {
  let user=['men','women','trance']
  console.log(user[0]);
  
  return (
    <div className='h-screen w-screen flex items-center justify-center bg-gray-600 gap-[1rem] '>
      
      {user[1]==='men'? <ConditionalRandaring data={user[0]}/> : <ConditionalRandaring data={user[1]}/> }

    </div>
  )
}

export default App
