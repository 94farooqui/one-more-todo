import React, { useContext, useEffect, useState } from "react";
import { TaskDetailsContext } from "../../context/TaskDetailsContext";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineAdd } from "react-icons/md";
import Subtask from "../Subtask/Subtask";
import useTask from "../../hooks/useTask";

import List from './../../sampleData/List.json'

const TaskDetails = () => {
  const { taskDetailsVisible, setTaskDetailsVisible } = useContext(TaskDetailsContext);
    const {currentTask,setCurrentTask} = useContext(TaskDetailsContext)
    const { tasks, loading, error } = useTask()
    const [task,setTask] = useState()

    // useContext(()=>{
    //   console.log("Current task",currentTask)
    //   const foundTask = tasks.find(item => item._id == currentTask)
    //   setCurrentTask(foundTask)
    //   console.log(foundTask)
    // },[taskDetailsVisible])
    useEffect(()=>{
      console.log("Task Details Page")
      console.log("Current Task", currentTask)
      const foundTask = tasks.find(item => item._id == currentTask)
      setTask(foundTask)
      console.log(foundTask)
    },[task])

    if(task){
      return (
        <div className="text-stone-600 h-screen p-4  ">
          <div className="bg-slate-100/50 h-full rounded-lg flex flex-col justify-between">
            <div className="p-6  font-poppins">
              <div className="flex justify-between">
                <h2 className="text-2xl font-semibold ">Task: </h2>
                <button
                  className="text-2xl"
                  onClick={() => setTaskDetailsVisible(false)}
                >
                  <IoCloseSharp />
                </button>
              </div>
              <div className="mt-4 flex flex-col gap-4 text-sm ">
                <div className="p-4 rounded-md border font-semibold">
                  <p>{task.title}</p>
                </div>
                <div className="p-4 rounded-md border  font-semibold">
                  <textarea
                    className="bg-transparent resize-none w-full "
                    placeholder="Description"
                    rows="4"
                    defaultValue={task.desription}
                  />
                </div>
                <table className="text-left text-sm text-stone-600">
                  <tr className="">
                    <th className="font-semibold py-4">List</th>
                    <td>
                      <select className="p-1 border rounded-md" defaultValue={task.listname}>
                        {List.map(item => <option>{item}</option>)}
                      
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <th className="font-semibold  py-4">Due date</th>
                    <td>
                      <input type="date" defaultValue={task.due_date} className="p-1 bg-transparent border rounded-md" />
                    </td>
                  </tr>
                  <tr>
                    <th className="font-semibold  py-4">Tags</th>
                    <td>
                      <div className="flex gap-2">
                        <p className="px-2 py-1 text-sm bg-stone-200 rounded-md">
                          {task.tag}
                        </p>
                        
                      </div>
                    </td>
                  </tr>
                </table>
    
                <div className="mt-8">
                  <p className="text-xl font-semibold ">Subtasks:</p>
    
                  <div className="mt-4 flex flex-col gap-4">
                    <div className="flex gap-4 items-center ">
                      <MdOutlineAdd
                        style={{ fontWeight: "bold" }}
                        className="text-xl"
                      />
                      Add New Subtask
                    </div>
                    <div className="flex flex-col gap-4">
                      {!task.subtasks.length > 0 ? "No Subtasks" : task.subtasks.map(sub => <p>{sub}</p>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="flex w-full justify-center items-center gap-4 font-semibold text-stone-600 p-4">
              <button className="px-8 rounded-md border flex-1 py-2" onClick={() => setTaskDetailsVisible(false)}>Cancel</button>
              <button className="px-8 rounded-md border flex-1  py-2 bg-yellow-400">Save changes</button>
            </div>
          </div>
        </div>
      );
    }
  
};

export default TaskDetails;
