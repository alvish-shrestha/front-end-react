import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Login from '../pages/Login'
import Register from '../pages/Register'
import MainLayout from '../layouts/MainLayout'
import StateManage from '../pages/StateManage'
import StateLoginTest from '../pages/StateLoginTest'
import GuestRoute from './GuestRoute'
import NormalUserRoute from './NormalUserRoute'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/state' element={<StateManage />}></Route>
        <Route path='/login-test' element={<StateLoginTest />}></Route>
        <Route element={<MainLayout />}>
          {/* main layout will show in every routes below */}
          <Route path='/' element={<Homepage />}></Route>
          <Route element={<GuestRoute />}>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
          </Route>
        </Route>

        <Route path='/user/*' element={<NormalUserRoute />}>
          <Route path='cart' element={<>My Cart</>} />
          <Route path='order' element={<>My Order</>} />
          <Route path='*' element={<>404 Not Found</>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}