import React from 'react'
import AuthContextProvider from './AuthContext'
import TaskDetailsContextProivder from './TaskDetailsContext'
import TaskProvider, { TaskContext } from './TaskContext'
import CurrentTaskContextProvider from './CurrentTaskContext'

const RootContextProvider = ({ children }) => {
  console.log("Root Context")
  return (
    <AuthContextProvider>
      <TaskProvider>
        <CurrentTaskContextProvider>
          <TaskDetailsContextProivder>
            {children}
          </TaskDetailsContextProivder>
        </CurrentTaskContextProvider>
      </TaskProvider>
    </AuthContextProvider>
  )
}

export default RootContextProvider