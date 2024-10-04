// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Signup from './components/Signup';
import Courses from "./courses/Courses";
import Home from './home/Home';
function App() {
  return (
    <div >
      {/* <Home/>
      <Course/> */}
      <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={<Courses/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </div>
      
    </div>
    
  )
}

export default App