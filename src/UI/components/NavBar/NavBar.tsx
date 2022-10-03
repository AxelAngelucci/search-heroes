import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

import "./NavBar.scss"

export const NavBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login", {replace: true});
  }
  return (
    <nav className="nav-bar">
      <div>
          <h1>Heroes Page</h1>
          <ul>
              <NavLink to="marvel" className={(args) => `${args.isActive ? "active" : "notActive"}`}>Marvel</NavLink>
              <NavLink to="dc" className={(args) => `${args.isActive ? "active" : "notActive"}`}>DC </NavLink>
              <NavLink to="search" className={(args) => `${args.isActive ? "active" : "notActive"}`}>Search </NavLink>
          </ul>
      </div>
      <div>
        <button onClick = {handleLogout}>Logout</button>
        <a href="#" className='user-name'>Axel</a>
      </div>
        
    </nav>
  )
}
