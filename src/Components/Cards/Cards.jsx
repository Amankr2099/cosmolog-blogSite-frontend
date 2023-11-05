import React from 'react'
import './Cards.css'
import Card from '../Card/Card'
import { Link } from 'react-router-dom'

export default function Cards({ blogs }) {

    return (
        <>
            <div className="cards">
                {blogs && blogs.map((blog, id) => {
                    return (
                        <Card blog={blog} key={id} />
                    )
                })}

            </div>
            <div className="explanations-link-page">
                <Link to={"/posts"}>All Articles</Link>
            </div>
        </>
    )
}
