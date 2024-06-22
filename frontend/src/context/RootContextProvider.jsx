import React from 'react'
import AuthContextProvider from './AuthContext'
import TaskDetailsContextProivder from './TaskDetailsContext'

const RootContextProvider = ({children}) => {
  return (
    <AuthContextProvider>
      <TaskDetailsContextProivder>
        {children}
      </TaskDetailsContextProivder>
    </AuthContextProvider>
  )
}

export default RootContextProvider