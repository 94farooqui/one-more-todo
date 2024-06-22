import React, { useContext } from "react";
import MainTask from "../components/Task/MainTask";
import TaskDetails from "../components/TaskDetails/TaskDetails";
import { TaskDetailsContext } from "../context/TaskDetailsContext";

const Homepage = () => {
  const { taskDetailsVisible, setTaskDetailsVisible } =
    useContext(TaskDetailsContext);
  return (
    <div className="flex">
      <div className="flex-1 w-full p-4">
        <MainTask />
      </div>
      {taskDetailsVisible &&
        <div className="flex-1">
          <TaskDetails />
        </div>
      }
    </div>
  );
};

export default Homepage;
