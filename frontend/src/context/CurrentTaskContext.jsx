import { createContext, useState } from "react";

export const CurrentTaskContext = createContext()

const CurrentTaskContextProvider = ({children}) => {
    const [currentTask,setCurrentTask] = useState(null)
    return (<CurrentTaskContext.Provider value={{currentTask,setCurrentTask}}>{children}</CurrentTaskContext.Provider>)
}

export default CurrentTaskContextProvider

