import React, { useContext, useState } from 'react'
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
    const {newTask,setNewTask} = useContext(NewTaskContext)

    const [showDate,setShowDate] = useState(false)
    const [dueDate,setDueDate] = useState(false)

    const handleShowDate = (e) => {
        e.preventDefault()
        setShowDate(true)
    }
    const handleDateSelections = (e) => {
        setDueDate(e.target.value)
        setShowDate(false)
    }
    return (
        <div className='w-screen h-screen z-20 absolute bg-slate-700/40 flex justify-center items-center drop-shadow-lg shadow-black'>
            <div className='w-[800px] bg-white rounded-lg p-8'>
                <div className='flex justify-between items-center mb-8'>

                    <h2 className='text-3xl font-bold text-slate-700 font-poppins '>New Task</h2>
                    <button className='text-2xl ' onClick={()=>{setNewTask(false)}}><MdClose style={{}} /></button>
                </div>
                <form className='flex flex-col gap-4'>
                    <input className=' p-2 border-2 border-slate-200 rounded-lg font-semibold' placeholder='Task title' />
                    <textarea className=' p-2 border-2 border-slate-200 resize-none rounded-lg font-semibold' placeholder='Description' />
                    <div className='flex gap-2'>
                        <div className='relative'>
                        <button onClick={handleShowDate} className=' px-4 py-1 text-sm text-slate-400  font-semibold  border rounded-md'>{dueDate? dueDate :'Today'}</button>
                        {showDate && <input className='absolute top-8 left-0' type='date' onChange={handleDateSelections} />}
                        </div>
                        <button className='px-4 py-1 text-sm text-slate-400  font-semibold  border rounded-md'>List</button>
                        <button className='px-4 py-1 text-sm text-slate-400  font-semibold  border rounded-md'>Low</button>
                        <button className='px-4 py-1 text-sm text-slate-400  font-semibold  border rounded-md'>Tag</button>
                    </div>
                    
                    <button className='bg-slate-700 px-8 py-2 text-lg font-semibold text-slate-100 self-end rounded-lg'>Add</button>
                </form>
            </div>
        </div>
    )
}

export default NewTask