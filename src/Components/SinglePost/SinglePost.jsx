import React, { useEffect, useState } from 'react'
import './SinglePost.css'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

export default function SinglePost() {
    const location = useLocation()
    const postId = (location.pathname).split("/")[2]


    const [post, setPost] = useState({})
    const getPost = async (req, res) => {
        try {
            const res = await axios.get(`/api/blog/${postId}`)
            if (res.data) {
                setPost(res.data)
            }

        } catch (error) {
            if (error.response) {
                // If server responded with a status code for a request 
                console.log("Data ", error.response.data);
                console.log("Status ", error.response.status);
                console.log("Headers ", error.response.headers);
            } else if (error.request) {
                // Client made a request but response is not received 
                console.log("called", error.request);
            } else {
                // Other case 
                console.log("Error", error.message);
            }
            // Error handling here 
            console.log(error);
        }
    }

    useEffect(() => {
        getPost()
    }, [postId])


    return (
        <div>
            <div className="article-container">
                <h1>{post.title}</h1>
                <div className="image-container">
                    <img src={"../uploads/" + post.image} alt="img" />
                </div>

                <div className="text">
                    {post.content}
                </div>
            </div>
        </div>
    )
}
