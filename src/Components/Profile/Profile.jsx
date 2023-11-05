import React, { useContext, useState } from 'react'
import './Profile.css'
import { Context } from '../context/Context'
import axios from 'axios'

export default function Profile() {
    const { user, dispatch } = useContext(Context)
    const [currentUsername, setCurrentUser] = useState(user.username)
    const [currentEmail, setCurrentEmail] = useState(user.email)
    const [currentPassword, setCurrentPassword] = useState(user.password)

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }


    const handleUpdate = async (e, req, res) => {
        e.preventDefault()
        try {
            const res = await axios.put(`/api/users/${user._id}`, {
                userId: user._id,
                username: currentUsername,
                email: currentEmail,
                password: currentPassword,
            })
            window.location.reload()

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

    return (
        <>
            <div class="profile-container">
                <div class='upper-half'>
                    <img src="/empty-image.jpg" alt="img" />
                </div>
                <div class='profile-circle'>
                    <i class="fa-regular fa-user" />
                </div>
                <div class='lower-half'>
                    <form action="">
                        <p>Username :
                            <input
                                type="text"
                                placeholder={currentUsername}
                                onChange={(e) => setCurrentUser(e.target.value)}
                            />
                        </p>
                        <p>Email :
                            <input
                                type="email"
                                placeholder={currentEmail}
                                onChange={(e) => setCurrentEmail(e.target.value)}
                            />
                        </p>
                        <p>Password :
                            <input
                                type="password"
                                placeholder='********'
                                onChange={(e) => setCurrentPassword(e.target.value)}
                            />
                        </p>
                    </form>
                </div>
                <button className='update-button' onClick={handleUpdate}>Update</button>
                <button className='logout-button' onClick={handleLogout}>Logout</button>
            </div>


        </>
    )
}


//Might want to add section containing all blogs under this profile
//And an blog edit section