import React, { useContext } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TaskDetailsContext } from "../../context/TaskDetailsContext";

const Task = ({ task }) => {
    const {taskDetailsVisible, setTaskDetailsVisible} = useContext(TaskDetailsContext)
  return (
    <div className="p-4 border-b  hover:bg-slate-100 hover:cursor-pointer" onClick={()=>setTaskDetailsVisible(true)}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 text-slate-500">
          <input
            type="checkbox"
            className="border border-yellow-300 outline-yellow-400 text-yellow-300"
          />
          <p className="">{task.title}</p>
        </div>
        <MdKeyboardArrowRight  className="text-2xl text-slate-500"/>
      </div>
    </div>
  );
};

export default Task;
