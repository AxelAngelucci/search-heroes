import React from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginPage.scss'

export const LoginPage = () => {
  const navigate = useNavigate()
  const handleLogin = ():void => {
    navigate("/", {replace:true});
  }
  return (
    <div className='loginContainer'>
      <h1>Login</h1>
      <hr />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
