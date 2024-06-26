import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
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
            <form className='flex flex-col gap-4'>
              <input className='p-4 border rounded-lg ' type='text' placeholder='Email' />
              <input className='p-4 border rounded-lg ' type='password' placeholder='Password' />
              <button className='bg-amber-400 p-4 rounded-lg font-semibold'>Login</button>
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
            <p className='w-full text-center'>Don't have an account? <Link to='/signin' className='text-amber-400 font-semibold'>Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login