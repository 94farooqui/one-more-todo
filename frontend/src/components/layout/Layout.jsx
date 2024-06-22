import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import MainTask from "../Task/MainTask";
import TaskDetails from "../TaskDetails/TaskDetails";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full grid grid-cols-[320px_auto]">
      <Sidebar />
      <div className="w-[1000px] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
