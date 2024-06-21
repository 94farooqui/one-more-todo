import React from 'react'

const TagElement = ({children}) => {
  return (
    <div className='p-2 bg-slate-200 rounded-lg text-xs font-semibold'>
        {children}
    </div>
  )
}

export default TagElement