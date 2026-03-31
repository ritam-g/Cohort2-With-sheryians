import React from 'react'
import Card from './components/Card'

function App() {
  const details = [
    {
      name: "John Doe",
      age: 30,
      occupation: "Software Engineer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      location: "New York"
    },
    {
      name: "Jane Smith",
      age: 25,
      occupation: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      location: "London"
    },
    {
      name: "Bob Johnson",
      age: 35,
      occupation: "Accountant",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      location: "Sydney"
    },
    {
      name: "Alice Brown",
      age: 28,
      occupation: "Graphic Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      location: "Paris"
    },
    {
      name: "Tom Wilson",
      age: 40,
      occupation: "Sales Representative",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      location: "Berlin"
    }
  ];
  return (
    <parent>
      <Card details={details} />
    </parent>
  )
}

export default App
