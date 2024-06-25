import { createContext, useState } from "react";

export const TaskDetailsContext = createContext();

const TaskDetailsContextProivder = ({ children }) => {
    const [taskDetailsVisible, setTaskDetailsVisible] = useState(false)

  return(<TaskDetailsContext.Provider value={{taskDetailsVisible, setTaskDetailsVisible}}>{children}</TaskDetailsContext.Provider>);
};

export default TaskDetailsContextProivder