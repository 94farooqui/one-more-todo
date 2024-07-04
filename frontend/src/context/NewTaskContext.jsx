import { createContext, useState } from "react";

export const NewTaskContext = createContext()

const NewTaskContextProvider = ({ children }) => {
    const [newTask,setNewTask] = useState(true)

    return (<NewTaskContext.Provider value={{newTask,setNewTask}}>{children}</NewTaskContext.Provider>)
}

export default NewTaskContextProvider