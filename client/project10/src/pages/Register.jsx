import { useState } from 'react'

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
        <div>
            <form onSubmit={registerUser}>
                <label>Name</label>
                <input type="text" value={userData.name} onChange={(e)=>setUserData({...userData, name: e.target.value})} placeholder='enter name...'/>
                <input type="email" value={userData.email} onChange={(e)=>setUserData({...userData, email: e.target.value})} placeholder ='enter email...'/>
                <input type="password" value={userData.password} onChange={(e)=>setUserData({...userData, password: e.target.value})} placeholder ='enter email...'/>
                <button type="submit">Submit</button>
            </form>
        </div>
  )
}
