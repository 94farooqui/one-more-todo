import React from "react";
import { MdOutlineAdd } from "react-icons/md";
import Tasks from './../../sampleData/tasks.json'
import Task from "./Task";

const MainTask = () => {
  return (
    <div className="overflow-y-auto font-poppins flex flex-col gap-8 text-stone-800">
      <div className="flex gap-4 items-center">
        <p className="text-4xl font-bold ">Today</p>
        <div className="text-4xl flex justify-center items-center font-semibold border rounded-md px-3 py-1">
          <p>0</p>
        </div>
      </div>

      <div>
        <div className="flex gap-2 items-center border rounded-lg p-4 text-sm text-slate-600 font-semibold">
          <MdOutlineAdd  className="text-2xl "/> <p className=" text-slate-600">Add New Task</p>
        </div>
        <div className="mt-4 flex flex-col">
          {Tasks && Tasks.map(task =>  <Task task={task}/>)}

        </div>
      </div>
    </div>
  );
};

export default MainTask;
