import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Login from '../pages/Login'
import Register from '../pages/Register'
import MainLayout from '../layouts/MainLayout'
import StateManage from '../pages/StateManage'
import StateLoginTest from '../pages/StateLoginTest'

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/state' element = {<StateManage/>}></Route>
          <Route path='/login-test' element = {<StateLoginTest/>}></Route>
          <Route element={<MainLayout/>}>
            {/* main layout will show in every routes below */}
            <Route path='/' element={<Homepage/>}></Route>    
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}