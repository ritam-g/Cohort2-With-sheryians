import React from 'react'
import Card from './components/Card'

function App() {
  const details=[
    {
      name:"John Doe",
      age:30,
      occupation:"Software Engineer"
    },
    {
      name:"Jane Smith",
      age:25,
      occupation:"Marketing Manager"
    },
    {
      name:"Bob Johnson",
      age:35,
      occupation:"Accountant"
    },
    {
      name:"Alice Brown",
      age:28,
      occupation:"Graphic Designer"
    },
    {
      name:"Tom Wilson",
      age:40,
      occupation:"Sales Representative"
    }
  ]
  return (
    <parent>
      <Card details={details} />
    </parent>
  )
}

export default App
