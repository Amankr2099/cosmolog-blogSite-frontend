import React, { useEffect, useState } from 'react'
import Prologue from '../Prologue/Prologue'
import Cards from '../Cards/Cards'
import Postbutton from '../Postbutton/Postbutton'
import Slider from '../Slider/Slider'
import axios from 'axios'


export default function Home() {
    const [blogs, setBlogs] = useState([])
    const getBlogs = async (req, res) => {
        try {
            const { data } = await axios.get("api/blog/all-blogs")
            if (data) {
                setBlogs(data)
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
        getBlogs()
    }, [])
    return (
        <div>
            <Prologue />
            <Slider blogs={blogs.slice(0, 3)} />
            <Cards blogs={blogs.slice(0, 3)} />
            <Postbutton />
        </div>
    )
}
