import React, { useContext, useEffect, useRef, useState } from 'react'
import { MdClose } from "react-icons/md";
import { NewTaskContext } from '../../context/NewTaskContext';
import DatePicker from 'react-date-picker';


export const initalTask = {

}


// {
//     title: {
//       type: String,
//       required: true,
//     },
//     desription: {
//       type: String,
//       required: true,
//     },
//     listname: {
//       type: String,
//       required: true,
//     },
//     priority: {
//       type: String,
//       enum : ["","P1","P2","P3"],
//       default: ""
//     },
//     due_date: {
//       type: Date,
//       required: true,
//     },
//     tag: {
//       type: String,
//       default: "no-tag",
//     },
//     subtasks: [{ type: Schema.Types.ObjectId, ref: "Task", default: [] }],
//   }

const NewTask = () => {
   
    return (
        <div className='w-screen h-screen z-20 absolute bg-slate-700/40 flex justify-center items-center drop-shadow-lg shadow-black'>
            <div className='w-[800px] bg-white rounded-lg p-8'>
                <div className='flex justify-between items-center mb-8'>

                    <h2 className='text-3xl font-bold text-slate-700 font-poppins '>New Task</h2>
                    <button className='text-2xl '><MdClose style={{}} /></button>
                </div>
                <form className='flex flex-col gap-4'>
                    <input className=' p-2 border-2 border-slate-200 rounded-lg font-semibold' placeholder='Task title' />
                    <textarea className=' p-2 border-2 border-slate-200 resize-none rounded-lg font-semibold' placeholder='Description' />
                    <div className='flex gap-2'>
                        <div className='relative'>
                            <button className=' px-4 py-1 text-sm text-slate-400  font-semibold  border rounded-md'>Today</button>
                            
                        </div>

                        <div className='relative'>
                            <button className='px-4 py-1 text-sm text-slate-400  font-semibold  border rounded-md'>List</button>
                            
                        </div>

                        <div className='relative'>
                            <button className='px-4 py-1 text-sm text-slate-400  font-semibold  border rounded-md'>Low</button>
                            
                        </div>

                        <div className='relative'>
                            <button  className='px-4 py-1 text-sm text-slate-400  font-semibold  border rounded-md'>Tag</button>
                           
                        </div>
                    </div>

                    <button className='bg-slate-700 px-8 py-2 text-lg font-semibold text-slate-100 self-end rounded-lg'>Add</button>
                </form>
            </div>
        </div>
    )
}

export default NewTask