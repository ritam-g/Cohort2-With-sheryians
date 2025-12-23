import React from 'react'

function ConditionalRandaring(props) {
    
  return (
    <div className='w-fit h-[4rem] p-6 bg-blue-600 flex items-center justify-center text-3xl capitalize font-bold  text-amber-700'>
      <h1>{props.data}</h1>
    </div>
  )
}

export default ConditionalRandaring
