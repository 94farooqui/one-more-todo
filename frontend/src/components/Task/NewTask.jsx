import React from 'react'
import { MdClose } from "react-icons/md";

const NewTask = () => {
    return (
        <div className='w-screen h-screen z-20 absolute bg-slate-700/40 flex justify-center items-center drop-shadow-lg shadow-black'>
            <div className='w-[800px] bg-white rounded-lg p-8'>
                <div className='flex justify-between items-center'>

                    <h2 className='text-3xl font-bold text-slate-700 font-poppins mb-8'>New Task</h2>
                    <button className='text-2xl border'><MdClose /></button>
                </div>
                <form className='flex flex-col gap-4'>
                    <input className=' p-2 border-2 border-slate-200 rounded-lg font-semibold' placeholder='Task title' />
                    <textarea className=' p-2 border-2 border-slate-200 resize-none rounded-lg font-semibold' placeholder='Description' />
                    <button className='bg-slate-700 px-8 py-2 text-lg font-semibold text-slate-100 self-end rounded-lg'>Add</button>
                </form>
            </div>
        </div>
    )
}

export default NewTask