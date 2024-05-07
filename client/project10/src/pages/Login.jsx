import React, { useState } from 'react';
import axios from 'axios';
import '../css/style.css';
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
        <>
            <div className="formlabel"><h1>LOGIN</h1></div>
            <div className="formlogin">
                <form onSubmit={loginUser} className='formform'>
                    <div>
                        <label>Email</label>
                        <br/>
                        <input type="email" value={userData.email} onChange={(e)=> setUserData({...userData, email: e.target.value})}/* placeholder ='Email' *//>
                    </div>
                    <div>
                        <label>Password</label>
                        <br/>
                        <input type="password" className="password" value={userData.password} onChange={(e)=> setUserData({...userData, password: e.target.value})}/* placeholder ='Password' *//>
                    </div>
                    <button className="button" type="submit">Submit</button>
                </form>
            </div>
        </>

  )
}
