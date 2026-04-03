import React from 'react'

function Card({ delteUser, index, name, email }) {
    return (
        <div key={index} className='w-full'>
            <h2>{name}</h2>
            <p>{email}</p>
            <button onClick={() => delteUser(index)}>Delete</button>
        </div>
    )
}

export default Card
