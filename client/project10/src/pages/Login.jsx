import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })


    const loginUser = (e) =>{
        e.preventDefault()
        axios.get('/');
    }
    return (
        <div>
            <form onSubmit={loginUser}>
                <label>Name</label>
                <input type="email" value={userData.email} onChange={(e)=> setUserData({...userData, email: e.target.value})}placeholder ='enter email...'/>
                <input type="password" value={userData.password} onChange={(e)=> setUserData({...userData, password: e.target.value})}placeholder ='enter email...'/>
                <button type="submit">Submit</button>
            </form>
        </div>
  )
}
