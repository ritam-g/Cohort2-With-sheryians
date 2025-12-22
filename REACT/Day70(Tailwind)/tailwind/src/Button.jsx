import React from 'react'

function Button(prpos) {
  return (
    <button className='h-20 w-30 bg-red-800 px-4 text-2xl rounded-2xl'>
     <h1 className='p-20'>{prpos.data}</h1> 
    </button>
  )
}

export default Button
