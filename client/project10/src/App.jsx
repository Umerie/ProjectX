
import '/src/App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from '/src/components/Navbar.jsx'
import Login from '/src/pages/Login.jsx'
import Register from '/src/pages/Register.jsx'
import Home from '/src/pages/Home.jsx'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000'; // para di na itatatype sa ibang file
axios.defaults.withCredentials = true;
function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}    />
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </>
  )
}

export default App
