import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Layout = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/contacts">Contacts</Link>
        {user ? (
          <>
            <span> | Welcome, {user.pseudo} </span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            | <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
          </>
        )}
      </nav>
      <hr />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout