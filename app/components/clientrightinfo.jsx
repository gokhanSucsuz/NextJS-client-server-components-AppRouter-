"use client"
import React, { useState } from 'react'

const ClientRightInfo = ({ num, children }) => {
    const [number, setNumber] = useState(num)
    const handleClick = () => {
        setNumber(prev => prev + 1)
    }
    return (
        <div>
            Some text about me in culpa qui officia deserunt mollit anim..
            Number = {number}
            <button className='bg-yellow-700 text-white p-4 hover:bg-yellow-500' onClick={handleClick}>Increase Number</button>
            <h1>{children}</h1>
        </div>
    )
}

export default ClientRightInfo