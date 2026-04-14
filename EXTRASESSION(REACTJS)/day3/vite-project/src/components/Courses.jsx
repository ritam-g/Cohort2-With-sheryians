import React from 'react'
import { Link, Outlet } from 'react-router'

function Courses() {
    return (
        <>
            <p><Link to="/course/mern">mern</Link></p>
            <p><Link to="/course/react">react</Link></p>

            <Outlet />
        </>
    )
}

export default Courses
