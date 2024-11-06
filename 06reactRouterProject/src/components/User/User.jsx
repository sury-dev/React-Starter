import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams();
    return (
        <div className='mx-auto my-5 text-3xl flex justify-center items-center text-orange-800'>
            User : {userid}
        </div>
    )
}

export default User
