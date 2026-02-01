import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    async function getData() {
      const res = await axios.get('http://localhost:3000/api/note')
      setNotes(res.data.notes) // ✅ ONLY the array
    }
    getData()
  }, [])

  return (
    <main>
      {notes.map(({ _id, title, content }) => (
        <div className="notes" key={_id}>
          <p>{title}</p>
          <p>{content}</p>
        </div>
      ))}
    </main>
  )
}

export default App
