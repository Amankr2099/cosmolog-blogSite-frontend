import React, { useContext, useState } from 'react'
import './WritePost.css'
import axios from 'axios'
import { Context } from '../context/Context'

export default function WritePost() {
    const { user } = useContext(Context)
    const [file, setImage] = useState(null)
    const [newpost, setNewpost] = useState({
        title: "",
        content: "",
        image: "empty-image.jpg",
        author: "",
    })

    const updatePost = (event) => {
        const { name, value } = event.target
        setNewpost((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    if (file) {
        const data = new FormData()
        const filename = file.name
        data.append("name", filename)
        data.append("file", file)
        newpost.image = filename
        try {
            axios.post("api/blog/upload", data)
        } catch (error) {
            console.log(error);
        }
    }

    const handleWrite = async (e, req, res) => {
        e.preventDefault()
        try {
            const post = await axios.post("/api/blog/add", {
                title: newpost.title,
                content: newpost.content,
                image: newpost.image,
                author: user.username,
            })
            window.location.replace("/posts")

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
            console.log(error);
            //Error handling here

        }
    }

    return (
        <div>
            <div className="writting-container">
                <form  >
                    <input
                        type="text"
                        placeholder='Title'
                        autoComplete='false'
                        id='titleInput'
                        name='title'
                        onChange={updatePost}
                        value={newpost.title}
                    />
                    <label htmlFor="fileInput" className='label'>
                        <i className="fa-solid fa-paperclip" />
                        <input
                            type="file"
                            id='fileInput'
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                        <p>Link an Image</p>
                    </label>
                    <img src={file ? URL.createObjectURL(file) : "../images/empty-image.jpg"} alt="img" />

                    <textarea
                        placeholder='Type your article'
                        id='contentInput'
                        name='content'
                        rows={20}

                        onChange={updatePost}
                        value={newpost.content}
                    />
                </form>

            </div>
            <div className="handle-buttons">
                <button className='send-button' onClick={handleWrite}>Publish</button>
            </div>
        </div>
    )
}
