import React from 'react'

import { Link } from "react-router-dom"
import '../css/style.css';

export default function navbar() {
  return (
    <div className="navbar">
      <h1 className="title">ProjectX</h1>
      <ul className ='navbarul'>
        <li><Link className="link" to='/'>Home</Link></li>
        <li><Link className="link" to='/register'>Register</Link></li>
        <li><Link className="link" to='login'>Login</Link></li>
      </ul>

    </div>
  )

}






