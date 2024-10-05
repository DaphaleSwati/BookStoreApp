// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes } from "react-router-dom";
import Contact from './components/Contact';
import Signup from './components/Signup';
import { useAuth } from './context/AuthProvider';
import Courses from "./courses/Courses";
import Home from './home/Home';
function App() {
  const [authuser,setAuthUser] = useAuth();
  console.log(authuser);
  return (
    <div >
      {/* <Home/>
      <Course/> */}
      <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={authuser?<Courses/> : <Navigate to="/signup"/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Toaster />
      </div>
      
    </div>
    
  )
}

export default App