import React, { useContext } from "react";
import Sidebar from "../Sidebar/Sidebar";
import MainTask from "../Task/MainTask";
import TaskDetails from "../TaskDetails/TaskDetails";
import { Outlet } from "react-router-dom";
import { NewTaskContext } from "../../context/NewTaskContext";
import NewTask from "../Task/NewTask";

const Layout = () => {
  const {newTask,setNewTask} = useContext(NewTaskContext)
  return (
    <div className="w-full grid grid-cols-[320px_auto]">
      {newTask && <NewTask/>}
      <Sidebar />
      <div className="w-[1000px] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
