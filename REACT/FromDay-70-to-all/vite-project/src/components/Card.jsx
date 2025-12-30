import React from 'react'

function Card(props) {
    let r1=Math.floor(Math.random()*256)
    let r2=Math.floor(Math.random()*256)
    let r3=Math.floor(Math.random()*256)
    // console.log(props.data.id,props.data.author);
    
  return (
    <div style={{ backgroundColor: `rgb(${r1}, ${r2}, ${r3})` }}
     className='Card w-[15rem] h-[15rem] bg-blue-700 text-4xl flex flex-col items-center justify-evenly'>
      <h1>{props.data.id}</h1>
      <h2>{props.data.author}</h2>
    </div>
  )
}

export default Card
