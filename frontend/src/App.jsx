import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import Login from './components/loginPage'
import NavBar from './components/navBar'
import Exercises from './components/exercises'
import Profile from './components/profile'
import HomePage from './components/homePage'
import MyFullCalendar from './components/progression'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      {/* Render Navbar only if the current path is not '/login' */}
      {location.pathname !== '/login' && <NavBar />}
      <Routes>
        
        
              <Route exact path='/' element={<HomePage/>}/>
              <Route path='/exercises' element={<Exercises/>}/>
              <Route path='profile' element = {<Profile/>}/>
              <Route path="/progression" element={<MyFullCalendar/>}/>
        
      
      <Route path='/login' element = {<Login/>}/>
      
      </Routes>
    </div>
  )
}

export default App
