import { createContext, useState } from "react";

export const TaskDetailsContext = createContext();

const TaskDetailsContextProivder = ({ children }) => {
  const [taskDetails, setTaskDetails] = useState();
  const [currentTask, setCurrentTask] = useState();
  const [taskDetailsVisible, setTaskDetailsVisible] = useState(false);

  return (
    <TaskDetailsContext.Provider
      value={{
        taskDetailsVisible,
        setTaskDetailsVisible,
        taskDetails,
        setTaskDetails,
        currentTask,
        setCurrentTask
      }}
    >
      {children}
    </TaskDetailsContext.Provider>
  );
};

export default TaskDetailsContextProivder;
