import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from './../hooks/useAuth';

const initialUser = {
  fullname: "",
  email: "",
  password: ""
}

const Signup = () => {
  const navigate = useNavigate()
  const {loading,register} = useAuth()
  const [userDetails, setUserDetails] = useState(initialUser)

  const handleInputChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
  }
  const handleSignupSubmit = async (e) => {
    e.preventDefault()
    console.log(userDetails)
    const response = await register(userDetails)
    if(response.result == 'success'){
      navigate('/signup/success')
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
            <h4 className='text-4xl font-semibold'>Signup</h4>
            <form onSubmit={handleSignupSubmit} className='flex flex-col gap-4'>
              <input name='fullname' onChange={(e) => handleInputChange(e)} className='p-4 border rounded-lg focus:border-amber-400 focus:border-2 focus:outline-none' type='text' placeholder='Fullname' />
              <input name='email' onChange={(e) => handleInputChange(e)} className='p-4 border rounded-lg focus:border-amber-400 focus:border-2 focus:outline-none' type='text' placeholder='Email' />
              <input name='password' onChange={(e) => handleInputChange(e)} className='p-4 border rounded-lg focus:border-amber-400 focus:border-2 focus:outline-none' type='password' placeholder='Password' />
              <button type='submit' className='bg-amber-400 p-4 rounded-lg font-semibold'>{loading ? "Loading": "Signup"}</button>
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
            <p className='w-full text-center'>Already have an account? <Link to='/signin' className='text-amber-400 font-semibold'>Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup