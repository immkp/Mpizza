import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../actions/userActions'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')
  const registerstate = useSelector(state=>state.registerUserReducer)
  const {error,loading,success} = registerstate;
  const dispatch = useDispatch()
  const register = () => {
    if (password !== cpassword) {
      alert('password mismatch')
    } else {
      const user = {
        name,
        email,
        password,
      }
      dispatch(registerUser(user))
      setName("")
      setEmail("")
      setPassword("")
      setCpassword("")
    }
  }

  return (
    <div>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-5 mt-5'>

          {loading && (<h1>Loading</h1>)}
          {success && (<h1>User Registered Successfully</h1>)}\
          {error && (<h1>Email Already Exists</h1>)}

          <h2>Register</h2>
          <div>
            <input
              required
              type='text'
              className='form-control'
              placeholder='name'
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
            <input
              required
              type='text'
              className='form-control'
              placeholder='e-mail'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
            <input
              required
              type='text'
              className='form-control'
              placeholder='password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
            <input
              required
              type='text'
              className='form-control'
              placeholder='confirm password'
              value={cpassword}
              onChange={(e) => {
                setCpassword(e.target.value)
              }}
            />
            <button className='btn mt-2 mb-3' onClick={register}>
              Register
            </button>
            <br />
            <a style={{ color: 'black' }} href='/login'>
              Click Here To Login
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
