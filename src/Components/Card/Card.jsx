import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'


export default function Card({ blog }) {
    return (
        <>
            <Link to={`/post/${blog._id}`}>
                <div className="card" >
                    <img src={"../uploads/" + blog.image} alt="img" />
                    <div className="text">
                        <h2>{blog.title}</h2>
                        <p>{(blog.content).substring(0, 568)}...</p>
                    </div>

                </div>
            </Link>
        </>
    )
}
