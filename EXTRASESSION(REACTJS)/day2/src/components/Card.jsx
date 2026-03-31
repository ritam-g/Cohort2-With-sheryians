import React from 'react'

function Card({ users ,handleLike,handleDislike})  {
    console.log(users);

    return (
        <section className='flex flex-wrap gap-4 justify-center'>
            {
                users.map((user) => {
                    return (<div key={user.id} className='w-64 bg-white rounded-lg shadow-md p-4'>
                        <img src={user.photo} alt={user.name} className='w-full h-48 object-cover rounded-t-lg' />
                        <div className='p-4'>
                            <h3 className='text-xl font-semibold mb-2'>{user.name}</h3>
                            <p className='text-gray-600'>{user.caption}</p>
                        </div>

                        {/* here will button */}

                        <div className='flex items-center justify-between'>
                            <div onClick={() => handleLike(user.id)} className="like">Likes: {user.like} <button className='bg-blue-400 text-green-300 p-4 rounded-4xl'>like</button></div>
                            <div onClick={() => handleDislike(user.id)}className="dislike">Dislikes: {user.dislike}
                                <button className='bg-red-400 text-white p-4 rounded-4xl'>dislike</button>
                            </div>


                        </div>
                    </div>)
                }
                )
            }
        </section>
    )
}

export default Card
