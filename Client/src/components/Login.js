import React,{useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loginUser} from '../actions/userActions'
function Login() {
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const dispatch = useDispatch()
 const loginstate =useSelector((state) => state.loginUserReducer)
  const { error, loading } = loginstate

 useEffect(()=>{
   if(localStorage.getItem('currentUser')){
    window.location.href='/'
   }
 },[])

 const login =() =>{
  const user = {email,password}
   dispatch(loginUser(user))
   setEmail("")
   setPassword("")
 }
  return (
    <div>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-5 mt-5'>
          <h2>Log In</h2>
          {error && <h1>Log in Failed</h1>}
          <div>
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
            <button className='btn mt-2 mb-3' onClick={login}>
              Login
            </button>
            <br />
            <a style={{ color: 'black' }} classname='mt-2' href='/register'>
              Click Here To Register
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
