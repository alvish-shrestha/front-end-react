import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
        <Header/>
        <Outlet/> {/* renders child */}
        <Footer/>
    </div>
  )
}
