import React, { useState, useEffect } from 'react'
import Cards from './components/Cards'
import axios from 'axios'

function App() {
  const [allData, setAllData] = useState([])

  async function apiCall() {
    try {
      const res = await axios.get('https://picsum.photos/v2/list')
      setAllData(res.data)
    } catch (error) {
      console.error("API Error:", error)
    }
  }

  useEffect(() => {
    apiCall()
  }, [])

  return (
    <div className="main bg-black h-screen w-screen overflow-scroll overflow-x-hidden">
      <Cards data={allData} />
    </div>
  )
}

export default App
