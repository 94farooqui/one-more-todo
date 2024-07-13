import React from 'react'
import { Link } from 'react-router-dom'

const TaskItem = ({children}) => {
    return (
        <Link><li className="p-2 flex items-center gap-2  hover:bg-slate-600 rounded-lg">
            {children}
        </li></Link>
      )
}

export default TaskItem