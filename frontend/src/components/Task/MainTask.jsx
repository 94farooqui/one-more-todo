import React, { useContext, useEffect, useState } from "react";
import { MdOutlineAdd } from "react-icons/md";
import Tasks from './../../sampleData/tasks.json'
import Task from "./Task";
import useAuth from './../../hooks/useAuth'
import useTask from "../../hooks/useTask";
import { NewTaskContext } from "../../context/NewTaskContext";

const MainTask = () => {
  const { user } = useAuth()
  // const [tasks, setTask] = useState(null)
  const { tasks, loading, error} = useTask()
  const {newTask,setNewTask} = useContext(NewTaskContext)

  useEffect(() => {
    // try {
    //   const getAllTask = async () => {
    //     const taksks = 
    //   }
    // }
    // catch (error) {

    // }
    // getAllTask()
  }, [])
  // console.log(user)
  return (
    <div className="overflow-y-auto font-poppins flex flex-col gap-8 text-stone-800">
      <div className="flex gap-4 items-center">
        <p className="text-4xl font-bold ">Today</p>
        <div className="text-4xl flex justify-center items-center font-semibold border rounded-md px-3 py-1">
          <p>0</p>
        </div>
      </div>

      <div>
        <div onClick={()=>{setNewTask(true)}} className="flex gap-2 items-center border rounded-lg p-4 text-sm text-slate-600 font-semibold hover:bg-gradient-to-b from-white to-stone-100 cursor-pointer">
          <MdOutlineAdd className="text-2xl " /> <p className=" text-slate-600">Add New Task</p>
        </div>
        <div className="mt-4 flex flex-col">
          {tasks && tasks.map(task => <Task key={task.title} task={task} />)}

        </div>
      </div>
    </div>
  );
};

export default MainTask;
