import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const initialValues = {
  email: "",
  password: ""
}

const Login = () => {
  const [error,setError] = useState(null)
  const {loading,login} = useAuth()
  const [user,setUser] = useState(initialValues)
  const navigate = useNavigate()

  const handleInputchange = (e) => {
    setUser({...user, [e.target.name]:e.target.value})
  }
  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    //console.log(user)
    const response = await login(user)
    if(response){
      navigate('/')
    }
    else {
      setError(true)
    }
  }
  return (
    <div className='w-screen h-screen p-4 flex justify-center items-center bg-stone-100'>
      <div className='w-[1200px] h-[800px] rounded-xl flex overflow-hidden drop-shadow-xl'>
        <div className='w-1/2 h-full bg-black text-white flex justify-center items-center'>
          <div>
            <h1 className='text-6xl font-bold'>ONE MORE</h1>
            <h1 className='text-8xl font-bold'>TODO</h1>
          </div>
        </div>
        <div className='w-1/2 h-full bg-white flex items-center justify-center p-16'>
          <div className='w-full h-full flex flex-col justify-center gap-4'>
            <h4 className='text-4xl font-semibold'>Login</h4>
            <form onSubmit={(e)=>handleLoginSubmit(e)} className='flex flex-col gap-4'>
              <input name='email' onChange={(e)=>handleInputchange(e)} className='p-4 border rounded-lg ' type='text' placeholder='Email' />
              <input name='password' onChange={(e)=>handleInputchange(e)} className='p-4 border rounded-lg ' type='password' placeholder='Password' />
              <button type='submit' className='bg-amber-400 p-4 rounded-lg font-semibold'>Login</button>
            </form>
            <div className='flex items-center gap-4'>
              <span className='inline flex-1 border-b'></span>
              <p>or</p>
              <span className='inline flex-1 border-b'></span>
            </div>
            <div className='flex w-full gap-2'>
              <button className='flex-1 p-2 text-lg bg-slate-100 font-semibold text-slate-600'>Google</button>
              <button className='flex-1 p-2 text-lg bg-slate-100 font-semibold text-slate-600'>Facebook</button>
            </div>
            <p className='w-full text-center'>Don't have an account? <Link to='/signup' className='text-amber-400 font-semibold'>Register</Link></p>
            {error && <p className='text-red-400'>There is some error</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login