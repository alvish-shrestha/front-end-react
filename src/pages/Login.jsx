import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export default function Login() {
  let navigate = useNavigate()

  const eventChangePage = (event) => {
    event.preventDefault();
    navigate("/register")
  }

  return (
    <div>
      <div>Login Page</div>
      <Link to="/register">Link to page</Link>
      <NavLink to="/register">NavLink to page</NavLink>
      <button onClick={eventChangePage}>Event based</button>
      <button onClick={
        (event) => {
          eventChangePage(event)
        }
      }>Event based with Callback</button>
    </div>
  )
}
