import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
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
            <form className='flex flex-col gap-4'>
              <input className='p-4 border rounded-lg' type='text' placeholder='Fullname' />
              <input className='p-4 border rounded-lg' type='text' placeholder='Email' />
              <input className='p-4 border rounded-lg' type='password' placeholder='Password' />
              <button className='bg-yellow-200 p-4'>Signup</button>
            </form>
            <hr></hr>
            <div className='flex w-full gap-2'>
              <button className='flex-1 p-2 text-lg bg-slate-100'>Google</button>
              <button className='flex-1 p-2 text-lg bg-slate-100'>Facebook</button>
            </div>
            <p className='w-full text-center'>Don't have ab account? <Link to='/signin'>Sign in</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup