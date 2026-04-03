import React, { useState } from 'react'

function Card({ editUser, delteUser, index, name, email }) {
    const [edit, setedit] = useState(false)
    const [editData, seteditData] = useState({
        name: name,
        email: email
    })

    function handleSave() {
        editUser(index, editData.name, editData.email)
        setedit(false)
    }

    return (
        <div className='w-full'>

            {edit ? (
                <input
                    type="text"
                    value={editData.name}
                    placeholder='enter your name'
                    onChange={(e) =>
                        seteditData({ ...editData, name: e.target.value })
                    }
                />
            ) : (
                <h2>{name}</h2>
            )}

            {edit ? (
                <input
                    type="text"
                    value={editData.email}
                    placeholder='enter your email'
                    onChange={(e) =>
                        seteditData({ ...editData, email: e.target.value })
                    }
                />
            ) : (
                <p>{email}</p>
            )}

            {!edit && (
                <>
                    <button onClick={() => delteUser(index)}>Delete</button>
                    <button onClick={() => setedit(true)}>Edit</button>
                </>
            )}

            {edit && (
                <button onClick={handleSave}>Save</button>
            )}

        </div>
    )
}

export default Card