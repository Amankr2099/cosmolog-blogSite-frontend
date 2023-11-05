import React, { useContext } from 'react'
import './Postbutton.css'
import { Link } from 'react-router-dom'
import { Context } from '../context/Context'

export default function Ask_form() {
    const { user } = useContext(Context)
    return (
        <div className='ask_form'>

            <Link to={user ? "/write" : "/signup"} className='post_button'>Post an article</Link>

        </div >
    )
}
