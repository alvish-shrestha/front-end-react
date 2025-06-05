import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <div className='container mx-auto'> {/* react class = className */}
            <nav className='space-x-4'>
                <div>
                    Header
                </div>
                {/* link/route from component */}
                <NavLink to="/">Home</NavLink>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>
        </div>
    </header>
  )
}
