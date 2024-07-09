import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div className='w-screen'>
            <div className='w-[1200px] mx-auto flex flex-col items-center gap-16'>
                <div className='flex flex-col gap-8 items-center py-12'>
                    <h1 className='text-6xl font-bold'>Welcome to One More ToDo</h1>
                    <p className='text-2xl text-slate-600'>Which is unlike any other ToDo</p>
                </div>
                <div className='flex gap-4'>
                    <Link to='/login' className='text-2xl p-4 rounded-lg text-white bg-slate-900'>Login</Link>
                    <Link to='/signup' className='text-2xl p-4 rounded-lg text-white bg-slate-900'>Signup</Link>
                </div>

            </div>
        </div>
    )
}

export default Welcome