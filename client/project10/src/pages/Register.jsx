import { useState } from 'react'
import '../css/style.css';
export default function Register() {

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
    })

    const registerUser = (e)=>{
        e.preventDefault();
    }



    return (
        <>
            <span className="formlabel"><h1>REGISTER</h1></span>
            <div className="formlogin">
                <form onSubmit={registerUser} className="formform">
                    <div>
                        <label>Name</label>
                        <br/>
                        <input type="text" value={userData.name} onChange={(e)=>setUserData({...userData, name: e.target.value})} /*placeholder='Name'*//>
                    </div>
                    <div>
                        <label>Email</label>
                        <br/>
                        <input type="email" value={userData.email} onChange={(e)=>setUserData({...userData, email: e.target.value})} /* placeholder ='Email' *//>
                    </div>
                    <div>
                        <label>Password</label>
                        <br/>
                        <input type="password" className="password" value={userData.password} onChange={(e)=>setUserData({...userData, password: e.target.value})} /* placeholder ='Password' *//>
                    </div>
                    <button type="submit"className="button" >Submit</button>
                </form>
            </div>
        </>
  )
}
