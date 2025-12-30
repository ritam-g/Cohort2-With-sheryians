import React from 'react'
import Card from './Card'

function Cards({data}) {
  return (
    <div className=' Cards  w-full flex flex-wrap gap-[1rem] text-cyan-200 justify-evenly'>
     {
        data.map((ele,idx)=>{
            
            
            return <Card id={ele.id} author={ele.author} key={idx}/>
        })
     }
    </div>
  )
}

export default Cards
