import React, { useState } from 'react'
import Card from './components/Card'

function App() {
  const [user, setuser] = useState([
    {
      name: 'John Doe',
      caption: 'Software Engineer',
      photo: 'https://randomuser.me/api/portraits/men/1.jpg',
      id: 1,
      like: 0,
      dislike: 0

    },
    {
      name: 'Jane Smith',
      caption: 'Graphic Designer',
      photo: 'https://randomuser.me/api/portraits/women/2.jpg',
      id: 2,
      like: 0,
      dislike: 0
    },
    {
      name: 'Alice Johnson',
      caption: 'Product Manager',
      photo: 'https://randomuser.me/api/portraits/women/3.jpg',
      id: 3,
      like: 0,
      dislike: 0

    },

  ])
  function handleLike(id) {
    setuser((prevUsers) => {
      return prevUsers.map(user => 
        user.id===id && user.like>=0 && user.like<5 ? {...user, like: user.like + 1} : user
      )
    })
  }
  function handleDislike(id) {
    setuser((prevUsers) => {
      return prevUsers.map(user => 
        
        user.id===id && user.dislike>=0 && user.dislike<5 ? {...user,dislike:user.dislike +1} : user
      )
    })
  }
  return (
    <>
      <main className='w-full h-full bg-gray-700 flex '>
        <Card users={user} handleDislike={handleDislike} handleLike={handleLike} />
      </main>
    </>
  )
}

export default App
