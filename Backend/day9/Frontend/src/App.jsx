import React, { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const [notes, setnotes] = useState([])

  // useEffect(() => {
  //   async function getData() {
  //     let notes = await axios('/api/note')
  //     setnotes(notes)
  //   }
  //   getData()
  // })
  async function getData(params) {
    let notes=await axios('http://localhost:3000/api/note')
    setnotes([...notes])
    
  }
  getData(0)
   
  return (
    <>
      <main>
        {notes.map(({ title, content }) => {
          return <div className="notes">
            <p>{title}</p>
            <p>{content}</p>
          </div>
        })}
      </main>
    </>
  )
}

export default App
