import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({children}) => {
  return (
    <Link><li className="p-2 flex items-center gap-2 hover:bg-stone-200 rounded-lg">
        <div className='w-3 h-3 rounded-sm bg-slate-400'></div>
        {children}
    </li></Link>
  )
}

export default ListItem