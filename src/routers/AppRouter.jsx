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
import AdminUserRoute from './AdminUserRoute'
import AdminLayout from '../layouts/AdminLayout'
import UserManagement from '../pages/admin/UserManagement'
import ProductManagement from '../pages/admin/ProductManagement'
import CategoryManagement from '../pages/admin/CategoryManagement'
import CreateCategory from '../pages/admin/CreateCategory'
import ViewCategory from '../pages/admin/ViewCategory'
import UpdateCategory from '../pages/admin/UpdateCategory'
import RequestPassword from '../pages/RequestPassword'
import ResetPassword from '../pages/ResetPassword'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/state' element={<StateManage />}></Route>
        <Route path='/login-test' element={<StateLoginTest />}></Route>

        {/* Main Layout */}
        <Route element={<MainLayout />}>
          {/* main layout will show in every routes below */}
          <Route path='/' element={<Homepage />}></Route>

          <Route element={<GuestRoute />}>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/request-reset-password' element={<RequestPassword />}></Route>
            <Route path='/reset/password/:token' element={<ResetPassword />}></Route>
          </Route>
        </Route>

        {/* Normal user routes */}
        <Route path='/user/*' element={<NormalUserRoute />}>
          <Route path='cart' element={<>My Cart</>} />
          <Route path='order' element={<>My Order</>} />
          <Route path='*' element={<>404 Not Found</>} />
        </Route>

        {/* Admin routes */}
        <Route path='/admin/*' element={<AdminUserRoute />}>
        
          <Route element={<AdminLayout />}>
            <Route path="users" element={<UserManagement />} />
            <Route path="dashboard" element={<>Admin Dashboard</>} />
            <Route path="profile" element={<>Manage Users</>} />
            <Route path="categories" element={<CategoryManagement />} />
            <Route path="categories/create" element={<CreateCategory />} />
            <Route path="categories/:id" element={<ViewCategory />} />
            <Route path="categories/:id/edit" element={<UpdateCategory />} />
            <Route path="products" element={<ProductManagement />} />
            <Route path="*" element={<>404 Not Found</>} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}